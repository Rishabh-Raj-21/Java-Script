let score = "33"
console.log(typeof score);
let valueInNumber = Number(score);
console.log(valueInNumber);          // It will return Not a Number, it is a drawback of js
console.log(typeof valueInNumber);  // Number

// Output values are dependend upon Input values
//  Type conversion of Number(score)
// Input       Output
// "String"     Nan
//  null        0
//  undefined   Nan
// true         1
// false        0

// Type conversion of Boolean(score)
// Input         Output
// 1              true
// 0              false
// ""(empty str)  false
// "abc"          true
