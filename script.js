$(document).ready(function() {
    var landing = $("#landing");
    var quiz = $("#quiz");
    var gameOver = $("#game-over"); 

    //change interval to increase or decrease difficulty
    var interval = 15;
    var timeLeft = questions.length * interval;
    var index = 0;
    var userAnswer = "";
    var title = "";
    var choices = "";
    var answer = "";
    var timerInterval;

    if(landing.hasClass("invisible")) {
        landing.removeClass("invisible");
    };
    quiz.addClass("invisible");
    gameOver.addClass("invisible");

    function setTime() {
        timerInterval = setInterval(function() {
            timeLeft--;
            $("#countdown").text(timeLeft);
        
            if(timeLeft === 0) {
            endGame();
            }
        }, 1000);
        }

    function nextQuestion() {
        //test if end of questions, end game
        if(index >= questions.length) {
            endGame();
        } else {

        //clear #quiz
        quiz.empty();

        //get next question info
        title = questions[index].title;
        choices = questions[index].choices;
        answer = questions[index].answer;
        
        //display question
        var currentQuestion = $("<h2>");
        currentQuestion.text(title);
        quiz.append(currentQuestion);

        //display choices
        var currentChoices = $("<ol>");
        currentChoices.addClass("choices-list");
        quiz.append(currentChoices);
        for (i = 0; i < choices.length; i++) {
            var choiceButton = $("<li>");
            choiceButton.attr("id", choices[i]);
            choiceButton.addClass("choice-li");
            choiceButton.text(choices[i]);
            currentChoices.append(choiceButton);
        };
        };
    };

    function endGame() {
        clearInterval(timerInterval);
        quiz.addClass("invisible");
        gameOver.removeClass("invisible");
        $("#final-score").text(timeLeft);
        resetVars();
    };

    function resetVars() {
        timeLeft = questions.length * interval;
        index = 0;
        userAnswer = "";
        title = "";
        choices = "";
        answer = "";
        isGameOver = false;
    }

    $("#start").click(function(e) {
        landing.addClass("invisible");
        quiz.removeClass("invisible");
        setTime();
        nextQuestion();        
    });

    //get user response and check if matches answer, decrease timer by interval
    $("#quiz").on("click", function(e) {
        userAnswer = e.target.id;
        console.log(userAnswer);
        var response = $("<div>")
        response.addClass("response")
        if(userAnswer !== answer) {;
            if(timeLeft > interval) {
                timeLeft -= interval;
            } else {
                timeLeft = 0;
                $("#countdown").text(timeLeft);
                endGame();
            }
            response.text("Wrong!");    
        } else {
            response.text("Correct!");
            index++;
        }
        $("#quiz").append(response);
        console.log(timeLeft);
        nextQuestion();
    });

    $("#save-score").on("submit", function(e) {
        e.preventDefault();
        var userInitials = $("#user-intials").val();
        console.log(userInitials);
        if(userInitials === "") {
            return;
        } else {
            var newScore = {
                initials: userInitials,
                score: $("#final-score").text()
            };
            console.log(newScore);
            var savedScores = JSON.parse(localStorage.getItem("highscores"));
            savedScores.push(newScore);
            localStorage.setItem("highscores", JSON.stringify(savedScores));
            //window.location.href = "highscores.html";
        }
    });
});

//seperate pages
//make global variables
//fix save score
//write clear scores
