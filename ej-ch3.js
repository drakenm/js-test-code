"use strict";
/****************************************
*      CH3 FUNCTIONS                    *
****************************************/
// find minimum of 2 values
function getMin(x, y) {
  if (x < y) {
    var min = x;
  } else {
    min = y;
  }
  return min;
}
console.log(getMin(35, 24));

// evenness
// recursive fxns must have a return value in all branches or will return undefined...
var isEven = function evenness(x) {
  if (x < 0 ) {
    x = -1 * x;
  }
  if (x > 1) {
    return isEven(x - 2);
  } else if (x < 1) {
    return true;
  } else {
    return false;
  }
};
console.log(isEven(2532));

// bean counting
var charCount = function beanCount(str, char) {
  var cnt = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      cnt += 1;
    }
  }
  return cnt;
};
console.log(charCount("BBC", "B"));
console.log(charCount("kakkerlak", "k"));