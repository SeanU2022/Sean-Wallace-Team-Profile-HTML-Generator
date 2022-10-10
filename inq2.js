const Inquirer = require('inquirer')
// inq1 explores inquirer with functions to understand how to avoid next 
// next questions showing before previous ones get answered

const prompt2Questions = [
    {
      type: 'input',
      name: 'personName',
      message: 'prompt2=> What is your name?'
    }
]

function prompt2() {
    Inquirer.prompt(prompt2Questions).then((answer) => {
        console.log('init p2->' + answer.personName)
    })
}

function prompt1() {
    Inquirer.prompt([
        {
          type: 'input',
          name: 'personName',
          message: 'init p1-> What is your name?'
        }
        ]).then((answer) => {
            console.log(answer.personName)
            // prompt2() IS ASYNC HERE
        }).then(() => prompt2())
}

function init() {
    prompt1()
}

class Test {
    // Save a reference for `this` in `this` as `this` will change inside of inquirer
    constructor() {}
    // Sets the guesses to 10 and gets the next word
    build2() {
        Inquirer.prompt(prompt2Questions).then((answer) => {
            console.log(answer.personName)
        })}

    build1() {
        Inquirer.prompt([
            {
              type: 'input',
              name: 'personName',
              message: 'Test.build1=> What is your name?'
            },
            {
                type: 'list',
                name: 'team',
                message: 'Add another team memmber?',
                choices: ['Engineer', 'Intern', 'finish building my team']
            }
            ]).then((answer) => {
                console.log(answer.personName)
                prompt2() // IS ASYNC HERE
            })
            // .then(() => this.build2())
    }
}

let mytest = new Test()

init()
mytest.build1()
