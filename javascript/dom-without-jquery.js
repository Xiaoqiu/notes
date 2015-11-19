/**
* 如果不需要支持IE，可以直接使用classList
*/

document.getElementById("MyElement").classList.add('class');
document.getElementById("MyElement").classList.remove('class');
if ( document.getElementById("MyElement").classList.contains('class') )
document.getElementById("MyElement").classList.toggle('class');

/**
* 如果需要支持IE
*/

function hasClass(element, class) {
  return element.className.match(new RegExp('(\\s|^)' + class + '(\\s|$)'));
}

function addClass(element, class) {
  if (!hasClass(element, class)) {
    element.className += ' ' + class;
  }
}

function removeClass(element, class) {
  if (hasClass(element, class)) {
    var reg = new RegExp('(\\s|^)' + class + '(\\s|$)');
    element.className = element.className.replace(reg, ' ');
  }
}

function replaceClass(element, oldClass, newClass) {
  if (hasClass(element, oldClass)) {
    removeClass(element, oldClass);
    addClass(element, newClass);
  }
  return;
}

function toggleClass(element, class1, class2) {
  if (hasClass(element, class1)) {
    replaceClass(element, class1, class2);
  } else if (hasClass(element, class2)) {
    replaceClass(element, class2, class1);
  } else {
    addClass(element, class1);
  }
}
