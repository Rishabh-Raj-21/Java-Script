let score = "33abc"
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);


//  Output depends upon input type 
//  score = "abc" => Output = Not a number
//  score = null => Output = 0
//  score = true => Output = 1

let isLoggedIn = "something";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);

// In case of Boolean Converion
// Boolean(1) => true
// Boolean(0) => false
// Empty string - Boolean("") => false
// Non-Empty string - Boolean("anything") => true


// let num1 = null
// let num2 = String(num1)
// console.log(num2);          // null
// console.log(typeof num2);  // string

// ****************************** OPERATIONS *******************************************

let value = 5;
let negValue = -value;
console.log(negValue);
console.log(null == 0);   // false
console.log(null > 0);  // false
console.log(null >= 0); // true
// JS treats null as a 0 when operators are >, >=, <, <=
