const BASE_URI = `${BACKEND_HOST}/api/s3/download`;


let movies;

export default function MoviesIndex(props) {
    console.log(props);
    movies=props.movies
    alert(movies[0].title);

    // const moviesHTML = generateMoviesHTML(movies);
    return `     
         <body>
            <h1 id="homeViewH1">Greatest movies EVER! At the tip of your hands.</h1>
            <main>
                <div id="moviesHere" class = "scrolling-wrapper"></div>
            </main>
        </body>
    `;
}

export function MovieEvents(props) {
    // console.log(props);
    makeCards();
}


function makeCards(props) {
    // let htmlString = '';
    // data=props.TmbdMovies;
    let placeMoviesHere = document.querySelector("#moviesHere");

    // console.log(movies.results[0].poster_path);
    console.log((props.movies[0].title));


    for (let i = 0; i < movies.results.length; i++) {
        placeMoviesHere.innerHTML +=
            `<div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-front">
                                         <img id="movieTemplate" src="https://image.tmdb.org/t/p/w300${movies.results[i].poster_path}" alt="movie picture">
                                         <p class="movieDetails">${movies.results[i].original_title}</p>
                                         <p class="movieDetails"></p>
                                       </div>   
                                       <div class="flip-card-back">
                                         <p class="backOverview">${movies.results[i].overview}</p>
                                         <div>
                                         <a href=""><i class="fa-solid fa-circle-play"></i></a>
                                         <a href=""><i class="fa-solid fa-circle-plus"></i></a>
                                         <a href=""><i class="fa-solid fa-heart"></i></a>
                                        </div>
                                       </div>
                                    </div>         
          </div>
                                 `
    }
}
