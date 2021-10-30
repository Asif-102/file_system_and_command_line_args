const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.find((note) => note.title === title);

    if (!duplicateNotes) {
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log(chalk.blue.inverse.bold('Note added successfully!!'));
    }
    else {
        console.log(chalk.red.inverse.bold('note already added!!'));
    }
}

const removeNote = (title, body) => {
    const notes = loadNotes();
    const isExist = notes.filter((note) => note.title !== title);
    if (notes.length !== isExist.length) {
        saveNotes(isExist)
        console.log(chalk.green.bold('Note removed successfully!!'));
    }
    else {
        console.log(chalk.yellow.bold('No note found'));
    }
}

//common function
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes...'))
    notes.forEach((note)=>console.log(chalk.bold(note.title)));
}

//common function
const loadNotes = () => {
    try {

        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer);

    } catch (error) {
        return []
    }
}

module.exports = {
    addNote,
    removeNote,
    listNotes
}