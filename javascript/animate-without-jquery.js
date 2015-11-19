/**
* $('#MyElement').animate({scrollTop:value}, duration);
*/

function scrollTo(element, value, duration) {
  if (duration < 0) return;
  var difference = value - element.scrollTop;
  var perTick = (difference / duration) * 10;
  setTimeout(function () {
    element.scrollTop += perTick;
    if (element.scrollTop === value) return;
    scrollTo(element, value, duration - 10);
  }, 10);
}

elmnt = document.getElementById("MyElement");
scrollTo(document.body, elmnt.offsetTop, 600);

/**
*
*/
