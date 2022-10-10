const Inquirer = require('inquirer')

const prompt2Questions = [
    {
      type: 'input',
      name: 'personName',
      message: 'prompt2=> What is your name?'
    }
]

function prompt2() {
    Inquirer.prompt(prompt2Questions).then((answer) => {
        console.log(answer.personName)
    })
}

function prompt1() {
    Inquirer.prompt([
        {
          type: 'input',
          name: 'personName',
          message: 'init=> What is your name?'
        }
        ]).then((answer) => {
            console.log(answer.personName)
            // prompt2() IS ASYNC HERE
        }).then(() => prompt2())
}


function init() {
    prompt1()
}


// const init = () => {
//     prompt1()
//     .then((answer) =>{
//         console.log(answer.personName)
//     } )
// }

init()
