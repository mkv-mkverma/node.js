/**
 * open cmd
 * to run mongodb
 * create folder Mongo-data to save data
 * C:\Program Files\MongoDB\Server\4.0>mongod.exe --dbpath \Anthem\Udemy\Mongo-data
 */

// const MongoClient = require("mongodb").MongoClient;
// same as above
const { MongoClient, ObjectID } = require("mongodb");

// let obj = new ObjectID();
// console.log(obj);

// let user = {name:'Manish', age:25};
// // destructuring of array
// let {name} = user;
// console.log(name);

// port number : mongodb
// TableName : TodoApp
MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (error, client) => {
    if (error) {
      return console.log(`Unable to connect to MongoDB`);
    }
    console.log(`Connect to MongoDB server`);
    const db = client.db("TodoApp");

    db.collection("Users").insertOne(
      {
        // _id: 123,
        Name: "Manish Verma",
        complete: false,
        age: 27,
        location: "Bengaluru"
      },
      (err, result) => {
        if (err) {
          return console.log("Unable to insert Users", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
      }
    );
    // db.collection("Todos").insertOne(
    //   {
    //     text: "Something to do",
    //     complete: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    client.close();
  }
);
