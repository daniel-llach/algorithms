// What is the 10 001st prime number?

var start = new Date().getMilliseconds();

stPrime(10001);

function stPrime(limit){
  var i=2;
  var factors = [];

  do{
    var counter = [];
    for( z=0; z<i; z++ ){
      if( i % z == 0 && z > 1 ){
        counter.push(i);
      }
    }
    if( counter.length < 1 ){
      factors.push(i);
    }
    i++;
  }

  while( factors.length < limit){
    // console.log("factors: ", factors);
    console.log("factors.length: ", factors.length);
    console.log( "result: ", factors[factors.length-1] );
  }
}


var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + ' ms.');
