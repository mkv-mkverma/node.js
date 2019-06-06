/**
 * node playground/debugging.js
 * for debuggin mode run
 * node inspect playground/debugging.js
 * list(n) ; where n = no. of line
 * debug> n ; n = next
 * debug> c ; c = continue (other line run automatically)
 * repl ; you can see the value of object or change the value
 * node/nodemon inspect index.js read --title='secrets0'
 * c -> repl -> note -> c -> ctrl + c
 * debuggin on chrome dev tool
 * node/nodemon --inspect-brk playground/debugging.js
 * on chrome type chrome://inspect
 * playground/debugging.js file:///C:/_Anthem_... click inspect
 * click esc to open console
 */
let person = {
  name: "Manish"
};

person.age = 27;
debugger;
person.name = "Mike";

console.log(person);
