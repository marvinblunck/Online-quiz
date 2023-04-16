var buttons = document.querySelectorAll(".answer");

var question1 = document.getElementById("question-1");

var question2 = document.getElementById("question-2");

var question3 = document.getElementById("question-3");

var question4 = document.getElementById("question-4");

console.log("hello world");


var gameOver = document.querySelector("#game-over");

var sec = 90;
var timer;
function timer(){
    
     timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').textContent='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            question1.classList.add("hide");
            question2.classList.add("hide");
            question3.classList.add("hide");
            question4.classList.add("hide");
            gameOver.classList.remove("hide")
        }
    }, 1000);
}
timer()

buttons.forEach(button => {
    button.addEventListener("click", function (event) {
        var answer = event.target.dataset.select;
        if (answer === "true") {
            console.log("correct");
        } else {
           sec=sec-10 
           console.log("incorrect");
        }

        var q1Array= Array.from(question1.classList)
        var q2Array= Array.from(question2.classList)
        var q3Array= Array.from(question3.classList)
        var q4Array= Array.from(question4.classList)

        if (!q1Array.includes("hide")) {
            question1.classList.add("hide");

            question2.classList.remove("hide");
        }
        
        else if (!q2Array.includes("hide")) {
            question2.classList.add("hide");
            question3.classList.remove("hide");
        }
        else if (!q3Array.includes("hide")) {
            question3.classList.add("hide")
            question4.classList.remove("hide")
        }
        else if (!q4Array.includes("hide")) {
            question4.classList.add("hide")
            gameOver.classList.remove("hide")
            clearInterval(timer);
        }


        console.log(event.target.dataset.select)
    })
});
// add event listener for save highscore
//set local storage and redirect to html page