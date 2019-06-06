/**
 * expect(3.14)
  .toExist()
  .toBeLessThan(4)
  .toBeGreaterThan(3)

 * The goal is to test pieces of code in isolation without needing to know about the inner workings of their dependencies.
 * We do this by creating Mocks; we can create Mocks using fake classes, extending existing classes or
 * by using real instances of classes but taking control of them with Spys.
 */
const expect = require("expect");
const rewire = require("rewire");

let app = rewire("./app");

describe("App", () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__("db", db);
  // Create a spy for its handleSignUp method and
  // return response similar to what the real Http service would do.
  it("should call the spy correctly", () => {
    //   creating a spy()
    let spy = expect.createSpy();
    // calling a spy()
    spy("Manish", 25);
    // spy was called
    // expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith("Manish", 25);
  });

  it("should call saveUser with user object", () => {
    let email = "manishverma.cse@gmail.com";
    let password = "123abc";

    app.handleSignUp(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
