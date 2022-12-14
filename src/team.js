// const chalk = require("chalk");
const inquirer = require("inquirer");
const fs = require('fs');

const Manager = require("../lib/manager");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

const { htmlShell, htmlCardManager, htmlCardEngineer, htmlCardIntern } = require('./templateHTMLHelper')

// The Team class controls the build of the team
// starting with addManager which calls addTeamMembers which calls addEngineer/addIntern
// addEngineer/addIntern then calls addTeamMembers at the end to restart the process
class Team {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor() {
    this.teamMembers = []
    // this.htmlFinalised = ''
    this.htmlFileSaved = false
    this.htmlFileToWrite = './dist/index.html'
    // TEST: remove correct folder to test fs.filewrite: this.htmlFileToWrite = './dis/index.html'
  }
  build() {
    // starting with the manager build the teamMembers array
    this.addManager()
  }

  // NOTE: promptManger returns inquirer prompt and THEN pushes response to array and calls next method addTeamMembers
  addManager() {
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
        const manager = new Manager (
          answers.empid ,
          answers.name ,
          answers.email ,
          answers.officenumber
        )
        this.teamMembers.push(manager)
        this.addTeamMembers()
        })
      // .then( () => {
      //   // use anonymous arrow to delay processing
      //   this.addTeamMembers()
      // })
      .catch((error) => console.error(error))
  } // addManager

  addTeamMembers() {
    function promptForTeamMember() {
      return inquirer.prompt([
          {
              type: 'list',
              name: 'team',
              message: 'Add another team memmber?',
              choices: ['Engineer', 'Intern', 'No - I\'ve finish; go ahead and build the team in HTML']
          }
      ])
    }
    promptForTeamMember()
      .then((answers) => {
        if (answers.team === 'Engineer') {
          this.addEngineer()
        } else if (answers.team === 'Intern') {
          this.addIntern()
        } else {
          // user has chosen to finish and build html
          this.writeHTML(this.htmlFileToWrite, this.generateHTML(this.teamMembers))
          
          // test code
          // let output = this.generateHTML(this.teamMembers)
          // console.log(output)
          
          return this.quit()
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
        const engineer = new Engineer (
          answers.empid ,
          answers.name ,
          answers.email ,
          answers.gitHubUserName
        )
        this.teamMembers.push(engineer)
        this.addTeamMembers()
      })
      // NOTE:  addTeamMembers() needs to be in promptForEngineer.then above 
      // NOTE:  not here because we want synchronous not async processing
      // .then(  () => {
      //   // use anonymous arrow to delay processing
      //   this.addTeamMembers()
      // })
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
        const intern = new Intern (
          answers.empid ,
          answers.name ,
          answers.email ,
          answers.school
        )
        this.teamMembers.push(intern)
        this.addTeamMembers()
      })
      .catch((error) => console.error(error))
  } // addIntern

  generateHTML_Method1_NotUsed(team) {
    let htmlCards = ``
    team.map(staffMember => {
      switch (staffMember.getRole()) {
        case 'Manager':
          htmlCards += htmlCardManager(staffMember);
          break;
        case 'Engineer':
          htmlCards += htmlCardEngineer(staffMember);
          break;
        case 'Intern':
          htmlCards += htmlCardIntern(staffMember);
          break;
        default:
          console.log('Error: unexpected team.js>class Team>generateHTML>member.getRole()');
          break;
      }
    })
    return htmlShell(htmlCards)
  }

  // method 1 above is better but method 2 can work with join(``)
  generateHTML(team) {
    let htmlCards = team.map(staffMember => {
      if (staffMember.getRole() === 'Manager') {
        return htmlCardManager(staffMember)

      } else if (staffMember.getRole() === 'Engineer') {
        return htmlCardEngineer(staffMember)

      } else if (staffMember.getRole() === 'Intern') {
        return htmlCardIntern(staffMember)

      } else {
        console.log('Error: unexpected team.js>class Team>generateHTML>member.getRole()')
      }
    }).join(``) // used here to prevent "," appearing in the mapped output    
    return htmlShell(htmlCards)
  }

  writeHTML(fileName, dataHTML) {
    // old technique:
    // const errorFileWritten = fs.writeFileSync(fileName, dataHTML)
    // if (errorFileWritten) {
    //   console.log(fileWritten)
    // }
    // new technique:
    try {
      fs.writeFileSync(fileName, dataHTML)
      this.htmlFileSaved = true
    } catch (error) {
      // console.error(error)
      console.log("Error: writeHTML fs.writeFileSync failed - disk is full or folder for this.htmlFileToWrite doesn't exist")
    }
  }

  // Logs goodbye and exits the node app
  quit() {
    if (this.htmlFileSaved) {
      console.log("\nGoodbye! HTML is here: " + this.htmlFileToWrite);  
    } else {
      console.log("\nGoodbye! Error! file not written! check: " + this.htmlFileToWrite);
    }
    process.exit(0);
  }
}

module.exports = Team;