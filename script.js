// let user_name = document.querySelector("#user-name");
// let userNameValue = prompt("Whats Your Name?");
// user_name.innerHTML = userNameValue;



// TYPING ANIMATION SCRIPT
$(document).ready(function () {
    var typed = new Typed(".type-script", {
        strings: ["Devloper", "Programmer"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true
    });
});


// LOADING PAGE SCRIPT 
const loading = document.querySelector(".loading");

window.onload = function () {
  setTimeout(function () {
    loading.style.opacity = "0";
    setTimeout(function () {
      loading.style.display = "none";
    }, 500);
  }, 1500);
}
