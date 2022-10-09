const Employee = require('./employee')
class Manager extends Employee {
  constructor(id, empName, email, officeNumber) {
    // you  must call super of parent class
    super(id, empName, email)

    this.id = id
    this.empName = empName
    this.email = email
    this.officeNumber = officeNumber
  }
  getRole = () => 'Manager'
}

module.exports = Manager