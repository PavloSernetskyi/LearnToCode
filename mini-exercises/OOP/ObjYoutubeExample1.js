"use strict"

//Constructor
function Book(_title, _author, _year){
    this.title = _title;
    this.author =_author;
    this.year = _year;
    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//Instantiate Object.
const book1 = new Book("Book One", "John Doe", "2016");
const book2 = new Book("Book Two", "Jane Doe", "2019");

console.log(book1.getSummary());
console.log(book2);