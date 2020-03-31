//A
const arrayWithWords = ["nice", "awesome", "tof"];

const addTheWordCool = function(array) {
  array.push("cool");
  return array;
};

console.log(addTheWordCool(["nice", "awesome", "tof"]));

//B
const fruitArray = ["appel", "peren", "citroenen"];

const lengthFruit = function(array) {
  return array.length;
};

console.log(lengthFruit(["appel", "peren", "citroenen"]));

//C
const beneLux = ["Belgie", "Nederland", "luxemburg"];

const selectBe = function(array) {
  return array[0];
};

console.log(selectBe(["Belgie", "Nederland", "luxemburg"]));

//D
const lastElement = ["Haas", "Cavia", "Kip", "Schildpad"];

const selectLast = function(array) {
  return array[3];
};

console.log(selectLast(["Haas", "Cavia", "Kip", "Schildpad"]));

//E
const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const removeTrumpSlice = function(array) {
  const sliceTrump = array.slice(1, 4);
  return sliceTrump;
};

console.log(removeTrumpSlice(["Trump", "Obama", "Bush", "Clinton"]));

const removeTrumpSplice = function(array) {
  const spliceTrump = array.splice(1, 4);
  return spliceTrump;
};

console.log(removeTrumpSplice(["Trump", "Obama", "Bush", "Clinton"]));

//F
const wincMsg = ["Winc", "Academy", "is", "leuk", ";-}"];

console.log(wincMsg.join(" "));

//G
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

let combiArray = arr1.concat(arr2);

console.log(combiArray);
