var numbers = [3,5];
var total = 1000;

multiplesAndSum(numbers, total);

function multiplesAndSum(numbers, total){
  var val = 0;
  for( i=0; i<total; i++ ){
    numbers.forEach(function(num){
      if( i % num == 0 ){
        val += i;
      }

    });
  }
  console.log("val: ", val);
}
