const moviesContainer = document.getElementById("moviesContainer");
const myForm = document.getElementById('search-form');

document.addEventListener('DOMContentLoaded', 
function() {
  // code here will execute after the document is loaded
  
  myForm.addEventListener('submit', function(e){
    e.preventDefault();
    moviesContainer.innerHTML = renderMovies(movieData);
    // event listener code goes here
    });
  
});

function renderMovies(movieArray) {
  let movieHtmlArray = movieArray.map((currentMovie) => {
    return `<div>
    <h2>${currentMovie.Title}</h2></div>`
  });
  
  return movieHtmlArray.join('')
  
}