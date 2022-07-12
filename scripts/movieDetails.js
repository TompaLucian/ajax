function loadMovieDetails() {
    var urlParams = new URLSearchParams(window.location.search);
    let movieId = urlParams.get('id');
    if (movieId === null || movieId === undefined) {
        movieId = 96;
    }
    const apiURL = 'http://localhost:3000/movies/' + movieId;


    fetch(apiURL)
    .then( (res) => res.json())
    .then(loadMovie);
}

function loadMovie(movie) {
    let movieHTML = '<td>'
    + '<img src="' + movie.poster + '" alt="HTML" style="width:100px;height:100px;"></a>'
    + '<br>'
    + movie.title + '</td>';



  
    let tableBody = document.getElementById("movie-details");
    tableBody.innerHTML = movieHTML;     
}


    
loadMovieDetails();



