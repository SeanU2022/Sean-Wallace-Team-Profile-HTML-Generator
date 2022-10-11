class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(id, empName, email) {

      if (typeof parseInt(id) !== "number" || isNaN(parseInt(id)) || parseInt(id) < 0) {
        throw new Error("Expected parameter 'id' to be a non-negative number");
      }
      // keep id as string since we are writing to an HTML file
      this.id = id

      if (typeof empName !== "string" || !empName.trim().length) {
        throw new Error("Expected parameter 'empName' to be a non-empty string")
      }
      this.empName = empName

      if (typeof email !== "string" || !email.trim().length) {
        throw new Error("Expected parameter 'email' to be a non-empty string")
      }
      this.email = email
    }
    // 09-NodeJS/01-Activities/03-Ins_Arrow-Function states "Avoid using arrow functions for object methods"
    // but many examples since then have used arrow functions in class definitions
    // eg: 10-OOP/01-Activities/25-Ins_Multiple-Classes/restaurant.js>Restaurant.prepareOrders()
    getRole = () => 'Employee'
    getId = () => this.id
    getName = () => this.empName
    getEmail = () => this.email
}

module.exports = Employee