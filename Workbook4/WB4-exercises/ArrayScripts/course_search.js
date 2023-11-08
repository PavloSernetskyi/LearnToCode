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


// When does the PROG200 course start?
for (let index = 0; index < courses.length; index++) {
    if (courses[index].CourseId == "PROJ500") {
        console.log(`${courses[index].StartDate}`);
    }
}


// What is the title of the PROJ500 course?
for (let index = 0; index < courses.length; index++) {
    if(courses[index].CourseId == "PROJ500"){
        console.log(`${courses[index].Title}`);
    }
}



// interate through courses array.
for (let i = 0; i < courses.length; i++) {
    // get courses in new variable.
    const course = courses[i];
    // check which courses cost 50 or less. we convert string to int using parseFloat().
    if (parseFloat(course.Fee) <= 50) {
        //display courses that cost 50 or less.
        console.log(`Title: ${course.Title}, Fee: $${course.Fee}`);
    }
}

// What classes meet in "Classroom 1"?
// interate through courses array to see what classes meet in classrom 1.
for (let i = 0; i < courses.length; i++) {
    // get courses in new variable.
    const course = courses[i];
    if (course.Location === "Classroom 1") {
        //display courses that meet in Classrom 1.
        console.log(`Location Classrom 1: ${course.Title}`);
    }
}

