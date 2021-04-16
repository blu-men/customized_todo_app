const quiz =
  {
    answers: [ 'OK', '80%', '▲', '×'],
  };

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');
let $buttonContents;

// タスクの回数
const quizLen = 1;
let quizCount = 0;
let score = 0;


const init = () => {
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz.answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    showEnd();
  }
};

const count = (elm) => {
  if(elm.textContent === 'OK'){
    $window.alert('よく頑張りました!!!');
    score++;
  } else {
    $window.alert('残念!');
  }
  goToNext();
};

const showEnd = () => {
  var quest = "";
  if(!localStorage.getItem('js-question')) {
    quest = "データがありません";
  } else {
    quest = localStorage.getItem('js-question');
  }
  window.alert('タスクの達成度は ' + quest + ':' + $buttonContents.textContent + 'です');
};

init();

let answersIndex = 0;
let answersLen = quiz.answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    var quest = document.getElementById("js-question").value;
    localStorage.setItem('js-question', quest);
    $buttonContents = e.target;
    count(e.target);

    let questi = $question
    questi.value = '';
  });
  answersIndex++;
}