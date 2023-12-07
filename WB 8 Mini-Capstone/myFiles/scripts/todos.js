"use strict"

window.onload = init();

function init() {
    fetchDropdownUsers();

}

//Fetch users names data from back end JSON file using GET request in postman, and display them in HTML in dropdown menu.
function fetchDropdownUsers() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };


    fetch("http://localhost:8083/api/users ", requestOptions)
        .then(response => response.json())
        .then(result => displayUsersInDropdownMenu(result))
        .catch(error => console.log('error', error));

}

function displayUsersInDropdownMenu(result) {
    const dropdown = document.getElementById('displayUsersList');
    // console.log(result[0].name);
    result.forEach(user => {
        // console.log(user.name);
        const option = document.createElement('option');
        option.value = user.id; // id will be used to retrive user's todo tasks.
        option.text = user.name; // to display names in dropdown.
        //Append new name at the end of dropdown menu.
        dropdown.appendChild(option);
    });
}

//TODO Load tasks.. then display tasks for specific user.
function fetchAndThenDisplayTasks() {
    //storing id based on what element is choosen in dropdown.
    let selectedIdBasedOnUser = document.getElementById('displayUsersList').value;

    //    console.log(selectedIdBasedOnUser);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`http://localhost:8083/api/todos/byuser/${selectedIdBasedOnUser}`, requestOptions)
        .then(response => response.json())
        .then(result => displayTasks(result))
        .catch(error => console.log('error', error));


}

function displayTasks(result) {
    // console.log(result[0].category)
    document.getElementById('tasks').innerHTML = "";
    result.forEach(user => {
        let message = `      
        <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Priority</th>
            <th>Completed</th>
        </tr>
        <tr>
            <td>${user.category}</td>
            <td>${user.description}</td>
            <td>${user.deadline}</td>
            <td>${user.priority}</td>
            <td>${user.completed} <br> <br> </td>
        </tr>
        `
        document.getElementById('tasks').innerHTML += message;

    })
}