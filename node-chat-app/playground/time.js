const moment = require("moment");

let date = moment();
// Format Dates
console.log(date.format());
console.log(date.format("MMMM Do YYYY, h:mm:ss a"));
console.log(date.format("h:mm a"));
console.log(date.format("dddd"));
console.log(date.format("MMM Do YY"));
console.log(date.format("dddd, MMMM Do YYYY, h:mm:ss a"));
console.log(date.format("YYYY [escaped] YYYY"));
// Relative Time
console.log(date.startOf("day").fromNow());
console.log(date.endOf("day").fromNow());
console.log(date.startOf("hour").fromNow());
