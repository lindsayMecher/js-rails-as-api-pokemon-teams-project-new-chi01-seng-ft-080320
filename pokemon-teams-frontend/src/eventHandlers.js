document.addEventListener("click", (e) => {
    if (e.target.className === "add-pokemon-btn") {
        handleAddPoke(e.target);
    } else if (e.target.className === "release") {
        handleDeletePoke(e.target);
    }
})