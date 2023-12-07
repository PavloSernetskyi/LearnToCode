"usr strict"

window.onload = init();

function init(){
    fetchCategories();
}
//A dropdown holding category names (with ids in the value) -- similar to what I did in todos.html

function fetchCategories(){
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch("http://localhost:8083/api/categories", requestOptions)
        .then(response => response.json())
        .then(result => displayCategoriesInDropdownMenu(result))
        .catch(error => console.log('error', error));
}



function displayCategoriesInDropdownMenu(result) {
    const dropdown = document.getElementById('displayCategories');
    result.forEach(category => {
        // console.log(category.name);
        const option = document.createElement('option');
        option.value = category.name;
        option.text = category.name; // to display categories in dropdown.
        //Append new category at the end of dropdown menu.
        dropdown.appendChild(option);
    });
}


// //TODO add new to do tasks using POST request.
function addNewTask() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");


    var raw = JSON.stringify({
        "userid": document.getElementById('displayUsersList').value,
        "category": document.getElementById('displayCategories').value,
        "description": document.getElementById('textArea').value,
        "deadline": document.getElementById('deadline').value,
        "priority": document.getElementById('priority').value
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8083/api/todos", requestOptions)
        .then(response => response.json())
        .then(result => alert("New task has been created."))
        .catch(error => console.log('error', error));
}


