var lis = document.getElementsByClassName("tab_nav")[0].getElementsByTagName("li");
var divs = document.getElementsByClassName("tab_con")[0].getElementsByTagName("div");
var n = 0;
var time = 3000;

function show() {
    n = n > lis.length - 1 ? 0 : n;
    for (i = 0; i < lis.length; i++) {
        console.log(lis.length);
        if (i == n) {
            lis[i].className = "on";
            divs[i].className = "selected";
        } else {
            lis[i].className = "";
            divs[i].className = "";
        }
    }
    ++n;
}

setInterval("show()", time);

for (var i = 0; i < lis.length; ++i) {
    lis[i].index = i;
    lis[i].onclick = function () {
        n = this.index;
        for (var i = 0; i < lis.length; i++) {

            lis[i].classList.remove("on");
            divs[i].classList.remove("selected");
        }
        lis[this.index].classList.add("on");
        divs[this.index].classList.add("selected");
    }
}
var area = document.getElementsByClassName('bfloat')[0] ;
var con1 = document.getElementById('baniner1') ;
con1.innerHTML += con1.innerHTML;
con1.innerHTML += con1.innerHTML;

function scrollUp() {
    if (area.scrollTop >= con1.offsetHeight ) {
        area.scrollTop = 0 ;
        console.log(area);
    } else {
        area.scrollTop ++;
    }
}

var time = 40;
var mytimer = setInterval(scrollUp, time);

area.onmouseover = function () {
    clearInterval(mytimer);
}

area.onmouseout = function () {
    mytimer = setInterval(scrollUp, time);
}