var position = 0,choice, choices, choiceOne, choiceTwo, choiceThree, choiceFour,correctAnswers = 0;
var percentage=0;
var allAnswers = {};

var h1 = document.getElementsByTagName('time')[0],
    seconds = 0, minutes = 0, hours = 0,
    time;

var shuffledQuestions;

function shuffleQuestions(){
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}


function renderQuestion(){
  console.log(shuffledQuestions)
  if(position >= shuffledQuestions.length){

    $('#quiz_results').html("You got "+correctAnswers+" of "+shuffledQuestions.length+" questions correct")
    $("#test_status").html("Test completed");
    $("#question").hide()
    $("#submit_answer").hide();
  
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
  console.log(shuffledQuestions)

  $('#question').html("<h3>"+question+"</h3>")

  $('#optionA').html("<label> <input type='radio' name='choices' value='a'> "+choiceOne+"</label><br>");
  $('#optionB').html("<label> <input type='radio' name='choices' value='b'> "+choiceTwo+"</label><br>");
  $('#optionC').html("<label> <input type='radio' name='choices' value='c'> "+choiceThree+"</label><br>");
  $('#optionD').html("<label> <input type='radio' name='choices' value='d'> "+choiceFour+"</label><br>");
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
    $("#correct_answers").append(allAnswers[i]);
    $("#correct_answers").append("<br");
  }
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
      parent = choices[i].parentNode.innerText.trim();
      console.log(parent);
      console.log(choice);
      console.log(shuffledQuestions[position].answer);
      console.log(shuffledQuestions[position].question);

      allAnswers[i] = "Question: " + shuffledQuestions[position].question + " : " +
                      "Your answer: " + parent+ " : " +
                      "Correct Answer: " + shuffledQuestions[position].answer +

                      "Time spent: " + document.getElementById("stopwatch").textContent;

    }
  }

  if(parent == shuffledQuestions[position].answer){
    correctAnswers++;
 
  }
  else{
    // store the wrong answers
  }
  position++;
  renderQuestion();
}


shuffleQuestions()
renderQuestion();
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