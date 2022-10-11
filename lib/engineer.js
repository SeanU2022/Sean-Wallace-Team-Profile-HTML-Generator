const Employee = require('./employee')
class Engineer extends Employee {
  constructor(id, empName, email, gitHubUserName) {
    // you  must call super of parent class
    super(id, empName, email)

    this.id = id
    this.empName = empName
    this.email = email

    if (typeof gitHubUserName !== "string" || !gitHubUserName.trim().length) {
      throw new Error("Expected parameter 'gitHubUserName' to be a non-empty string")
    }
    this.gitHubUserName = gitHubUserName
  }
  getRole = () => 'Engineer'
  getGitHub = () => this.gitHubUserName
}

module.exports = Engineer