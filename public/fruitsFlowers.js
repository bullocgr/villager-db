function toggleFruits() {
    var modal = document.getElementById("hiddenFruits");
    // console.log(modal);
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
      }
}

//this is for reed i think
function addFruitsToDB() {
    var frName = document.getElementById('fruitName').value;
    var frPrice = document.getElementById('fruitPrice').value;
}

function toggleFlowers() {
    var modal = document.getElementById("hiddenFlowers");
    // console.log(modal);
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}

//for reed to add flowers to db with the button
function addFlowersToDB () {
    var flName = document.getElementById('flowerName').value;
    var flColor = document.getElementById('flowerColor').value;
    console.log(flColor);
}
