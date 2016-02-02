/*

ARRAY COMPACTION

Write a function that takes as input a sorted array and modifies the array to compact it, removing duplicates. 

Notes: The input array might be very large.

*/

var myArray = [1, 3, 7, 7, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10];

var arrayCompaction = function(a){
   
   for(var i=0;i<=a.length;i++){
    if (a[i-1] == a[i]){
       a.splice(i,1);
       i--;
       }
   }
   console.log(a);
   return a;
}

/*

ROTATING AN ARRAY

Write a function that takes an array of integers and returns that array rotated by N positions. 

For example, if N=2, given the input array [1, 2, 3, 4, 5, 6] the function should return [5, 6, 1, 2, 3, 4]

*/

// n: rotation index
// a: array

var myArray2 = [1, 2, 3, 4, 5, 6];

var arrayRotation = function(a, n){
  var aux = a.slice(0,a.length-n);
  var aux2 = a.slice(a.length-n,a.length);
  var aux3 = aux2.concat(aux);
  console.log(aux3);
  return aux3;
  
}

/* CHARACTERS IN STRINGS

Implement a function with signature find_chars(string1, string2) that takes two strings and returns a string that 
contains only the characters found in string1 and string two in the order that they are found in string1. Implement 
a version of order N*N and one of order N.

*/

var hello = "String";
var hallo = "Test";
var find_chars_n_n = function(a, b){
  
  // N * N
  var c = new Array();
  for (var i=0;i<a.length;i++){
      for (var j=0;j<b.length;j++){
        if (a[i] == b[j]){
          c.push(a[i]);
        }
      }
  }
  console.log(c);
  return c;
}

var find_chars_n = function(a, b){

  // N

  var c = new Array();
  for (var i=0;i<a.length;i++){
      if (b.indexOf(a[i]) > -1){
          c.push(a[i]);
      }
  }
  console.log(c);
  return c;
}

var leastCommonMultiple = function(min, max) {
    function range(min, max) {
        var myArray = [];
        for (var i = min; i <= max; i++) {
            myArray.push(i);
        }
        return myArray;
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

    var multiple = min;
    range(min, max).forEach(function(n) {
        multiple = lcm(multiple, n);
    });
    console.log(multiple);
    return multiple;
}


/*

Declarations of the functions:

*/

find_chars_n_n(hello, hallo);
find_chars_n(hello, hallo);

arrayRotation(myArray2, 2);

arrayCompaction(myArray);

leastCommonMultiple(2, 4);
