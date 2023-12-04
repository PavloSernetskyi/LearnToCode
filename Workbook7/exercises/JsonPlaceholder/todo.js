// "use strict"

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };


//   function myFunction() {
//     let userInput = document.getElementById('input').value;
//     // console.log(userInput);
//     // document.getElementById("demo").innerHTML = userInput;
//     console.log(userInput); //TODO here...
//     // return userInput;
//   }

//   let ID = myFunction();

// //    console.log(ID);


//     let linkURL = `https://jsonplaceholder.typicode.com/todos/${ID}`;

//     function displayTODO(){
//         fetch(linkURL, requestOptions)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));


//     }

//     displayTODO();


"use strict"



function displayTODO() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    //storing input from user.
    let userInput = document.getElementById('userInp').value;

    let dynamicURL = `https://jsonplaceholder.typicode.com/todos/${userInput}`;

    fetch(dynamicURL, requestOptions)
        .then(response => response.json())
        .then(result => {
            document.getElementById("message").innerHTML = JSON.stringify(result);
        })
        .catch(error => console.log('error', error));
}

