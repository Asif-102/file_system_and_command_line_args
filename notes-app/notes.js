const fs = require('fs');

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note=>note.title===title);

    if(!duplicateNotes.length){
        notes.push({
            title,
            body
        })   
        saveNotes(notes);
        console.log('note added successfully!!');
    }
    else{
        console.log('note already added!!');
    }
}

const saveNotes = (notes)=>{
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = () => {
    try {

        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer);

    } catch (error) {
        return []
    }
}

module.exports = {
    addNote
}