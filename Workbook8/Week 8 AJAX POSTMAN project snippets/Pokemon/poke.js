"use strict"

// https://pokeapi.co/api/v2/pokemon-shape/{id or name}/

//
// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
fetch('https://pokeapi.co/api/v2/pokemon-species/')
      .then(response => response.json())
      .then(data => displayData(data))

    
//      console.log(pokemons[0].name);


      function displayData(data){
        let pokemons = data.results;
//        console.log(pokemons)
       
        pokemons.forEach(pokemon => {
            console.log("Pokemon names: " + pokemon.name);    
            let message = `Pokemons are: ${pokemon.name}`;

        document.getElementById("pokemons-list").innerHTML = message;       
        });

        
      }

//      displayData(data);