// const moveToDom = movies.map(person => {
//   return person.Title;
// });

//----------

// const movieList= document.querySelector ("#filtered")

// const moveToDom = movies.map(person => {
//   return person.Title;
// });

// const app = document.querySelector ("#filtered")

//----------

app.innerHTML =
  "<ul>" +
  movies
    .map(function(movie) {
      return "<li>" + movie + "</li>";
    })
    .join("") +
  "</ul";