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
if (param.get('resume') === '1') {
    alert(`你们好，这是我基于兴趣开发的一个展示性质的网站。\n
本体基于Vue3 + JQuery，目前我正在逐步摆脱对bootstrap和jQuery的依赖，转而使用Vue自带的替代品。\n
至于接下来你们将看到的这个网站为何如此花哨，那是因为这是为我大学时搞出来的一个虚拟角色做的网站，这一切都是为了更好地突出角色的性格与风格，并且因为早在22年8月初版完成时就赋予了展现我的技术的用途，我就将这个网站维护和改进到了现在，且将来也会一直改进下去。\n
这个网站的开发人员工具，右键菜单和文字选择是不对常人开放的，但是对于通过这个特殊链接进入的你们，我将会把这些全部开放。\n
祝你们逛的愉快。\n
-乌俊博`)
    alert(`Hi there, \n
This is a website I made based on my interest.\n
The website itself is based on Vue 3 + Jquery, but now I've been trying to get rid of jQuery and bootstrap, and use the alterntatives provided by Vue instead.\n
The website you are about to visit might make you as why it's so fancy, that's because I made the site for an oc I created back in the day I was still in the college. Those fancy stuff is just for emphasizing its characteristic. As this site had always meant to been a showcase of my technique and skill, I maintained and added new stuffs to this time all the way until now, and I'll keep doing it.\n
Dev tools, right click menu and text selecting is disabled for those who accessed the site in the normal way, but for you who entered the site in this link, I'll open all of them to you. \n
Have fun.\n
-Junbo Wu`)
    sessionStorage.setItem('resume', '1');
}
if (sessionStorage.getItem('resume') === '1') {
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
