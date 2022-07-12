'use strict';

const apiURL = 'http://localhost:3000/movies';


function movies() {
    let movieinfo = "";

fetch(apiURL)
.then( (res) => res.json())
.then(loadMovies);
}

function loadMovies(movies) {
    let body = "";
    let cellCounter = 1

    for (let i = 0; i < movies.length; i++) {
        if (cellCounter === 1) {
            body = body + "<tr>"
        }
        body = body + getCard(movies[i])

        cellCounter++;
        
    }

  
    let tableBody = document.getElementById("movie-card");
    tableBody.innerHTML = body;     
}

function getCard(movies) {
    let movieCard = '<td class="table-data">'
        + '<a href="movieDetails.html?id=' + movies.id+'"><img src="' + movies.poster + '" alt="HTML" style="width:100px;height:100px;"></a>'
        + '<br>'
        + '<a href="movieDetails.html?id=' + movies.id+'">'+ movies.title +'</a></td>';

    return movieCard;
}

movies();

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
    let movieHTML = '<td class ="movie-info">'
    + '<img src="' + movie.poster + '" alt="HTML" style="width:100px;height:100px;" class="movie-img">'
    + '<br>'
    + 'Title: ' + movie.title 
    + '<br>'
    + 'Genre: ' + movie.genre
    + '<br>'
    + 'Director: ' + movie.director
    + '<br>'
    + 'Plot: ' + movie.plot
    + '<br>'
    + 'Ratings:' + movie.ratings[1]
    + '</td>';



  
    let tableBody = document.getElementById("movie-details");
    tableBody.innerHTML = movieHTML;    
}


    
loadMovieDetails();

let result = document.getElementById("result");
let range = document.getElementById("range");
function change(){
    result.innerHTML = range.value;
}