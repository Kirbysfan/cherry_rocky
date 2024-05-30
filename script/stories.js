import * as action from './universal.js';
let siteLang = $("html").attr("lang");
function getStories(lang) {
    $.ajax({
        url: `../${lang}/stories.json`, success: function (result) {
            console.log(result);
            $(".stories_count").html(Object.keys(result).length)
            console.log(Object.keys(result).length);
            for (let i = 1; i <= Object.keys(result).length; i++) {
                let target = result[i - 1];
                console.log("Attempt to load ID" + target.story_id);
                $(`#Chapter${target.story_chapter}`).html(function () {
                    return $(this).html() +
                        `<a href="story.html?id=${target.story_id}"><div class="row align-items-center my-2">
                    <div class="col-1 col-lg-2 flex-shrink-0 d-flex justify-content-center" style="min-width: 48px;">
                        <img src="icon/hoshi_w.svg" alt="" class="option_hoshi">
                    </div>
                    <div class="col-10">
                        <h4 class="m-0 text-nowrap text-truncate">${target.story_title}</h4>
                        <p class="m-0 text-nowrap text-truncate">${target.story_sub}</p>
                        <p class="m-0"><span>Story ID: </span><span>${target.story_id}</span></p>
                    </div>
                </div></a>`
                });
            }
        }
    })
}

function prepareation() {
    action.showNav();
    action.showFooter();
    getStories(siteLang);
    console.log("Load complete");
    action.makeLoadFade();
    console.log($("#load").css("opacity"));
    setTimeout(action.makeLoadDisappear, 800);
}

window.onload = prepareation;