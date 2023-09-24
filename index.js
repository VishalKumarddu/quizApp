const quizdata = [
  {
    question: "which frame work is used in js  ",
    a: "react",
    b: ".net",
    c: "springboot",
    d: "d jango",
    correct: "a",
  },
  {
    question: "which  is not a programming language  ",
    a: "java",
    b: "python",
    c: "javascript",
    d: "html",
    correct: "d",
  },
  {
    question: "which frame work is used in python  ",
    a: "react",
    b: ".net",
    c: "sprinboot",
    d: "d jango",
    correct: "d",
  },

  {
    question: "which is not a framework  ",
    a: "react",
    b: "java",
    c: "springboot",
    d: "d jango",
    correct: "b",
  },
];

var quiz = document.getElementById("quiz");
var answer = document.querySelectorAll(".answer");
var question = document.getElementById("question");
var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");
var option_d = document.getElementById("d_value");
var submitbtn = document.getElementById("submit");
// initial question
var currentQuestion = 0;
var quizScore = 0;

// funtion for loading quiz
loadQuiz();
function loadQuiz() {
  deselect();
  var currentQuizData = quizdata[currentQuestion];
  question.innerHTML = currentQuizData.question;
  option_a.innerText = currentQuizData.a;
  option_b.innerText = currentQuizData.b;
  option_c.innerText = currentQuizData.c;
  option_d.innerText = currentQuizData.d;
}

function deselect() {
  answer.forEach((ans) => (ans.checked = false));
}
//  Add event listener to handle submit button click
submitbtn.addEventListener("click", checkAnswer);

function checkAnswer() {
  var selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    // Handle the case when no answer is selected
    alert("Please select an answer before submitting.");
    return;
  }

  var userAnswer = selectedOption.id;
  var correctAnswer = quizdata[currentQuestion].correct;
  if (userAnswer === correctAnswer) {
    quizScore++;
  }

  // Increment to the next question
  currentQuestion++;

  if (currentQuestion < quizdata.length) {
    loadQuiz();
  } else {
    // Show the final score when anser is correct

    alert("Quiz completed. Your score: " + quizScore + "/" + quizdata.length);
  }
}




resetbtn.addEventListener('click',reset)
function reset(){
 var quizcomplete=document.querySelector('quizdata.lenght');
 if(!quizcomplete){
  alert('quiz is not')
 }
}









  