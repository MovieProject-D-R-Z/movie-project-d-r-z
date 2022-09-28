export default function Navbar(props) {

    // everyone can see home
    let html = `
        <nav>
            <div id="logoDiv" class="link"><a href="/" data-link id="logo">Pioneer Movies</a></div>`;

    html = html + `<div class="link"><a href="/admin" data-link>Admin</a></div>`;

    html = html + `<div class="link"><a href="/title" data-link>Find<i id="magnifying" class="fa-solid fa-magnifying-glass"></i></a></div>`;

    html = html + `</nav><br>`;
    return html;
}