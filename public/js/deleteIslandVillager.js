function deleteIslandVillager(vid){
            $.ajax({
        url: '/island/dlV/' + vid,
        type: 'DELETE',
        success: function(result){
            window.location.reload(true);
        }
    })
}

function toggleVillager(name){
	// var modal = document.getElementById(name).querySelector("hiddenVills");
  //  console.log(modal);	
    if (name.style.display === "none") {
        name.style.display = "block";
    } else {
        name.style.display = "none";
      }
}