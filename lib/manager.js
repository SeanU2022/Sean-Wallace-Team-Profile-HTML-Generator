const Inquirer = require('inquirer')
const Employee = require('./employee')
// import Inquirer from 'inquirer'
// import Employee from './employee'

class Manager extends Employee {
//   constructor(id, empName, email, officeNumber) {
  constructor({id, name, email, officenumber}) {
    // you  must call super of parent class
    super(id, empName, email)
    // this.id = empid
    // this.empName = name
    // this.email = email
    
    // const { name, empid, email, officenumber } = managerAnswers

    this.id = empid
    this.empName = name
    this.email = email
    this.officeNumber = officenumber
    
    // const area = sideA * sideB;
    // const perimeter = sideA * 2 + sideB * 2;


    // this.sideA = sideA;
    // this.sideB = sideB;
  }
  getRole = () => 'Manager'
}

// const rectangle = new Rectangle(12, 9);
// rectangle.printInfo();

module.exports = Manager