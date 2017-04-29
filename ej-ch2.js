"use strict";
// chess board
var str = "", rowFlag = true, size = 8;
for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= size; j++) {
    if (j % 2 === 0) {
      str += (rowFlag ? "#" : " ");
    } else {
      str += (rowFlag ? " " : "#");
    }
  }
  str += "\n";
  rowFlag = !rowFlag;
}
console.log(str);