const superheroes = [
  {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: 210
  },
  {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: 220
  },
  {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: 195
  },
  {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: 186
  },
  {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: 195
  },
  {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: 165
  },
  {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: 145
  },
  {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: 167
  },
  {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: 220
  },
  {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: 250
  },
  {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: 200
  },
  {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: 1400
  },
  {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: 200
  },
  {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: 200
  },
  {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: 0
  }
];

//1
// const heroNames = superheroes.map(person => {
//   return person.name;
// });
// console.log(heroNames);

//2
// const lightHero = superheroes.map(person => {
//   if (person.weight < 190) {
//     console.log(person.name);
//   }
// });

//3
// const lbsHero = superheroes.map(person => {
//   if ((person.weight = 200)) {
//     console.log(person.name);
//   }
// });

//4
// const firstSeen = superheroes.map(person => {
//   return person.first_appearance;
// });

// console.log(firstSeen);

//5
// const dcComics = superheroes.filter(person => {
//   return (person.publisher = "DC Comics");
// });

// const marvel = superheroes.filter(person => {
//   return (person.publisher = "Marvel");
// });

// console.log(dcComics);
// console.log(marvel);

//6
// Werkt niet helemaal er staat "cannot read property 'weight'
// of null" maar als ik ipv null een getal invoer en ik run de
// code staat er "NaN"

// const dc = superheroes
//   .map(person => {
//     if ((person.publisher = "DC Comics")) {
//       return person.weight;
//     }
//   })
//   .reduce((currentTotal, person) => {
//     return person.weight + currentTotal;
//   }, 0);

// console.log(dc);

//7
//zelfde probleem als 6

// const marvel = superheroes
//   .map(person => {
//     if ((person.publisher = "Marvel Comics")) {
//       return person.weight;
//     }
//   })
//   .reduce((currentTotal, person) => {
//     return person.weight + currentTotal;
//   }, 0);

// console.log(marvel);
