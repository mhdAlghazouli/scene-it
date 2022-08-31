// <<<<<<< Updated upstream
// =======
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

    document.addEventListener('click', function(event) {
      // code for document click listener goes here
      if(event.target.classList.contains('add-button')){
        const movieID = event.target.dataset.imdbid;
        
        saveToWatchlist(movieID);
      }
      
    });
    
  });
  
  function saveToWatchlist(movieID) {

    const movie = movieData.find(function(currentMovie) {
      return currentMovie.imdbID == movieID;
    });

    let watchlistJSON = localStorage.getItem('watchlist');
    console.log(watchlistJSON)
    let watchlist = JSON.parse(watchlistJSON);
    console.log(watchlist)

    if(watchlist === null) {
      watchlist = [];
    }
      console.log(watchlist)
      watchlist.push(movie);
      watchlistJSON = JSON.stringify(watchlist);
      localStorage.setItem('watchlist', watchlistJSON);
      
}

function renderMovies(movieArray) {
  let movieHtmlArray = movieArray.map((currentMovie) => {
    return `
    <img src="${currentMovie.Poster}" class="card-img-bottom"/>
    <div class='card-body'>
    <h5 class='card-title'>${currentMovie.Title}</h5>
    <p style="background-color:gray;">${currentMovie.Year}</p></div>
    <button class="btn btn-primary add-button" data-imdbid="${currentMovie.imdbID}">Add!</button>`
  });
  
  return movieHtmlArray.join('')
  
}
// >>>>>>> Stashed changes
