const yargs = require("yargs");
const geocode = require("./geocode/geocode");
const weather = require("./weather/weather");

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(
      results.Latitude,
      results.Longitude,
      (errorMessage, results) => {
        if (errorMessage) {
          console.log(errorMessage);
        } else {
          console.log(JSON.stringify(results, undefined, 2));
        }
      }
    );
  }
});
