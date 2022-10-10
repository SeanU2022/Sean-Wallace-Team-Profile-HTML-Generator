const Employee = require('./employee')
class Engineer extends Employee {
  constructor(id, empName, email, gitHubUserName) {
    // you  must call super of parent class
    super(id, empName, email)

    this.id = id
    this.empName = empName
    this.email = email
    this.gitHubUserName = gitHubUserName
  }
  getRole = () => 'Engineer'
}

module.exports = Engineer