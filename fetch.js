const $container = document.getElementById("container");

const URL_API = "https://rickandmortyapi.com/api/character";


fetch(URL_API)
.then(response => response.json())
.then((data) => {
  const characters = data.results;

    for (let character of characters){
        console.log(character)
        $container.innerHTML += `
          <div class="tarjeta">
            <h3 class="name">${character.name}</h3>
            <img class="character-img" src="${character.image}" alt="Imagen de ${character.name}">
            <ul>
              <li class="info-ch">Status: ${character.status}</li>
              <li class="info-ch">Specie: ${character.species}</li>
              <li class="info-ch">Type: ${character.type}</li>
              <li class="info-ch">Gender: ${character.gender}</li>
              <li class="info-ch">Origin: ${character.origin.name}</li>
              <li class="info-ch">Location: ${character.location.name}</li>
            </ul>
          </div>
          
        `
    }
  });