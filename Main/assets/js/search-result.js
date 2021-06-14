
// find movie input
var searchMovieEl = document.getElementById('movie');

// find results
var movieTitleEl = document.getElementById('title');
var movieGenreEl = document.getElementById('genre');
var moviePlotEl = document.getElementById('plot');
var movieRatingEl = document.getElementById('ratings')

function apiMovie() {
    
    // variable for movie search
    var userSearch= searchMovieEl.value;
    console.log(userSearch);
    
    // fetch API
    $.getJSON('https://www.omdbapi.com/?t=' + userSearch + '&apikey=7a94102a')
    .then(function(response){
        console.log(response);

        movieTitleEl.innerHTML="";
        movieGenreEl.innerHTML="";
        moviePlotEl.innerHTML="";
        movieRatingEl.innerHTML="";

        var moviePoster= document.getElementById('movie-img')
        moviePoster.setAttribute('src', response.Poster)
        // movieTitleEl.appendChild(moviePoster)
        
        var movieTitle= document.createElement('p')
        movieTitle.textContent=response.Title
        movieTitleEl.appendChild(movieTitle)
        
        var movieGenre= document.createElement('p')
        movieGenre.textContent=response.Genre
        movieGenreEl.appendChild(movieGenre)
       
        var moviePlot= document.createElement('p')
        moviePlot.textContent=response.Plot
        moviePlotEl.appendChild(moviePlot)
       
        // If ratings is a valid and non empty array, then loop
        if (Array.isArray(response.Ratings)){ 
            
            
            for (var i=0; i< response.Ratings.length; i++){
                console.log(i)
                
                var ratingSource = response.Ratings[i].Source
                var ratingValue = response.Ratings[i].Value

                var movieRating = document.createElement('p')
                movieRating.textContent = ratingSource + ": " + ratingValue
                movieRatingEl.appendChild(movieRating)  
            }
        }

    });

    
}

document.getElementById('search-movie').addEventListener('click', apiMovie);
