var windowWidth = window.screen.width;
var windowHeight = window.screen.height;
var button = document.getElementById('btn3');
var flag = 0;

btn3.onclick = function () {
    function disappear() {
        location.reload();
    }

    function creatSnow() {
        var left = 0;
        var top = 0;
        var opacity = 0.85;
        var left_random = Math.random() * windowWidth;
        var top_random = Math.random() * windowHeight;
        var div = document.createElement('div');
        flag++;
        var list = new Array("💴","💵","💶","💷","💰","💸","💳","🧧");
        div.style.fontSize = 30 * Math.random() + "px";
        var index = parseInt(Math.random() * list.length);
        console.log(index);
        div.innerHTML = list[index];
        div.style.position = "absolute";
        div.style.transform = 'scale(' + (Math.random()) + ')'
        document.body.appendChild(div);

        setInterval(function () {
            top += 0.2;
            opacity -= 0.0002;
            div.style.left = left_random + left - 50 + 'px';
            div.style.top = top_random + top + 'px';
            div.style.opacity = opacity;
            if (left_random + left >= windowWidth) {
                left_random = Math.random();
                left = 0;
                opacity = 0.85;
            }

            if (top_random + top >= windowHeight) {
                top_random = Math.random();
                top = 0;
                opacity = 0.85;
            }
        }, 10)
    }
    if (flag % 2 == 0) {
        for (var i = 0; i < 199; ++i) {
            creatSnow();
        }
    } else {
        disappear();
    }
}