function rsltSwim() {
  console.log("Hi!");
  var formSwim = document.forms.swim;
  var swimTable = document.getElementsByClassName("swim-table");
  var showedItem;
  var showItem;

  for (var i = 0; i < swimTable.length; i++) {
    if (swimTable[i].classList.contains("show")) {
      showedItem = swimTable[i];
      showedItem.classList.remove("show");
      break;
    }
  }

  showItem = document.getElementsByClassName(formSwim.year.value)[0];
  showItem.classList.add("show");
}
