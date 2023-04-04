const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("../assets/pikapika.png")
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

              console.log("Movimientos pokemon:"+Object.keys(data.moves).length);
              
              /*Muesta maximo 4 movimientos del pokemon*/

              if(Object.keys(data.moves).length == 1){
                tipo.innerHTML = `Movimiento <br/>${data.moves[0].move.name} `;
              }
              else if(Object.keys(data.moves).length == 2){
                tipo.innerHTML = ` Movimientos <br/>${data.moves[0].move.name } 
                                                <br/>${data.moves[1].move.name}`;    
              }
              else if(Object.keys(data.moves).length == 3){
                tipo.innerHTML = ` Movimientos <br/>${data.moves[0].move.name } 
                                                <br/>${data.moves[1].move.name}
                                                <br/>${data.moves[2].move.name}`;   
              }
              else{
                tipo.innerHTML = `Movimientos     <br/>${data.moves[0].move.name}
                                                  <br/>${data.moves[1].move.name}
                                                  <br/>${data.moves[2].move.name}
                                                  <br/>${data.moves[3].move.name} `;    
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

const estadisticas = document.getElementById('estadisticas'); //Estadisticas del pokemon
const tipo = document.getElementById('tipo');