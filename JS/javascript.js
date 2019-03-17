(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const posters = document.getElementsByClassName("poster");
        for (const poster of posters) {
            poster.onmouseover = function() {
                poster.style.opacity = "1";
            };

            poster.onmouseout = function() {
                poster.style.opacity = "0.5";
            };
        }

        const wzdtatuses = document.getElementsByClassName("wzdtatus");
        for (const wzdtatus of wzdtatuses) {
            wzdtatus.onmouseover = function() {
                wzdtatus.style.backgroundColor = "transparent";
                wzdtatus.style.color = "transparent";
            };
            wzdtatus.onmouseout = function() {
                wzdtatus.style.backgroundColor = "rgba(224,224,224,0.8)";
                wzdtatus.style.color = "rgba(0,0,0)";
            };
        }

        const wzdnames = document.getElementsByClassName("wzdname");
        for (const wzdname of wzdnames) {
            wzdname.onmouseover = function() {
                wzdname.style.fontsize = "15px";
                wzdname.style.top = "80px";
            };

            wzdname.onmouseout = function() {
                wzdname.style.fontsize = "25px";
                wzdname.style.top = "0px";
            };
        }

        const wzddescs = document.getElementsByClassName("wzddesc");
        for (const wzddesc of wzddescs) {
            wzddesc.onmouseover = function() {
                wzddesc.style.color = "transparent";
            };

            wzddesc.onmouseout = function() {
                wzddesc.style.color = "rgb(255,255,255)";
            };
        }
    });
})();
