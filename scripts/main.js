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


