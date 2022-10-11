const inquirer = require('inquirer');
// const fs = require('fs');
// const { writeFile } = require('fs').promises;
const fs = require('fs')
const Team = require("./src/team");

// Initialize a new Team object
const team = new Team();

// const promptManager = () => {
//     return inquirer.prompt([])}

function promptManager() {
    team.build()
}

// create file, overwrites previous file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// const init = () => {
function init() {
    promptManager()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
    // .then(() => writeToFile('./dist/test.html', 'answers'))
    // .catch((error) => console.error(error))
}
init()




// function init() {
//     team.build()
//     // console.log(team.htmlFinalised)
// }

// init()
// // console.log(team.htmlFinalised)