
let movies;

export default function SearchMovies(props) {
    movies = props.movies;
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
    let searchInput = document.querySelector('#searchInput');
    let btn = document.querySelector('#submit')

    searchInput.addEventListener('keyup', renderSearch);
    btn.addEventListener('click', renderSearch);
}

function renderSearch() {
    let container = document.querySelector('#moviesContainer');
    let title = document.querySelector('#searchInput').value.toLowerCase().trim();

    for (let i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase().trim().includes(title)) {
            container.innerHTML = `
                                    <div class="flip-card">
                                    <div class="flip-card-inner">
                                       <div class="flip-card-front">
                                         <img id="movieTemplate" src=${movies[i].poster_img_url} alt="movie picture">
                                         <p class="movieDetails">${movies[i].title}</p>
                                         <p class="movieDetails"></p>
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
                                 </div>`
        }
    }
}

export function SearchMoviesEvents() {
    search();
}