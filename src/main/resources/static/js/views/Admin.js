import CreateView from "../createView.js";

let movies;

export default function AdminView(props) {
    movies = props.movies;

    return `
        <head>
            <style>
                #homeContainer{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }
                
                #AdminTitle {
                    display: flex;
                    justify-content: center;
                }
                
                h1 {
                    color: white;
                    alignment: center;
                }
                
                #posterContainer {
                    margin-top: 10px;
                }
                
                a {
                    margin-top: 10px;
                }
            </style>
        </head>
        <body>
            <div id="AdminTitle">
            <h1 style="white">Admin Page</h1>
            </div>
            <div id="homeContainer">
                ${makeCards(props)}
            </div>
        </body>
    `;
}

export function AdminEvents() {
    // deleteMovie();
    setupDeleteMovieHandler();
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
                                         <a href=""><i id="addIcon"data-id=${props.movies[i].id} class="fa-solid fa-circle-plus addMovie"></i></a>
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

function setupNewMovieHandler() {
    const addBtn = document.querySelector("#addMovie");
    addBtn.addEventListener("click", function (e) {
        // check the data-id for the save button
        const movieId = parseInt(this.getAttribute("data-id"));

        // get the title and content for the new/update post
        const titleField = document.querySelector("#title");
        const contentField = document.querySelector("#content");

        const post = {
            title: titleField.value,
            content: contentField.value
        }

        // make request
        const request = {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(post)
        }

        let url = POST_API_BASE_URL;

        // if we are updating post, change request and url

        if (postId > 0) {
            request.method = "PUT";
            url += `/${postId}`;
        }

        fetch(url, request)
            .then(function(response) {
                console.log(response.status)
                // check status code
                CreateView("/posts");
            })
    })
}

function setupDeleteMovieHandler() {
    // Target all delete buttons
    const deleteButtons = document.querySelectorAll(".deleteMovie");
    // add a click handler to  all delete buttons
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function (e) {
            // get the post id of each delete button
            const movieId = this.getAttribute("data-id");

            deleteMovie(movieId);
        })
    }
}

function deleteMovie(movieId) {
    const request = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const url = "http://localhost:8082/api/movies/" + movieId;
    fetch(url, request)
        .then(function(response) {
            // check the response code
            CreateView("/admin");
        })
}