let roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
}

module.exports = function(number) {
  let result = "";

if(number > 0 && number < 4000) {
  for(let key in roman) {
    while(roman[key] <= number) {
      result += key;
      number -= roman[key];
    }
  }
  return result;
  } else {
    return "Error. Number should be greater than 0 and less than 4000."
  }
}


