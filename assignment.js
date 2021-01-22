
// kilometer to meter part start-----------

function kilometerToMeter(kilometer){
    const meter = kilometer * 1000;
    return meter;
}

let result = kilometerToMeter(100);
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

  
