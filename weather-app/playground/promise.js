let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers");
      }
    }, 1500);
  });
};

asyncAdd(5, "7")
  .then(res => {
    console.log("Result", res);
    return asyncAdd(res, 33);
  })
  .then(res => {
    console.log("Should be 45", res);
  })
  .catch(errorMessage => {
    console.log(errorMessage);
  });

// simple example of promice

// let somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve('Hey. It Worked');
//     reject("Unable to fullfill promise");
//   }, 2500);
//   // resolve('Hey. It Worked');
// });

// somePromise.then(
//   message => {
//     console.log("Success: ", message);
//   },
//   errorMessage => {
//     console.log("Error: ", errorMessage);
//   }
// );
