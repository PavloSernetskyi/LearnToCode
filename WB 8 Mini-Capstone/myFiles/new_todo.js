"usr strict"


//A dropdown holding category names (with ids in the value) -- similar to what I did in todos.html

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:8083/api/categories", requestOptions)
    .then(response => response.json())
    .then(result => displayCategoriesInDropdownMenu(result))
    .catch(error => console.log('error', error));

    function displayCategoriesInDropdownMenu(result){
        const dropdown = document.getElementById('displayCategories');
        result.forEach(category => {
        // console.log(category.name);
            const option = document.createElement('option');
            option.value = category.id;
            option.text = category.name; // to display categories in dropdown.
            //Append new category at the end of dropdown menu.
            dropdown.appendChild(option);
        });
    }
    