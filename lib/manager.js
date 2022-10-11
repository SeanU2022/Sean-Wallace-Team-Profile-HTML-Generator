const Employee = require('./employee')
class Manager extends Employee {
  constructor(id, empName, email, officeNumber) {
    // you  must call super of parent class
    super(id, empName, email)

    this.id = id
    this.empName = empName
    this.email = email

    if (typeof parseInt(officeNumber) !== "number" || isNaN(parseInt(officeNumber)) || parseInt(officeNumber) < 0) {
      throw new Error("Expected parameter 'officeNumber' to be a non-negative number");
    }
    // keep officeNumber as string since we are writing to an HTML file
    this.officeNumber = officeNumber
  }
  getRole = () => 'Manager'
}

module.exports = Manager