const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (error, client) => {
    if (error) {
      return console.log(`Unable to connect to MongoDB`);
    }
    console.log(`Connect to MongoDB server`);
    const db = client.db("TodoApp");
    db.collection("Users")
    .find({Name: 'Manish Verma'})
    //   .find()
      .count()
      .then(
        count => {
          console.log(`Todos Count : ${count}`);
        },
        err => {
          console.log("Unable to fetch server", err);
        }
      );
    // db.collection("Todos")
    //   .find({_id: new ObjectID('5c159d91ba969905f4b40824')})
    // //   .find({completed: true})
    // //   .find()
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("Unable to fetch server", err);
    //     }
    //   );
    db.collection("Users")
      .find({Name: 'Manish Verma'})
    //   .find({completed: true})
    //   .find()
      .toArray()
      .then(
        docs => {
          console.log("Users");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch server", err);
        }
      );
    client.close();
  }
);
