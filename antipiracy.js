function antiPirate() {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.body.onselectstart = () => { return false };
    var tryCount = 0;
    var minimalUserResponseInMiliseconds = 200;
    function check() {
        console.clear();
        before = new Date().getTime();
        debugger;
        after = new Date().getTime();
        if (after - before > minimalUserResponseInMiliseconds) {
            document.write(" Sorry, in order to prevent the arts being pirated, Developer tools and right clicks are no longer allowed on this site, please understand and cooperate. \n 很抱歉，为了防止盗图行为，本网站不再允许使用开发者工具和右键！请理解并配合。 ")
            alert(" Sorry, in order to prevent the arts being pirated, Developer tools and right clicks are no longer allowed on this site, please understand and cooperate. \n 很抱歉，为了防止盗图行为，本网站不再允许使用开发者工具和右键！请理解并配合。 ");
            self.location.replace(
                window.location.protocol + window.location.href.substring(
                    window.location.protocol.length
                )
            );
        } else {
            before = null;
            after = null;
            delete before;
            delete after;
        }
        setTimeout(check, 100);
    }
    check();

}
function disabledEvent(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    } else if (window.event) {
        window.event.cancelBubble = true;
    }
    alert(" Sorry, in order to prevent the arts being pirated, Developer tools and right clicks are no longer allowed on this site, please understand and cooperate. \n 很抱歉，为了防止盗图行为，本网站不再允许使用开发者工具和右键！请理解并配合。 ");
    e.preventDefault();
    return false;
}
let param = new URLSearchParams(window.location.search);
resumeMode(param);
if (getResumeMode()) {
    console.log('Welcome to the personal website of Rocky the Cherry Meow!')
}
else {
    if (window.location.host.indexOf('localhost') === 0 || window.location.host.indexOf('127.0.0.1') === 0 || window.location.host.indexOf('192.168') === 0) { } else {
        setTimeout(function () {
            document.addEventListener("contextmenu", function (e) {
                e.preventDefault();
            }, false);
            document.addEventListener("keydown", function (e) {
                // Ctrl+Shift+I 
                if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
                    disabledEvent(e);
                }
                // Ctrl+Shift+J 
                if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
                    disabledEvent(e);
                }
                // Ctrl+S 
                if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
                    disabledEvent(e);
                }
                // Ctrl + U 
                if (e.ctrlKey && e.keyCode == 85) {
                    disabledEvent(e);
                }
                // F12
                if (event.keyCode == 123) {
                    disabledEvent(e);
                }
            }, false);
        }
            , 0)

        setTimeout(antiPirate, 0);
    }
}
