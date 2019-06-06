const request = require("request");
const GEOLOCATION_APP_KEY = "AIzaSyDGeFJ6LdIE8jTJRgymfzP7HcL3Ll2CYfw";

let geocodeAddress = (address, callback) => {
  let options = {
    url:
      "https://maps.googleapis.com/maps/api/geocode/json?" +
      "address=" +
      encodeURIComponent(address) +
      "&key=" +
      GEOLOCATION_APP_KEY,
    json: true
  };

  // Body is a part of http(hyper text transfer protocol)
  request(options, (error, response, body) => {
    if (error) {
      console.log("error:", error); // Print the error if one occurred
      callback(
        "Unable to connect to google server. Please check your internet connection."
      );
    } else if (body.status === "ZERO_RESULTS") {
      callback(`Unable to find ${address} address`);
    } else if (body.status === "OK") {
      console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
      // console.log("body:", JSON.stringify(body, undefined, 2)); // Print the HTML for the Google homepage.(body, propery, how many space you want)
      callback(undefined, {
        Address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      });
    }
  });
};
module.exports = { geocodeAddress };
