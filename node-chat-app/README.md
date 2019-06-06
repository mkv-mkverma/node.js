Socket.IO is a JavaScript library for real-time web applications. It enables real-time, bi-directional communication between web clients and servers. It has two parts: a client-side library that runs in the browser, and a server-side library for node.js. Both components have an identical API.

$ npm init -y
$ git init
$ npm i express --save
$ npm install nodemon --save-dev
$ npm install -g heroku
$ npm i socket.io --save
$ npm install expect mocha --save-dev
$ npm install moment --save
$ heroku login -i
$ heroku create

$ heroku keys:add (to add ssh key)
$ heroku keys:remove (to remove ssh key)
$ heroku keys
\$ ssh -v git@heroku.com
heroku create
env

path
https://nodejs.org/api/path.html#path_path_join_paths

https://devcenter.heroku.com/articles/heroku-cli

http://localhost:3000/socket.io/socket.io.js

https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

https://momentjs.com/
https://momentjs.com/docs/#/displaying/

https://github.com/janl/mustache.js/

for unit testing we are using mocha and assertion package library(expect)

debuggin on chrome dev tool
node/nodemon --inspect-brk playground/debugging.js
or
\$ node --inspect-brk --inspect-port=0 server/server.js
on chrome type chrome://inspect
playground/debugging.js file:///C:/_Anthem_... click inspect
click esc to open console

moment.js
liburay of timeStamp

location is a global object provided by your browser
