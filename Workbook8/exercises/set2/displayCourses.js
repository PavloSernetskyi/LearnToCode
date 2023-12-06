"use strict"

window.onload = (event) => {
    //run some functions... call them here..
    fetchDataIntoTableToShowAllCourses();
    addNewDataToTheTable()

//    alert("refreshing page");

};

//TODO Adding new data section. POST request
function addNewDataToTheTable() {
    // JavaScript to handle form submission
    document.getElementById('courseForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const data = {
            id: document.getElementById('id').value,
            dept: document.getElementById('dept').value,
            courseNum: document.getElementById('courseNum').value,
            courseName: document.getElementById('courseName').value,
            instructor: document.getElementById('instructor').value,
            startDate: document.getElementById('startDate').value,
            numDays: document.getElementById('numDays').value
        };

        fetch('http://localhost:8081/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                // alert('Success:', data);
                alert('Success:', displayData(data));
            })
            .catch((error) => {
                alert('Error:', error);
            });
    });
}

function displayData(data) {
    alert("The following data was submitted: " + data.dept);
    // document.getElementById('output').innerHTML = data.courseName;
}

//TODO Dispalying all courses section. fetching then dispalying. GET request
function fetchDataIntoTableToShowAllCourses() {
    //This function fethes data using GET request and then call another fucntin to display all data.
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("http://localhost:8081/api/courses", requestOptions)
        .then(response => response.json())
        .then(result => showAllCourses(result))
        .catch(error => console.log('error', error));
}

function showAllCourses(result) {
    //  console.log(result);

    result.forEach(course => {
        // console.log(course);
        let message = ` 
            <thead>
              <tr>
                <th scope="col">ID: ${course.id}</th>
                <th scope="col">Department: ${course.dept}</th>
                <th scope="col">Course Number: ${course.courseNum}</th>
                <th scope="col">Course Name: ${course.courseName}</th>
                <th scope="col">Instructor: ${course.instructor}</th>
                <th scope="col">Start Date: ${course.startDate}</th>
                <th scope="col">Number of Days: ${course.numDays}</th>
              </tr>
            </thead>
            `
        document.getElementById('tableOutput').innerHTML += message;
    });
}

//TODO Delete coures by ID section. DELETE request.
function deleteCourseByID() {
    var requestOptions = {
        method: 'DELETE',
        redirect: 'follow'
    };

    let courseID = document.getElementById("userInputForDELETE").value;

    // for (let index = 19; index < 38; index++) {
    //     courseID = index;
    fetch(`http://localhost:8081/api/courses/${courseID}`, requestOptions)
        .then(response => response.text())
        .then(result => alert("You just deleted course with ID: " + courseID))
        .catch(error => console.log('error', error));

}