/*Recipe for a cheese sandwich
1. Take 2 slices of bread
2. Take your cheese and put it on one of the pieces of bread
3. Put the other piece on top
4. Enjoy the sandwich! */

const cheeseSandwich = function() {
  console.log("1. Take 2 slices of bread");
  console.log("2. Take your cheese and put it on one of the pieces of bread");
  console.log("3. Put the other piece on top");
  console.log("4. Enjoy the sandwich!");
};

cheeseSandwich();

const makeSandwich = function(topping) {
  console.log("1. Take 2 slices of bread");
  console.log("2. Take your cheese and put it on one of the pieces of bread");
  console.log("3. Put the other piece on top and add the" + " " + topping);
  console.log("4. There you go a sandwich with cheese and" + " " + topping);
};

makeSandwich("lettuce");
makeSandwich("tomato");
/* Als ik het goed begrepen heb declareer je de functie bij
function(topping)
en call je op de functie als je hem bij makeSandwich("lettuce"); invoert */

//DEEL C

function calculateDiscountedPrice(totalAmount, discount) {
  console.log(Math.round(totalAmount - discount));
}

calculateDiscountedPrice(100, 24.8);

//DEEL D

function discountPrice(totalAmount, discount) {
  if (totalAmount > 25) {
    console.log(Math.round(totalAmount - discount));
  } else {
    console.log(totalAmount);
  }
}

discountPrice(20, 24.8);
