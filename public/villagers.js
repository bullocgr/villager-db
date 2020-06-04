function toggleVillager() {
    var modal = document.getElementById("hidden");
    // console.log(modal);
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
      }
}


//i got u reed
function addVillagerToDB() {
    var vImage = document.getElementById('villagerImage').value;
    var vName = document.getElementById('villagerName').value;
    var vPersonality = document.getElementById('villagerPersonality').value;
    var vSpecies = document.getElementById('villagerSpecies').value;
}