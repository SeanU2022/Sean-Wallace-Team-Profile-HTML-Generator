const Intern = require("../lib/intern")

describe('Intern', () => {
  describe('Initialization', () => {
    // Arrange
    const employeeID = 9493
    const employeeName = "Mr Intern"
    const employeeEmail = "intern@companyname.com"
    const school = "Newington College"

    // Positive test
    it("should create an object with an id, employee name, and email if arguments are valid", () => {

      // Act
      const intern = new Intern(employeeID, employeeName, employeeEmail, school);

      // Assert
      expect(intern.id).toEqual(employeeID)
      expect(intern.empName).toEqual(employeeName);
      expect(intern.email).toEqual(employeeEmail);
      expect(intern.school).toEqual(school);
    });

    // Exception tests
    it("should throw an error if not provided an 'id' value", () => {
      // Arrange
      const cb = () => new Intern();
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      // Assert
      expect(cb).toThrowError(err);  
    });

    it("should throw an error if not provided a 'name' value", () => {
      // Arrange
      const cb = () => new Intern(employeeID);
      const err = new Error(
        "Expected parameter 'empName' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a 'email' value", () => {
      // Arrange
      const cb = () => new Intern(employeeID, employeeName);
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a 'school' value", () => {
      // Arrange
      const cb = () => new Intern(employeeID, employeeName, employeeEmail);
      const err = new Error(
        "Expected parameter 'school' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

  });
});
