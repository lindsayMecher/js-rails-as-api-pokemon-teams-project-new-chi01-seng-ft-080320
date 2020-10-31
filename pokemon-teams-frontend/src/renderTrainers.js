const renderTrainers = () => {
    console.log("rendering trainers");
    trainerCollectionDiv.innerHTML = ``;
    trainersData.forEach(trainer => {
        trainerCollectionDiv.innerHTML += `<div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
        <button data-trainer-id=${trainer.id}>Add Pokemon</button>
        </div>`
        renderPokemons(trainer.pokemons);
    })
}

const renderPokemons = (pokemons, createdNode) => {
    console.log(pokemons);
    debugger
    `<ul>
        <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
        <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
        <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
        <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
        <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
        </ul>`
}