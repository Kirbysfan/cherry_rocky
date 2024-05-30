//This file holds all the function that is needed for more than one pages.
import * as navbar from "./navbar.js"
import * as footer from "./footer.js"
export function makeLoadDisappear() {
    $("#load").css("display", "none");
    console.log($("#load").css("display"));
}

export function makeLoadFade() {
    $("#load").css("opacity", 0);
}

export function showNav() {
    navbar.showNav();
}

export function showFooter() {
    footer.showFooter();
}