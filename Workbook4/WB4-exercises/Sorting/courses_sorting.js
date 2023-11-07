"use strict"

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


//sort numbers in ascending order.

courses.sort(function (a, b) {
    if (a.Title < b.Title) return -1;
    else if (a.Title == b.Title) return 0;
    else return 1;
});
console.log(courses);

for (let index = 0; index < courses.length; index++) {
    console.log(courses[index].Title);
    
}

// Results: [1, 3, 5, 27, 111, 400]



// function DisplayCourses(_courses){
//     for (let index = 0; index < _courses.length; index++) {
//         console.log(`Courses are ${_courses[index].Title}`);
        
//     }
// }

// DisplayCourses(courses);