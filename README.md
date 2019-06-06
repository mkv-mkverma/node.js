Node Js
node -v

window is the global obect it store everything which you have access to it.
Every variable you create live inside window
similarly we have it on node and it is called global.

documnet stores the reference to the dom.
similarly we have it on node and it is called procress.
process.exit(0) to come out of the node

Node is a js runtime which uses the v8 engine
v8 engin is an open source js engine written in c++ that take js code and compile it to machine code.

node js is non-blocking I/O model that make its light weight

https://nodejs.org/api/

require() is available inside nodejs

npm init -y
npm install lodash --save-dev

debuggin on chrome dev tool
node/nodemon --inspect-brk playground/debugging.js
on chrome type chrome://inspect
playground/debugging.js file:///C:/_Anthem_... click inspect
click esc to open console

to keep a watch on file add nodemon
npm install nodemon -g
or
npm i -g nodemon

nodemon index.js

Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.
https://www.npmjs.com/package/yargs

npm install yargs@4.7.1 --save-dev

now why we use --save to list into package.json
so next time on npm install it will install devendences

Weather-app
npm init -y
npm install request@2.73.0 --save-dev
https://maps.googleapis.com/maps/api/geocode/json?address=%20151%20G.T.%20Road%20howrah%20711102&key=AIzaSyDGeFJ6LdIE8jTJRgymfzP7HcL3Ll2CYfw
links.mead.io/api-fix

let options = {
url:
"https://maps.googleapis.com/maps/api/geocode/json?" +
"address=%20151%20G.T.%20Road%20howrah%20711102" +
"&key=" +
WEATHER_APP_KEY,
json: true
};

encodeURIComponent('151 g t ') returns "151%20g%20t%20"
decodeURIComponent('151%20g%20t%20') returns "151 g t "

// https://darksky.net/dev/account
//5b22a1798201a61d4a1e5ec2d46050e4
//https://api.darksky.net/forecast/5b22a1798201a61d4a1e5ec2d46050e4/37.8267,-122.4233
//https://api.darksky.net/forecast/API_KEY/latitude,lognitude

Promise based HTTP client for the browser and node.js
https://www.npmjs.com/package/axios

npm install axios --save-dev

Express js
express middleware let you configure how your express works. It allow you to add on to the existing
functionality that express has.
app.use() how you use middleware and it takes a function.

https://stackoverflow.com/questions/7337572/what-does-middleware-and-app-use-actually-mean-in-expressjs
https://stackoverflow.com/questions/7337572/what-does-middleware-and-app-use-actually-mean-in-expressjs
It is most popular npm library. Easy to make rest API and static web server
It is a very big library
URL: https://expressjs.com/
npm init -y

template render run html but do it in a dynamic way where you can inject value like user name , date, etc
Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.
https://handlebarsjs.com/installation.html

https://www.npmjs.com/package/hbs

handle bar helper are going to be ways for you to register functions to run to dynamically create same output

nodemon .\server.js -e js,hbs it will run all the dependencies



git init will initialize you .git file

ls -ah ~/.ssh
ssh-keygen -t rsa -b 4096 -C 'manishverma.cse@gmail.com'
now hit enter (3 times leave every thing blank)
sval '\$(ssh-agent -s)'
ssh-add ~/.ssh/id_rsa

ssh -T git@github.com

Hosting app
https://signup.heroku.com/

Testing

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

https://mochajs.org/

update package.json add below command inside scripts tag
"test-watch": "nodemon --exec \"npm test\""

npm test
npm run test-watch

assertion function expect
https://github.com/mjackson/expect

now setup express server
npm i express --save

rewire adds a special setter and getter to modules so you can modify their behaviour for better unit testing. You may

inject mocks for other modules or globals like process
inspect private variables
override variables within the module.

https://www.npmjs.com/package/rewire

npm install rewire --save-dev

Mongo BD
https://www.mongodb.com/

open cmd
to run mongodb
create folder Mongo-data to save data
C:\Program Files\MongoDB\Server\4.0\bin>mongod.exe --dbpath \Anthem\Udemy\Mongo-data

open another cmd
C:\Program Files\MongoDB\Server\4.0\bin>mongo.exe

now install
https://robomongo.org/download
GUI for mongoBD

doc: https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/#db.collection.findOneAndUpdate

npm install mongodb --save

Mongoose is an Object Relation Maping(ORM)
https://mongoosejs.com/

npm i mongoose --save

https://mongoosejs.com/docs/guide.html

https://mongoosejs.com/docs/validation.html

npm i express body-parser --save

https://httpstatuses.com/

https://www.npmjs.com/package/body-parser

Testing the API
npm i expect mocha nodemon supertest --save-dev

expect for assertion
mocha for entier test sweep
supertest to test our express route.

npm i --save lodash

Environment
"test": "export NODE_ENV = test || SET NODE_ENV = test && mocha server/\*_/_.test.js",
EXPORT for IOS and Linux, SET is for windows

Security

Token is an Array of objects

Validations
https://mongoosejs.com/docs/validation.html

https://www.npmjs.com/package/validator

npm install validator --save

JWTs and Hashing
hashing and json web tokens

for hashing
npm i crypto-js --save

hashing is a one way algorithm
json web token (JWT token)

npm i jsonwebtoken
http://jwt.io/

npm i bcryptjs --save

https://www.npmjs.com/package/bcrypt

Hashing is the transformation of a string of characters into a usually shorter fixed-length value or key that represents the original string. Hashing is used to index and retrieve items in a database because it is faster to find the item using the shorter hashed key than to find it using the original value. It is also used in many encryption algorithms.

Hashing is also a method of sorting key values in a database table in an efficient manner.

https://mongoosejs.com/docs/middleware.html

The method to run many promises in parallel and wait till all of them are ready.
It takes an iterable object with promises, technically it can be any iterable, but usually it’s an array, and returns a new promise. The new promise resolves with when all of them are settled and has an array of their results.
https://javascript.info/promise-api

