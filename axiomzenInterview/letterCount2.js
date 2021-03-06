// Same letterCount but whit no case-sensitive and no count white space

var word = 'A problem of solving a problem is not a problem \
            but when a problem solves a problem without any problem \
            then the problem is not at all a problem';

letterCount(word);

function letterCount(word){
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
  console.log(letterCount);
}
