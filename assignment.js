
// kilometer to meter part start-----------

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var result = kilometerToMeter(100);
console.log(result);






// budget calculator part start-------------

function budgetCalculator(watch, phone, laptop){
  var result = (( watch * 7 ) + ( phone * 7 ) + ( laptop * 7 ));
  return result;
}

var total = budgetCalculator( 50, 100, 500 );
console.log(total);






// hotel cost part start-------------------

function hotelCost(day){
  var cost = 0;
  if(day <= 10){
    cost = day * 100;
  }
  else if(day <= 20){
    var firstPart = 10 * 100;
    var remaining = day - 10;
    var secondPart = remaining * 80;
    cost = firstPart + secondPart;
  }
  else{
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = day - 20;
    var thirdPart = remaining * 50;
    cost = firstPart + secondPart + thirdPart;
  }
  return cost;
}

var total = hotelCost(71);
console.log(total);






// mega friend part start------------

function megaFriend(longestword){
  var count = longestword[0];
  for(var i = 0; i < longestword.length; i++){
    var element = longestword[i];
    if(element.length > count.length){
      count = element;
    }
  }
  return count;
}

var friends = ["abir", "imran", "rocky", "durlove", "kanto"];
var result = megaFriend(friends);
console.log(result);