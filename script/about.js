import * as action from './universal.js'
let siteLang = $("html").attr("lang");

function getData(lang, id) {
    $.ajax({
        url: `../${lang}/about.json`, success: function (result) {
            //result = JSON.parse(result);
            //console.log(result);
            let target = result.rocky_switch_vanilla;
            if (id === "rocky_switch_vanilla") {
                console.log("Change to vanilla Rocky.");
                $("*").css("--main_bg_color", "#00B0FF");
                $("*").css("--body_bg_after", "url(../img/bg_vanilla.svg) repeat fixed");
                $("*").css("--body_bg_norm", "white");
                $("*").css("--body_op_after", "1");
                $("*").css("--banner_text_shadow", "drop-shadow(0 0 8px #1565C0)");
                target = result.rocky_switch_vanilla;
            }
            else if (id === "rocky_switch_cherry") {
                console.log("Change to cherry Rocky.");
                $("*").css("--main_bg_color", "#F48FB1");
                $("*").css("--body_bg_after", "url(../img/bg.svg) repeat fixed");
                $("*").css("--body_bg_norm", "linear-gradient(#F9A8D4, #FCE7F3) fixed");
                $("*").css("--body_op_after", "1");
                $("*").css("--banner_text_shadow", "drop-shadow(0 0 8px #AD1457)");
                target = result.rocky_switch_cherry;
            }
            else if (id === "rocky_switch_current") {
                console.log("Change to cherry babified/child Rocky.");
                $("*").css("--main_bg_color", "#F48FB1");
                $("*").css("--body_bg_after", "url(../img/bg.svg) repeat fixed");
                $("*").css("--body_bg_norm", "linear-gradient(#F9A8D4, #FCE7F3) fixed");
                $("*").css("--body_op_after", "0.6");
                $("*").css("--banner_text_shadow", "drop-shadow(0 0 8px #AD1457)");
                target = result.rocky_switch_current;
            }
            $("." + Object.keys(target)[0]).attr("src", `img/${Object.values(target)[0]}`);
            for (let i = 1; i < Object.keys(target).length; i++) {
                $("." + Object.keys(target)[i]).html(Object.values(target)[i]);
            }
        }
    })
}

function prepareation() {
    action.showNav();
    action.showFooter();
    console.log($("html").attr("lang"))
    $("#rocky_switch_vanilla").on("click", function () {
        getData(siteLang, "rocky_switch_vanilla")
    })
    $("#rocky_switch_cherry").on("click", function () {
        getData(siteLang, "rocky_switch_cherry")
    })
    $("#rocky_switch_current").on("click", function () {
        getData(siteLang, "rocky_switch_current")
    })
    console.log("Load complete");
    action.makeLoadFade();
    console.log($("#load").css("opacity"));
    setTimeout(action.makeLoadDisappear, 800);
}

window.onload = prepareation;