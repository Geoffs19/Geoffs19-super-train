//A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" }
];

const findSpider = function(superFilter) {
  return superFilter.find(function(superhero) {
    return superhero.name === "Spiderman";
  });
};

console.log(findSpider(superheroes));

//B
const arrayValues = [1, 2, 3];
arrayValues.forEach(function(number, i) {
  arrayValues[i] *= 2;
});

console.log(arrayValues);

//C (Ik weet niet wat maar er is iets fout gegaan kon het ook niet in de antwoorden vinden)
// const containsNumberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];

// const filteredNumbers = function(array) {
//   return array.some(number => {
//     return number > 10;
//   });
// };

// console.log((filteredNumbers = [1, 4, 3, 6, 9, 7, 11]));

//D
const countries = [
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States"
];

const n = countries.includes("Italy");

console.log(n);

//E
const numbers = [1, 4, 3, 6, 9, 7, 11];
numbers.forEach(function(number, i) {
  numbers[i] *= 10;
});

console.log(numbers);

//F
const numberList = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

function under100(array) {
  return array.every(number => {
    return number < 100;
  });
}

console.log(
  under100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
