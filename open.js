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

// .open-triggerをclickしたときに.is-openをtoggleする
// それに伴ってアイコンも変更する
function toggleIsOpen(num) {
  var op = "is-open";
  if (open[num].classList.contains(op)) {
    open[num].classList.remove(op);
    openTrigger[num].textContent = "+";
  } else {
    open[num].classList.add(op);
    openTrigger[num].textContent = "-";
  }
}

// clickされた要素の直下のulを展開
// すでに展開されているとき縮小（？）
openTrigger[0].addEventListener("click", function() {
  toggleIsOpen(0);
});
openTrigger[1].addEventListener("click", function() {
  toggleIsOpen(1);
});
openTrigger[2].addEventListener("click", function() {
  toggleIsOpen(2);
});
openTrigger[3].addEventListener("click", function() {
  toggleIsOpen(3);
});
