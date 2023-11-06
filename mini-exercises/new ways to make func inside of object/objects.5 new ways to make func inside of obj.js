"use strict"
// example 1.

// let student = {
//     firstname: "Esther",
//     lastname: "Ajayi",
//   };
  
//   function fullname(_student) {
//     return `${_student.firstname} ${_student.lastname}`;
//   }
  
//   console.log(fullname(student));



//! example 2 new way to make function inside of an object.
let student = {
    firstname: "Esther",
    lastname: "Ajayi",
    fullname: function () {
      return `${this.firstname} ${this.lastname}`
    }
  };

  console.log(student.fullname());
  //!old way.
  // function fullname(_student) {
  //   return `${_student.firstname} ${_student.lastname}`;
  // }
  
  // console.log(fullname(student));
  
  


//! example 3 new way to make function inside of an object.
 // example 3  this code...
  let person = {
    firstname: "Esther",
    lastname: "Ajayi",
    fullname: function () {
      return `${this.firstname} ${this.lastname}`
    },
    displayInfo: function() {
      console.log(`Hi, my name is ${this.firstname} ${this.lastname}`);
    }
  };
  
  person.displayInfo();