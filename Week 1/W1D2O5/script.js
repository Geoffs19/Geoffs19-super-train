const age = 17;

if (age >= 18) {
  console.log("18+, Welkom!");
} else {
  console.log("Niet 18+, u wordt vriendelijk verzoekt de website te verlaten");
}

const isFemale = true;

if (isFemale) {
  console.log("U kunt kaartjes kopen voor de ladies night");
} else {
  console.log(
    "Helaas is dit een ladies night en kunnen mannen geen kaartje kopen"
  );
}

const isBob = true;

if (isBob) {
  console.log("U mag rijden!!");
} else {
  console.log("Helaas heeft u teveel gedronken om te rijden");
}

const myAge = 21;
if (myAge >= 18 && myAge <= 25) {
  console.log("U krijgt 50% korting");
} else {
  console.log("Helaas! Geen korting.");
}

const name = "geoff";
if (name === "sarah" || name === "bram") {
  console.log("U heet Sarah of Bram en krijgt daarom 50% korting!");
} else {
  console.log("Helaas heet u geen Bram of Sarah en krijgt u dus geen korting");
}

const totalAmount = 101;
if (totalAmount >= 100) {
  console.log("U krijgt een gratis fles champagne");
} else if (totalAmount >= 50) {
  console.log("U krijgt een gratis portie nachos");
} else if (totalAmount >= 25) {
  console.log("U krijgt een gratis portie bitterballen");
} else {
  console.log("U krijgt NIKS! geef meer geld uit!");
}
