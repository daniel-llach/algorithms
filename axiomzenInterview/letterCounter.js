// Same letterCount but whitout case-sensitive and no count white space
// And sorted from highest to lowest

var words = 'A problem of solving a problem is not a problem \
            but when a problem solves a problem without any problem \
            then the problem is not at all a problem';

letterCounter(words);

function letterCounter(words){
  var letter_array = words.split('');
  var letterCount = {};

  letter_array.forEach(function(letter, i){
    if( letter != ' '){
      letterCount[letter.toLowerCase()] = 0;
      var counter = 0;
      for( z = 0; z < letter_array.length; z++){
        if( letter == letter_array[z].toLowerCase() ){
          counter ++;
        }
        letterCount[letter.toLowerCase()] = counter;
      }
    }
  });
  // sort by number of match
  var letterCountSortable=[];
    for(var letter in letterCount)
        if(letterCount.hasOwnProperty(letter))
            letterCountSortable.push([letter, letterCount[letter]]);

  letterCountSortable.sort(function(a, b)
  {
    return b[1]-a[1]; // compare numbers
  });

  // convert to an object again
  console.log( toObject(letterCountSortable) );
}

function toObject(arr) {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    rv[ arr[i][0] ] = arr[i][1];
  return rv;
}
