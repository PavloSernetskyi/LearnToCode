"use strict"

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    // The displayIntro() method
    displayIntro() {
        console.log(
            "Hi! I'm " + this.firstName + " " + this.lastName +
            " and I am a " + this.jobTitle);
    }
}

let employee1 = new Employee("1", "Ezra", "Aiden",
    "Theater Teacher", 38.46);
let employee2 = new Employee("2", "Elisha", "Aslan",
    "Game Programmer", 43.27);
employee1.displayIntro();
employee2.displayIntro();