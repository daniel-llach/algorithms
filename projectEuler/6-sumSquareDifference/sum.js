// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

var start = new Date().getMilliseconds();

sumSqDiff(100);

function sumSqDiff(limit){
  var sumSqr = 0;
  var sqrSum = 0;
  for( i=1; i<limit+1; i++){
    sumSqr += Math.pow(i,2);
    sqrSum += i;
  }
  sqrSum = Math.pow(sqrSum,2);
  console.log("result: ", sqrSum - sumSqr);
}

var end = new Date().getMilliseconds();
var time = end - start;
console.log('Execution time: ' + time + ' ms.');
