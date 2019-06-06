console.log("Starting notes.js");
// console.log(module);

module.exports.age = 27;
module.exports.addNotes = () => {
    console.log('addNote!');
    return 'New Notes!';
};


module.exports.addNum = (a,b) => {
    console.log('addNum!');
    return a + b;
};
