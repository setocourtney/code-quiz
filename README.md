# code-quiz

https://setocourtney.github.io/code-quiz/

This is an application for a timed quiz with mulitple choice questions about coding.


  * The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

  * Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

  * Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

  * When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in `localStorage`.

## Contents

    * index.html - landing page, quiz play, and final score display
    * highscores.html - display scores saved to localstorage
    * script.js - javascript to operate quiz
    * view-score.js - javascript to display saved scores
    * questions.js - array of question objects with title, choices, and answer
    * style.css - css supplement to bootstrap