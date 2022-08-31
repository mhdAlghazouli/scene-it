
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  
  const moviesContainer = document.getElementById("moviesContainer");
  
  const watchlist =JSON.parse(localStorage.getItem('watchlist'));
  console.log(watchlist)
    moviesContainer.innerHTML = renderMovies(watchlist);

});

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