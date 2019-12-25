var box = document.getElementById("box");
    var oNavlist = document.getElementById("na").children;
    var slider = document.getElementById("slider");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var p1 = document.getElementById("p1");
    var index = 1;
    var timer;
    var isMoving = false;
    var tag = 1;
    
    
    function next(){
        if(isMoving){
            return;
        }
        isMoving = true;
        index++;
        navChange();
        animate(slider,{left:-700*index},function(){
            if(index > 5){
                slider.style.left="-700px";
                index = 1;
            }
            isMoving = false;
        });     
    }

    function prev(){
        if(isMoving){
            return;
        }
        isMoving = true;
        index--;
        navChange();
        animate(slider,{left:-1200*index},function(){
            if(index === 0){
                slider.style.left="-3500px";
                index = 5;
            }
            isMoving = false;
        });
    }

    timer  = setInterval(next,3000);
    
    box.onmouseover = function(){
        animate(left,{opacity:50});
        animate(right,{opacity:50});
        clearInterval(timer);
    }

    box.onmouseout = function(){
        animate(left,{opacity:0});
        animate(right,{opacity:0});
        timer = setInterval(next,3000);
    }

    right.onclick = next;
    left.onclick = prev;

    for(var i = 0; i < oNavlist.length ;i++){
        oNavlist[i].idx = i;
        oNavlist[i].onclick = function(){
            index = this.idx + 1;
            navChange();
            animate(slider,{left:-700*index});
        }
    }

    function navChange(){
        for(var i = 0;i < oNavlist.length ;i++){
            oNavlist[i].style.color = "black";
            oNavlist[i].style.background = "#cccccc";
        }
        if(index > 5){
            oNavlist[0].style.color="white";
            oNavlist[0].style.background="red";
        }
        else if(index === 0){
            oNavlist[4].style.color="white";
            oNavlist[4].style.background="red";
        }
        else{
            oNavlist[index-1].style.color="white";
            oNavlist[index-1].style.background="red";
        }
    }
//川菜介绍
    var flag = 0;
    var tu1 = document.getElementById("tu1");
    var tu2 = document.getElementById("tu2");
    var tu3 = document.getElementById("tu3");

        tu1.onclick = function(){
            tu1.style.height = "350px";
            tu1.style.marginTop = "-200px";
            
             tu1.onclick = function(){
                tu1.style.height = "150px";
                tu1.style.marginTop = "0px";

            }  
        }
    
     
    tu2.onclick = function(){
        var h1 = tu2.style.height;
        tu2.style.height = "350px";
        tu2.style.marginTop = "-200px";
        tu2.onclick = function(){
            tu2.style.height = h1;
            tu2.style.marginTop = "0px";
        }
    }

    tu3.onclick = function(){
        var h2 = tu3.style.height;
        tu3.style.height = "350px";
        tu3.style.marginTop = "-200px";
        tu3.onclick = function(){
            tu3.style.height = h2;
            tu3.style.marginTop = "0px";
        }
    }

//十大经典川菜

    var ph1=document.getElementById("ph1");
    var ph2=document.getElementById("ph2");
    var ig1 = document.getElementById("ig1");
    var ig2 = document.getElementById("ig2");
    ph1.onclick = function(){
        ig1.setAttribute("src","images/chuan/huo.png");
        ig2.setAttribute("src","images/chuan/cai1.png"); 
    }

    ph2.onclick = function(){
        ig1.setAttribute("src","images/chuan/shui.jpg"); 
        ig2.setAttribute("src","images/chuan/cai2.png"); 
    }
    
    ph3.onclick = function(){
        ig1.setAttribute("src","images/chuan/hui.jpg"); 
        ig2.setAttribute("src","images/chuan/cai3.png"); 
    }

    ph4.onclick = function(){
        ig1.setAttribute("src","images/chuan/ma.png"); 
        ig2.setAttribute("src","images/chuan/cai4.png"); 
    }

    ph5.onclick = function(){
        ig1.setAttribute("src","images/chuan/yu.jpg"); 
        ig2.setAttribute("src","images/chuan/cai5.png"); 
    }

    ph6.onclick = function(){
        ig1.setAttribute("src","images/chuan/rou.jpg"); 
        ig2.setAttribute("src","images/chuan/cai6.png"); 
    }

    ph7.onclick = function(){
        ig1.setAttribute("src","images/chuan/la.jpg"); 
        ig2.setAttribute("src","images/chuan/cai7.png"); 
    }

    ph8.onclick = function(){
        ig1.setAttribute("src","images/chuan/suan.jpg"); 
        ig2.setAttribute("src","images/chuan/cai8.png"); 
    }

    ph9.onclick = function(){
        ig1.setAttribute("src","images/chuan/gong.png"); 
        ig2.setAttribute("src","images/chuan/cai9.png"); 
    }

    ph10.onclick = function(){
        ig1.setAttribute("src","images/chuan/cui.jpg"); 
        ig2.setAttribute("src","images/chuan/cai10.png"); 
    }







  //川菜特色
        var p1 = document.getElementById("p1").getElementsByTagName("p");
        var l1 = document.getElementById("p1");
        var old1 = p1[0].innerHTML;
        l1.onmouseover = function(){
            p1[0].innerHTML = "鱼香茄子";
        }
        l1.onmouseout = function(){
            p1[0].innerHTML = old1;
        }


        var l2 = document.getElementById("p2");
        var p2 = document.getElementById("p2").getElementsByTagName("p");
        var old2 = p2[0].innerHTML;
        l2.onmouseover = function(){
            p2[0].innerHTML = "麻辣鱼丁";
        }
        l2.onmouseout = function(){
            p2[0].innerHTML = old2;
        }


        var l3 = document.getElementById("p3");
        var p3 = document.getElementById("p3").getElementsByTagName("p");
        var old3 = p3[0].innerHTML;
        l3.onmouseover = function(){
            p3[0].innerHTML = "辣子鸡丁";
        }
        l3.onmouseout = function(){
            p3[0].innerHTML = old3;
        }


        var l4 = document.getElementById("p4");
        var p4 = document.getElementById("p4").getElementsByTagName("p");
        var old4 = p4[0].innerHTML;
        l4.onmouseover = function(){
            p4[0].innerHTML = "陈皮牛肉";
        }
        l4.onmouseout = function(){
            p4[0].innerHTML = old4;
        }

        var l5 = document.getElementById("p5");
        var p5 = document.getElementById("p5").getElementsByTagName("p");
        var old5 = p5[0].innerHTML;
        l5.onmouseover = function(){
            p5[0].innerHTML = "椒麻肚片";
        }
        l5.onmouseout = function(){
            p5[0].innerHTML = old5;
        }

        var l6 = document.getElementById("p6");
        var p6 = document.getElementById("p6").getElementsByTagName("p");
        var old6 = p6[0].innerHTML;
        l6.onmouseover = function(){
            p6[0].innerHTML = "怪味鸭片";
        }
        l6.onmouseout = function(){
            p6[0].innerHTML = old6;
        }

        var l7 = document.getElementById("p7");
        var p7 = document.getElementById("p7").getElementsByTagName("p");
        var old7 = p7[0].innerHTML;
        l7.onmouseover = function(){
            p7[0].innerHTML = "酸辣汤";
        }
        l7.onmouseout = function(){
            p7[0].innerHTML = old7;
        }

        var l8 = document.getElementById("p8");
        var p8 = document.getElementById("p8").getElementsByTagName("p");
        var old8 = p8[0].innerHTML;
        l8.onmouseover = function(){
            p8[0].innerHTML = "美味川菜";
        }
        l8.onmouseout = function(){
            p8[0].innerHTML = old8;
        }



        var kk1 = document.getElementById("kk1");
        var kk2 = document.getElementById("kk2");
        var kk3 = document.getElementById("kk3");
        var kk4 = document.getElementById("kk4");
        var kk5 = document.getElementById("kk5");
        var kk6 = document.getElementById("kk6");
        var kk7 = document.getElementById("kk7");
        var kk8 = document.getElementById("kk8");

        var pian1 = document.getElementById("pian1");
        var pian2 = document.getElementById("pian2");
        var pian3 = document.getElementById("pian3");
        var pian4 = document.getElementById("pian4");
        kk1.onclick = function(){
            pian1.setAttribute("src","images/chuan/kuan.jpg"); 
        }
        kk2.onclick = function(){
            pian1.setAttribute("src","images/chuan/qing.jpg"); 
        }
        kk3.onclick = function(){
            pian2.setAttribute("src","images/chuan/wu.jpg"); 
        }
        kk4.onclick = function(){
            pian2.setAttribute("src","images/chuan/guo.jpg"); 
        }
        kk5.onclick = function(){
            pian3.setAttribute("src","images/chuan/e.jpg"); 
        }
        kk6.onclick = function(){
            pian3.setAttribute("src","images/chuan/fo.jpg"); 
        }
        kk7.onclick = function(){
            pian4.setAttribute("src","images/chuan/ji.jpg"); 
        }
        kk8.onclick = function(){
            pian4.setAttribute("src","images/chuan/wang.jpg"); 
        }