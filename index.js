const inquirer = require('inquirer');
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

const { generateHTML } = require('./src/templateHTMLHelper')

//const { generateMarkdown, licences } = require('./utils/generateHTML')

// Array of questions for user input
// WARNING: DO NOT USE kebab-case for name
// {
//     type: 'list', 
//     name: 'licence',
//     message: 'What kind of licence should your project have?',
//     // lic is used as an example to a new developer
//     choices: licences.map(lic => lic.name),
//     default: "MIT"
// },
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input', 
            name: 'repoinfo',
            message: 'What does the user need to know about using the repo?'
        }
])
}

// Bonus using writeFileSync as a promise
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('./dist/index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to ./dist/index.html'))
      .catch((err) => console.error(err))
}
  
init()