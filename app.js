const chalk = require('chalk');
const yargs = require('yargs');

//Customize yargs version
yargs.version('1.1.0')

// console.log(process.argv)

// add, remove, read, list


// Create add command

yargs.command({
    command:'add',
    describe:'Add a new note',
    handler: ()=>{
        console.log('Adding a new note!');
    }
})

// Create remove command

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:()=>{
        console.log('Remove a note');
    }
})

console.log(yargs.argv)