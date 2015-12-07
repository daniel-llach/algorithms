// What is the largest prime factor of the number 600851475143 ?
largestPrimeFactor(600851475143);

function largestPrimeFactor(num){
  var factors = [];
  i = 0;

  while (i < num) {
    if(num % i == 0 && i > 1){
      factors.push(num/i);
      num = num/i;
    }else if(i == num-1){
      console.log("result: ", factors[factors.length-1]);
      return;
    }
    i++;
  }
}
