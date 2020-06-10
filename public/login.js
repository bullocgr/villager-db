function userLogin() {
    var userID = document.getElementById('userID').value;
    var userPassword = document.getElementById('password').value;
}

function toggleAccountCreation() {
    var modal = document.getElementById("hidden");
    // console.log(modal);
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
      }
}
//the text box does not clear on page refresh