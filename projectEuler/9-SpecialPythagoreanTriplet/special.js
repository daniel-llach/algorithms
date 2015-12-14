// There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc.

var start = new Date().getMilliseconds();

pyTriplet(1000);

function pyTriplet(num){
  for( i=num;i>0;i-- ){
    var a = num - i;
    for( z=i;z>0;z-- ){
      var b = i - z;
      var c = z;
      var sqrAB = Math.pow(a, 2) + Math.pow(b, 2);
      var sqrC = Math.pow(c, 2)
      if( sqrAB == sqrC ){
        console.log("result: ", a*b*c);
      }
    }
  }
}


var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + ' ms.');
