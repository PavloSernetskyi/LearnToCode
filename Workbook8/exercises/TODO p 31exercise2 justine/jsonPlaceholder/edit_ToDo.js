'use strict'

window.onload = init;
function init(){
    const form = document.getElementById("userIdForm");
    form.addEventListener("submit", editUserInfo);

    const editForm = document.getElementById("editInfoForm");
    editForm.addEventListener("submit", reviseUserInfo)
}

function editUserInfo(event){
    event.preventDefault();
    const baseURL = "https://jsonplaceholder.typicode.com/todos/";
    const userId = document.getElementById("userId").value;

    // Fetching info from the API and plugging it into input text fields in order for it to be revised
    fetch(baseURL + userId)
        .then((response) => response.json())
        .then((data) => {
            let idField = document.getElementById("idField");
            idField.value = data.id;
            let titleField = document.getElementById("titleField");
            titleField.value = data.title;
            let completedField = document.getElementById("completedField");
            completedField.value = data.completed
        });
}

// Function to revise an api object
function reviseUserInfo(event){
    event.preventDefault();
    let userData = {
        id: odcument.getElementById("idField").value,
        title: document.getElementById("titleField").value,
        completed: document.getElementById("completedField").value,
    }

    const baseURL = "https://jsonplaceholder.typicode.com/todos/";
    const userId = document.getElementById("userId").value;

    
    fetch(baseURL + userId, {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
        .then((response) => response.json())
        .then((data) => {
            let message = `Student updated`;
            document.getElementById("confirmationMessage").innerHTML = message;
        })
        .catch((err) => {
            let confirmationMessage = document.getElementById("confirmationMessage");
            confirmationMessage.innerHTML = `Unexpected error`;
        })
}