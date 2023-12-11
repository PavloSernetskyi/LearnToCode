"use strict"

class Book {

    constructor(id, title, genre, author) {

        this.bookid = id;
        this.title = title;
        this.genre = genre;
        this.author = author;
    }
// displayIntroMethod
    displayBookInfo(){
        console.log(
            "Author: " + this.author + " - " + this.title
        );
    }

    getBookInfo(){
        let info =`
            Author: ${this.author} " - " ${this.title}
        `
    }

}

let book1 = new Book(1, 'Getting Things Done', 'productivity', 'David Allen');
let book2 = new Book(2, "Kafka On The Shore", "Fantasy", "Haruki Murakami");
let book3 = new Book(3, "Dracula", "novel", "Bram Stoker");
let book4 = new Book(4, "Atomic Habits", "Self Help", 'James Clear');
let book5 = new Book(5, 'Green Eggs and Ham', 'fiction', 'Dr. Suess');
let book6 = new Book(6, 'Alchemist', 'Novel', 'Paulo Coelho');
let book7 = new Book(7, 'Kindred', 'fiction', 'Octavia E. Butler');
let book8 = new Book(8, "1984", "Fiction", "George Orwell");
let book9 = new Book(9, 'The Essential Calvin and Hobbes', 'comics', 'Bill Watterson');
let book10 = new Book(10, 'My Year of Rest and Relaxation', 'Dark Humor', 'Odessa Moshfegh');


book10.displayBookInfo();


// let myBookInfo = document.getElementById('output').innerHTML = 