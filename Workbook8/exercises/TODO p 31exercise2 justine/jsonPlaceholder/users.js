'use strict'

window.onload = init;

function init(){
    const baseURL = "https://jsonplaceholder.typicode.com/users"
    fetch(baseURL)
        .then((response) => response.json()
        .then((data) => displayData(data))
        );
}

function displayData(data){
    let table = document.getElementById("displayUserInfo");

    data.forEach(user => {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        console.log(user.name);
        cell1.innerHTML = user.name;
        cell2.innerHTML = user.username;
        cell3.innerHTML = user.email;
        cell4.innerHTML = user.phone;
        cell5.innerHTML = user.company.name;
        cell6.innerHTML = user.address.zipcode;
    })
}