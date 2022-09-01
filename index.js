const moviesContainer = document.getElementById("moviesContainer");
const myForm = document.getElementById('search-form');

document.addEventListener('DOMContentLoaded', 
function() {
  // code here will execute after the document is loaded
  myForm.addEventListener('submit', function(e){
    e.preventDefault();
    //part-3
    const searchString = document.getElementById("search-bar").value;  
    const urlEncodedSearchString = encodeURIComponent(searchString);
  
    fetch("https://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString)
    .then(response => response.json())
    .then(data => {
      const movieHTML = renderMovies(data.Search);
      moviesContainer.innerHTML = movieHTML;
      movieData = data.Search
    });
    
  });
// event listener to click add button and call the saveWatchlist function
    document.addEventListener('click', function(event) {
      // code for document click listener goes here
      if(event.target.classList.contains('add-button')){
        const movieID = event.target.dataset.imdbid;
        saveToWatchlist(movieID);
      };

    });
  });
  //function to save the movie in the watch list
  function saveToWatchlist(movieID) {
    const movie = movieData.find(function(currentMovie) {
      return currentMovie.imdbID == movieID;
    });

    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    
    if(watchlist === null) {
      watchlist = [];
    };
      
      watchlist.push(movie);
      watchlistJSON = JSON.stringify(watchlist);
      localStorage.setItem('watchlist', watchlistJSON);    
};
//render function
function renderMovies(movieArray) {
  let movieHtmlArray = movieArray.map((currentMovie) => {
    return `
    <div style="background-color:white; width:18rem; margin-bottom:16px" >
    <img src="${currentMovie.Poster}" style="width:18rem; height:400px"/>
    <div class='movie card-body d-flex flex-row justify-content-between  align-items-center'>
    <h5 class='card-title'>${currentMovie.Title}
    <span style="font-size:15px" class="card-text text-light bg-dark">${currentMovie.Year}</span>
    </h5>
    </div>
    <button class="btn btn-primary btn-lg add-button  ml-3 mb-3" data-imdbid="${currentMovie.imdbID}"  style="width:90px;">Add!</button>
    </div>
    `
  });
  return movieHtmlArray.join('')
};