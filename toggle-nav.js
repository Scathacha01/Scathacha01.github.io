document.addEventListener('DOMContentLoaded', function() {
  var slideTrigger = document.getElementsByClassName('slide-trigger')[0];
  var globalNav = document.getElementsByClassName('global-nav')[0];
  var clickCnt = 0;

  slideTrigger.addEventListener('click', function() {
    if (++clickCnt%2 == 1) {
      slideTrigger.classList.add('slide-nav');
      globalNav.classList.add('slide-nav');
    } else {
      slideTrigger.classList.remove('slide-nav');
      globalNav.classList.remove('slide-nav');
    }
    click %= 2;
  });
});
