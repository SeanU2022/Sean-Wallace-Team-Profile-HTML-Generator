const Engineer = require("../lib/engineer")

describe('Engineer', () => {
  describe('Initialization', () => {
    // Arrange
    const employeeID = 8901
    const employeeName = "Ms Engineer"
    const employeeEmail = "engineer@companyname.com"
    const employeeRole = "Engineer"
    const gitHubUserName = "MsEngin"

    // Positive test
    it("should create an object with an id, employee name, and email if arguments are valid", () => {

      // Act
      const engineer = new Engineer(employeeID, employeeName, employeeEmail, gitHubUserName);

      // Assert
      expect(engineer.id).toEqual(employeeID)
      expect(engineer.empName).toEqual(employeeName);
      expect(engineer.email).toEqual(employeeEmail);
      expect(engineer.getRole()).toEqual(employeeRole);
      expect(engineer.gitHubUserName).toEqual(gitHubUserName);
    });

    // Exception tests
    it("should throw an error if not provided an 'id' value", () => {
      // Arrange
      const cb = () => new Engineer();
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      // Assert
      expect(cb).toThrowError(err);  
    });

    it("should throw an error if not provided a 'name' value", () => {
      // Arrange
      const cb = () => new Engineer(employeeID);
      const err = new Error(
        "Expected parameter 'empName' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a 'email' value", () => {
      // Arrange
      const cb = () => new Engineer(employeeID, employeeName);
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a 'git hub user name' value", () => {
      // Arrange
      const cb = () => new Engineer(employeeID, employeeName, employeeEmail);
      const err = new Error(
        "Expected parameter 'gitHubUserName' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

  });
});
