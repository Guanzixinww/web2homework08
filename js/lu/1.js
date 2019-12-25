var select1 = document.getElementById("select1");
var select2 = document.getElementById("select2");

select1.onclick = function(){
  var select1 = document.getElementById("select1");
  var history = document.getElementById("history");
  var character = document.getElementById("character");
  history.style.display = "block";
  character.style.display = "none";
  select1.style.background = "#F5DEB3";
  select2.style.background = "#FFEFD5";
}
select2.onclick = function(){
  var select2 = document.getElementById("select2");
  var history = document.getElementById("history");
  var character = document.getElementById("character");
  history.style.display = "none";
  character.style.display = "block";
  select1.style.background = "#FFEFD5";
  select2.style.background = "#F5DEB3";
}

story1.onmouseover = function(){
  var story1 = document.getElementById("story1");
  var story2 = document.getElementById("story2");
  var story3 = document.getElementById("story3");
  var right1 = document.getElementById("right1");
  var people1 = document.getElementsByClassName("people")[0];
  story1.style.width = "92%";
  story1.style.background = "#CD853F";
  story2.style.display = "none";
  story3.style.display = "none";
  people1.style.display = "none";
  right1.style.display = "block";
}
story1.onmouseout = function(){
  var story1 = document.getElementById("story1");
  var story2 = document.getElementById("story2");
  var story3 = document.getElementById("story3");
  var right1 = document.getElementById("right1");
  var people1 = document.getElementsByClassName("people")[0];
  story1.style.width = "28%";
  story1.style.backgroundImage = "url('././images/lu/11.JFIF')";
  story2.style.display = "block";
  story3.style.display = "block";
  people1.style.display = "block";
  right1.style.display = "none";
}

story2.onmouseover = function(){
  var story1 = document.getElementById("story1");
  var story2 = document.getElementById("story2");
  var story3 = document.getElementById("story3");
  var right2 = document.getElementById("right2");
  var people2 = document.getElementsByClassName("people")[1];
  story2.style.width = "92%";
  story2.style.background = "#CD853F";
  story1.style.display = "none";
  story3.style.display = "none";
  people2.style.display = "none";
  right2.style.display = "block";
}
story2.onmouseout = function(){
  var story1 = document.getElementById("story1");
  var story2 = document.getElementById("story2");
  var story3 = document.getElementById("story3");
  var right2 = document.getElementById("right2");
  var people2 = document.getElementsByClassName("people")[1];
  story2.style.width = "28%";
  story2.style.backgroundImage = "url('././images/lu/12.JFIF')";
  story1.style.display = "block";
  story3.style.display = "block";
  people2.style.display = "block";
  right2.style.display = "none";
}

story3.onmouseover = function(){
  var story1 = document.getElementById("story1");
  var story2 = document.getElementById("story2");
  var story3 = document.getElementById("story3");
  var right3 = document.getElementById("right3");
  var people3 = document.getElementsByClassName("people")[2];
  story3.style.width = "92%";
  story3.style.background = "#CD853F";
  story1.style.display = "none";
  story2.style.display = "none";
  people3.style.display = "none";
  right3.style.display = "block";
}
story3.onmouseout = function(){
  var story1 = document.getElementById("story1");
  var story2 = document.getElementById("story2");
  var story3 = document.getElementById("story3");
  var right3 = document.getElementById("right3");
  var people3 = document.getElementsByClassName("people")[2];
  story3.style.width = "28%";
  story3.style.backgroundImage = "url('././images/lu/13.JFIF')";
  story1.style.display = "block";
  story2.style.display = "block";
  people3.style.display = "block";
  right3.style.display = "none";
}