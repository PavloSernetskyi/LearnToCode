"use strict"

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    //getFullName.
    getFullName() {
        let fullEmpName = this.firstName + " " + this.lastName;
        return fullEmpName;
    }

    // promote method. increase pay rate and position.
    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;

    } //end of promote func.

    // getIntro method.
    getIntro() {
        let intro =
            "Hi! I'm " + this.getFullName() + " and I am a " +
            this.jobTitle;
        return intro;
    }

}//end of class Employee

// test exercise 1.
//emp 1.
let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
console.log();

//emp 2.
let employee2 = new Employee(
    1, "Paul", "Stevens", "Network Engineer", 55.50);
console.log(`Employee ${employee2.getFullName()} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);
console.log();
console.log();

// exercise 2 test.
console.log("Promotions...");
console.log("Employee 1 promotion.");

// emp1 promotion
employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);
console.log();

// emp2 promotion.
console.log("Employee 2 promotion.");
employee2.promote("Sr. Network Architect", 60.75);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);

// exercise 3 test. display intro.
let intro = employee1.getIntro();
console.log(intro);
let intro2 = employee2.getIntro();
console.log(intro2);
