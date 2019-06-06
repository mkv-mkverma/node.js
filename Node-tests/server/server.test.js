const request = require("supertest");
const expect = require("expect");
// const server = require('./server')
let app = require("./server").app;

describe("Server ", () => {
  describe("GET /", () => {
    it("respond with hello world !", done => {
      request(app)
        .get("/")
        .expect("Hello World !")
        .expect(200, done);
    });
  });

  describe("GET /user", function() {
    it("respond with json", function(done) {
      request(app)
        .get("/user")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(res => {
          expect(res.body).toInclude({ error: "Page not found" });
        })
        .expect(200, done);
    });
  });
  describe("GET /userInfo", function() {
    it("respond with json", function(done) {
      request(app)
        .get("/userInfo")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(res => {
          expect(res.body).toInclude({ name: "john", age: 26 });
        })
        .expect(200, done);
    });
  });
});
