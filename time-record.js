document.addEventListener("DOMContentLoaded", function() {
  var indexItem = document.getElementsByClassName("index");
  for(var i = 0; i < indexItem.length; i++) {
    indexItem[i].addEventListener("click", function() {
      var cache = document.getElementsByClassName("show");
      setTimeout(function() {
        var urlHash = location.hash;
        var person = document.getElementsByClassName(urlHash.slice(1));
        // console.log(person.length);
        console.log(urlHash.slice(1));
        console.log("cache.length = "+cache.length);
        while (cache.length != 0) {
          console.log("cache: "+cache[0].textContent);
          cache[0].classList.remove("show");
          cache = document.getElementsByClassName("show");
        }
        // for (var j = 0; j < cache.length; j++) {
        //   console.log("cache: "+cache[j].textContent);
        //   cache[j].classList.remove("show");
        // }
        for (var k = 0; k < person.length; k++) {
          console.log("person: "+person[k].textContent);
          person[k].classList.add("show");
        }

        // console.log(max(cache.length, person.length));
        // for (var tmp = 0; tmp < max(cache.length, person.length); tmp++) {
        //   cache[tmp].classList.remove("show");
        //   person[tmp].classList.add("show");
        // }

      }, 1);
    });
  }
});

// function max(num1, num2) {
//   return num1*(num1>=num2) + num2*(num1<num2);
// }
