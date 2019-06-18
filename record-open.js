// var openTrigger = document.getElementsByClassName("open-trigger");
// var open = document.getElementsByClassName("open");

var openTrigger = [
  document.getElementsByClassName("open-trigger0")[0],
  document.getElementsByClassName("open-trigger1")[0],
  document.getElementsByClassName("open-trigger2")[0],
  document.getElementsByClassName("open-trigger3")[0],
  document.getElementsByClassName("open-trigger4")[0],
  document.getElementsByClassName("open-trigger5")[0],
  document.getElementsByClassName("open-trigger6")[0],
  document.getElementsByClassName("open-trigger7")[0],
  document.getElementsByClassName("open-trigger8")[0],
  document.getElementsByClassName("open-trigger9")[0],
  document.getElementsByClassName("open-trigger10")[0],
  document.getElementsByClassName("open-trigger11")[0]
];

var open = [
  document.getElementsByClassName("open0")[0],
  document.getElementsByClassName("open1")[0],
  document.getElementsByClassName("open2")[0],
  document.getElementsByClassName("open3")[0],
  document.getElementsByClassName("open4")[0],
  document.getElementsByClassName("open5")[0],
  document.getElementsByClassName("open6")[0],
  document.getElementsByClassName("open7")[0],
  document.getElementsByClassName("open8")[0],
  document.getElementsByClassName("open9")[0],
  document.getElementsByClassName("open10")[0],
  document.getElementsByClassName("open11")[0]
];

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
openTrigger[4].addEventListener("click", function() {
  toggleIsOpen(4);
});
openTrigger[5].addEventListener("click", function() {
  toggleIsOpen(5);
});
openTrigger[6].addEventListener("click", function() {
  toggleIsOpen(6);
});
openTrigger[7].addEventListener("click", function() {
  toggleIsOpen(7);
});
openTrigger[8].addEventListener("click", function() {
  toggleIsOpen(8);
});
openTrigger[9].addEventListener("click", function() {
  toggleIsOpen(9);
});
openTrigger[10].addEventListener("click", function() {
  toggleIsOpen(10);
});
openTrigger[11].addEventListener("click", function() {
  toggleIsOpen(11);
});
