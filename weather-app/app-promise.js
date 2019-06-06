const yargs = require("yargs");
const axios = require("axios");


const GEOLOCATION_APP_KEY = "AIzaSyDGeFJ6LdIE8jTJRgymfzP7HcL3Ll2CYfw";
const WEATHER_APP_KEY = "dd5b971ebcd60357d6cab6e46ff658a9";

const addressOptions = {
  describe: "Enter Address to fetch address API",
  demand: true,
  alias: "a",
  string: true
};

const argv = yargs
  .options({
    a: {
      describe: "Enter Address to fetch address API",
      demand: true,
      alias: "address",
      string: true
    }
  })
  .command("Run", "node app.js --a='151 G.T. Road howrah 711102'", {
    address: addressOptions
  })
  .help()
  .alias("help", "h").argv;

let googleCodeUrl =
  "https://maps.googleapis.com/maps/api/geocode/json?" +
  "address=" +
  encodeURIComponent(argv.address) +
  "&key=" +
  GEOLOCATION_APP_KEY;


axios({
  method: "get",
  url: googleCodeUrl,
  responseType: "json"
})
  .then(response => {
    if (response.data.status === "ZERO_RESULTS") {
      throw new Error(`Unable to find ${argv.address} address`);
    }
    let lat = response.data.results[0].geometry.location.lat;
    let lng = response.data.results[0].geometry.location.lng;
    // console.log(JSON.stringify(response.data, undefined, 2));
    console.log(response.data.results[0].formatted_address);
    let weatherUrl =
      "http://api.openweathermap.org/data/2.5/weather?" +
      "lat=" +
      lat +
      "&lon=" +
      lng +
      "&appid=" +
      WEATHER_APP_KEY;
    return axios({
      method: "get",
      url: weatherUrl,
      responseType: "json"
    });
    //  return axios.get(weatherUrl);
  })
  .then(response => {
    console.log(response.data.weather[0].description);
    console.log(
      `Temperatue ${(response.data.main.temp - 273.15).toFixed(2)} °C`
    );
    console.log(`Humidity: ${response.data.main.humidity} %`);
    console.log(`Wind: ${(response.data.wind.speed * 3.6).toFixed(2)} km/h`);
  })
  .catch(error => {
    error.code === "ENOTFOUND"
      ? console.log(
          "Unable to connect to google server. Please check your internet connection."
        )
      : console.log(`error: ${error.message}`);
  });
