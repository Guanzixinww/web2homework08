	var box = document.getElementById('box');
	var oNavlist = document.getElementById('famous').children;
	var slider = document.getElementById('slider');
	var left = document.getElementById('toLeft');
	var right = document.getElementById('toRight');
	var index = 1;
	var timer;
	var isMoving = false;
	box.onmouseover = function(){
		animate(left,{opacity:50})
		animate(right,{opacity:50})
		clearInterval(timer)
	}
	box.onmouseout = function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer = setInterval(next,3000);
	}
	right.onclick = next;
	left.onclick = prev;
	for(var i = 0;i < oNavlist.length;i++){
		oNavlist[i].index = i;
		oNavlist[i].onclick = function(){
			index = this.index + 1;
			navmove();
			animate(slider,{left:-1000*index});
		}
	}
	function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index++;
		navmove();
		animate(slider,{left:-1000*index},function(){
			if(index == 6){
				slider.style.left = '-1000px';
				index = 1;
			}
			isMoving = false;
		});
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoing = true;
		index--;
		navmove();
		animate(slider,{left:-1000*index},function(){
			if(index == 0){
				slider.style.left = '-6000px';
				index = 5;
			}
			isMoving = false;
		});
	}
	function navmove(){
		for(var i = 0;i < oNavlist.length;i++){
			oNavlist[i].className = " ";
		}
		if(index > 5){
			oNavlist[0].className = "active";
		}
		else if(index <= 0){
			oNavlist[4].className = "active";
		}
		else{
			oNavlist[index - 1].className = "active";
		}
	}
	timer = setInterval(next,3000);
