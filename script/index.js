import * as action from './universal.js';

function prepareation() {
    action.showNav();
    action.showFooter();
    console.log("Load complete");
    action.makeLoadFade();
    console.log($("#load").css("opacity"));
    setTimeout(action.makeLoadDisappear, 800);
}

window.onload = prepareation;