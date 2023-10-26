"use strict"

let name = "Betty Jo Smalltree";
let first = name.substring(0, 5); // "Betty" // start-end.
let last = name.substring(3); // "Smalltree" //cuts from start. 0 will display whole string then 3 will cut of first three characters.

console.log(name);
console.log(first);
console.log(last);


//finding substring.
let ssn = "111-22-3333";
let first3 = ssn.substring(0, 3); // sub 3 is dash but it is not displayed. last index of substring not slicing string, ex. 0-3 slice only positions 0,1,2 but not 3, thus we are getting frist three digits 111.
let second2 = ssn.substring(4, 6);
let last4 = ssn.substring(7, 11);
let ssnWithoutDashes = first3 + second2 + last4;
console.log(ssnWithoutDashes)

//
let myString = "How now brown cow";
console.log(myString.charAt(14)); // displays 'c'
