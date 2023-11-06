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
//22.00.
 