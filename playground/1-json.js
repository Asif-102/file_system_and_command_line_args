const fs = require('fs');


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

console.log(user);

user.name = 'Asif';
user.age = 23;

fs.writeFileSync('1-json.json', JSON.stringify(user));