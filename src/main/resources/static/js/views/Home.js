
const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

let movies;

export default function Home(props) {
    movies=props.movies

    return `
<!--             <h1 id="homeViewH1">Greatest movies EVER! At the tip of your hands.</h1>-->
            <main class = "container">
                <div id="moviesHere" class="scrolling-wrapper"></div>
            </main>
            <div class="d-flex justify-content-center">
                <div id="moviesHere2" class = "d-flex flex-wrap"></div>
           </div>
    `;
}

function makeCards(props) {
    // let htmlString = '';
    let placeMoviesHere = document.querySelector("#moviesHere");
    let placeMoviesHere2 = document.querySelector("#moviesHere2");

    // console.log((props.movies[3].poster_img_url));

    for (let i = 0; i < movies.length; i++) {
        placeMoviesHere.innerHTML +=
             `<div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-front">
                                         <img id="movieTemplate" src=${movies[i].poster_img_url} alt="movie picture">
                                         <p class="movieDetails">${movies[i].title}</p>
                                       </div>   
                                       <div class="flip-card-back">
                                         <p class="backOverview">${movies[i].summary}</p>
                                         <div>
                                         <a href=""><i class="fa-solid fa-circle-play"></i></a>
                                         <a href=""><i class="fa-solid fa-circle-plus"></i></a>
                                         <a href=""><i class="fa-solid fa-heart"></i></a>
                                        </div>
                                       </div>
                                    </div>         
             </div>
                                 `
        placeMoviesHere2.innerHTML +=
            `
                <div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-front">
                                         <img id="movieTemplate" src=${movies[i].poster_img_url} alt="movie picture">
                                         <p class="movieDetails">${movies[i].title}</p>
                                       </div>   
                                       <div class="flip-card-back">
                                         <p class="backOverview">${movies[i].summary}</p>
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