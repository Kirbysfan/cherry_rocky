import * as action from './universal.js';
let params = new URLSearchParams(window.location.search);
let s_id = 0;
let siteLang = $("html").attr("lang");
let storyStack = 0;
function getStory(lang) {
    if (params.has('id') === false) {
        window.location = "stories.html";
    }
    else {
        s_id = params.get('id');
    }
    $.ajax({
        url: `../${lang}/stories.json`, success: function (result) {
            let target_story = 0;
            const stories = result;
            $(".total_story").html(Object.keys(stories).length);
            //Find the story with desired ID
            for (let i = 0; i < Object.keys(stories).length; i++) {
                if (stories[i].story_id == s_id) {
                    //Count the amount of stories with desired ID;
                    storyStack++
                    target_story = i;
                    $(".current_story").html(i + 1);
                }
            };
            console.log(storyStack);
            //If there's no story with desired ID found, then redirect back.
            if (storyStack === 0) {
                window.location = "stories.html";
            }
            //Check if there's more than one story with the same ID, if there is, then the story won't load.
            else if (storyStack === 1) {
                let target = stories[target_story];
                $(".story_title").html(target.story_title);
                $("title").text(target.story_title);
                $(".story_sub").html(target.story_sub);
                for (let i = 0; i < target.story_content.length; i++) {
                    //We store things that's not a paragraph into a JSON object, so here we set a check to put content of the object into a box instead of a paragraph.
                    if (typeof target.story_content[i] == "object") {
                        let p_object = target.story_content[i]
                        console.log(p_object);
                        let para = $("<div></div>").html(p_object.object);
                        $(".story_content").append(para);
                    }
                    else {
                        let para = $("<p></p>").html(target.story_content[i]);
                        $(".story_content").append(para);
                    }

                }
                if (target_story < 1) {
                    $(".story_back").addClass("story_controller_disabled");
                }
                else {
                    $(".story_back").on("click", function () {
                        window.location.replace(`story.html?id=${stories[target_story - 1].story_id}`);
                    });
                }
                if (target_story === Object.keys(stories).length - 1) {
                    $(".story_next").addClass("story_controller_disabled");
                }
                else {
                    $(".story_next").on("click", function () {
                        window.location.replace(`story.html?id=${stories[target_story + 1].story_id}`);
                    });
                }
                $(".story_leave").on("click", function () {
                    window.location.replace(`stories.html`);
                })
            }
            else {

            }
        }
    })
}

function prepareation() {
    action.showNav();
    action.showFooter();
    getStory(siteLang);
    console.log("Load complete");
    action.makeLoadFade();
    console.log($("#load").css("opacity"));
    setTimeout(action.makeLoadDisappear, 800);
}

window.onload = prepareation;