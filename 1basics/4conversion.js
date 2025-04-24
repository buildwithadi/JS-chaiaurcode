let score = "33abc"

console.log(typeof score);  // string
console.log(typeof (score));// string

let valueInNumber = Number(score); // number
console.log(typeof valueInNumber); // number
console.log(valueInNumber);        // NaN: Not a Number

// "33" => 33
// "33abc" => NaN
// true => 1
// "" => 0

let isLoggedIn = null

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// "aditya" => true
// null => false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


