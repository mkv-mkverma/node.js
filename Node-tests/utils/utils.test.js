/**
 * npm test
 * npm run test-watch
 */
const utils = require("./utils");
const expect = require("expect");
const createSpy = expect.createSpy;
const spyOn = expect.spyOn;
const isSpy = expect.isSpy;

describe("Utils", () => {
  describe("#add", () => {
    it("should add two numbers", () => {
      let result = utils.add(33, 11);
      expect(result)
        .toBe(44)
        .toBeA("number");
      // if (result !== 44) {
      //   throw new Error(`Expected 44, but got ${result}`);
      // }
    });

    it("should async add two numbers", done => {
      utils.asyncAdd(3, 4, sum => {
        expect(sum)
          .toBe(7)
          .toBeA("number");
        done();
      });
    });
  });
  describe("#squarer", () => {
    it("should async square a number", done => {
      utils.asyncSquare(3, square => {
        expect(square)
          .toBe(9)
          .toBeA("number");
        done();
      });
    });

    it("should square a number", () => {
      let result = utils.square(6);
      expect(result)
        .toBe(36)
        .toBeA("number");
      expect(12).toNotBe(17);
      expect({ name: "Manish" }).toEqual({ name: "Manish" });
    });
  });
  it("should set first and last name", () => {
    let user = { firstName: "", lastName: "", age: 25 };
    let result = utils.setUser(user, "Manish Verma");
    expect(result).toInclude({ firstName: "Manish", lastName: "Verma" });
  });

  it("should expect some value", () => {
    // expect(12).toNotBe(17)
    // expect({'name':'Manish'}).toEqual({'name':'Manish'});
    // expect([1,2,3]).toInclude(3);
    // expect([1,2,3]).toExclude(5);
    expect({ name: "Manish", age: 25 }).toInclude({ name: "Manish" });
  });
});
