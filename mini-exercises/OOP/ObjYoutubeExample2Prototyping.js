"use strict"

//Constructor
function Book(_title, _author, _year){
    this.title = _title;
    this.author =_author;
    this.year = _year;
}

//Prototype func.
Book.prototype.getSummary = function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
}

//Prototype getAge.
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
}

//Revise change Year. manipulate data 2020 to 2022 in function call argument.. or add new data s.t revised = true.
Book.prototype.revise = function(_newYear){
    this.year = _newYear;
    this.revised= true;
};

//Instantiate Object.
const book1 = new Book("Book One", "John Doe", "2016");
const book2 = new Book("Book Two", "Jane Doe", "2019");
const book3 = new Book("Book Three", "John Cen", "2020");

console.log(book1.getSummary());
console.log(book2);
console.log(book2.getAge());


console.log(book3);
console.log(book3.revise("2022"));
console.log(book3);