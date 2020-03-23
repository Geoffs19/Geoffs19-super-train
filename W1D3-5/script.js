//while loop
var colors = ["yellow", "blue", "red", "orange"];

while (colors) {
  console.log(colors);
  break;
}

//for loop
let colors = ["yellow", "blue", "red", "orange"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

//array method
const colors = ["yellow", "blue", "red", "orange"];

colors.forEach(element => console.log(element));
