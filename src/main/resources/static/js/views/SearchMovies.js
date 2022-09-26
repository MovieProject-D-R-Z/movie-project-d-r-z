export default function SearchMovies(props) {
    // language=HTML
    return `
    <body>
    <header>
        
    </header>
    <main>
        <div id="formContainer">
            <div id="searchForm">
				<form>
					<label for="searchInput" id="searchLabel">Search and you will find ...</label>
					<input type="text" id="searchInput" placeholder="Search for a movie!">
                    <button id="submit">Submit</button>
				</form>
            </div>
        </div>
        
        <div id="moviesContainer">
            
        </div>
    </main>
    </body>
    `;
}

function search() {
    let btn = document.querySelector('#submit');

    btn.addEventListener('click', renderSearch);
}

async function fetchFromOMDB() {
    let userInput = document.querySelector('#searchInput');

    return await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API}&t=${userInput.value}`)
        .then(async function (response) {
            if (response.status !== 200) {
                console.log("cannot read tools file");
                return "";
            } else
                return await response.json();
        });
}

async function fetchPoster() {
    let userInput = document.querySelector('#searchInput');

    return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${POSTER_API}&language=en-US&query=${userInput.value}&page=1&include_adult=false`)
        .then(async function (response) {
            if (response.status !== 200) {
                console.log("cannot read tools file");
                return "";
            } else
                return await response.json();
        });
}

async function renderSearch(props) {
    let movie_poster = await fetchPoster();
    let movie_data = await fetchFromOMDB();
    let container = document.querySelector('#moviesContainer');

    console.log(movie_data);
    console.log(movie_poster);

    container.innerHTML = `<div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img id="movieTemplate" src="${props.movies[0].poster_img_url}" alt="movie picture">
                                    </div>   
                                        <div class="flip-card-back">
                                            <p class="movieDetails">${props.movies[0].title}</p>
                                            <p class="movieDetails">${props.movies[0].director}, ${props.movies[0].summary}</p>
                                        </div>
                                    </div>         
                           </div>`
}

export function SearchMoviesEvents() {
    search();
}