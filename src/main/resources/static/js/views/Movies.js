let movies;

export default function MoviesIndex(props) {
    console.log(props);
    movies=props.movies
    alert(movies[0].title);

    const moviesHTML = generateMoviesHTML(movies);
    return `     
        <h1 style="color: white">Movies</h1>
    `;
}

export function MovieEvents(props) {
    // console.log(props);
}
