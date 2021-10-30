const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');

//Customize yargs version
yargs.version('1.1.0')

// console.log(process.argv)

// add, remove, read, list

// Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(passingArgv){
        notes.addNote(passingArgv.title, passingArgv.body);
    }
})

// Create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove an existing note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(passingArgv){
        notes.removeNote(passingArgv.title);
    }
})

// console.log(yargs.argv)
yargs.parse();