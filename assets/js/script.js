// START QUIZ BUTTON
var startQuizBtn = document.querySelector("#button");

// TARGETTING QUESTION BLOCK ELEMENTS
var questionTitle = document.querySelector('#question-title');
var questionButtons = document.querySelector('#question-buttons')
var optionOne = document.querySelector('#option-one');
var optionTwo = document.querySelector('#option-two');
var optionThree = document.querySelector('#option-three');
var optionFour = document.querySelector('#option-four');
var resultAnswer = document.querySelector('#result-answer');
var resultSection = document.querySelector('#result')
var questionPage = document.querySelector("#question-page");
var resultsPage = document.querySelector("#results-page");



// FUNCTION FOR COUNTDOWN TIMER

// ======================================== QUESTIONS ========================================

// QUESTION #1
questionOne = function () {

    // populate question
    questionTitle.innerHTML = "Commonly used data types DO Not include:";

    // populate possible responses
    optionOne.innerHTML = "1. " + "strings";
    optionTwo.innerHTML = "2. " + "booleans";
    optionThree.innerHTML = "3. " + "alerts";
    optionFour.innerHTML = "4. " + "numbers";

    // response handeling
    questionButtons.addEventListener('click', function (event) {

        // if correct answer is chosen
        if (event.target.id === "option-three") {

            questionTwo("Correct!")

            // if wrong answer is chosen
        } else {

            questionTwo("Wrong!")

        }

    })
};

// QUESTION #2
questionTwo = function (result) {

    // display if previous answer was correct or incorrect
    resultSection.setAttribute("style", "display:block;");
    resultAnswer.innerHTML = result;

    // populate question
    questionTitle.innerHTML = "The condition in an if / else statement is enclosed with ________.";

    // populate possible responses
    optionOne.innerHTML = "1. " + "quotes";
    optionTwo.innerHTML = "2. " + "curly brackets";
    optionThree.innerHTML = "3. " + "paranthesis";
    optionFour.innerHTML = "4. " + "square brackets";

    // response handeling
    questionButtons.addEventListener('click', function (event) {

        // if correct answer is chosen
        if (event.target.id === "option-three") {

            questionThree("Correct!")

            // if wrong answer is chosen
        } else {

            questionThree("Wrong!")

        }

    })

};

// QUESTION #3
questionThree = function (result) {

    // display if previous answer was correct or incorrect
    resultAnswer.innerHTML = result;

    // populate question
    questionTitle.innerHTML = "Arrays in JavaScript can be used to store ________.";

    // populate possible responses
    optionOne.innerHTML = "1. " + "numbers and string";
    optionTwo.innerHTML = "2. " + "other arrays";
    optionThree.innerHTML = "3. " + "booleans";
    optionFour.innerHTML = "4. " + "all of the above";

    // response handeling
    questionButtons.addEventListener('click', function (event) {

        // if correct answer is chosen
        if (event.target.id === "option-four") {

            questionFour("Correct!")

            // if wrong answer is chosen
        } else {

            questionFour("Wrong!")

        }

    })
};

// QUESTION #4
questionFour = function (result) {

    // display if previous answer was correct or incorrect
    resultAnswer.innerHTML = result;

    // populate question
    questionTitle.innerHTML = "String values must be enclosed within ________ when bein assigned to variables.";

    // populate possible responses
    optionOne.innerHTML = "1. " + "commas";
    optionTwo.innerHTML = "2. " + "curly brackets";
    optionThree.innerHTML = "3. " + "quotes";
    optionFour.innerHTML = "4. " + "paranthesis";

    // response handeling
    questionButtons.addEventListener('click', function (event) {

        // if correct answer is chosen
        if (event.target.id === "option-three") {

            questionFive("Correct!")

            // if wrong answer is chosen
        } else {

            questionFive("Wrong!")

        }

    })
};

// QUESTION #5
questionFive = function (result) {

    // display if previous answer was correct or incorrect
    resultAnswer.innerHTML = result;

    // populate question
    questionTitle.innerHTML = "A very useful tool used during development and debugging for printing content to the debugger is:";

    // populate possible responses
    optionOne.innerHTML = "1. " + "JavaScript";
    optionTwo.innerHTML = "2. " + "terminal/bash";
    optionThree.innerHTML = "3. " + "for loops";
    optionFour.innerHTML = "4. " + "console.log";

    // response handeling
    questionButtons.addEventListener('click', function (event) {

        // if correct answer is chosen
        if (event.target.id === "option-four") {

            resultPage("Correct!")

            // if wrong answer is chosen
        } else {

            resultPage("Wrong!")

        }

    })

};

//  ======================================== RESULTS  ========================================

// QUESTIONS END - SHOW RESULTS
resultPage = function (result) {
    // hide questions section
    questionPage.style.display = "none";

    // display results page
    resultsPage.style.display = "none";


    // display if previous answer was correct or incorrect
    resultAnswer.innerHTML = result;
};

//  ======================================== STARTER LOGIC  ========================================

// G0 THROUGH QUESTIONS
askQuestions = function () {

    // display question box
    questionPage.style.display = "block";

    // calling the first question
    questionOne();

};

// FUNCTION FOR CLEARING THE LANDING PAGE AND CALLING THE ASKQUESTIONS() FUNCTION
startQuiz = function () {

    var landingPage = document.querySelector("#landing-page");

    landingPage.setAttribute("style", "display:none;")

    askQuestions();

    // startTimer()'
};

startQuizBtn.addEventListener("click", startQuiz);