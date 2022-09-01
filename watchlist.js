
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
  
}