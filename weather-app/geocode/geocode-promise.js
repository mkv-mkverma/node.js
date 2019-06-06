const request = require("request");
const GEOLOCATION_APP_KEY = "AIzaSyDGeFJ6LdIE8jTJRgymfzP7HcL3Ll2CYfw";

let geocodeAddress = address => {
  return new Promise((resolve, reject) => {
    let options = {
      url:
        "https://maps.googleapis.com/maps/api/geocode/json?" +
        "address=" +
        encodeURIComponent(address) +
        "&key=" +
        GEOLOCATION_APP_KEY,
      json: true
    };

    request(options, (error, response, body) => {
      if (error) {
        console.log("error:", error); // Print the error if one occurred
        reject(
          "Unable to connect to google server. Please check your internet connection."
        );
      } else if (body.status === "ZERO_RESULTS") {
        reject(`Unable to find ${address} address`);
      } else if (body.status === "OK") {
        console.log("statusCode:", response && response.statusCode);
        // resolve and reject takes only one argument
        resolve({
          Address: body.results[0].formatted_address,
          Latitude: body.results[0].geometry.location.lat,
          Longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};
// module.exports = { geocodeAddress };

geocodeAddress('0000')
  .then(res => {
    console.log("Result", res);
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });
