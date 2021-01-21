
// kilometer to meter part start-----------

function kilometerToMeter(kilometer){
    const meter = kilometer * 1000;
    return meter;
}

let result = kilometerToMeter(100);
console.log(result);




// budget calculator part start-------------





// mega friend part start------------

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  var output = findLongestWord("The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog");
  console.log(output);