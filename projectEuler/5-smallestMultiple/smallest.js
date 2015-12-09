// problem 5: What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var start = new Date().getMilliseconds();

smallestMultiple(20);

function smallestMultiple(limit){
  var i = 1;
  do{
    var coincidences = 0;
    for( z=1; z<limit+1; z++){
      if( i*2*3*5*7*11*13*17*19 % z === 0){
        console.log("coincidence: ", coincidences);
        coincidences += 1;
      }else{
        coincidences = 0;
      }
    }
    console.log("i: ", i);
    i++;
  }

  while( coincidences < limit ){
    console.log("result: ", (i-1)*2*3*5*7*11*13*17*19);
  }

}


var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + ' ms.');
