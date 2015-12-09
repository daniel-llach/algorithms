// What is the largest prime factor of the number 600851475143 ?
var start = new Date().getMilliseconds();
largestPrimeFactor(600851475143);


function largestPrimeFactor(num){
  var factors = [];
  i = 0;

  do{
    if(num % i == 0 && i > 1){
      factors.push(num/i);
      num = num/i;
    }
    i++;
  }

  while(i < num){
    console.log("result: ", factors[factors.length-1]);
    return;
  }
}


var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + ' ms.');
