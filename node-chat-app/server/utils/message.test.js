/**
 * npm run test-watch
 */
const expect = require("expect");
const { generateMessage, generateLocationMessage } = require("./message");

describe("generateMessage", () => {
  // test case
  it("should generate correct message object", () => {
    let from = "Manish";
    let text = "Test works!";
    let message = generateMessage(from, text);
    expect(message.from).toMatch(from);
    expect(message.text).toBeTruthy();
  });
});

describe("generateLocationMessage", () => {
  // test case
  it("should generate correct location object", () => {
    let from = "Manish";
    let latitude = 15;
    let longitude = 19;
    let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    let message = generateLocationMessage(from, latitude, longitude);
    expect(message.from).toMatch(from);
    expect(message.url).toBeTruthy();
    expect(message.url).toBe(url);
  });
});
