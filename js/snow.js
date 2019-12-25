var windowWidth = window.screen.width;
var windowHeight = window.screen.height;
var button = document.getElementById('btn1');
var flag = 0 ; 

btn1.onclick = function () {
    function disappear(){
       location.reload()  ; 
    }
    
    function creatSnow() {
        var left = 0;
        var top = 0;
        var opacity = 0.9;
        var left_random = Math.random() * windowWidth;
        var top_random = Math.random() * windowHeight ;
        var div = document.createElement('div');
        flag ++ ; 
        div.innerHTML = "✽";
        div.style.color = "white";
        div.style.fontSize = 50 * Math.random() + "px";
        div.style.position = "absolute";
        div.style.transform = 'scale(' + (Math.random()) + ')'
        document.body.appendChild(div);

        //雪花飘落
        setInterval(function () {
            top += 0.15;
            opacity -= 0.00015;
            div.style.left = left_random + left - 50 + 'px';
            div.style.top = top_random + top + 'px';
            div.style.opacity = opacity;
            if (left_random + left >= windowWidth) {
                left_random = Math.random();
                left = 0;
                opacity = 0.9;
            }

            if (top_random + top >= windowHeight) {
                top_random = Math.random();
                top = 0;
                opacity = 0.9;
            }
        }, 10)
    }
    if(flag  % 2 == 0){
        for (var i = 0; i < 199; ++ i) {
            creatSnow();
        }
    }
    else{
        disappear() ; 
    }
}
