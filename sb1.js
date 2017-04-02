"use strict";
//// chess board
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
//
///* CH3 FXNS */
//// find minimum of 2 values
//function getMin(x, y) {
//  if (x < y) {
//    var min = x;
//  } else {
//    min = y;
//  }
//  return min;
//}
//console.log(getMin(35, 24));
//
//// evenness
//// recursive fxns must have a return value in all branches or will return undefined...
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
//
//// bean counting
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
//
///* CH4 DATA */
//// range fxn
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
//
//// sum a array of nums
//var sum = function sumFxn(arr) {
//  var sum = 0;
//  for (var i = 0; i < arr.length; i++) {
//    sum += arr[i];
//  }
//  return sum;
//};
//console.log("sum of range 1-10: ",sum(range(1,10)));
//
//// reverse array
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
//
//// lists
//var arrayToList = function makeArrayFromList(arr) {
//  var list = {}, inArr = arr;
//  for (var i = inArr.length; i > 0; i--) {
//    list = {value: inArr.pop(), rest: (Object.keys(list).length === 0 && list.constructor === Object ? null : list) };
//  }
//  return list;
//}
//console.log("LIST: ",arrayToList([10,20]));
//
//var listToArray = function makeListFromArray(listObj) {
//  var arr = [];
//  for (var node = listObj; node; node = node.rest) {
//    arr.push(node.value);
//  }
//  return arr;
//}
//console.log("ARRAY: ",listToArray(arrayToList([10,20,30])));
//
//var prependToList = function prependElement2List(value, list) {
//  return {value: value, rest: list};
//}
//console.log(prependToList(10, prependToList(20, null)));
//
//var getListValue = function nthValueOfList(list, index) {
//  var defInd = index || 0; // return first value
//  if (defInd > 0 && list.rest !== null) {
//    return getListValue(list.rest, defInd - 1);
//  } else if (defInd === 0) {
//    return list.value;
//  } else {
//    return undefined;
//  }
//}
//console.log("VALUE: ",getListValue(arrayToList([10,20,30]),2))

//var obj1 = {here: {is: "an"}, object: 3};
//var obj2 = {here: {is: "an"}, object: 2};
//var obj3 = {here: {is: "na"}, object: 2};
//var deepEq = function deepEqual(val1, val2) {
//  // make sure we are comparing objects that are not null
//  if ( (typeof val1 !== "object" || val1 === null) || (typeof val2 !== "object" || val2 === null) )
//    return false;
//  
//  // compare length
//  if (val1.length !== val2.length)
//    return false;
//  
//  //compare keys
//  var val1Keys = Object.keys(val1), val2Keys = Object.keys(val2);
//  for (var i = 0, j = val1Keys.length; i < j; i++) {
//    if (val1Keys[i] !== val2Keys[i])
//      return false;
//  }
//  
//  // recurse for objects or simply compare normal values
//  for (var key in val1) {
//    if (typeof val1[key] === "object" && val1[key] !== null && typeof val2[key] === "object" && val2 !== null) {
//      if (!deepEq(val1[key],val2[key])) // use recursion if an object is encountered
//        return false;
//    } else if (val1[key] !== val2[key]) // normal value comparison
//      return false;
//  }
//  
//  // objects are likely identicle
//  return true;
//}
//console.log(deepEq(obj1,obj1));
//console.log(deepEq(obj1,obj2));
//console.log(deepEq(obj1,obj3));
//console.log(deepEq(obj2,obj3));


/****************************************
*      CH5 HIGHER-ORDER FUNCTIONS       *
****************************************/
// necessary JSON
var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}
var numbers = [1,2,3,4,5], sum =0;
forEach(numbers, function (number) {
  sum += number;
});
console.log(sum);