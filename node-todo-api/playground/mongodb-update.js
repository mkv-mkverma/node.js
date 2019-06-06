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
      .findOneAndUpdate(
        { _id: new ObjectID("5c15a3b2e61a9e4094f6e1a4") },
        {
          $set: {
            Name: "Rashmi Verma"
          },
          $inc: { age: 1 }
        },
        {
          returnOriginal: false
        }
      )
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
