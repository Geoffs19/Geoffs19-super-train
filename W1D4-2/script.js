//Alert button (zelf gedaan)
/* 
const button = document.getElementById("mybutton");

button.addEventListener("click", function() {
  alert("button clicked");
});
*/

//Background color button (Gedaan toen ik antwoorden doornam)
const changeClassBlueBackground = function() {
  const bodyElement = document.body;
  bodyElement.classList.add("red-background");
};

const attachEventToColorButton = function() {
  const changeColor = document.getElementById("color-button");

  changeColor.addEventListener("click", function() {
    changeClassBlueBackground();
  });
};

//Alert Button Antwoord (Gedaan toen ik antwoorden doornam)
const attachEventToMyButton = function() {
  const myButton = document.getElementById("my-button");
  myButton.addEventListener("click", function() {
    alert("Hallo!");
  });
};

attachEventToMyButton();
attachEventToColorButton();
