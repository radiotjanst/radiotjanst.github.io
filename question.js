// Based on code by webdevtrick (https://webdevtrick.com)
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if (answer == "Ja") {
        this.score += 2**this.questionIndex;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text) {
    this.text = text;
    this.choices = ["Ja", "Nej"];
}
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
function showScores() {
    switch (quiz.score) {
      case 0:
        party = "Socialdemokraterna";
        break;
      case 1:
        party = "Liberalerna";
        break;
      case 2:
         party = "Sverigedemokraterna";
        break;
      case 3:
        party = "Kristdemokraterna";
        break;
      case 4:
        party = "Miljöpartiet";
        break;
      case 5:
        party = "Centerpartiet";
        break;
      case 6:
        party = "Vänsterpartiet";
        break;
    case 7:
        party = "Moderaterna"
    }
    var gameOverHTML = "<h1>Resultat</h1>";
    gameOverHTML += "<h2 id='score'> Du sympatiserar mest med " + party + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions
var questions = [
    new Question("Är du miljardär?"),
    new Question("Hatar du invandrare?"),
    new Question("Är du psykopat?"),
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();
