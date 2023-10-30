"use strict";
window.onload = function () {
    const btn = document.getElementById("helloBtn");
    btn.onclick = sayHello;
};
function sayHello() {
    alert("Hello!");
}
