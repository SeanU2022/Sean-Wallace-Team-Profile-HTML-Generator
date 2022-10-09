const inquirer = require('inquirer');
class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(id, empName, email) {
      this.id = id
      this.empName = empName
      this.email = email
    }
    // 09-NodeJS/01-Activities/03-Ins_Arrow-Function states "Avoid using arrow functions for object methods"
    // but many examples since then have used arrow functions in class definitions
    // eg: 10-OOP/01-Activities/25-Ins_Multiple-Classes/restaurant.js>Restaurant.prepareOrders()
    getRole = () => 'Employee'

    add() {
        this.employeesMax = 5
        if (this.employeesMax === 0) {
            console.log("maximum employees reached")
            this.quit()
        }
        this.employeesMax--
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Employees name?',
            },
            {            
                type: "confirm",
                name: "choice",
                message: "Add another Employee?"
            }
        ])
        .then(val => {
          // If the user wants another employee then repeat the process
          if (val.choice) {
            // this.play();
            this.add();
          } else {
            this.quit();
          }
        });
    }

    printInfo() {
        console.log(`id: ${this.id}`)
        console.log(`name: ${this.empName}`)
        console.log(`email: ${this.email}`)
    }
    getId() {

    }
    getName() {

    }
    getEmail() {

    }
    // Logs goodbye and exits the node app
    quit() {
        console.log("\nGoodbye! quit() WAS CALLED");
        process.exit(0);
    }
}

module.exports = Employee