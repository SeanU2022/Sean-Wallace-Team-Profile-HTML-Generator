const Employee = require("../lib/employee")

describe('Employee', () => {
  describe('Initialization', () => {
    // Positive test
    it("should create an object with an id, employee name, and email if arguments are valid", () => {
      // Arrange
      // const text = 'Pick up milk';
      const employeeID = 1234
      const employeeName = "John Smith"
      const employeeEmail = "email@companyname.com"
      const employeeRole = "Employee"

      // Act
      // const obj = new Todo(text);
      const employee = new Employee(employeeID, employeeName, employeeEmail);

      // Assert
      // expect(obj.text).toEqual(text);
      expect(employee.id).toEqual(employeeID)
      expect(employee.empName).toEqual(employeeName);
      expect(employee.email).toEqual(employeeEmail);
      expect(employee.getRole()).toEqual(employeeRole);
    });

    // Exception tests
    it("should throw an error if not provided an 'id' value", () => {
      // Arrange
      // const cb = () => new Todo();
      // const err = new Error(
      //   "Expected parameter 'text' to be a non empty string"
      // );
      const cb = () => new Employee();
      const err = new Error(
        "Expected parameter 'id' to be a non-negative number"
      );

      // Assert
      expect(cb).toThrowError(err);  
    });

    it("should throw an error if not provided a 'name' value", () => {
      // Arrange
      const cb = () => new Employee(4567);
      const err = new Error(
        "Expected parameter 'empName' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided a 'email' value", () => {
      // Arrange
      const cb = () => new Employee(4567, "Mr Jones");
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      // Assert
      expect(cb).toThrowError(err);
    });

  });
});
