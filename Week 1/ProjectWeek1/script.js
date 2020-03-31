//Hamburger Menu

// acces the entire list
let mainNav = document.getElementById("navMain");
//acces just the hamburger icon
let navToggle = document.getElementById("toggleBurger");

navToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active"); //<-- the class 'active' is only in css and is activated (toggled) when the icon is pressed
});

// for the onclick (to chang colors)
function changeBackground(color) {
  document.body.style.background = color;
}
