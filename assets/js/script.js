// 10 QUESTIONS
const preguntas = [
    {
        question: "What does HTML stand for?",
        choices: ["Hypertext Markup Language", "Hypercode Marketing Language", "Hyper Markdown Language", "None of the above"],
        correct: "Hypertext Markup Language",
    },

    {
        question: "What is the value type of Boolean",
        choices: ["True", "False", "True & False", "One"],
        correct: "True & False",
    },

    {
        question: "What is used for storing and transporting data?",
        choices: ["Semantics", "Java", "CSS", "JSON"],
        correct: "JSON",
    },

    {
        question: "An Array is enclosed within ______.",
        choices: ["Curly brackets { }", "Parentheses ( )", "Square brackets [ ]", "Quote marks ' '"],
        correct: "Square brackets [ ]",
    },

    {
        question: "Which method adds to the end of an Array",
        choices: [".push()", ".sort()", ".unshift()", ".pop()"],
        correct: ".push()",
    },

    {
        question: "Which method adds to the end of an Array",
        choices: [".push()", ".sort()", ".unshift()", ".pop()"],
        correct: ".push()",
    },

    {
        question: "Which is not a Logical Operator:",
        choices: ["&&", "//", "||", "!"],
        correct: "//",
    },

    {
        question: "What does CSS stand for?",
        choices: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Cool Style Sheets"],
        correct: "Cascading Style Sheets",
    },

    {
        question: "Which one of the following is a function expression?",
        choices: ["var colors = function()", "function colors()", "Both are correct", "None of the above"],
        correct: "var colors = function()",
    },

    {
        question: "What method outputs a message to the web console?",
        choices: ["const = ", "alert()", "function()", "console.log()"],
        correct: "console.log()",
    },

]

// variables to keep track of quiz state
var currentQuestion = 0;
var time = 10;
var start = true;

var whatQuestion = 0;
var questionNumber = 0;


// variables to reference DOM elements
var mainPage = document.getElementById("main_page");
var startBtn = document.getElementById("startBtn");
var main = document.querySelector(".main");

//question variables
var questionsPage = document.getElementById("questions_page");
var whatQuestion = document.querySelector("#what_question");

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

var choicesBtn = document.querySelector(".choices_btn");

//timer variables
var timeLeft = document.getElementById("timer");
var secondsLeft = 31;

/* FUNCTION TO START THE QUIZ */
function startQuiz(event) {
    //hides the main page and shows the questions
    mainPage.style.display = "none";
    questionsPage.style.display = "block";
    questionNumber = 0;
    theQuestion(questionNumber);

    //timer function
    startTimer();

}

function startTimer() {
    var timerInt = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInt);
            timeLeft.textContent = "Ran out of time!";
            //gameover

        } else if (questionNumber >= preguntas.length + 1) {
            clearInterval(timerInt);
            //gameover

        }
    }, 1000);
}

function theQuestion(n) {
    whatQuestion.textContent = preguntas[n].question;
    questionNumber = n;
    answer1.textContent = preguntas[n].choices[0];
    answer2.textContent = preguntas[n].choices[1];
    answer3.textContent = preguntas[n].choices[2];
    answer4.textContent = preguntas[n].choices[3];

}

// //Event Listener to start the quiz
startBtn.addEventListener("click", startQuiz);
choicesBtn.addEventListener("click", function);

/* FUNCTION TO GET/SHOW EACH QUESTION */
for (let index = 0; index < preguntas.length; index++) {
    var newQuestion = preguntas;
    console.log(newQuestion);

}

// // /* FUNCTION FOR CLICKING A QUESTION */
// function questionClick(event) {

//     // if the clicked element is not a choice button, do nothing.
//     if (something) {

//     }

// //   // check if user guessed wrong
// //     if (something) {
// //         penalize time

// //         // display new time on page

// //         // give them feedback, letting them know it's wrong
// //     } else {
// //         // give them feedback, letting them know it's right
// //     }

//     // flash right/wrong feedback on page for a short period of time

//     // move to next question

//     // check if we've run out of questions
//     // if so, end the quiz
//     // else, get the next question
// }

// // /* FUNCTION TO END THE QUIZ */
// // function quizEnd() {
// //     // stop timer

//     // show end screen

//     // show final score

//     // hide questions section


// // /* FUNCTION FOR UPDATING THE TIME */
// // function clockTick() {
// //     // update time

// //     // check if user ran out of time
// // }

// // function saveHighscore() {
// //     // get value of input box - for initials

// //     // make sure value wasn't empty
// //     // get saved scores from localstorage, or if not any, set to empty array

// //     // format new score object for current user

// //     // save to local storage

// //     // redirect to next page
// // }

// // /* CLICK EVENTS */
// //     // user clicks button to submit initials

// //     // user clicks button to start quiz

// //     // user clicks on element containing choices