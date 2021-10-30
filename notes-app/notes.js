const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => note.title === title);

    if (!duplicateNotes.length) {
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log(chalk.blue.bold('Note added successfully!!'));
    }
    else {
        console.log(chalk.yellow.bold('note already added!!'));
    }
}

const removeNote = (title, body) => {
    const notes = loadNotes();
    const isExist = notes.filter(note => note.title !== title);
    if (notes.length !== isExist.length) {
        saveNotes(isExist)
        console.log(chalk.green.bold('Note removed successfully!!'));
    }
    else {
        console.log(chalk.yellow.bold('No not found'));
    }
}

//common function
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
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
    removeNote
}