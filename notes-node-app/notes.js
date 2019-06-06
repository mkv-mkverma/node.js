console.log("Inside Notes");

const fs = require("fs");

// Refactor for Reusability

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

let saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let addNote = (title, body) => {
  // console.log(`Adding note ${title} ${body}`);
  let notes = fetchNotes();
  let note = {
    title,
    body
  };

  let duplicateNote = notes.filter(note => {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAllNotes = () => {
  return fetchNotes();
};
let readNote = title => {
  // console.log(`Read note ${title}`);
  let notes = fetchNotes();
  let searchNote = notes.filter((note)=>{
    return note.title === title;
  })
  return searchNote[0];
};
let removeNote = title => {
  // console.log(`Remove note ${title}`);
  // fetch notes
  let notes = fetchNotes();
  // filter notes, removing the one with title of argument
  let newNotes = notes.filter(note => {
    return note.title !== title;
  });
  // save new note array
  saveNotes(newNotes);
  return notes.length !== newNotes.length;
};

let displayMessage = note => {
  // debugger;
  // node/nodemon inspect index.js read --title='secrets0'
  // c -> repl -> note -> c -> ctrl + c
  console.log(`Title: ${note.title} , Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAllNotes,
  readNote,
  removeNote,
  displayMessage
};
