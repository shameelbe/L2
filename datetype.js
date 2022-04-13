// Date class

let now = new Date();
// UTC value
console.log(now);

//
let dateVal = new Date('1987-04-28');
console.log(dateVal);
console.log(dateVal.getFullYear());
// 0 - 11 Jan, Feb,
console.log(dateVal.getMonth() + 1);

// getDay - Sun, Mon, Tue ... 0 to 6

// in minutes
console.log(dateVal.getTimezoneOffset());

let dateVal1 = new Date('1988-04-28');
console.log(dateVal1 > dateVal);
// seconds
console.log(dateVal1 - dateVal);
// seconds
console.log(dateVal1.getTime() - dateVal.getTime());

console.log(now.getFullYear() - dateVal.getFullYear());

// DOM elements
// short example
// Catch and Exception
