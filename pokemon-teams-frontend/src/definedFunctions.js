const fetchTrainers = () => {
    fetch(TRAINERS_URL)
      .then(resp => resp.json())
      .then(trainersArray => {
        trainersData = trainersArray;
        renderTrainers();
      })
      .catch(err => console.log(err))
}

const handleAddPoke = (node) => {
    const trainerId = parseInt(node.dataset.trainerId);
    const reqObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({trainerId: trainerId})
    }
    fetch(POKEMONS_URL, reqObj)
        .then(resp => resp.json())
        .then(data => {
            if (Object.keys(data).includes("id" && "nickname" && "species" && "trainer")) {
                let list = document.getElementById(data.trainer.id).children[2]
                renderOnePokemon(data, list)
            } else if (Object.keys(data).includes("message")) {
                alert(data.message)
            }
        })
        .catch(err => console.log(err))
}

const handleDeletePoke = (node) => {
    let clicked = node
    let pokemonId = node.dataset.pokemonId;
    fetch(POKEMONS_URL + `/${pokemonId}`, {method: "DELETE"})
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            clicked.parentElement.remove()
        })
        .catch(err => console.log(err))
}

const renderOnePokemon = (poke, list) => {
    list.innerHTML += `<li>${poke.nickname} (${poke.species}) <button class="release" data-pokemon-id=${poke.id}>Release</button></li>`
}

const renderPokemons = (pokemons, newNode) => {
    const list = document.createElement("UL");
    newNode.appendChild(list);
    pokemons.forEach(poke => {
        renderOnePokemon(poke, list);
    })
}

const renderTrainers = () => {
    trainerCollectionDiv.innerHTML = ``;
    trainersData.forEach(trainer => {
        trainerCollectionDiv.innerHTML += `<div class="card" id=${trainer.id} data-id=${trainer.id}><p>${trainer.name}</p>
        <button class="add-pokemon-btn" data-trainer-id=${trainer.id}>Add Pokemon</button>
        </div>`
        let newNode = document.getElementById(trainer.id);
        renderPokemons(trainer.pokemons, newNode);
    })
}