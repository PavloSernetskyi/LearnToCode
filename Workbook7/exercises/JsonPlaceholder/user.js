"use strict"

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
function displayUsersTable(){
    fetch("https://jsonplaceholder.typicode.com/users", requestOptions)
    .then(response => response.json())
    .then(result => {
        let message ="";
        for (let index = 0; index < 6; index++) {
            let name = result[index].name;
            let email = result[index].email;
            console.log(name);
        message += 
        // `
        //     Name: ${name}<br>
        //     Email: ${email} <br>
        //     `
            `
            <table style="width:100%">
  <tr>
    <th>Name</th>
    <th>Email</th>
  </tr>
  <tr>
    <td>${name}</td>
    <td>${email}</td>
  </tr>
  
</table>
            `
        }
        document.getElementById('output').innerHTML = message;

       
    })
    .catch(error => console.log('error', error));

}
displayUsersTable();
  