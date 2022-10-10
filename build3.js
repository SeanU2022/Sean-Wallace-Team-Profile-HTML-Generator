// import {Subject} from "rxjs"
const Rx = require("rxjs")
const prompts = new Rx.Subject()
const inquirer = require("inquirer")

// inquirer.prompt(prompts)
var fuk = 'dav'
var answers = {}
console.log(fuk)
inquirer.prompt(prompts).ui.process.subscribe(

    (q) => {
        
        console.log(q)
     

        fuk = 'sean'
        if (q.name === "personName") {
            answers.name = q.answer
        }
        if (q.name === "personAge") {
            answers.age = q.answer
        }
    }
)

prompts.next(
    {
      type: 'input',
      name: 'personName',
      message: 'init p1-> What is your name?'
    }
    )
prompts.next(
    {
        type: 'input',
        name: 'personAge',
        message: 'init p1-> What is your age?'
    }
    )


prompts.complete()
console.log(fuk)

// prompts.forEach
