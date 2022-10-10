const Inquirer = require("inquirer");
const Manager = require("./manager");
// const chalk = require("chalk");
// const Word = require("./Word");
// const words = require("./words");

// The Team constructor is responsible for controlling the build of the team

class Team {
  // Save a reference for `this` in `this` as `this` will change inside of inquirer
  constructor() {
    this.teamMembers = []
  }
  // Sets the guesses to 10 and gets the next word
  build() {
    // this.nextTeamMember();
    this.addManager();
  }
  addEngineer() {

    const promptForEngineer = () => {
      return Inquirer.prompt([
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
        }
    ])
    }
    promptForEngineer()
      .then((answers) => {
        console.log('promptForEngineer() FINISHED')
        console.log(answers)
        console.log('add engineer')
        console.log('you added an engineer')
      })
      .catch((error) => console.error(error))
  }
  // Creates a new Word object using a random word from the array, asks the user for their guess
  // add laater
  // nextTeamMember() {
  //   const randWord = words[Math.floor(Math.random() * words.length)];
  //   this.currentWord = new Word(randWord);
  //   console.log("\n" + this.currentWord.toString() + "\n");
  //   this.makeGuess();
  // }



  // Uses inquirer to prompt the user for their guess
  // makeGuess() {
  //   this.askForLetter().then(() => {
  //     // If the user has no guesses remaining after this guess, show them the word, ask if they want to build again
  //     if (this.placesLeft < 1) {
  //       console.log(
  //         'No guesses left! Word was: "' +
  //           this.currentWord.getSolution() +
  //           '"\n'
  //       );
  //       this.askTobuildAgain();

  //       // If the user guessed all letters of the current word correctly, reset placesLeft to 10 and get the next word
  //     } else if (this.currentWord.guessedCorrectly()) {
  //       console.log("You got it right! Next word!");
  //       this.placesLeft = 10;
  //       this.nextTeamMember();

  //       // Otherwise prompt the user to guess the next letter
  //     } else {
  //       this.makeGuess();
  //     }
  //   });
  // }

  // addManager() {
  //   console.log('add manager')
  //   const promptManager = () => {
  //     return Inquirer.prompt([
  //         {
  //           type: 'input',
  //           name: 'empid',
  //           message: 'What is your Employee ID?',
  //         },
  //         {
  //             type: 'input',
  //             name: 'name',
  //             message: 'What is your name?',
  //         },
  //         {
  //           type: 'input',
  //           name: 'email',
  //           message: 'What is your Email Address?',
  //         },
  //         {
  //           type: 'input',
  //           name: 'officenumber',
  //           message: 'What is your Office Number?',
  //         }
  //         // ,
  //         // BUILD TEAM ? TOO COMLEX FOR NOW
  //         // {
  //         //     type: 'confirm',
  //         //     name: 'buildteam',
  //         //     message: 'Would you like to build a team?'
  //         // }
  //   ])
  //   }
  //   promptManager().then((answers) => {
  //     console.log(answers)
  //     teamMembers.push(answers)
  //     console.log(this.teamMembers)
  //   })
  //   // this.addTeamMember()
  // }

  addManager() {
    console.log('add manager')
    // const promptManager = () => {
    function promptManager() {
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
        this.addTeamMember()
      })
      .catch((error) => console.error(error))
  }

  addTeamMember() {
    console.log('add team member')
    // const promptForTeamMember = () => {
    function promptForTeamMember() {
      // 1 return   Inquirer.prompt([
      return Inquirer.prompt([
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
        console.log('promptForTeamMember() START')
        console.log(answers)
        if (answers.team === 'Engineer') {
          this.addEngineer()
          console.log('you added an engineerXXXXXXXXXXXXXX')
        } else if (answers.team === 'Intern') {
          console.log('you added an intern')        
        } else {
          console.log('quit this process')
          this.quit();
        }
      }).catch((error) => console.error(error))
  }
    // this.addTeamMember()
  


  // Asks the user if they want to build again after running out of placesLeft
  askTobuildAgain() {
    Inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "build Again?"
        }
      ])
      .then(val => {
// NOTE: IF VAL.CHOICE
        // If the user says yes to another game, build again, otherwise quit the game
        if (val.choice) {
          this.build();
        } else {
          this.quit();
        }
      });
  }

  // Prompts the user for a letter CHALK
  // askForLetter() {
  //   return inquirer
  //     .prompt([
  //       {
  //         type: "input",
  //         name: "choice",
  //         message: "Guess a letter!",
  //         // The users guess must be a number or letter
  //         validate: val => /[a-z1-9]/gi.test(val),          
  //       }
  //     ])
  //     .then(val => {
  //       // If the user's guess is in the current word, log that they chose correctly
  //       const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
  //       if (didGuessCorrectly) {
  //         console.log(chalk.green("\nCORRECT!!!\n"));

  //         // Otherwise decrement `placesLeft`, and let the user know how many guesses they have left
  //       } else {
  //         this.placesLeft--;
  //         console.log(chalk.red("\nINCORRECT!!!\n"));
  //         console.log(this.placesLeft + " guesses remaining!!!\n");
  //       }

  //       console.log(this.currentWord.toString() + "\n");
  //     });
  // }

  // Logs goodbye and exits the node app
  quit() {
    console.log("\nGoodbye! quit() WAS CALLED");
    process.exit(0);
  }
}

module.exports = Team;