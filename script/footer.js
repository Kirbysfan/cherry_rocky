export function showFooter() {
    const footer = document.getElementById("footer");
    //#region footer
    const footer_main = document.createElement("div");
    footer_main.className = "footer";
    //#region FirstSector
    const sc1 = document.createElement("div");
    sc1.className = "Sect1"
    const links = document.createElement("ul");
    links.className = "f_links"
    links.style.listStyle = "none";
    const la = document.createElement("li");
    la.innerHTML = `<a href="https://${window.location.host}/rocky_homepage/">Ver 1</a>`;
    const lb = document.createElement("li");
    lb.innerHTML = `<a href="https://${window.location.host}/rocky_homepage_old/">Ver 0</a>`
    const gap1 = document.createElement("div");
    gap1.className = "f_gap";
    const sn1 = document.createElement("div");
    sn1.className = "f_sn"
    sn1.innerHTML = '<a href="http://kirbysfan.github.io"><img src="icon/tribun.png" alt=""></a><a href="https://twitter.com/Kirbysfan2"><img src="icon/Twitter.svg" alt=""></a><a href="https://www.instagram.com/kirbysfan2/"><img src="icon/Instagram.svg" alt=""></a>'
    links.appendChild(la);
    links.appendChild(lb);
    sc1.appendChild(links);
    sc1.appendChild(gap1);
    sc1.appendChild(sn1);
    footer_main.appendChild(sc1);
    //#endregion
    //#region Sector2
    const gap2 = document.createElement("div");
    gap2.className = "ft_gap"
    footer_main.appendChild(gap2);
    const cpr = document.createElement("div");
    const c1 = document.createElement("p");
    const c2 = document.createElement("p");
    c1.innerHTML = "Milestone 1.01 <br> 2022-2024 Kirbysfan. Dedicated to DNAxCAT community."
    c2.innerHTML = "The DNAxCAT character design is copyrighted to DNAxCAT limited."
    cpr.appendChild(c1);
    cpr.appendChild(c2);
    footer_main.appendChild(cpr);
    //#endregion
    //#endregion
    footer.appendChild(footer_main);
}