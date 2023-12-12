"use strict"

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //getFullName()
    getFullName() {
        let fullName = this.firstName + " " + this.lastName;
        return fullName;
    }

} //end of person class.

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        super(firstName, lastName); // Call the constructor of the parent class
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }

    //TODO no need to write this method here since i can reuse it from parent class.
    // //getFullName()
    // getFullName() {
    //     let fullName = this.firstName + " " + this.lastName;
    //     return fullName;
    // }

    getGrossPay(hoursWorked){
        return this.payRate * hoursWorked;
    }

}

let person1 = new Person('John', 'Cena');
console.log(person1.getFullName());


let employee1 = new Employee('John', 'Smith', 2452, 'Web Developer', 35.50);
console.log("Emloyee 1 created: " + employee1.getFullName());
console.log("ID: " + employee1.id);
console.log("Job Title: " + employee1.jobTitle);
console.log("Pay Rate: " + employee1.payRate);
console.log("Gross pay: $" + employee1.getGrossPay(2));
console.log();

let employee2 = new Employee('Pavlo', 'Sernetskyi', 3578, 'Sr. Software Developer', 60.00);
console.log("Emloyee 2 created: " + employee2.getFullName());
console.log("ID: " + employee2.id);
console.log("Job Title: " + employee2.jobTitle);
console.log("Pay Rate: " + employee2.payRate);
console.log("Gross pay: $" + employee2.getGrossPay(2));