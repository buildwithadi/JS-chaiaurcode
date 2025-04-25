let value = 3;
let negValue = -value;

// console.log(negValue);
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(3%2);

let str1 = "Aditya";
let str2 = " Rawat";

let str3 = str1 + str2;
console.log(str3);

// Never do this kind of stuff:
console.log(1 + "2");       // 12
console.log("1" + 2);       // 12
console.log("1" + "2");     // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

// Never do this kind of stuff:
console.log(true);          // true
console.log(+true);         // 1
console.log(+"");           // 0

// Never do this kind of stuff:
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);
