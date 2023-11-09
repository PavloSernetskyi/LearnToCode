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

// Using find or filter methods.

// When does the PROG200 course start?
let grabNeededCourse = courses.find(course => course.CourseId === "PROG200");
if (grabNeededCourse) {
    console.log('The course starts on ' + grabNeededCourse.StartDate);
}
else {
    console.log("Course not found");
}

// What is the title of the PROJ500 course?
let grabNeededCourse2 = courses.find(course => course.CourseId === "PROJ500");
if (grabNeededCourse2) {
    console.log('The title of PROJ500 is ' + grabNeededCourse2.Title);
}
else {
    console.log("Title not found");
}



// What are the titles of the courses that cost $50 or less?
let filteredCoursesByPrice = courses.filter(filt => Number(filt.Fee) <= 50);
for (let index = 0; index < filteredCoursesByPrice.length; index++) {
    console.log(`Courses that cost $50 or less are: ${filteredCoursesByPrice[index].Title}`);
}

console.log();
// What classes meet in "Classroom 1"?
let filteredCoursesByClass = courses.filter(filtered => filtered.Location === "Classroom 1");
for (let index = 0; index < filteredCoursesByClass.length; index++) {
    console.log(`Classes that meet in "Classroom 1: ${filteredCoursesByClass[index].Title}`);
}
