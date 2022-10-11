// const chalk = require("chalk");
const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

const { htmlHead, htmlTail, htmlManager, htmlEngineer, htmlIntern } = require('./templateHTMLHelper')

// The Team class controls the build of the team
// starting with addManager which calls addTeamMembers which calls addEngineer/addIntern
// addEngineer/addIntern then call addTeamMembers at the end to restart the process
// CRITICAL:  this.addTeamMembers() must be wrapped in an anonymous arrow fn to force
//            inquirer to delay prompts appearing before the current prompt is answered
//            - this is likely because the technique below is not the best with using inquirer 
// NOTE:      this is not using arrow functions as class methods
class Team {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor() {
    this.teamMembers = []
    this.htmlFinalised = ''
  }
  build() {
    // starting with the manager build the teamMembers array
    this.addManager()
  }

  addManager() {
    console.log('add manager')
    function promptManager() {
      return inquirer.prompt([
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
    ])
    }
    promptManager()
      .then((answers) => {
        console.log(answers)
        const manager = new Manager (
          answers.empid ,
          answers.name ,
          answers.email ,
          answers.officenumber
        )
        // teamMembers.push(answers)
        this.teamMembers.push(manager)
        console.log(this.teamMembers)
        console.log(manager.getRole())
        console.log(manager.getId())
        console.log(manager.getName())
        })
      .then( () => {
        // use anonymous arrow to delay processing
        this.addTeamMembers()
      })
      .catch((error) => console.error(error))
  } // addManager

  addTeamMembers() {
    console.log('add team member')
    // const promptForTeamMember = () => {
    function promptForTeamMember() {
      // 1 return   inquirer.prompt([
      return inquirer.prompt([
          {
              type: 'list',
              name: 'team',
              message: 'Add another team memmber?',
              choices: ['Engineer', 'Intern', 'finish building my team']
          }
      ])
    }
    // 2 return promptForTeamMember()
    promptForTeamMember()
      .then((answers) => {
        // console.log('promptForTeamMember() START')
        // console.log(answers)
        if (answers.team === 'Engineer') {
          this.addEngineer()
          // console.log('you added an engineerXXXXXXXXXXXXXX')
        } else if (answers.team === 'Intern') {
          this.addIntern()
          // console.log('you added an intern')        
        } else {
          console.log('array built - now generate HTML as next step')
          let stri = this.generateHTML(this.teamMembers)
          this.htmlFinalised = stri
          fs.writeFileSync('./dist/sean.html', stri)
// console.log(stri)
          // .then(() => {this.quit()} )
          return
          // this.quit()
        }
      }).catch((error) => console.error(error))
  } // addTeamMembers

  addEngineer() {
    function promptForEngineer() {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'empid',
          message: 'What is the Engineers\' Employee ID?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers\' name?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the the Engineers\' Email Address?',
        },
        {
          type: 'input',
          name: 'gitHubUserName',
          message: 'What is the the Engineers\' GitHub user name?',
        }
    ])
    }
    promptForEngineer()
      .then((answers) => {
        console.log('promptForEngineer() FINISHED')
        console.log(answers)
        console.log('add engineer')
        const engineer = new Engineer (
          answers.empid ,
          answers.name ,
          answers.email ,
          answers.gitHubUserName
        )
        // teamMembers.push(answers)
        this.teamMembers.push(engineer)
        console.log('you added an engineer')
        console.log(this.teamMembers)
      })
      .then(  () => {
        // use anonymous arrow to delay processing
        this.addTeamMembers()
      })
      .catch((error) => console.error(error))
  } // addEngineer

  addIntern() {
    function promptForIntern() {
      return inquirer.prompt([
        {
          type: 'input',
          name: 'empid',
          message: 'What is the Interns\' Employee ID?',
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Interns\' name?',
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the the Interns\' Email Address?',
        },
        {
          type: 'input',
          name: 'school',
          message: 'What School did the Intern go to?',
        }
    ])
    }
    promptForIntern()
      .then((answers) => {
        console.log('promptForIntern() FINISHED')
        console.log(answers)
        console.log('add Intern')
        const intern = new Intern (
          answers.empid ,
          answers.name ,
          answers.email ,
          answers.school
        )
        // teamMembers.push(answers)
        this.teamMembers.push(intern)
        console.log('you added an intern')
        console.log(this.teamMembers)
      })
      .then( () => {
        // use anonymous arrow to delay processing
        this.addTeamMembers()
      })
      .catch((error) => console.error(error))
  } // addIntern

  generateHTML(team) {
    console.log('generate htmlgenerate htmlgenerate htmlgenerate html')
    let htmlGenerated = htmlHead()
    let teamMember = team.map(staffMember => {
      switch (staffMember.getRole()) {
        case 'Manager':
          htmlGenerated += htmlManager(staffMember)
          break;
        case 'Engineer':
          htmlGenerated += htmlEngineer(staffMember)
          break;
        case 'Intern':
          htmlGenerated += htmlIntern(staffMember)
          break;
        default:
          console.log('unexpected team.js>class Team>generateHTML>member.getRole()')
          break;
      }
    })
    htmlGenerated += htmlTail()
    return htmlGenerated
  }

  // Logs goodbye and exits the node app
  quit() {
    console.log("\nGoodbye! quit() WAS CALLED");
    process.exit(0);
  }
}

module.exports = Team;