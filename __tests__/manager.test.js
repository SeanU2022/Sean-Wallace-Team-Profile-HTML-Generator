const Manager = require("../lib/manager")

describe('Manager', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with an id, employee name, and email if arguments are valid", () => {
      // Arrange
      const employeeID = 4567
      const employeeName = "Mr Manager"
      const employeeEmail = "manage@companyname.com"
      const employeeRole = "Manager"
      const managerOfficeNumber = 909

      // Act
      const manager = new Manager(employeeID, employeeName, employeeEmail, managerOfficeNumber);

      // Assert
      expect(manager.id).toEqual(employeeID)
      expect(manager.empName).toEqual(employeeName);
      expect(manager.email).toEqual(employeeEmail);
      expect(manager.getRole()).toEqual(employeeRole);
      expect(manager.officeNumber).toEqual(managerOfficeNumber);
    });

    // Exception tests
    it("should throw an error if not provided an 'id' value", () => {
      // Arrange
      const cb = () => new Manager();
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      // Assert
      expect(cb).toThrowError(err);  
    });

    it("should throw an error if not provided a 'name' value", () => {
      // Arrange
      const cb = () => new Manager(4567);
      const err = new Error(
        "Expected parameter 'empName' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a 'email' value", () => {
      // Arrange
      const cb = () => new Manager(4567, "Mr Manager");
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a 'office number' value", () => {
      // Arrange
      const cb = () => new Manager(4567, "Mr Manager");
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

  });
});
