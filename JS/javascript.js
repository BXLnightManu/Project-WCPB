var poster = document.getElementsByClassName("poster");
for(var x=0; x < poster.length; x++) {
    poster[x].onmouseover= function() {mouseOver()};
    function mouseOver() {
        poster[x].style.opacity = "1";
    }
    poster[x].onmouseout = function() {mouseOut()};
    function mouseOut() {
        poster[x].style.opacity = "0.5";
    }
}
var wzdtatus = document.getElementsByClassName("wzdtatus");
for(var x=0; x < wzdtatus.length; x++) {
    wzdtatus[x].onmouseover= function() {mouseOver()};
    function mouseOver() {
        wzdtatus[x].style.backgroundColor = "transparent";
        wzdtatus[x].style.color = "transparent";
    }
    wzdtatus[x].onmouseout = function() {mouseOut()};
    function mouseOut() {
        wzdtatus[x].style.backgroundColor = "rgba(224,224,224,0.8)";
        wzdtatus[x].style.color = "rgba(0,0,0)";
    }
}

var wzdname = document.getElementsByClassName("wzdname");
for(var x=0; x < wzdname.length; x++) {
    wzdname[x].onmouseover = function() {mouseOver()};
    function mouseOver() {
        wzdname[x].style.fontsize = "15px";
        wzdname[x].style.top = "80px";
    }
    wzdname[x].onmouseout = function() {mouseOut()};
    function mouseOut() {
        wzdname[x].style.fontsize = "25px";
        wzdname[x].style.top = "0px";
    }
}

var wzddesc = document.getElementsByClassName("wzddesc");
for(var x=0; x < wzddesc.length; x++) {
    wzddesc[x].onmouseover = function() {mouseOver()};
    function mouseOver() {
        wzddesc[x].style.color = "transparent";
    }
    wzddesc[x].onmouseout = function() {mouseOut()};
    function mouseOut() {
        wzddesc[x].style.color = "rgb(255,255,255)";
    }
}