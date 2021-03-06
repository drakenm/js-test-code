"use strict";
/****************************************
*      CH4 DATA                         *
****************************************/
// range fxn
var range = function rangeFxn(start, end, step) {
  step = step || 1;
  var arr = [];
  if (start < end && step < 0) return undefined;
  for (var i = start; ((step > 0) ? i <= end : i >= end); i += step) {
    arr.push(i);
  }
  return arr;
};
console.log("1-10: ",range(1,10));
console.log("5-2 neg step: ",range(5,2,-1));
console.log("1-10, 2 step: ",range(1,10,2));

// sum a array of nums
var sum = function sumFxn(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log("sum of range 1-10: ",sum(range(1,10)));

// reverse array
var alpha = "abcdefghijklmnopqrstuvwxyz";
var myArr = alpha.split("");
var myNArr = alpha.split("");
console.log("arrays: ",myArr,"\n",myNArr);
function reverseIp(arr) {
  var lenHlf = Math.floor(arr.length / 2), len = arr.length;
  for (var i = 0; i < lenHlf; i++) {
    var tmp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tmp;
  }
}

// return new array that is reverse of the array passed
var reverse = function reverseFxn(arr) {
  var newArr = [], len = arr.length;
  for (var i = 0; i < len; i++) {
    newArr[i] = arr.pop();
  }
  return newArr;
};

reverseIp(myNArr);
console.log("new reversed arr: ",reverse(myArr));
console.log("old myNArr reversed in place: ",myNArr);

// lists
var arrayToList = function makeArrayFromList(arr) {
  var list = {}, inArr = arr;
  for (var i = inArr.length; i > 0; i--) {
    list = {value: inArr.pop(), rest: (Object.keys(list).length === 0 && list.constructor === Object ? null : list) };
  }
  return list;
}
console.log("LIST: ",arrayToList([10,20]));

var listToArray = function makeListFromArray(listObj) {
  var arr = [];
  for (var node = listObj; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}
console.log("ARRAY: ",listToArray(arrayToList([10,20,30])));

var prependToList = function prependElement2List(value, list) {
  return {value: value, rest: list};
}
console.log(prependToList(10, prependToList(20, null)));

var getListValue = function nthValueOfList(list, index) {
  var defInd = index || 0; // return first value
  if (defInd > 0 && list.rest !== null) {
    return getListValue(list.rest, defInd - 1);
  } else if (defInd === 0) {
    return list.value;
  } else {
    return undefined;
  }
}
console.log("VALUE: ",getListValue(arrayToList([10,20,30]),2))

var obj1 = {here: {is: "an"}, object: 3};
var obj2 = {here: {is: "an"}, object: 2};
var obj3 = {here: {is: "na"}, object: 2};
var deepEq = function deepEqual(val1, val2) {
  // make sure we are comparing objects that are not null
  if ( (typeof val1 !== "object" || val1 === null) || (typeof val2 !== "object" || val2 === null) )
    return false;
  
  // compare length
  if (val1.length !== val2.length)
    return false;
  
  //compare keys
  var val1Keys = Object.keys(val1), val2Keys = Object.keys(val2);
  for (var i = 0, j = val1Keys.length; i < j; i++) {
    if (val1Keys[i] !== val2Keys[i])
      return false;
  }
  
  // recurse for objects or simply compare normal values
  for (var key in val1) {
    if (typeof val1[key] === "object" && val1[key] !== null && typeof val2[key] === "object" && val2 !== null) {
      if (!deepEq(val1[key],val2[key])) // use recursion if an object is encountered
        return false;
    } else if (val1[key] !== val2[key]) // normal value comparison
      return false;
  }
  
  // objects are likely identicle
  return true;
}
console.log(deepEq(obj1,obj1));
console.log(deepEq(obj1,obj2));
console.log(deepEq(obj1,obj3));
console.log(deepEq(obj2,obj3));
