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
var start = true;
var whatQuestion = 0;
var questionNumber = 0;
var points = 0;


// variables to reference DOM elements
var mainPage = document.getElementById("main_page");
var startBtn = document.getElementById("startBtn");
var main = document.querySelector(".main");
var finishPage = document.getElementById("finish_game");
var questionsPage = document.getElementById("questions_page");
var whatQuestion = document.querySelector("#what_question");

var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");

//buttons
var choicesBtn = document.querySelector(".choices_btn");
var nextBtn = document.getElementById("nextbtn");
var submitBtn = document.getElementById("submit-btn");

//timer variables
var timeLeft = document.getElementById("timer");
var secondsLeft = 31;
var timerInt = 0;

finishPage.style.display = "none";

//FUNCTION TO START THE QUIZ
function startQuiz() {
    //hides the main page and shows the questions
    mainPage.style.display = "none";
    finishPage.style.display = "none";
    questionsPage.style.display = "block";
    questionNumber = 0;
    theQuestion();

    //starts timer
    startTimer();

    //if time runs out
    setTimeout(function () {
        mainPage.style.display = "none";
        questionsPage.style.display = "none";
        finishPage.style.display = "block";

    }, 31000);


}

//timer function
function startTimer() {
    var timerInt = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = "Time Remaining: " + secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timerInt);
            timeLeft.textContent = "Ran out of time!";
            // finishGame();

        } else if (questionNumber >= preguntas.length + 1) {
            clearInterval(timerInt);
            // finishGame();

        }
    }, 1000);
}

//displays questions and answers
function theQuestion(questionNumber) {
    for (var i = 0; i < preguntas.length; i++) {

        whatQuestion.textContent = preguntas[i].question;

        answer1.textContent = preguntas[i].choices[0];
        answer2.textContent = preguntas[i].choices[1];
        answer3.textContent = preguntas[i].choices[2];
        answer4.textContent = preguntas[i].choices[3];

        i = questionNumber;
        console.log("Question: #" + i);
    }
}

//checks if the answers is correct
function correctAnswer() {

    //wrong answer deducts 10 seconds from timer
    if (timeLeft >= 10) {
        timeLeft = secondsLeft - 10;

    //correct answer adds 10 points
    } else if (preguntas.choices === preguntas.correct) {
        points = + 10;
        console.log("Points: " + points);


    }
}

// function submitInitials() {

// }



//start quiz button even listener
startBtn.addEventListener("click", startQuiz);

//choices event listener
choicesBtn.addEventListener("click", correctAnswer);

//next button event listener
nextBtn.addEventListener("click", theQuestion);

//submit button even listener
// submitBtn.addEventListener("click", function ());


