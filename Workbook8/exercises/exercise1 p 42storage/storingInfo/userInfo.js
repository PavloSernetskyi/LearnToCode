'use strict'

    let userInformation = [];

    
    

function storeUserInfo(){
    let enteredName = document.getElementById('userName').value
    let iAm = document.querySelector('input[name="iAm"]:checked').value

    sessionStorage.setItem('enteredName',enteredName);
    sessionStorage.setItem('iAm',iAm);

    location.href = "information.html";     
    // let lastProductViewed;

    // lastProductViewed = localStorage.getItem('MyProducts'); // grab from application memory
    // document.getElementById('myShoppingCart').innerHTML = lastProductViewed;
}