var openTrigger = document.getElementsByClassName("open-trigger");
var open = document.getElementsByClassName("open");

// .open-triggerをclickしたときに.is-openをtoggleする
// clickされた要素の直下のulを展開
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
