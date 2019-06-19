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

// モジュール化
function showRecord() {
  var indexItem = document.getElementsByClassName("index");
  var nameList = document.getElementsByClassName("name-list")[0];
  var searchOpts = document.getElementsByClassName("search-opts")[0];
  var form1 = document.forms.search_opt1;
  var form2 = document.forms.search_opt2;
  var form3 = document.forms.search_opt3;

  // 他のページからある試合結果を参照するとき
  setTimeout(function() {
    // urlHashは現在のページのhash
    var urlHash = location.hash;
    // #の除去
    urlHash = urlHash.slice(1);
    var showItem = document.getElementsByClassName(urlHash);
    // 直前に表示されていたものはないので、それを非表示にする処理は必要ない
    for (var k = 0; k < showItem.length; k++) {
      showItem[k].classList.add("show");
    }
  }, 1);

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

  // .search-optsがclickされたとき
  searchOpts.addEventListener("click", function() {
    var searchOpt = [
      // 開催年と大会名が両方指定されたときに""以外の値をもつ
      (form1.year.value == "") ? ""
      : (form1.compe.value == "") ? ""
      : form1.year.value + form1.compe.value,
      // 距離と種目が両方指定されたときに""以外の値をもつ
      (form2.dist.value == "") ? ""
      : (form2.style.value == "") ? ""
      : form2.dist.value + form2.style.value,
      // 長水路か短水路か
      form3.len.value
    ];
    // ""で検索することはできなかった
    for (var i = 0; i < searchOpt.length; i++) {
      // searchOpt[i]が""でないことの確認
      console.log(searchOpt[i]);
      if (searchOpt[i] != "") {
        // 検索
        andSearch(searchOpt[i]);
      }
    }
  });
}

function optSearch() {
  var form1 = document.forms.search_opt1;
  var form2 = document.forms.search_opt2;
  var form3 = document.forms.search_opt3;
  var searchOpt = [
    // 開催年と大会名が両方指定されたときに""以外の値をもつ
    (form1.year.value == "") ? ""
    : (form1.compe.value == "") ? ""
    : form1.year.value + form1.compe.value,
    // 距離と種目が両方指定されたときに""以外の値をもつ
    (form2.dist.value == "") ? ""
    : (form2.style.value == "") ? ""
    : form2.dist.value + form2.style.value,
    // 長水路か短水路か
    form3.len.value
  ];
  // ""で検索することはできなかった
  for (var i = 0; i < searchOpt.length; i++) {
    // searchOpt[i]が""でないことの確認
    console.log(searchOpt[i]);
    if (searchOpt[i] != "") {
      // 検索
      andSearch(searchOpt[i]);
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // showRecord();
    var indexItem = document.getElementsByClassName("index");
    var nameList = document.getElementsByClassName("name-list")[0];
    var searchOpts = document.getElementsByClassName("search-opts")[0];
    var form1 = document.forms.search_opt1;
    var form2 = document.forms.search_opt2;
    var form3 = document.forms.search_opt3;

    // 他のページからある試合結果を参照するとき
    setTimeout(function() {
      // urlHashは現在のページのhash
      var urlHash = location.hash;
      // #の除去
      urlHash = urlHash.slice(1);
      var showItem = document.getElementsByClassName(urlHash);
      // 直前に表示されていたものはないので、それを非表示にする処理は必要ない
      for (var k = 0; k < showItem.length; k++) {
        showItem[k].classList.add("show");
      }
    }, 1);

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

    // .search-optsのプルダウンメニューのvalueが変更されたとき
    // form1の値が変更されたとき
    form1.addEventListener("change", function() {
      optSearch();
      // var searchOpt = [
      //   // 開催年と大会名が両方指定されたときに""以外の値をもつ
      //   (form1.year.value == "") ? ""
      //   : (form1.compe.value == "") ? ""
      //   : form1.year.value + form1.compe.value,
      //   // 距離と種目が両方指定されたときに""以外の値をもつ
      //   (form2.dist.value == "") ? ""
      //   : (form2.style.value == "") ? ""
      //   : form2.dist.value + form2.style.value,
      //   // 長水路か短水路か
      //   form3.len.value
      // ];
      // // ""で検索することはできなかった
      // for (var i = 0; i < searchOpt.length; i++) {
      //   // searchOpt[i]が""でないことの確認
      //   console.log(searchOpt[i]);
      //   if (searchOpt[i] != "") {
      //     // 検索
      //     andSearch(searchOpt[i]);
      //   }
      // }
    });
    // form2の値が変更されたとき
    form2.addEventListener("change", function() {
      optSearch();
      // var searchOpt = [
      //   // 開催年と大会名が両方指定されたときに""以外の値をもつ
      //   (form1.year.value == "") ? ""
      //   : (form1.compe.value == "") ? ""
      //   : form1.year.value + form1.compe.value,
      //   // 距離と種目が両方指定されたときに""以外の値をもつ
      //   (form2.dist.value == "") ? ""
      //   : (form2.style.value == "") ? ""
      //   : form2.dist.value + form2.style.value,
      //   // 長水路か短水路か
      //   form3.len.value
      // ];
      // // ""で検索することはできなかった
      // for (var i = 0; i < searchOpt.length; i++) {
      //   // searchOpt[i]が""でないことの確認
      //   console.log(searchOpt[i]);
      //   if (searchOpt[i] != "") {
      //     // 検索
      //     andSearch(searchOpt[i]);
      //   }
      // }
    });
    // form3の値が変更されたとき
    form3.addEventListener("change", function() {
      optSearch();
      // var searchOpt = [
      //   // 開催年と大会名が両方指定されたときに""以外の値をもつ
      //   (form1.year.value == "") ? ""
      //   : (form1.compe.value == "") ? ""
      //   : form1.year.value + form1.compe.value,
      //   // 距離と種目が両方指定されたときに""以外の値をもつ
      //   (form2.dist.value == "") ? ""
      //   : (form2.style.value == "") ? ""
      //   : form2.dist.value + form2.style.value,
      //   // 長水路か短水路か
      //   form3.len.value
      // ];
      // // ""で検索することはできなかった
      // for (var i = 0; i < searchOpt.length; i++) {
      //   // searchOpt[i]が""でないことの確認
      //   console.log(searchOpt[i]);
      //   if (searchOpt[i] != "") {
      //     // 検索
      //     andSearch(searchOpt[i]);
      //   }
      // }
    });
    // searchOpts.addEventListener("click", function() {
    //   var searchOpt = [
    //     // 開催年と大会名が両方指定されたときに""以外の値をもつ
    //     (form1.year.value == "") ? ""
    //     : (form1.compe.value == "") ? ""
    //     : form1.year.value + form1.compe.value,
    //     // 距離と種目が両方指定されたときに""以外の値をもつ
    //     (form2.dist.value == "") ? ""
    //     : (form2.style.value == "") ? ""
    //     : form2.dist.value + form2.style.value,
    //     // 長水路か短水路か
    //     form3.len.value
    //   ];
    //   // ""で検索することはできなかった
    //   for (var i = 0; i < searchOpt.length; i++) {
    //     // searchOpt[i]が""でないことの確認
    //     console.log(searchOpt[i]);
    //     if (searchOpt[i] != "") {
    //       // 検索
    //       andSearch(searchOpt[i]);
    //     }
    //   }
    // });
});
