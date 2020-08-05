//another way to "import"(= require) a dependancy
const fs = require("fs")
//create a new folder called 'data'
fs.mkdirSync("data")
//run a callback function for each letters of the alphabet
"abcdefghijklmnopqrstuvwxyz".split("").forEach( letter => {
    //creates a new folder for the current letter
    fs.mkdirSync(`data/${letter}`)
});