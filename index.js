(function () {
    console.log('hello world')
    console.log(this)
})
()

fnName = () => {
    console.log('arrow function')
    console.log('arrow function')
}
fnName()  // this call the anonynous fn

fnDoStuff = (param1, param2) => {
    console.log('arrow function param1 ' + param1)
    console.log('arrow function param2 ' + param2)
}
fnDoStuff('P1', 222)


const inquirer = require('inquirer');
// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// MOVE LATER
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

// const generateHTML = ({ name, location, github, linkedin }) =>
const generateHTML = ({ name, repoinfo }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Team Profile</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">I am from ${repoinfo}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${name}</li>
      <li class="list-group-item">LinkedIn: ${repoinfo}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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