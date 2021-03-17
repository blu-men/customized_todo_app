const quiz =
  {
    answers: [ 'OK', '80%', '▲', '×'],
  };

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = 2;
let quizCount = 0;
let score = 0;

// クイズ設置 要改造
const init = () => {
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    // ボタンに文字をぶち込んでいく quizCountは「何問目？」なのでここでは一定
    $buttons[btnIndex].textContent = quiz.answers[btnIndex];
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


  // 変更点
  var quest = "";
  if(!localStorage.getItem('js-question')) {
    quest = "データがありません";
  } else {
    quest = localStorage.getItem('js-question');
  }

  // データがありません...'mydata'に入っていない
  console.log(quest);
    // 本来の問題文を以下の文字列に置き換え
    window.alert('終了！あなたのスコアは' + score + '/' + quizLen + 'です');
    window.alert('更新を行ってください' + quest);
    
    const $items = $doc.getElementById('js-items');
    $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz.answers.length;

// 画面遷移
while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    count(e.target);

    // 変更点
    let quest = document.getElementById("js-question").value;
    // var mydata = document.getElementById("mydata_in").value;
    console.log(`js-question = ${quest}`);
    localStorage.setItem('js-question', quest);
    // quest.value = '';
  });
  answersIndex++;
}