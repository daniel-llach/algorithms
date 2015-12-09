// Same letterCount but whit no case-sensitive and no count white space
// And sorted from highest to lowest

var word = 'A problem of solving a problem is not a problem \
            but when a problem solves a problem without any problem \
            then the problem is not at all a problem';

letterCounter(word);

function letterCounter(word){
  var letter_array = word.split('');
  var letterCount = {};

  letter_array.forEach(function(letter, i){
    // prevents counting spaces
    if( letter != ' '){
      // lowercase to count the total of each letter avoiding case-sensitive
      letter = letter.toLowerCase();

      letterCount[letter] = 0;
      var counter = 0;
      for( z = 0; z < letter_array.length; z++){
        // lowercase
        letter_array[z] = letter_array[z].toLowerCase();
        if( letter == letter_array[z] ){
          counter ++;
        }

        letterCount[letter] = counter;
      }
    }
  });
  // sort by number of match

  // convert to an array for sort
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
