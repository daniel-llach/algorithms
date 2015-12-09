// problem 4: Find the largest palindrome made from the product of two 3-digit numbers.

var start = new Date().getMilliseconds();

largestPalindrome(); // digits number of each pair of products

function largestPalindrome(){
  var palindromes = [];
  // generate palindromes of 6 digits highest to lowest
  for( i=999; i>0; i--){

    // check if is product of 2 3-digit numbers
    for( z = i; z>0 ; z-- ){
      var temp = i*z;
      isPalindrome(temp);
    }
  }

  function isPalindrome(temp){
    var num = temp.toString();
    var num_array = num.split('')

    var start = num_array[0]+num_array[1]+num_array[2];
    var end = num_array[5]+num_array[4]+num_array[3];

    if(start==end){
      palindromes.push(temp);
    }
  }
  console.log( "result: ", Math.max.apply(null, palindromes) );
  return;
}

var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + ' ms.');
