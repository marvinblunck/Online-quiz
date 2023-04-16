console.log("highscore!");
//local storage get item
//dispaly on screen
var score= localStorage.getItem("highscore");
var theHighscore= document.getElementById("the-highscore");
theHighscore.textContent=score;