// clickした.open-triggerのindexを調べたい

// var openTrigger = document.getElementsByClassName("open-trigger");
// var open = document.getElementsByClassName("open");

// 汚い
var openTrigger = [
  // 4年生のopen-trigger
  document.getElementsByClassName("open-trigger0")[0],
  // 3年生のopen-trigger
  document.getElementsByClassName("open-trigger1")[0],
  // 2年生のopen-trigger
  document.getElementsByClassName("open-trigger2")[0],
  // 1年生のopen-trigger
  document.getElementsByClassName("open-trigger3")[0]
];

var open = [
  // 4年生の名前一覧
  document.getElementsByClassName("open0")[0],
  // 3年生の名前一覧
  document.getElementsByClassName("open1")[0],
  // 2年生の名前一覧
  document.getElementsByClassName("open2")[0],
  // 1年生の名前一覧
  document.getElementsByClassName("open3")[0]
];

var clickedIndex = -1;
// clickされた要素の直下のulを展開
// すでに展開されているとき縮小（？）
openTrigger[0].addEventListener("click", function() {
  clickedIndex = 0;
  open[clickedIndex].classList.toggle("is-open");
});
openTrigger[1].addEventListener("click", function() {
  clickedIndex = 1;
  open[clickedIndex].classList.toggle("is-open");
});
openTrigger[2].addEventListener("click", function() {
  clickedIndex = 2;
  open[clickedIndex].classList.toggle("is-open");
});
openTrigger[3].addEventListener("click", function() {
  clickedIndex = 3;
  open[clickedIndex].classList.toggle("is-open");
});
