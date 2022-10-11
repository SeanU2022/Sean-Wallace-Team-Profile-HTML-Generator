const Employee = require('./employee')
class Intern extends Employee {
  constructor(id, empName, email, school) {
    // you  must call super of parent class
    super(id, empName, email)

    this.id = id
    this.empName = empName
    this.email = email

    if (typeof school !== "string" || !school.trim().length) {
      throw new Error("Expected parameter 'school' to be a non-empty string")
    }
    this.school = school
  }
  getRole = () => 'Intern'
  getSchool = () => this.school
}

module.exports = Intern