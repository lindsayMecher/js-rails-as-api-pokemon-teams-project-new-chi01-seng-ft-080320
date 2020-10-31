
// define function
const fetchTrainers = () => {
    console.log("fetching trainers")
    fetch(TRAINERS_URL)
      .then(resp => resp.json())
      .then(trainersArray => {
        trainersData = trainersArray;
        renderTrainers();
      })
      .catch(err => console.log(err))
}