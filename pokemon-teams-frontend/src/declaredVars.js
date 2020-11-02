const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/api/v1/trainers`
const POKEMONS_URL = `${BASE_URL}/api/v1/pokemons`
const trainerCollectionDiv = document.getElementById('trainer-collection')

let trainersData;

const suggestedHTML = `<div class="card" data-id="1"><p>Prince</p>
<button data-trainer-id="1">Add Pokemon</button>
<ul>
  <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
  <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
  <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
  <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
  <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
</ul>
</div>`