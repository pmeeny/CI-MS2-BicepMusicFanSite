
// Quiz Variables
var position = 0;
var correctAnswers = 0;
var percentage = 0;
var answerInformation=0;
var usersAnswer;
var choices;
var choiceOne;
var choiceTwo;
var choiceThree;
var choiceFour;
var shuffledQuestions;
var allAnswers = [];
allAnswers[0] = [];
allAnswers[1] = [];
allAnswers[2] = [];
allAnswers[3] = [];
allAnswers[4] = [];
allAnswers[5] = [];
allAnswers[6] = [];
allAnswers[7] = [];
allAnswers[8] = [];
allAnswers[9] = [];
var questions;
var question;

// Timer Variables
var timer = document.getElementById("timer");
var seconds = 0;
var minutes = 0;
var time;

/**
 * [shuffleQuestions randomly shuffles the questions shuffledQuestions]
 */
function shuffleQuestions(){
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}

/**
 * [setTopScore Update sessionStorage with topScore key value]
 */
function setTopScore(correctAnswers){
  var getTopScore = sessionStorage.getItem("topScore");
  if(correctAnswers > getTopScore){
    sessionStorage.setItem("topScore", correctAnswers);
  }
}

/**
 * [getTopScore return topScore key value]
 */
 function getTopScore(correctAnswers){
  return sessionStorage.getItem("topScore");
}

/**
 * [displayTopScore Display sessionStorage with topScore key value]
 */
 function displayTopScore(){
   if(sessionStorage.getItem("topScore") == null){
    $("#top_score").hide();
   }
   else{
    $("#top_score").show();
    $("#top_score").text("Top Score: " + sessionStorage.getItem("topScore"));
   }
 }

/**
 * [displayQuestions]
 */
function displayQuestions(){
  $("#error").html("");
  var inputName = "input[name=" + "choices" + "]";
  $(inputName).prop("checked", false);
  if(position >= shuffledQuestions.length){
    $("#overall_result").html("You got "+correctAnswers +"/"+shuffledQuestions.length+" correct");
    setTopScore(correctAnswers);
    displayTopScore();
    $("#test_status").hide();
    $("#question").hide();
    $("#quiz_options").hide();
    $("#submit_answer").hide();
    $(".results_table").show();

    displayQuizResults();
    stopTimer();
    position = 0;
    correctAnswers = 0;
    return false;
  }
displayNewQuestion();
updatePercentage();
}


/**
 * [displayQuestions]
 */
function displayNewQuestion(){
  $("#test_status").html("Question "+(position+1)  +" of "+shuffledQuestions.length);

  question = questions[position].question;
  choiceOne = shuffledQuestions[position].a;
  choiceTwo = shuffledQuestions[position].b;
  choiceThree = shuffledQuestions[position].c;
  choiceFour = shuffledQuestions[position].d;

  $("#question").html(position+1+ ". " +"<span>"+question+"</span>");
  $("#optionA_label").html(choiceOne);
  $("#optionB_label").html(choiceTwo);
  $("#optionC_label").html(choiceThree);
  $("#optionD_label").html(choiceFour);
}

/**
 * [updatePercentage]
 */
function updatePercentage(){
  percentage = percentage + 10;
  $(".progress-bar").html(percentage + "%");
  $(".progress-bar").css("width", percentage+"%")
  .attr("aria-valuenow", percentage);
}

/**
 * [displayQuizResults]
 */
function displayQuizResults(){
    var i=0;
    for (i in allAnswers) {
      if(allAnswers[i][3] == true){
        $("#answers").append("<tr>");
        $("#answers").append("<td class='correct'>" +
        allAnswers[i][0] +"</td>");
        $("#answers").append("<td class='correct'>" +
        allAnswers[i][1] +"</td>");
        $("#answers").append("<td class='correct'>" +
        allAnswers[i][2] +"</td>");
        $("#answers").append("</tr>");
      }
      else{
        $("#answers").append("<tr>");
        $("#answers").append("<td class='incorrect'>" +
        allAnswers[i][0] +"</td>");
        $("#answers").append("<td class='incorrect'>" +
         allAnswers[i][1] +"</td>");
        $("#answers").append("<td class='incorrect'>" +
        allAnswers[i][2] +"</td>");
        $("#answers").append("<tr>");
      }
    }
  }

/**
 * [displayQuizResults]
 */
function checkAnswer(){
  choices = document.getElementsByName("choices");

  for(var selected=0; selected<choices.length; selected++){
    if(choices[selected].checked){
      usersAnswer = choices[selected].nextElementSibling.innerHTML;
      allAnswers[answerInformation][0] = shuffledQuestions[position].question;
      allAnswers[answerInformation][1] = usersAnswer;
      allAnswers[answerInformation][2] = shuffledQuestions[position].answer;

     // Users answer is correct
     if(usersAnswer == shuffledQuestions[position].answer){
        allAnswers[answerInformation][3] = true;
      }
      else {
        allAnswers[answerInformation][3] = false;
      }
      answerInformation++;
    }
  }
  displayCorrectAnswerInGreen();
  if(usersAnswer == shuffledQuestions[position].answer){
    correctAnswers++;
  }
  else{
    displayCorrectAnswerInRed();
  }
  position++;
  waitOneSecondBeforeNextQuestion();
}

/**
 * [waitOneSecondBeforeNextQuestion, wait one second before next question]
 */
function waitOneSecondBeforeNextQuestion(){
setTimeout(function()
    {
      $("#quiz-form .option").each(function() {
            $(this).css("background-color", "white");
    });
      displayQuestions();
  }, 1000);
}

/**
 * [displayCorrectAnswerInGreen, updates label of correct answer]
 */
function displayCorrectAnswerInGreen() {
  $("#quiz-form .option").each(function() {
    if($(this).text().match(shuffledQuestions[position].answer)) {
        $(this).css("background-color", "green");
    }
  });
}

/**
 * [displayCorrectAnswerInRed, updates label of wrongly selected answer]
 */
function displayCorrectAnswerInRed() {
  $("#quiz-form .option").each(function() {
    if($(this).text().match(usersAnswer)) {
        $(this).css("background-color", "red");
    }
  });
}

/**
 * [addTimerDetails, credit: https://jsfiddle.net/Daniel_Hug/pvk6p/]
 */
function addTimerDetails() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
        }
    }
    timer.textContent = "Timer(MM:SS): " + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    startTimer();
}

/**
 * [startTimer, credit: https://jsfiddle.net/Daniel_Hug/pvk6p/]
 */
function startTimer() {
    time = setTimeout(addTimerDetails, 1000);
}

/**
 * [stopTimer, credit: https://jsfiddle.net/Daniel_Hug/pvk6p/]
 */
function stopTimer() {
    clearTimeout(time);
}

/**
 * [submitAnswerClicked]
 */
 $("#submit_answer").click(function submitAnswerClicked(){
  var inputName = "input[name=" + "choices" + "]";
  var radio_buttons = $(inputName);
    if( radio_buttons.filter(":checked").length == 0){
      $("#error").html("Please select one of the options");
      return;
    }
  checkAnswer();


});

shuffleQuestions();
displayTopScore();
displayQuestions();
startTimer();
getTopScore();
