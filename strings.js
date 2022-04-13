// special characters

// \n - new line
let stringTest = '\'Shameel\' \n David \n Max \n Alex David';
// alert(stringTest);

// length
let name1 = 'Shameel Abdul';
console.log(name1.length);
console.log(name1.charAt(5));
console.log(name1[5]);

// Immutable
name1[5] = 'a';
console.log(name1[5]);

console.log(name1.toLowerCase());

const name2 = "Abdul";
const name3 = "abdul";
console.log(name2.toLowerCase() == name3.toLowerCase());

// Search
console.log(stringTest.indexOf('David'));

console.log(stringTest.includes('David'));

console.log(stringTest.lastIndexOf('David'));

console.log(stringTest.endsWith('David'));

console.log(stringTest.startsWith('\'Shameel'));

// Slice
console.log(stringTest.slice(stringTest.indexOf('David'), 17));

// substring
console.log(stringTest.substring(stringTest.indexOf('David'), 17));

// substr
console.log(stringTest.substr(stringTest.indexOf('David'), 5));

// trim
console.log('      Shameel      '.trim());



