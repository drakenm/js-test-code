"use strict";
// chess board
//var str = "", rowFlag = true, size = 8;
//for (var i = 1; i <= size; i++) {
//  for (var j = 1; j <= size; j++) {
//    if (j % 2 === 0) {
//      str += (rowFlag ? "#" : " ");
//    } else {
//      str += (rowFlag ? " " : "#");
//    }
//  }
//  str += "\n";
//  rowFlag = !rowFlag;
//}
//console.log(str);

/* CH3 FXNS */
// find minimum of 2 values
//function getMin(x, y) {
//  if (x < y) {
//    var min = x;
//  } else {
//    min = y;
//  }
//  return min;
//}
//console.log(getMin(35, 24));

// evenness
// recursive fxns must have a return value in all branches or will return undefined...
//var isEven = function evenness(x) {
//  if (x < 0 ) {
//    x = -1 * x;
//  }
//  if (x > 1) {
//    return isEven(x - 2);
//  } else if (x < 1) {
//    return true;
//  } else {
//    return false;
//  }
//};
//console.log(isEven(2532));

// bean counting
//var charCount = function beanCount(str, char) {
//  var cnt = 0;
//  for (var i = 0; i < str.length; i++) {
//    if (str[i] === char) {
//      cnt += 1;
//    }
//  }
//  return cnt;
//};
//console.log(charCount("BBC", "B"));
//console.log(charCount("kakkerlak", "k"));

/* CH4 DATA */
// range fxn
//var range = function rangeFxn(start, end, step) {
//  step = step || 1;
//  var arr = [];
//  if (start < end && step < 0) return undefined;
//  for (var i = start; ((step > 0) ? i <= end : i >= end); i += step) {
//    arr.push(i);
//  }
//  return arr;
//};
//console.log("1-10: ",range(1,10));
//console.log("5-2 neg step: ",range(5,2,-1));
//console.log("1-10, 2 step: ",range(1,10,2));

// sum a array of nums
//var sum = function sumFxn(arr) {
//  var sum = 0;
//  for (var i = 0; i < arr.length; i++) {
//    sum += arr[i];
//  }
//  return sum;
//};
//console.log("sum of range 1-10: ",sum(range(1,10)));

// reverse array
//var alpha = "abcdefghijklmnopqrstuvwxyz";
//var myArr = alpha.split("");
//var myNArr = alpha.split("");
//console.log("arrays: ",myArr,"\n",myNArr);
//function reverseIp(arr) {
//  var lenHlf = Math.floor(arr.length / 2), len = arr.length;
//  for (var i = 0; i < lenHlf; i++) {
//    var tmp = arr[i];
//    arr[i] = arr[arr.length - 1 - i];
//    arr[arr.length - 1 - i] = tmp;
//  }
//}
//
//// return new array that is reverse of the array passed
//var reverse = function reverseFxn(arr) {
//  var newArr = [], len = arr.length;
//  for (var i = 0; i < len; i++) {
//    newArr[i] = arr.pop();
//  }
//  return newArr;
//};
//
//reverseIp(myNArr);
//console.log("new reversed arr: ",reverse(myArr));
//console.log("old myNArr reversed in place: ",myNArr);

// lists
var arrayToList = function arr2L(arr) {
  var list = {}, inArr = arr;
  for (var i = inArr.length; i > 0; i--) {
    list = {value: inArr.pop(), rest: (Object.keys(list).length === 0 && inObj.rest.constructor === Object ? null : list) };
  }
  console.log(list);
  return list;
}
var newList = arrayToList([1,2,3,4,"cheese","grits","sanctions",8]);

var listToArray = function l2Arr(listObj) {
  var arr = [], inObj = listObj;
  while ( (inObj.rest !== null ? (Object.keys(inObj.rest).length !== 0 && inObj.rest.constructor === Object) : false) ) {
    arr.push(inObj.value);
    inObj = inObj.rest;
  }
  arr.push(inObj.value);
  console.log(arr);
  return arr;
}
var myObj = {
  value: 1, rest: {
    value: 2, rest: {
      value: 3, rest: null
    }}};
var newArr = listToArray(myObj);