var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
  {
      question: "Where are BICEP from?",
      a: "Dublin",
      b: "London",
      c: "Belfast",
      d: "Edinburgh",
      answer: "c"
    },
  {
      question: "What was BICEPs first album called?",
      a: "Bicep",
      b: "Nova",
      c: "The light",
      d: "Forever",
      answer: "a"
    },
  ];

var shuffledQuestions;

function shuffleQuestions(){
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}

function get(x){
  return document.getElementById(x);
}
// this function renders a question for display on the page
function renderQuestion(){
  console.log(shuffledQuestions)
  test = get("quiz_results");
  if(pos >= shuffledQuestions.length){

    $('#quiz_results').html("You got "+correct+" of "+shuffledQuestions.length+" questions correct")

    $("#test_status").html("Test completed");
    pos = 0;
    correct = 0;
    return false;
  }
  console.log(questions)
  $("#test_status").html("Question "+(pos+1)+" of "+shuffledQuestions.length);

  $('#regTitle').html('Hello World');
  
  question = questions[pos].question;
  chA = shuffledQuestions[pos].a;
  chB = shuffledQuestions[pos].b;
  chC = shuffledQuestions[pos].c;
  chD = shuffledQuestions[pos].d;
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


function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }

  if(choice == shuffledQuestions[pos].answer){
    correct++;
  }
  pos++;
  renderQuestion();
}
shuffleQuestions()
renderQuestion();