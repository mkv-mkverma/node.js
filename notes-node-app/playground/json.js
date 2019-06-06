// let object = {
//   id: 2,
//   name: "Manish"
// };

// let stringObject = JSON.stringify(object);

// console.log(typeof stringObject);
// console.log(stringObject);

// let personString = '{"id":1,"name":"manish","age":25}';

// let person = JSON.parse(personString); // string to json

// console.log(typeof person);
// console.log(person);

const fs = require('fs');


// Write note
let originalNote = {
    title: "Node.js",
    body: "Node is a js runtime which uses the v8 engine"
};

let originalStringNote = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalStringNote);


// Read note
let noteString = fs.readFileSync('notes.json')

let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
