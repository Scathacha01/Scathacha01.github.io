// ページのhashで表示する内容を変える関数
function likeSPA() {
  var indexItem = document.getElementsByClassName("index");
  // indexクラスを持つ要素がclickされたときに以下の処理をする
  for (var i = 0; i < indexItem.length; i++) {
    indexItem[i].addEventListener("click", function() {
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
  }
}

document.addEventListener("DOMContentLoaded", function() {
  likeSPA();
});
