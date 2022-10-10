const inquirer = require('inquirer')
// this is TEST CODE
// inq1 explores inquirer with functions to understand how to avoid next 
// next questions showing before previous ones get answered
// see inq2 for class functions with same proplem

const questionsSet1 = [
    {
      type: 'input',
      name: 'personName',
      message: 'q1=> What is your name?'
    },
    {
        type: 'list',
        name: 'teamRole',
        message: 'q2=> Add team memmber?',
        choices: ['Engineer', 'Tester','finish']
    }
]

const questionsSet2 = [
    {
        type: 'input',
        name: 'city',
        message: 'q3=> What is your city?'
    },
    {
        type: 'list',
        name: 'university',
        message: 'q4=> what was the Uni?',
        choices: ['Sydney', 'NSW']
    }
]

function prompt2() {
    inquirer.prompt(questionsSet2).then((answers) => {
        console.log(answers.city)
        console.log(answers.university)
    })
}

function prompt1() {
    inquirer.prompt(questionsSet1).then((answers) => {
        console.log(answers.personName)
        console.log(answers.teamRole)
    })
}

function init() {
    console.log(1)
    prompt1()
    // .then((answersSet1))
    // .then(() => console.log('we have some answers'))
}

init()

