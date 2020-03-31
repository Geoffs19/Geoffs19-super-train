// const bigFive = document.querySelector("big-five-list");
// const spotted = document.getElementById("spotted-animals-list");
// const buttons = document.querySelector("big-five-button");

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelector("big-five-button");
  const bigFive = document.querySelector("big-five-list");
  const spotted = document.getElementById("spotted-animals-list");

  function moveItem(e) {
    const moveTo =
      this.parentElement.parentElement == big - five - list
        ? spotted - animals - list
        : big - five - list;
    moveTo.appendChild(this.parentElement);
  }

  for (const i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", moveItem);
  }
});
