const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage(`assets/pikapika.png`);
            typeScreen.innerHTML = ``;
            aboutScreen.innerHTML = ``;
            pokemonName.innerHTML = ``;
            estadisticas.innerHTML = ``;
            tipo.innerHTML = ``;
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            console.log(pokeImg);

            typeScreen.innerHTML =  `${data.types[0].type.name}`;

            aboutScreen.innerHTML = `Altura: ${data.height * 10}cm <br/>
                                     Peso: ${data.weight / 10 }kg `;

              estadisticas.innerHTML=`Vida: ${data.stats[0].base_stat} <br/> 
                                      Ataque: ${data.stats[1].base_stat}  <br/>
                                      Defensa: ${data.stats[2].base_stat}  <br/>
                                      Ataque Especial: ${data.stats[3].base_stat} <br/> 
                                      Defensa Especial: ${data.stats[4].base_stat} <br/>
                                      Velocidad: ${data.stats[5].base_stat}`;
              console.log (`Nombre pokemon ${data.species.name}`);
              console.log("Movimientos pokemon:"+Object.keys(data.moves).length);
              pokemonName.innerHTML =`${data.species.name}`;
              /*Elimina informacion anterior*/ 
              tipo.innerHTML = ``;
              /*Muesta todos los movimientos del pokemon*/
              for(let i=0;i<Object.keys(data.moves).length;i++)
              {
                tipo.innerHTML += `${data.moves[i].move.name}<br/>`;
              }

              
           
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const typeScreen = document.getElementById('type-screen'); // type screen
const aboutScreen = document.getElementById('about-screen'); // about-text 
const pokemonName = document.getElementById('name-pokemon');
const estadisticas = document.getElementById('estadisticas'); //Estadisticas del pokemon
const tipo = document.getElementById('tipo');