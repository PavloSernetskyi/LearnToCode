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
    fullName() {
        let fullEmpName = this.firstName + " " + this.lastName;
        return fullEmpName;
    }
}

// let employee1 = new Employee(
//     1, "Ian", "Auston", "Graphic Artist", 42.50);



let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
console.log(`Employee ${employee1.fullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

