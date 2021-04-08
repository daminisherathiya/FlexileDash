var toggle_minimize = document.querySelectorAll(".toggle-minimize");
var left_sidebar = document.querySelector(".left-sidebar");
var logo_text = document.querySelector(".logo-text");
var navbar_header = document.querySelector(".navbar-header");


// minimize-sidebar
toggle_minimize.forEach(element => {
    element.addEventListener("click", toggle_sidebar);
});

function toggle_sidebar() {
    left_sidebar.classList.toggle("small-sidebar");
}

 // resize sidebar
window.addEventListener("resize", myFunction);
function myFunction() {
    left_sidebar.classList.remove("small-sidebar");
}