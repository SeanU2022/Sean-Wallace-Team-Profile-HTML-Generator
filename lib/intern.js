const Employee = require('./employee')
class Intern extends Employee {
  constructor(id, empName, email, school) {
    // you  must call super of parent class
    super(id, empName, email)

    this.id = id
    this.empName = empName
    this.email = email
    this.school = school
  }
  getRole = () => 'Intern'
}

module.exports = Intern