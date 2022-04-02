// block of code 1st block
// second block of code

// Input ->  + or *
// How do I tell Javascript Add or multiply


// function add() {
//     // a + b;
// }

// function multiply() {
//     // a * b;
// }

// Conditonal Branching - If condition, Ternary conditon, Switch (value) Cases execute a block of a code

// // If
// let a = 101;
// let b = 99;
// if (b > a)//condition that is going to resolve to a true or false))
// {
//     console.log('B > A - true');
// } else if ( a == 100)
// {
//     console.log('A is 100 - true');
// } else if ( b == 99)
// {
//     console.log('B is 99 - true');
// }
// else
// {
//     console.log('Else loop');
// }

// // Ternary ?
// let result = (a == b) ? 'A == B' : (a<b) ? 'A < B' : 'A > B';
// console.log(result);


// What if I have do multiple comparison
// Logical Operator OR || , AND &&, ! NOT, ?? Nullish Coalescing
// left to right

// a = 'shameel';
// b = 'abdul';
// let c = 'javascript';

// if (a === 'shameelsome' || b === 'abdula' || c === 'javascript')
// {
//   console.log(a + " " + b);
// } else 
// {
//     console.log(c);
// }

// OR
// true || true - >  true
// false || true -> true
// true || false -> true
// false || false -> false

// AND
// true && true - >  true
// false && true -> false
// true && false -> false
// false && false -> false


// FALSE AND (False OR TRUE)
// FALSE AND TRUE
// FALSE
// NOT FALSE = TRUE
// TRUE

// PRECEDENCE && over ||
// a && b || C && d
// equal to (a && b) || (c && d)

// if (!(a === 'shameel1111' && (b === 'abdul12' || c === 'javascript')))
// {
//   console.log(a + " " + b);
// } else 
// {
//     console.log('Invalid');
// }

// let input = undefined;
// input = 100;
// // result = (input != undefined) ? input : 'Empty';


// result = input ?? 'Empty';
// console.log(result);

// NEXT classes
// Switch Case in our next class
// Loops - for, while etc
// Arrays
// Classes and Objects 
// String methods
// HTML DOM stuffs
// Sending Request and Responses to Server
// Processing JSON

// Interview Questions
// Fibanacci Numbers
// Odd or Even number
// Tic Tac Toe



// Switch Case

// conditon value is 1 print one
// else value is 2 print two

let val = 2;

if (val === 1)
{
  console.log('one');
} else if (val === 2)
{
  console.log('two');
} else
{
  console.log('Neither one nor two');
}

// Switch case
switch(val) {
  case 1:
    console.log('one');
    break;
  case 2:
    console.log('two');
    break;
  default:
    console.log('Neither one nor two');
    break;  
}