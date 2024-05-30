export function showNav() {
    let index_active = `"`;
    let about_active = `"`;
    let stories_active = `"`;
    let gallery_active = `"`;
    let play_active = `"`;
    let lang_active = `"`;
    if (mark === "index") {
        index_active = `active" aria-current="page"`
    }
    else if (mark === "about") {
        about_active = `active" aria-current="page"`
    }
    else if (mark === "stories") {
        stories_active = `active" aria-current="page"`
    }
    else if (mark === "gallery") {
        gallery_active = `active" aria-current="page"`
    }
    else if (mark === "play") {
        play_active = `active" aria-current="page"`
    }
    else if (mark === "lang") {
        lang_active = `active" aria-current="page"`
    }
    let navbar = `<nav data-bs-theme="dark" class="navbar navbar-expand-lg fixed-top rocky_nav">` +
        `<div class="container-fluid">` +
        `<a class="navbar-brand" href="#">` +
        `<img src="icon/hoshi_w.svg" class="ms-2" style="height: 28px;" alt="">` +
        `</a>` +
        `<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">` +
        `<span class="navbar-toggler-icon"></span>` +
        `</button>` +
        `<div class="collapse navbar-collapse" id="navbarSupportedContent">` +
        `<ul class="navbar-nav me-auto mb-2 mb-lg-0">` +
        `<li class="nav-item">` +
        `<a class="nav-link ${index_active} href="index.html">Home</a>` +
        `</li>` +
        `<li class="nav-item">` +
        `<a class="nav-link ${about_active} href="about.html">About</a>` +
        `</li>` +
        `<li class="nav-item">` +
        `<a class="nav-link ${stories_active} href="stories.html">Stories</a>` +
        `</li>` +
        `<li class="nav-item">` +
        `<a class="nav-link disabled ${gallery_active} href="gallery.html">Gallery</a>` +
        `</li>` +
        `<li class="nav-item">` +
        `<a class="nav-link disabled ${play_active} href="playground.html">Playground</a>` +
        `</li>` +
        `<!--<li class="nav-item dropdown">` +
        `<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">` +
        `Dropdown` +
        `</a>` +
        `<ul class="dropdown-menu">` +
        `<li><a class="dropdown-item" href="#">Action</a></li>` +
        `<li><a class="dropdown-item" href="#">Another action</a></li>` +
        `<li>` +
        `<hr class="dropdown-divider">` +
        `</li>` +
        `<li><a class="dropdown-item" href="#">Something else here</a></li>` +
        `</ul>` +
        `</li>` +
        `<li class="nav-item">` +
        `<a class="nav-link disabled">Disabled</a>` +
        `</li> !-->` +
        `</ul>` +
        `<ul class=" navbar-nav me-4">` +
        `<li class="nav-item">` +
        `<a class="nav-link d-flex align-items-center disabled ${lang_active} href="lang.html"><span class="material-symbols-outlined me-1">language</span>` +
        `English` +
        `</a>` +
        `</li>` +
        `</ul>` +
        `<form class="d-flex" role="search" data-bs-theme="light" action="search.html">` +
        `<input class="form-control me-2" name="search" type="search" placeholder="Search" aria-label="Search">` +
        `<button class="btn btn-outline-light" type="submit">Search</button>` +
        `</form>` +
        `</div>` +
        `</div>` +
        `</nav>`
    $("#rocky_nav").html(navbar);
    console.log("Navbar loaded");
}