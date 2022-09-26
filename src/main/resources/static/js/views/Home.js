const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

let data;
export default function Home(props) {
    data=props.TmbdMovies;

    return `
        <body>
            <h1 id="homeViewH1">Greatest movies EVER! At the tip of your hands.</h1>
            <div id="moviesHere" class = "scrolling-wrapper"></div>
        </body>
    `;
}

function makeCards(props) {
    // let htmlString = '';
    // data=props.TmbdMovies;
    let placeMoviesHere = document.querySelector("#moviesHere");

    console.log(data.results[0].poster_path);
    // console.log((props.movies[0].title));


    for (let i = 0; i < data.results.length; i++) {
        placeMoviesHere.innerHTML +=
         `<div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-front">
                                         <img id="movieTemplate" src="https://image.tmdb.org/t/p/w300${data.results[i].poster_path}" alt="movie picture">
                                         <p class="movieDetails">${data.results[i].original_title}</p>
                                         <p class="movieDetails"></p>
                                       </div>   
                                       <div class="flip-card-back">
                                         <p class="backOverview">${data.results[i].overview}</p>
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

    // return htmlString;
}

export function HomeEvents() {
    makeCards();
}
