let movies;

export default function MoviesIndex(props) {
    console.log(props);
    movies=props.movies
    console.log(movies[0].title);

    const postsHTML = generatePostsHTML(props.posts);
    return `     
        <h1 style="color: white">Movies</h1>
    `;
}

export function MovieEvents(props) {
    // console.log(props);
}
