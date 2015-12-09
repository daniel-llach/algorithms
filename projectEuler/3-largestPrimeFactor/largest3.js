// What is the largest prime factor of the number 600851475143 ?
largestPrimeFactor(600851475143, 1000000);

function largestPrimeFactor(num, tolerance){
  for( i=num; i>0; i--){
    var divisors = [];
    for( z=0; z<i; z++){
      if(i%z == 0){
        divisors.push(z);
      }
      if(divisors.length > 1){
        break;
      }
      if(z>tolerance){
        console.log("largestPrimeFactor: ", i);
        return;
      }
    }
  }
}
