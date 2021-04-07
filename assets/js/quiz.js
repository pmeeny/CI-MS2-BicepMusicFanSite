var position = 0,choice, choices, choiceOne, choiceTwo, choiceThree, choiceFour,correctAnswers = 0;
var percentage=0;
var allAnswers = {};
var answerInformation=0;

var h1 = document.getElementsByTagName('time')[0],
    seconds = 0, minutes = 0, hours = 0,
    time;

var shuffledQuestions;

function shuffleQuestions(){
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}


function displayQuestions(){
  console.log(shuffledQuestions)
  if(position >= shuffledQuestions.length){

    $('#quiz_results').html("You got "+correctAnswers+" of "+shuffledQuestions.length+" questions correct")
    $("#test_status").html("Test completed");
    $("#question").hide()
    $("#submit_answer").hide();
    $("#total_time_spent").html(document.getElementById("stopwatch").textContent);
    $(".results_table").show();

    updatePercentage();
    displayQuizResults();
    stopTimer();
    position = 0;
    correctAnswers = 0;
    return false;
  }

$("#test_status").html("Question "+(position+1)+" of "+shuffledQuestions.length);

question = questions[position].question;
choiceOne = shuffledQuestions[position].a;
choiceTwo = shuffledQuestions[position].b;
choiceThree = shuffledQuestions[position].c;
choiceFour = shuffledQuestions[position].d;

$('#question').html("<h3>"+question+"</h3>")

$('#optionAA').html(choiceOne);
$('#optionBB').html(choiceTwo);
$('#optionCC').html(choiceThree);
$('#optionDD').html(choiceFour);

updatePercentage();
}

$("#submit_answer").click(function(){
  checkAnswer();
});


function updatePercentage(){
  percentage = percentage + 10;
  $(".progress-bar").html(percentage + "%");
}

function displayQuizResults(){
    for (var i in allAnswers) {
      if(allAnswers[i].includes("Both answers match")){
        $("#correct_answers").css({"color":"green"})
        $("#correct_answers").append(allAnswers[i]);
        $("#correct_answers").append("<br");
      }
      else{
        $("#incorrect_answers").css({"color":"red"})
        $("#incorrect_answers").append(allAnswers[i]);
        $("#incorrect_answers").append("<br");
      }
    }
  }

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var selected=0; selected<choices.length; selected++){
    if(choices[selected].checked){
      choice = choices[selected].value;
      parent = choices[selected].nextElementSibling.innerHTML;
      console.log(parent);
      console.log(choice);
      console.log(shuffledQuestions[position].answer);
      console.log(shuffledQuestions[position].question);


     /// allAnswers[answerInformation++] = "Question: " + shuffledQuestions[position].question + " : " +
     // "Your answer: " + parent+ " : " +
     // "Correct Answer: " + shuffledQuestions[position].answer

     if(parent == shuffledQuestions[position].answer){
        allAnswers[answerInformation++] = "Question: " + shuffledQuestions[position].question + " : " +
                      "Your answer: " + parent+ " : " +
                     "Correct Answer: " + shuffledQuestions[position].answer  +
                      "Both answers match";                 
      }
      else {
        allAnswers[answerInformation++] = "Question: " + shuffledQuestions[position].question + " : " +
        "Your answer: " + parent+ " : " +
        "Correct Answer: " + shuffledQuestions[position].answer;
      }

}

     // if(parent == shuffledQuestions[position].answer){
      //  allAnswers[answerInformation++] = "Question: " + shuffledQuestions[position].question + " : " +
     //                 "Your answer: " + parent+ " : " +
      //                "Correct Answer: " + shuffledQuestions[position].answer  +
     //                 "Both answers match";                 
     // }
     // else {
     //   allAnswers[answerInformation++] = "Question: " + shuffledQuestions[position].question + " : " +
     //   "Your answer: " + parent+ " : " +
     //   "Correct Answer: " + shuffledQuestions[position].answer;
     // }
  }

  if(parent == shuffledQuestions[position].answer){
    correctAnswers++;
 
  }
  position++;
  displayQuestions();
}


shuffleQuestions()
displayQuestions();
startTimer();

// https://jsfiddle.net/Daniel_Hug/pvk6p/

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    startTimer();
}
function startTimer() {
    time = setTimeout(add, 1000);
}

/* Start button */
//start.onclick = startTimer;

/* Stop button */function stopTimer() {
  console.log("in here")
    clearTimeout(time);
}

/* Clear button */
//clear.onclick = function() {
//    h1.textContent = "00:00:00";
//    seconds = 0; minutes = 0; hours = 0;
//}