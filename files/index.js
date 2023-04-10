const fs = require('fs')
const path = require('path')

/* fs.readFile('./files/starter.txt', (err, data) => {
    if(err) throw err
    console.log(data.toString())
}) */

/* fs.readFile('./files/starter.txt', 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
}) */

fs.readFile(path.join(__dirname,'files', 'starter.txt'), 'utf8', (err, data) => {
    if(err) throw err
    console.log(data)
})



console.log('Hello...')

//exit on uncaught errors (don't need to import, it's already there in node)
// to see this error, just change the directory for another one that doesn't exist
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
})