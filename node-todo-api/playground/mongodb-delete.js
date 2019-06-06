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
      // DeleteMany
      //   .deleteMany({Name: 'Manish Verma'})
      // DeleteOne
      .findOneAndDelete({ Name: "Rashmi Verma" })
      .then(
        docs => {
          console.log("Users");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch server", err);
        }
      );

    // FindOneAndDelete

    client.close();
  }
);
