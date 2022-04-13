// // inbuilt functions
// // by default browser provided
// // alert('');
// // prompt();
// // confirm();

// // user-defined functions
// // defines a block of code
// // resusability
// // defining, invoke or call, function run(execution)

// // top to bottom execution

// // Global Scope
// // available for the entire javascript doc
// // let var1 = 10;
// // let var2 = 12;

// parentFunction();

// function parentFunction()
// {
//     let var1 = 10;
//     let var2 = 12;
//     let result = add(var1, var2);
//     console.log('RESULT below')
//     console.log(result);
// }

// function add(add1, add2)
// {
//     let result = add1 + add2;

//     // return a value
//     return result;
// }

// /*
// function anyFunction(funcVar1, funcVar2)
// {
//     // Local Scope
//     let funcVar3 = 8;
//     funcVar1 = 1;
//     funcVar2 = 2;
//     // these variables only within this functions
//     // you write statements
//     // 1 + 2 + 8 = 11
//     let add = funcVar1 + funcVar2 + funcVar3;
//     console.log('Addition Local Variables')
//     console.log(add);

//     let add2 = var1 + var2;
//     // 10 + 12 = 22
//     console.log('Addition Global Variables')
//     console.log(add2);

//     let add3 = var1 + var2 + funcVar1 + funcVar2 + funcVar3;
//     // 10 + 12 + 1 + 2 + 8 = 33
//     console.log('Addition Global and Local Variables')
//     console.log(add3);
// }

// */

// // Browser provided functions Example
// alert('Shameel wants to add');
// let variable1 = prompt('What is First Name');
// let variable2 = prompt('What is Last Name');
// alert(variable1 + variable2);
// let booleanvalue = confirm("Are you sure?");

// // third party functions

let parameter1 = 2;
let parameter2 = 4;

let result = myfunction(parameter1, parameter2);
console.log(result);

// Different syntax
// Function expression
let additionFunc = function(parameter1, parameter2) {
    return parameter1 + parameter2;
};
let result2 = additionFunc(parameter1, parameter2);
console.log(result2);

// function declaration
function myfunction(parameter1, parameter2) {
    return parameter1 + parameter2;
}

// use strict mode

// Arrow functions
let add = (parameter1, parameter2) => parameter1 + parameter2;

let addmultiline = (parameter1, parameter2) => 
{
    let localResult = parameter1 + parameter2;
    return localResult;
};

let result3 = add(parameter1, parameter2);
console.log(result3);
