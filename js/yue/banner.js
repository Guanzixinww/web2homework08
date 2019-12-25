var container = document.getElementById("container");
var imgs = document.getElementById("imgs");
var left = document.getElementById("left");
var right = document.getElementById("right");
var ul = document.getElementById("l").children;
var one = document.getElementById("one");
var two = document.getElementById("two");
var l1 = document.getElementById("l1");
var l2 = document.getElementById("l2");
var l3 = document.getElementById("l3");
var l4 = document.getElementById("l4");
var l5 = document.getElementById("l5");
var l6 = document.getElementById("l6");
var l7 = document.getElementById("l7");
var l8 = document.getElementById("l8");
var l9 = document.getElementById("l9");
var l10 = document.getElementById("l10");
var l11 = document.getElementById("l11");
var l12 = document.getElementById("l12");
var smallText = document.getElementsByClassName("smallText");
var i=1;
var isMoving = false;
var time = setInterval(next,3000);

function pre(){
	if(isMoving){
		return;
	}
	isMoving = true;
    i--;
    change();
    animate(imgs,{left:-800*i},function(){
        if(i === 0){
            imgs.style.left = "-3200px";
            i = 4;
        }
        isMoving = false;
    });
}
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
    i++;
    change();
    animate(imgs,{left:-800*i},function(){
        if(i === 5){
            imgs.style.left = "-800px";
            i = 1;
        }
        isMoving = false;
    });
}
container.onmouseover = function(){
    left.style.opacity = 0.5;
    right.style.opacity = 0.5;
    clearInterval(time);
}
container.onmouseout = function(){
    left.style.opacity = 0;
    right.style.opacity = 0;
    time = setInterval(next,3000);
}

left.onclick = pre;
right.onclick = next;

for(var p=0;p<ul.length;p++){
    ul[p].idx = p;
    ul[p].onclick = function(){
        i =  this.idx+1;
        change();
        animate(imgs,{left:-800*i});
        ul[0].style.color = "black";
        ul[0].style.background = "#ccc";
        ul[i-1].style.color = "white";
        ul[i-1].style.background = "red";
    }
}
function change(){
    for(var p=0;p<ul.length;p++){
        ul[p].style.color = "black";
        ul[p].style.background = "#ccc";
    }
    if(i === 5){
        ul[0].style.color = "white";
        ul[0].style.background = "red";
    }else if(i === 0){
        ul[3].style.color = "white";
        ul[3].style.background = "red";
    }else{
        ul[i-1].style.color = "white";
        ul[i-1].style.background = "red";
    }
}
function changeColor(){
	var color="#f00|#0f0|#00f|#880|#808|#088|green|blue|gray";
	var h = document.getElementsByClassName("h");
	color=color.split("|");
	for(var m=0; m < h.length; m++){
		h[m].style.color=color[parseInt(Math.random() * color.length)];
	}
}
setInterval("changeColor()",200);

one.onclick = function(){
    one.style.background = "rgba(178,34,34,0.6)";
    one.style.color = "black";
    two.style.background = "black";
    two.style.color = "red";
    l1.innerHTML = "食材排行榜";
    l2.innerHTML = "<粤菜最受欢迎食材前十名>";
    l3.innerHTML = "1 鲍鱼";
    l4.innerHTML = "2 八角";
    l5.innerHTML = "3 猪肉";
    l6.innerHTML = "4 鸡肉";
    l7.innerHTML = "5 鹅肉";
    l8.innerHTML = "6 菠萝";
    l9.innerHTML = "7 叉烧酱";
    l10.innerHTML = "8 豆角";
    l11.innerHTML = "9 干木耳";
    l12.innerHTML = "10 高汤";
}
two.onclick = function(){
    two.style.background = "rgba(178,34,34,0.6)";
    two.style.color = "black";
    one.style.background = "black";
    one.style.color = "red";
    l1.innerHTML = "名菜排行榜";
    l2.innerHTML = "<粤菜十大名菜>";
    l3.innerHTML = "1 阿一鲍鱼";
    l4.innerHTML = "2 广州文昌鸡";
    l5.innerHTML = "3 明炉烤乳猪";
    l6.innerHTML = "4 新龙皇夜宴";
    l7.innerHTML = "5 半岛御品官燕";
    l8.innerHTML = "6 清蒸东星斑";
    l9.innerHTML = "7 挂炉烧鹅";
    l10.innerHTML = "8 生拆蟹肉烩海虎翅";
    l11.innerHTML = "9 雁南飞茶田鸭";
    l12.innerHTML = "10 潮州卤味";
}
for(var n=0;n<smallText.length;n++){
    smallText[n].onmouseover = function(){
        var a = this.innerHTML;
        this.innerHTML = "❤" + a + "❤";
        this.onmouseout = function(){
            this.innerHTML = a;
        }
    }
}
