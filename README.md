# Homework - AJAX

## Setup and Start

Clone this repo and run `npm install`.

Start the development API server with `npm start`. The server starts on localhost port 3000

## Instructions

### One

Create a page to list all movies: index.html

In this page:

1. Display a grid of movies (in cards) with poster image and underneath that the title (3 items per row, you need to write css)
2. Each card in the grid should be a link to the movieDetails.html

### Two

Create a page to list the details of a single movie: movieDetails.html

1. Display all details of a movie, use IMDB movie page as an example, fetch the exact movie from the DB (http://localhost:3000/movies/96)
2. As a minimum you should have the title, the poster image, imdb rating, genre, director and plot
3. As a start movieDetails.html should statically display the details for the movie with an id of 96

### Three

Create a page to add new movies: addMovie.html

1. On this page create a form to add a new movie, see db.json for all the fields you might want to add
2. Minimum requirements: add a movie with title, image, imdb rating, genre, director and plot
3. The image is a url don't worry about uploading one
4. The plot is a textarea
5. The rating is a range
6. The genre is a select box (add some options to it, it needn't be comprehensive)

### Four

On the movieDetails.html page, allow the movie to be deleted via a button.

1. Before deleting the movie ask for confirmation using a confirm(), don't delete if the user declines.
2. After the delete succeeds, redirect the user to the list page (index.html)

## Bonus requirements

1. Make movieDetails.html dynamic:

- This means each card in the list will link to movieDetails.html?movieId=!whatever-id-the-movie-has!
- On the movieDetails.html page you need to grab the movieId from the url, fetch the correct movie and display it
- To grab a query string item from the URL use this code:

```
const params = new URLSearchParams(location.search);
const movieId = params.get('movieId');
// Pay attention the string 'movieId' needs to be the query string parameter you used in the URL
// It's got nothing to do with the movieId variable
```

2. Implement the pagination on index.html

- You probably noticed that every request only brings 20 movies from a total of 996.
- Implement a paginiataion, have the links below and/or above the movie grid (Prev, 1, 2, 3, 4, Next), calculate the number of numeric links you need by manually dividing 996 by 20
- The request you need to make to the server to get a page is: http://localhost:3000/movies?\_page=3 for example to get the third page
- Don't navigate away from index.html only update the grid with the new movies, you can also update the URL of the index page to say something like http://localhost:5500/?page=3
- Make sure to highlight the link corresponding to the page you are on in the links section
- If there is not enough room for all links display something like Prev 1, ...7 , 8, 9 ... 20, Next, always calculate what page needs to be in the center, etc.
- If a user navigates to index.html?page=6 make sure the correct page gets requested from the server on load (use the code above to grab the search parameter...)

3. On the movieDetails.html page add a button that allows you to edit the movie

- The button should navigate you to a new page called editMovie.html
- On editMovie.html there is a form similar to the addMovie form (same fields)
- Use the technique discovered at bonus 1 to edit the correct movie
- The form should be prefilled with all the correct values from the DB, the user only needs to change them
