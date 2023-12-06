"use strict"

// Using localStorage
localStorage.setItem('key', 'value');
const storedValue = localStorage.getItem('key');
console.log(storedValue); // Outputs: value

// Using sessionStorage
sessionStorage.setItem('key', 'value');
const storedValueSession = sessionStorage.getItem('key');
console.log(storedValueSession); // Outputs: value
