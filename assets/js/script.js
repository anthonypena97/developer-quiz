// START QUIZ BUTTON
var startQuizBtn = document.querySelector("#button");

// TARGETTING QUESTION BLOCK ELEMENTS
var landingPage = document.querySelector("#landing-page");
var questionPage = document.querySelector("#question-page");
var resultsPage = document.querySelector("#results-page");

var questionTitle = document.querySelector('#question-title');
var questionButtons = document.querySelector('#question-buttons')
var optionOne = document.querySelector('#option-one');
var optionTwo = document.querySelector('#option-two');
var optionThree = document.querySelector('#option-three');
var optionFour = document.querySelector('#option-four');

var questionResultContainer = document.querySelector('#result-answer');
var questionResultLastContainer = document.querySelector('#last-result-answer');
var resultSection = document.querySelector('#result')
var lastResult = document.querySelector('#last-result')
var timerEl = document.querySelector('#time-display');

// ======================================== QUIZ DATA ========================================

var questions = [
    {
        q: 'Commonly used data types DO Not include:',
        a: 'alerts',
        one: "strings",
        two: "booleans",
        three: "alerts",
        four: "numbers"
    },
    {
        q: 'The condition in an if / else statement is enclosed with ________.',
        a: 'paranthesis',
        one: "quotes",
        two: "curly brackets",
        three: "paranthesis",
        four: "square brackets"
    },
    {
        q: 'Arrays in JavaScript can be used to store ________.',
        a: 'all of the above',
        one: "numbers and strings",
        two: "other arrays",
        three: "booleans",
        four: "all of the above"
    },
    {
        q: 'String values must be enclosed within ________ when bein assigned to variables.',
        a: 'quotes',
        one: "commas",
        two: "curly brackets",
        three: "quotes",
        four: "paranthesis"
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: 'console.log',
        one: "JavaScript",
        two: "terminal/bash",
        three: "for loops",
        four: "console.log"
    }
]

// ======================================== TIMER ========================================

var countdown;

var timLeft;

countdownStart = function () {

    timeLeft = 60;

    countdown = setInterval(function () {

        if (timeLeft > 0) {

            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;

        } else if (timeLeft === 0) {

            timerEl.textContent = "Time: 0";
            clearInterval(countdown);
            resultPage();


        };

    }, 1000)

}

countdownStop = function () {
    clearInterval(countdown);
}

// ======================================== QUESTIONS ========================================

var i = 0;
var correctAnswer = "";
var questionResult = "";

// ITERATE THROUGH QUESTIONS
populateQuestion = function () {

    for (; i <= questions.length;) {

        // console.log(i);

        if (i === questions.length) {
            // console.log("done!");

            resultPage();

            i = 0;

            break;
        }

        // populate question
        questionTitle.innerHTML = questions[i].q;

        // populate possible responses
        optionOne.innerHTML = "1. " + questions[i].one;
        optionTwo.innerHTML = "2. " + questions[i].two;
        optionThree.innerHTML = "3. " + questions[i].three;
        optionFour.innerHTML = "4. " + questions[i].four;

        correctAnswer = questions[i].a;

        i++;

        break;

    }

};

// LOGIC FOR USER ANSWERING QUESTION PROMPTS
answerQuestion = function (event) {
    var chosenButton = event.target.innerHTML.slice(3)

    // console.log(chosenButton);

    if (chosenButton === correctAnswer) {

        // declares result variable as user answered correctly
        questionResult = "Correct!"

        // iterate to next question in array
        populateQuestion();

        // displays result from previous question on page
        resultSection.style.display = "block";
        questionResultContainer.innerHTML = questionResult

    } else {

        // declares result variable as user answered incorrectly
        questionResult = "Wrong!"

        // iterate to next question in array

        populateQuestion();

        // displays result from previous question on page

        resultSection.style.display = "block";
        questionResultContainer.innerHTML = questionResult

    }
};


//  ======================================== RESULTS ========================================

// QUESTIONS END - SHOW RESULTS
resultPage = function (result) {

    // if result page pops up before last question is answered
    if (!result) {

        lastResult.style.display = "none"

        // hide questions section
        questionPage.style.display = "none";

        // display results page
        resultsPage.style.display = "block";


        // displays the last question response on result page
    } else if (result) {

        // hide questions section
        questionPage.style.display = "none";

        // display results page
        resultsPage.style.display = "block";

        // display if previous answer was correct or incorrect
        resultAnswerLast.innerHTML = questionResult;

    }

    countdownStop();

};

//  ======================================== STARTER LOGIC  ========================================


// FUNCTION FOR CLEARING THE LANDING PAGE AND CALLING THE ASKQUESTIONS() FUNCTION
startQuiz = function () {

    landingPage.setAttribute("style", "display:none;")

    questionPage.setAttribute("style", "display:block;")

    populateQuestion();

    countdownStart();
};

startQuizBtn.addEventListener("click", startQuiz);

questionButtons.addEventListener("click", answerQuestion);