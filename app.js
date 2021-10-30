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
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },  
    handler: (argv)=>{
        console.log('Title: ', argv.title);
        console.log('Body: ', argv.body);
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

// console.log(yargs.argv)
yargs.parse();