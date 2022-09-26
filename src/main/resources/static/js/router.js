import Home, {HomeEvents} from "./views/Home.js";
import Error404 from "./views/Error404.js";
import Loading from "./views/Loading.js";
import SearchMovies, {SearchMoviesEvents} from "./views/SearchMovies.js";
import EditMovie, {EditMoviesEvents} from "./views/EditMovie.js";

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
        '/title': {
            returnView: SearchMovies,
            state: {
                movies: {
                    url: `http://localHost:8082/api/movies`,
                    headers: {
                        'Accept': 'application/json'
                    }
                }
            },
            uri: '/title',
            title: 'Search Movies',
            viewEvent: SearchMoviesEvents
        },
        '/loading': {
            returnView: Loading,
            state: {},
            uri: location.pathname,
            title: 'Loading...',
        },
        '/error': {
            returnView: Error404,
            state: {},
            uri: location.pathname,
            title: ' ERROR',
        }
    };

    // if we see a URI with index.html then interpret that as a route for /
    if(URI.indexOf("index.html") > -1) {
        URI = "/";
    }

    return routes[URI];
}

