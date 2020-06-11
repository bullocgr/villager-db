function updateIslandVillager(){

	   var modal = document.getElementByClassName("hiddenVill");
    // console.log(modal);
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
      }
}