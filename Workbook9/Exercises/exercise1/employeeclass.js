"use strict";

class Employee {
  constructor(id, firstName, lastName, jobTitle, payRate) {
    this.employeeId = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.payRate = payRate;
  }

  getfullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getIntro() {
    let intro =
      "Hi! I'm " + this.getfullName() + " and I am a " + this.jobTitle;
    return intro;
  }

  promote(newJobTitle, newPayRate) {
    this.jobTitle = newJobTitle;
    this.payRate = newPayRate;
  }
}

let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.5);
employee1.promote("IT trainer", 5000);

console.log(`Employee ${employee1.firstName} created`);

let myIntro = employee1.getIntro();
console.log(myIntro);

console.log(`Employee ${employee1.getfullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
