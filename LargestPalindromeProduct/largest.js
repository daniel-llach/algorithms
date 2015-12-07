// problem 4: Find the largest palindrome made from the product of two 3-digit numbers.

var start = new Date().getMilliseconds();

largestPalindrome(); // digits number of each pair of products

function largestPalindrome(){

  // generate palindromes of 6 digits highest to lowest
  for( i=1000; i>0; i--){
    var num = i.toString();
    var reverseNum = num.split('').reverse().join('');
    var n = i + reverseNum;

    // check if is product of 2 3-digit numbers
    for( z = i; z>0 ; z-- ){
      if( n % z === 0){
        var digit1 = z;
        var digit2 = n/z;
        digit1 = digit1.toString().split('');
        digit2 = digit2.toString().split('');
        console.log("digits: ", digit1.length, digit2.length);
        if( digit1.length == digit2.length ){
          console.log("result: ", n);
          return;
        }
      }
    }
  }
}


var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + ' ms.');
