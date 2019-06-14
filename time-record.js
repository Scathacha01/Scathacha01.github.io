// function likeSPA() {
//   var indexItem = document.getElementsByClassName("index");
//   // indexクラスを持つ要素がclickされたときに以下の処理をする
//   for (var i = 0; i < indexItem.length; i++) {
//     indexItem[i].addEventListener("click", function() {
//       // hashを得るために1msの遅延
//       setTimeout(function() {
//         // urlHashは現在のページのhash
//         var urlHash = location.hash;
//         // #の除去
//         urlHash = urlHash.slice(1);
//         // cacheは直前に表示されていたDOM
//         var cache = document.getElementsByClassName("show");
//         // personは表示するDOMを値
//         var person = document.getElementsByClassName(urlHash);
//         // 表示されていた要素からshowをremove
//         for (var j = 0; j < cache.length;) {
//           cache[j].classList.remove("show");
//         }
//         // 表示する要素にshowをadd
//         for (var k = 0; k < person.length; k++) {
//           person[k].classList.add("show");
//         }
//       }, 1);
//     });
//   }
// }

// AND検索
function andSearch(opt) {
  // 現在表示されているDOM
  var shownItem = document.getElementsByClassName("show");
  for (var i = 0; i < shownItem.length; ) {
    if (shownItem[i].classList.contains(opt)) {
      i += 1;
    } else {
      shownItem[i].classList.remove("show");
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var indexItem = document.getElementsByClassName("index");
  var nameList = document.getElementsByClassName("name-list")[0];
  var searchOpt = document.getElementsByClassName("search-opt")[0];
  // .name-listがclickされたとき
  nameList.addEventListener("click", function() {
    // hashを得るために1msの遅延
    setTimeout(function() {
      // urlHashは現在のページのhash
      var urlHash = location.hash;
      // #の除去
      urlHash = urlHash.slice(1);
      // cacheは直前に表示されていたDOM
      var cache = document.getElementsByClassName("show");
      // personは表示するDOMを値
      var person = document.getElementsByClassName(urlHash);
      // 表示されていた要素からshowをremove
      for (var j = 0; j < cache.length;) {
        cache[j].classList.remove("show");
      }
      // 表示する要素にshowをadd
      for (var k = 0; k < person.length; k++) {
        person[k].classList.add("show");
      }
    }, 1);
  });

  // .search-optがclickされたとき
  searchOpt.addEventListener("click", function() {
    andSearch("100Br");
  });
});
