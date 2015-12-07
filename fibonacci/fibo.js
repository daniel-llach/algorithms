// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

fibo(4000000);

function fibo(limit){
  var n = [1,2];
  var sum = 2;
  var next;
  do{
    next = n[n.length - 2] + n[n.length - 1];
    n.push( next );
    if(next % 2 === 0){
      sum += next;
    }
  }
  while(next < limit){
    console.log("sum: ", sum);
  }
}
