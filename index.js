const Inquirer = require('inquirer');
// import Inquirer from 'inquirer'

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

const { generateHTML } = require('./src/templateHTMLHelper')

const Employee = require('./lib/employee')
const Manager = require('./lib/manager')

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

//team manager’s name, employee ID, email address, and office number

const promptManager = () => {
    return Inquirer.prompt([
        {
          type: 'input',
          name: 'empid',
          message: 'What is your Employee ID?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your Email Address?',
        },
        {
          type: 'input',
          name: 'officenumber',
          message: 'What is your Office Number?',
        }
        // ,
        // BUILD TEAM ? TOO COMLEX FOR NOW
        // {
        //     type: 'confirm',
        //     name: 'buildteam',
        //     message: 'Would you like to build a team?'
        // }
        //
        // {
        //     type: 'input', 
        //     name: 'repoinfo',
        //     message: 'What does the user need to know about using the repo?'
        // },
        // {
        //     type: 'input',
        //     name: 'github',
        //     message: 'Enter your GitHub Username',
        // },
        // {
        //     type: 'input',
        //     name: 'linkedin',
        //     message: 'Enter your LinkedIn URL.',
        // }
])
}


// Bonus using writeFileSync as a promise
const init = () => {

    promptManager()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
.then((answers) => writeFile('./dist/index.html', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to ./dist/index.html'))
      .then((answers) => {
        // const mgr = new Manager(777, 'SEAN', 'email@email', 909)
        const mgr = new Manager(answers)
        // mgr.printInfo()
        console.log(mgr.getRole())
      })
      .catch((error) => console.error(error))
}
  
init()
