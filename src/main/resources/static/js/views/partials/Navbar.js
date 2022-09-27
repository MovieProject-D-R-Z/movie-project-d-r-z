export default function Navbar(props) {

    // everyone can see home
    let html = `
        <nav id="navbar" class="navbar navbar-expand-lg align-items-center badge" style="margin-bottom: -3.4em">
            <div id="logoDiv" class="link navbar navbar-expand-lg align-items-left container-fluid"><a class="navbar-brand" href="/" data-link id="logo">Pioneer Movies</a><a href="/editMovie" data-link>Edit Movie Info</a><a href="/title" data-link>Find<i id="magnifying" class="fa-solid fa-magnifying-glass"></i></a></div>`;
    //
    // html = html + `<div class="link"><a href="/editMovie" data-link>Edit Movie Info</a></div>`;
    //
    // html = html + `<div class="link"><a href="/searchMovies" data-link>Find<i id="magnifying" class="fa-solid fa-magnifying-glass"></i></a></div>`;

    html = html + `<br><hr></nav>`;
    return html;
}

