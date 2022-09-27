

let movies;

export default function Home(props) {
    movies = props.movies

    return `
        <head>
            <style>
                section {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }
                
                   a {
                    margin-top: 10px;
                }
            </style>
        </head>
        <h1 id="homeViewH1">Greatest movies EVER! At the tip of your hands.</h1>
         <body>
            <section>
                ${makeCards(props)}
            </section>
        </body>
    `;
}

function makeCards(props) {
    let htmlString = '';

    for (let i = 0; i < props.movies.length; i++) {

        htmlString  += `<div id="posterContainer">
                                   <div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-front">
                                         <img id="movieTemplate" src=${props.movies[i].poster_img_url} alt="movie picture">
                                         <p class="movieDetails">${props.movies[i].title}</p>
                                         <p class="movieDetails"></p>
                                       </div>   
                                       <div class="flip-card-back">
                                         <p class="movieDetails">${props.movies[i].title}</p>
                                         <p class="backOverview">${props.movies[i].summary}</p>
                                         <div>
                                         <a href=""><i class="fa-solid fa-circle-play"></i></a>
                                         <a href=""><i class="fa-solid fa-circle-plus"></i></a>
                                         <a href=""><i id="deleteIcon" data-id=${props.movies[i].id} class="fa-solid fa-circle-minus deleteMovie"></i></a>
                                         <a href=""><i class="fa-solid fa-heart"></i></a>
                                        </div>
                                       </div>
                                    </div>         
                                 </div>
                                </div>
                                <hr>`
    }

    return htmlString;
}

export function HomeEvents() {
}