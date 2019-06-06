/**
 * run below command on terminal
 * $ node index.js add --title="secrets" --body="this is my secrets"
 * $ node index.js list --title="list"
 * $ node index.js remove --title="list"
 */
console.log("Starting index.js");

const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");
const _ = require("lodash");
const yargs = require("yargs");

// predefined methods
// https://www.npmjs.com/package/lodash
// https://lodash.com/
// https://lodash.com/docs/4.17.11
// yargs takes the same process.argv

const titleOptions = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const bodyOptions = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};

// const argv = yargs.argv;
const argv = yargs
  .command("add", "Add a new note", {
    title: titleOptions,
    body: bodyOptions
  })
  .command("list", "List all notes")
  .command("read", "Read a note", {
    title: titleOptions
  })
  .command("remove", "Remove a note", {
    title: titleOptions
  })
  .help().argv;

console.log(_.isString("1"));

let filterArray = _.uniq(["Manish", "Manish", "Verma", "Kumar"]);
console.log(filterArray);

console.log(process.argv);

// let command = process.argv[2];
let command = argv._[0];
// const argv = yargs.argv;

console.log(`process: ${command}`);
console.log(`yargs: ${argv}`);

switch (command) {
  case "add":
    let note = notes.addNote(argv.title, argv.body);
    note
      ? notes.displayMessage(note)
      : console.log(`Title ${argv.title} already exists`);
    break;
  case "list":
    let allNotes = notes.getAllNotes();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.length
      ? allNotes.forEach(note => notes.displayMessage(note))
      : console.log("You do not have any list");
    break;
  case "read":
    let ReadNote = notes.readNote(argv.title);
    ReadNote ? notes.displayMessage(ReadNote) : console.log("Not Found");
    break;
  case "remove":
    notes.removeNote(argv.title)
      ? console.log(`Title: ${argv.title} removed`)
      : console.log(`Not Found`);
    break;
  default:
    console.log("Command not recoganised");
    break;
}
