import Home, {HomeEvents} from "./views/Home.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import SearchMovies, {SearchMoviesEvents} from "./views/SearchMovies.js";
import EditMovie, {EditMoviesEvents} from "./views/EditMovie.js";
import Movies, {MovieEvents} from "./views/Movies.js";
import MoviesIndex from "./views/Movies.js";

/**
 * Returns the route object for a specific route based on the given URI
 * @param URI
 * @returns {*}
 */
export default function router(URI) {
    const routes = {
        '/': {
            returnView: Home,
            state: {
                TmbdMovies: {
                    url: `https://api.themoviedb.org/3/trending/all/day?api_key=${POSTER_API}`,
                    headers: {
                        'Accept': 'application/json'
                    }
                },
                movies: {
                    url: `http://localHost:8082/api/movies`,
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            },
            uri: '/',
            title: 'Home',
            viewEvent: HomeEvents
        },
        '/editMovie': {
            returnView: EditMovie,
            state: {
                movies: {
                    url: `http://localHost:8082/api/movies`,
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            },
            uri: '/editMovie',
            title: 'Edit Movie',
            viewEvent: EditMoviesEvents
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        },
        '/title': {
            returnView: SearchMovies,
            state: {},
            uri: '/title',
            title: 'Search Movies',
            viewEvent: SearchMoviesEvents
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}

