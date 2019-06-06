var env = process.env.NODE_ENV || "development";
console.log('env ************', env);

if(env === 'development' || env === 'test'){
  let config = require('./config.json')
  console.log(config);
  let envConfig = config[env];
  console.log(envConfig);
  // it take all the keys return them into an array
  Object.keys(envConfig).forEach((key)=>{
    process.env[key] = envConfig[key]
  })
  // console.log(Object.keys(envConfig));
  
}

// if (env === "development") {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = "mongodb://127.0.0.1:27017/TodoApp";
//   // process.env.MONGODB_URI = "mongodb://localhost:27017/TodoApp";
// } else if (env === "test") {
//   process.env.PORT = 3000;
//   process.env.MONGODB_URI = "mongodb://127.0.0.1:27017/TodoAppTest";
//   // process.env.MONGODB_URI = "mongodb://localhost:27017/TodoAppTest";
// }
