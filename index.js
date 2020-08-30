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
   
  for(let key in roman) {
    while(roman[key] <= number) {
      result += key;
      number -= roman[key];
    }
  }
  return result;
}