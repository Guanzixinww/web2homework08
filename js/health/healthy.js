var box = document.getElementById("box");
    var slider= document.getElementById("slider");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var index = 0;
    var start = -820; 
    var timer;
    var isMoving = false;
    //轮番效果
    function next(){
        if(isMoving){
            return;
        } 
        index++;       
        isMoving  = true;
        animate(slider,{left:-960*index+start},function(){
            if(index>4){
                slider.style.left = "-820px";
                index = 0;
            }
            isMoving = false;
        });
        
    }
    function prev(){
        if(isMoving){
            return;
        }
        index--;
        isMoving  = true;
        animate(slider,{left:-960*index+start},function(){
            if (index <0) {
                slider.style.left = "-4666px";
                index = 4;
            }
            isMoving = false;
        });
        
        
    }
    timer = setInterval(next,2000);
    //鼠标划入定时器
    box.onmouseover = function(){
        animate(left,{opacity:50})
        animate(right,{opacity:50})
        clearInterval(timer);
        
    }
    //鼠标划出计时器
    box.onmouseout = function(){
        animate(left,{opacity:30})
        animate(right,{opacity:30})
        timer = setInterval(next,2000);
    }
    right.onclick = next;
    left.onclick = prev;
    //

    //切换图片
    var smallpic = document.getElementById("smallpic");
    var imgList = smallpic.getElementsByTagName("img");
    var bigPic = document.getElementById("bigpic");
    for(var i = 0; i < imgList.length; i++){
        imgList[i].onclick = function(){
            for(var j = 0;j<imgList.length; j++){
                imgList[j].setAttribute("class","");
            }
            this.setAttribute("class","pb");
            var imgSrc = this.getAttribute("src");
            bigPic.setAttribute("src",imgSrc);  
        }      
    }

    //卡片
    
    var container = document.getElementById("container");
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    p1.onclick = function(){        
        container.replaceChild(p2,p1);
        var arr1 = p2.getElementsByClassName("bg");
        for(var j = 0;j<arr1.length;j++){
            arr1[j].style.color = "red";
        }   
    }

    var container1 = document.getElementById("container1");
    var p3 = document.getElementById("p3");
    var p4 = document.getElementById("p4");
    p3.onclick = function(){        
        container1.replaceChild(p4,p3);
        var arr1 = p4.getElementsByClassName("bg1");
        for(var j = 0;j<arr1.length;j++){
            arr1[j].style.color = "red";
        }   
    }

    var container2 = document.getElementById("container2");
    var p5 = document.getElementById("p5");
    var p6 = document.getElementById("p6");
    p5.onclick = function(){        
        container2.replaceChild(p6,p5);
        var arr1 = p6.getElementsByClassName("bg2");
        for(var j = 0;j<arr1.length;j++){
            arr1[j].style.color = "red";
        }   
    }

    //滚动
    var title02 = document.getElementById("title02");
    var title03 = document.getElementById("title03");
    var time =  setInterval(function(){
            var now = parseInt(getStyle(title03,'right'));
             if(now > 370){
                title03.style.right = -80 + "px";
            }
            else{
                title03.style.right = now + 1 + "px";
            }           
        },18);

    function getStyle(obj,attr){
        if(obj.currentStyle){
            return obj.currentStyle[attr];
        }else{
            return getComputedStyle(obj,null)[attr];
        }
    }