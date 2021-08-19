// START QUIZ BUTTON
var startQuizBtn = document.querySelector("#button");

// TARGETTING QUESTION BLOCK ELEMENTS

// LANDING PAGE VARIABLES
var nav = document.querySelector('#nav')
var landingPage = document.querySelector("#landing-page");
var timerEl = document.querySelector('#time-display');
var scoreContainer = document.querySelector('#score');

// QUESTION PAGE VARIABLES
var questionPage = document.querySelector("#question-page");
var questionTitle = document.querySelector('#question-title');
var questionButtons = document.querySelector('#question-buttons');
var optionOne = document.querySelector('#option-one');
var optionTwo = document.querySelector('#option-two');
var optionThree = document.querySelector('#option-three');
var optionFour = document.querySelector('#option-four');
var questionResultContainer = document.querySelector('#result-answer');
var questionResultLastContainer = document.querySelector('#last-result-answer');

// RESULTS PAGE
var resultsPage = document.querySelector('#results-page');
var resultSection = document.querySelector('#result');
var lastResult = document.querySelector('#last-result');
var submitScore = document.querySelector("#submit-score");
var scoreInitials = document.querySelector('#initials-input');

// SCORES PAGE
var scoresPage = document.querySelector("#scores-page");

// STORAGE
var scores = [];

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
var timeLeft;
var score;


countdownStart = function () {

    timeLeft = 60;

    countdown = setInterval(function () {

        // console.log("function, ", timeLeft)

        if (timeLeft > 0) {

            timerEl.textContent = "Time: " + timeLeft;
            timeLeft--;

        } else if (timeLeft <= 0) {

            timerEl.textContent = "Time: 0";

            countdownStop();
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

        // logic for button click on last question - calls the result page
        if (i === questions.length) {

            resultPage(questionResult);

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

    // compares user choice to the correct answer for corresponding question object

    if (chosenButton === correctAnswer) {

        // declares result variable as user answered correctly
        questionResult = "Correct!"

        // iterate to next question in array
        populateQuestion();

        // displays result from previous question on page
        resultSection.style.display = "block";
        questionResultContainer.innerHTML = questionResult

    } else {

        // console.log("input,", timeLeft)

        // deduct time when question is answered wrong
        timeLeft = timeLeft - 15;

        // console.log("output, ", timeLeft)

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

    // push the current timeLeft into score variable
    score = timeLeft;

    if (score <= 0) {

        scoreContainer.innerHTML = "Your final score is 0 !";

    } else if (score > 0) {

        scoreContainer.innerHTML = "Your final score is " + score + "!";

    }

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
        questionResultLastContainer.innerHTML = questionResult

    }

    // a delay in order to let timer update one last time
    setTimeout(countdownStop, 1000)

};

//  ======================================== HIGH SCORES  ========================================

highScores = function () {


    // clear pages
    nav.style.display = "none";

    landingPage.style.display = "none";

    questionPage.style.display = "none";

    resultsPage.style.display = "none";

    // show high score page elements
    scoresPage.style.display = "block";

}


//  ======================================== STORAGE  ========================================

saveScore = function () {

    let userInitials = scoreInitials.value.toUpperCase();

    // input validation
    if (!userInitials) {

        alert("Please enter your initials!")

    } else {

        let saveUser = {
            initials: userInitials,
            score: score
        };

        scores.push(saveUser);

        // console.log(scores);

        localStorage.setItem("scores", JSON.stringify(scores));

        highScores();

    }


}


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

submitScore.addEventListener("click", saveScore);