//pull object from local storage
//use JSON to parse scores
//loop through scores and create list items

$(document).ready(function() {
        
    var currentScores = [];

    getSavedScores();
    //renderScores();

    function getSavedScores() {
        var savedScores = JSON.parse(localStorage.getItem("highscores"));
        if (savedScores !== null) {
            currentScores = savedScores;
        }
    };

    function storeScores() {
        localStorage.setItem("highscores", JSON.stringify(savedScores));
    }
});