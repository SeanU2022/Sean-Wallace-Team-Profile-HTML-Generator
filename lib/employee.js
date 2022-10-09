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
}

module.exports = Employee