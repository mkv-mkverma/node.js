[
  {
    id: "/#12poiajdspfoif",
    name: "Manish",
    room: "The Office Fans"
  }
];

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

// ES6 class
class Users {
  // constructor function is a special function it is specific to the class it automatically fires the instance of the class
  constructor() {
    // this refers to the instance of the class
    this.userList = [];
  }
  addUser(id, name, room) {
    let user = { id, name, room };
    this.userList.push(user);
    return user;
  }
  removeUser(id) {
    let user = this.getUser(id);

    if (user) {
      this.userList = this.userList.filter((user) => user.id !== id);
    }

    return user;
    // let users = this.userList.filter(user => {
    //     return (user.id != id);
    //   });
    //   let namesArray = users.map(user => {
    //     return user;
    //   });
    //   return namesArray;
  }
  getUser(id) {
    return this.userList.filter(user => {
        return (user.id === id);
      });
  }
  getUserList(room) {
    let users = this.userList.filter(user => {
      return (user.room === room);
    });

    let namesArray = users.map(user => {
      return user.name;
    });
    return namesArray;
  }
}

module.exports = { Users };

// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Manish', 27);
// var description = me.getUserDescription();
// console.log(description);
