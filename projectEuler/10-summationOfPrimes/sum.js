// Find the sum of all the primes below two million.

var start = new Date().getMilliseconds();

summationPrimes(2000000);

function summationPrimes(num){
  var i=2;
  var counter = 0;
  do{
    // console.log("i: ", i);
    var temp = [];
    for( z=1;z<i;z++){
      if( i % z == 0 && z > 1 ){
        temp.push(z);
        // console.log("z: ", z);
      }
    }
    if( temp.length < 1){
      counter += i;
      // console.log("counter: ", counter);
    }
    i++;
  }
  while( i<num ){
    console.log("result: ", counter);
  }
}

var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + ' ms.');
