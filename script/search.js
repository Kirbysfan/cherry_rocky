import * as action from './universal.js';
const params = new URLSearchParams(window.location.search);
function doSearch() {
    if (params.has('search') === false) {
        window.location.href = "index.html"
    }
    else {
        const search_word = params.get('search');
        if (search_word.trim().length === 0) {
            window.location.href = "index.html"
        }
        else {
            $(".search_word").html(search_word);
            $(".rocky_search").val(search_word);
        }
    }
}
function prepareation() {
    doSearch();
    action.showNav();
    action.showFooter();
    console.log("Load complete");
    action.makeLoadFade();
    console.log($("#load").css("opacity"));
    setTimeout(action.makeLoadDisappear, 800);
}

window.onload = prepareation;