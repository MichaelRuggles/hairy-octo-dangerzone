var red = 0;
var green = 1;
var blue = 2;

var divColor = function(color, id){
  if (color === 0){
   document.getElementById(id).style.backgroundColor="red";
  }
  else if (color == 1){
   document.getElementById(id).style.backgroundColor="green";
  }
  else if (color == 2){
    document.getElementById(id).style.backgroundColor="blue";
  }};

var redClick = function(){
  red += 1;
    if (red == 3){
      red = 0;
    }
    divColor(red, "red");
};

var greenClick = function(){
  green += 1;
    if (green == 3){
      green = 0;
    }
    divColor(green, "green");
  redClick();
};

var blueClick = function(){
  blue += 1;
    if (blue == 3){
      blue = 0;
    }
    divColor(blue, "blue");
  redClick();
  greenClick();
};

var colorCheck = function(){
  if (document.getElementById("goal").innerHTML == "Red"){
    if (red === 0 && green === 0 && blue === 0){
      document.getElementById("goal").innerHTML="Blue";
      document.getElementById("goal").style.color="blue";
      document.getElementById("response").innerHTML="Nice Job!";
      }
    }
  else if (document.getElementById("goal").innerHTML == "Green"){
    if (red == 1 && green == 1 && blue == 1){
      document.getElementById("goal").innerHTML="Red";
      document.getElementById("goal").style.color="Red";
      document.getElementById("response").innerHTML="You're Awesome!";
    }
  }
  else if (document.getElementById("goal").innerHTML == "Blue"){
    if (red == 2 && green == 2 && blue == 2){
      document.getElementById("goal").innerHTML="Green";
      document.getElementById("goal").style.color="green";
      document.getElementById("response").innerHTML="Way to Go!";
    }
  }
 };

$(document).ready(function(){
  $("#red").click(function(){
    redClick();
    colorCheck();
  });
  $("#blue").click(function(){
    blueClick();
    colorCheck();
  });
  $("#green").click(function(){
    greenClick();
    colorCheck();
  });
});