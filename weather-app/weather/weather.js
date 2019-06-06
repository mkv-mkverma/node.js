const request = require("request");
const WEATHER_APP_KEY = "dd5b971ebcd60357d6cab6e46ff658a9";

let getWeather = (lat, lon, callback) => {
  let options = {
    url:
      "http://api.openweathermap.org/data/2.5/weather?" +
      "lat=" +
      lat +
      "&lon=" +
      lon +
      "&appid=" +
      WEATHER_APP_KEY,
    json: true
  };

  //   "http://api.openweathermap.org/data/2.5/weather?lat=37.8267&lon=-122.4233&appid=dd5b971ebcd60357d6cab6e46ff658a9",
  request(options, (error, response, body) => {
    !error && response.statusCode === 200
      ? callback(undefined, {Weather: body.weather[0].description})
      : callback("Unable to fetch weather");
  });
};

module.exports = { getWeather };
