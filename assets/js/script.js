// START QUIZ BUTTON
var startQuizBtn = document.querySelector("#button");

// TARGETTING QUESTION BLOCK ELEMENTS

// LANDING PAGE VARIABLES
var nav = document.querySelector('#nav')
var landingPage = document.querySelector("#landing-page");
var timerEl = document.querySelector('#time-display');
var scoreContainer = document.querySelector('#score');
var viewScores = document.querySelector("#view-scores");

// QUESTION PAGE VARIABLES
var questionPage = document.querySelector("#question-page");
var questionTitle = document.querySelector('#question-title');
var questionButtons = document.querySelector('#question-buttons');
var optionOne = document.querySelector('#option-one');
var optionTwo = document.querySelector('#option-two');
var optionThree = document.querySelector('#option-three');
var optionFour = document.querySelector('#option-four');
var questionResultContainer = document.querySelector('#result-answer');
var resultSection = document.querySelector('#result');
var hr = document.querySelector("#hr")


// RESULTS PAGE
var questionResultLastContainer = document.querySelector('#last-result-answer');
var resultsPage = document.querySelector('#results-page');
var lastResult = document.querySelector('#last-result');
var submitScore = document.querySelector("#submit-score");
var scoreInitials = document.querySelector('#initials-input');

// SCORES PAGE
var scoresPage = document.querySelector("#scores-page");
var backButton = document.querySelector("#back-btn");
var clearButton = document.querySelector("#clear-btn");
var savedScoresContainer = document.querySelector("#scores");

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

            // reset the questionResult to empty
            questionResult = "";

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

        i++

        break

        // if (i === 0) {

        //     i++;

        break

        // } else if (i > 0) {

        //     i++;

        //     break;

        // }


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

    // resultSection.style.display = "none";

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

    // populate page with loaded scores
    loadScoresElements();

};

loadScoresElements = function () {

    // clear previous saved score elements  
    savedScoresContainer.innerHTML = "";

    for (n = 0; n < scores.length; n++) {

        numberScore = n + 1

        var scoreElement = document.createElement("p")

        scoreElement.setAttribute("class", "score-entry")

        scoreElement.innerHTML = numberScore + ". " + scores[n].initials + " - " + scores[n].score;

        savedScoresContainer.appendChild(scoreElement);

    }

}

//  ======================================== STORAGE LOGIC ========================================

loadScores = function () {

    var savedScores = localStorage.getItem("dev-quiz-scores");

    // if localstorage is empty - saves scores array as empty
    if (savedScores === null) {

        scores = [];

    } else {

        var savedScoresJSON = JSON.parse(savedScores);

        for (a = 0; a < savedScoresJSON.length; a++) {

            scores.push(savedScoresJSON[a])
        }

    }

}

clearScores = function () {

    // updates scores array to empty
    scores = [];

    // sets localstorage as empty
    localStorage.removeItem("dev-quiz-scores")

    loadScoresElements();

}

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

        localStorage.setItem("dev-quiz-scores", JSON.stringify(scores));

        highScores();

        // resets input field after saving
        scoreInitials.value = "";

    }


}


//  ======================================== STARTER LOGIC  ========================================

loadPage = function () {

    timerEl.textContent = "Time: 0";

    scoresPage.style.display = "none";

    nav.style.display = "block";

    landingPage.style.display = "block";

    resultSection.style.display = "none";

};

// FUNCTION FOR CLEARING THE LANDING PAGE AND CALLING THE ASKQUESTIONS() FUNCTION
startQuiz = function () {

    landingPage.setAttribute("style", "display:none;")

    questionPage.setAttribute("style", "display:block;")

    populateQuestion();

    countdownStart();

};

//  ======================================== PAGE BUTTONS  ========================================
// 

startQuizBtn.addEventListener("click", startQuiz);

questionButtons.addEventListener("click", answerQuestion);

submitScore.addEventListener("click", saveScore);

viewScores.addEventListener("click", highScores);

backButton.addEventListener("click", loadPage);

clearButton.addEventListener("click", clearScores);

//  ======================================== PAGE CALLS ========================================

loadPage();

loadScores();