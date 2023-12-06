"use strict";

window.onload = init();

function init() {
  //  document.getElementById('submit').addEventListener('click',getData)
}

function getDataFromUserForm() {
  let fullName = document.getElementById("fullName").value;
  let role;
  let roleRadios = document.getElementsByName("role");

  for (let i = 0; i < roleRadios.length; i++) {
    if (roleRadios[i].checked) {
      role = roleRadios[i].value;
      break;
    }
  }

  let formData = {
    fullName: fullName,
    role: role,
  };

  saveDataIntoLocalStorage(formData);
}

function saveDataIntoLocalStorage(formData) {
  localStorage.setItem("name", formData.fullName);
  localStorage.setItem("role", formData.role);
  localStorage.href = location.html;
}
