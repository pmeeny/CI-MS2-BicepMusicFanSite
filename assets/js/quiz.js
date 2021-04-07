var position = 0,choice, choices, chA, chB, chC, correct = 0;
var percentage=0;

var shuffledQuestions;

function shuffleQuestions(){
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}


function renderQuestion(){
  console.log(shuffledQuestions)
  if(position >= shuffledQuestions.length){

    $('#quiz_results').html("You got "+correct+" of "+shuffledQuestions.length+" questions correct")
    $("#test_status").html("Test completed");
    $("#question").hide()
    position = 0;
    correct = 0;
    return false;
  }

  $("#test_status").html("Question "+(position+1)+" of "+shuffledQuestions.length);

 
  question = questions[position].question;
  chA = shuffledQuestions[position].a;
  chB = shuffledQuestions[position].b;
  chC = shuffledQuestions[position].c;
  chD = shuffledQuestions[position].d;
  console.log(shuffledQuestions)

  $('#question').html("<h3>"+question+"</h3>")

  $('#optionA').html("<label> <input type='radio' name='choices' value='a'> "+chA+"</label><br>");
  $('#optionB').html("<label> <input type='radio' name='choices' value='b'> "+chB+"</label><br>");
  $('#optionC').html("<label> <input type='radio' name='choices' value='c'> "+chC+"</label><br>");
  $('#optionD').html("<label> <input type='radio' name='choices' value='d'> "+chD+"</label><br>");
}

$("#submit_answer").click(function(){
  checkAnswer();
  console.log(questions)
});


function updatePercentage(){
  percentage = percentage + 10;
  $(".progress-bar").html(percentage + "%");
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }

  if(choice == shuffledQuestions[position].answer){
    correct++;
  }
  position++;
  renderQuestion();
}
shuffleQuestions()
renderQuestion();