const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answers: [ 'OK', '80%', '▲', '×'],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [ 'OK', '80%', '▲', '×'],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [ 'OK', '80%', '▲', '×'],
    correct: 'セシル'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

// クイズ設置 要改造
const init = () => {
  // 問題文表示
  // $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    // ボタンに文字をぶち込んでいく quizCountは「何問目？」なのでここでは一定
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};


const goToNext = () => {
  quizCount++;
  // クイズをまだ続ける場合
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
  
};

// ここでOK判定させればいいのでは
const count = (elm) => {
  // 正解の場合...ボタン(elm)の文言が一致するかを判定
  if(elm.textContent === 'OK'){
    $window.alert('よく頑張りました!!!');
    score++;
  } else {
    $window.alert('残念!');
  }
  goToNext();
};

const showEnd = () => {
  // 本来の問題文を以下の文字列に置き換え
  window.alert('終了！あなたのスコアは' + score + '/' + quizLen + 'です');
  window.alert('更新を行ってください');
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

// 画面遷移
while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    count(e.target);
    let quest = document.getElementById("js-question");
    quest.value = '';
  });
  answersIndex++;
}