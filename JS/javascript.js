(() => {
    document.addEventListener("DOMContentLoaded", () => {
        const wanteds1 = document.getElementsByClassName("wanted1");
        for (const wanted1 of wanteds1) {
            wanted1.onmouseover = function() {
                wanted1.style.opacity = "0";
            };
            wanted1.onmouseout = function() {
                wanted1.style.opacity = "1";
            };
        }

        const wanteds2 = document.getElementsByClassName("wanted2");
        for (const wanted2 of wanteds2) {
            wanted2.onmouseover = function() {
                wanted2.style.opacity = "1";
            };
            wanted2.onmouseout = function() {
                wanted2.style.opacity = "0";
            };
        }
    });
})();
