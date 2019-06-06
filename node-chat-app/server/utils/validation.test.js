/**
 * npm run test-watch
 */
const expect = require("expect");
const { isRealString } = require("./validation");

describe("isRealString", () => {
  // test case
  it("should reject non string values", () => {
    let stringValue = 200;
    let message = isRealString(stringValue);
    expect(message.text).toBeFalsy();
  });
  it("should reject string with only spaces", () => {
    let stringValue = "       ";
    let message = isRealString(stringValue);
    expect(message.text).toBeFalsy();
  });
  it("should allow string with non-space characters", () => {
    let stringValue = "   Test works!      ";
    let str = isRealString(stringValue);
    expect(str).toBeTruthy();
  });
});
