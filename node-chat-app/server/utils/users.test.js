const expect = require("expect");
const { Users } = require("./users");

describe("Users", () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.userList = [
      {
        id: "1",
        name: "John",
        room: "Node course"
      },
      {
        id: "2",
        name: "Nitin",
        room: "Angular course"
      },
      {
        id: "3",
        name: "Rashmi",
        room: "Node course"
      }
    ];
  });

  it("should add new user", () => {
    let users = new Users();
    let user = {
      id: "12",
      name: "Manish",
      room: "Chat Room"
    };
    let responseUser = users.addUser(user.id, user.name, user.room);
    expect(users.userList).toEqual([user]);
  });

  it("should return the user for node course", () => {
    let responseUser = users.getUserList("Node course")
    expect(users.userList.length).not.toBe(responseUser.length);
    expect(responseUser.length).toBe(2);
  });

  it("should return the user for node course", () => {
    let responseUser = users.getUserList("Angular course")
    expect(users.userList.length).not.toBe(responseUser.length);
    expect(responseUser.length).toBe(1);
  });

  it("should return the user by id", () => {
    let responseUser = users.getUser("3")
    expect(users.userList.length).not.toBe(responseUser.length);
    expect(responseUser.length).toBe(1);
  });

  it("should return the user by non existing id", () => {
    let responseUser = users.getUser("30")
    expect(responseUser).toEqual([]);
    expect(responseUser.length).toBe(0);
  });

  it("should remove the user by id", () => {
    let responseUser = users.removeUser("2")
    expect(users.userList.length).not.toBe(responseUser.length);
  });
});
