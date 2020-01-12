$(document).ready(function() {
    var landing = $("#landing");
    var quiz = $("#quiz");
    var gameOver = $("#game-over");
    var responseText = $("#response-text");

    //change interval to increase or decrease difficulty
    var interval = 15;
    //time remaining in function, initialized as number of questions * interval
    var timeLeft;
    //index of current question
    var index;
    //answer of current question
    var answer;
    //current question status - wrong or correct
    var isCorrect;
    //timer function
    var timerInterval;
    var responseCountdown;
    var finalScore;

    resetVars();

    function setTime() {
        timerInterval = setInterval(function() {
            timeLeft--;
            $("#countdown").text(timeLeft);
        
            if(timeLeft === 0) {
            endGame();
            }
        }, 1000);
    };

    function nextQuestion() {
        //test if end of questions, end game
        if(index >= questions.length) {
            endGame();
        } else {

        //clear #question-box
        var questionBox = $("#question-box");
        questionBox.empty();

        //get next question info
        var title = questions[index].title;
        var choices = questions[index].choices;
        answer = questions[index].answer;
        
        //display question
        var currentQuestion = $("<h2>");
        currentQuestion.text(title);
        questionBox.append(currentQuestion);

        //display choices
        var currentChoices = $("<ol>");
        currentChoices.addClass("choices-list");
        questionBox.append(currentChoices);
        for (i = 0; i < choices.length; i++) {
            var choiceButton = $("<li>");
            choiceButton.attr("id", choices[i]);
            choiceButton.addClass("choice-li");
            choiceButton.text(choices[i]);
            currentChoices.append(choiceButton);
        };
        };
    };

    //reset timer, save final score
    function endGame() {
        clearInterval(timerInterval);
        finalScore = timeLeft;
        quiz.addClass("invisible");
        gameOver.removeClass("invisible");
        $("#final-score").text(finalScore);
    };

    function resetVars() {
        timeLeft = questions.length * interval;
        timerInterval = null;
        responseCountdown = null;
        index = 0;
        answer = "";
        isCorrect = false;
        finalScore = 0;
        landing.removeClass("invisible");
        quiz.addClass("invisible");
        gameOver.addClass("invisible");
    };

    //start quiz, initialize timer, view next question
    $("#start").click(function(e) {
        landing.addClass("invisible");
        quiz.removeClass("invisible");
        setTime();
        nextQuestion();        
    });

    //get user response and check if matches answer, decrease timer by interval
    $("#quiz").on("click", function(e) {
        e.preventDefault();
        var userAnswer = e.target.id;
        if(userAnswer !== answer) {;
            isCorrect = false;
            if(timeLeft > interval) {
                timeLeft -= interval;
            } else {
                timeLeft = 0;
                $("#countdown").text(timeLeft);
                endGame();
            } 
        } else {
            isCorrect = true;
            index++;
        }
        displayResponse();
        nextQuestion();
    });

    //displays whether question was wrong or correct for an interval of 5 seconds
    function displayResponse() {
        clearTimeout(responseCountdown);
        if(isCorrect) {
            responseText.text("Correct!");
        } else {
            responseText.text("Wrong!");
        }
        responseCountdown = setTimeout(function() {
            responseText.empty();
        }, 1000);
    };

    //saves intials and score as highscores object in local storage
    $("#save-score").on("click", function(e) {
        e.preventDefault();
        var userInitials = document.querySelector("#user-initials").value;
        if(userInitials !== "") {
            var newScore = {
                initials: userInitials,
                score: $("#final-score").text()
            };
            var savedScores = JSON.parse(localStorage.getItem("highscores"));
            savedScores.push(newScore);
            localStorage.setItem("highscores", JSON.stringify(savedScores));
            window.location.href = "highscores.html";
        };
    });
});

