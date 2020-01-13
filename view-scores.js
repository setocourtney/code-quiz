$(document).ready(function() {
    var currentScores = [];

    getSavedScores();
  
    function getSavedScores() {
        var savedScores = JSON.parse(localStorage.getItem("highscores"));
        if (savedScores !== null) {
            currentScores = savedScores;
        }
        renderScores();
    };

    function renderScores() {
        console.log(currentScores);
        $("#scores").empty();
        for (i = 0; i < currentScores.length; i++) {
            var scoreli = $("<li>");
            var scoreObject = currentScores[i];
            scoreli.addClass("score-li")
            scoreli.text(scoreObject.initials + "-" + scoreObject.score);
            $("#scores").append(scoreli);
        };
    }

    function clearScores() {
        currentScores = [];
        localStorage.setItem("highscores", JSON.stringify(currentScores));
        getSavedScores();
    }

    $("#clear-scores").on("click", clearScores);

});