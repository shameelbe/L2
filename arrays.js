//
// let sudent1 = 'David';
// let student2 = 'Shameel';
// let student3 = 'Alex';

// Lists, try to manage, edit and save list
// array or list

// empty list
let studentList = [];

// 0 - studen2
// index 1 - student3
// index 2 - sudent1
// length - 3 or size of the array
// last index => length -1 => 3 - 1 = 2
studentList = ['David', 'Shameel', 'Sam'];
let studentIds = [1, 50, 30, 20];

// index

console.log(studentList);

let student = studentList[1];
console.log(student);

studentList = studentList.sort();
console.log(studentList);

index = studentList.indexOf('Shameel');
console.log(index);

if (index > -1)
{
    console.log(studentList[index]);
    // how do I change a value. using index
    studentList[index] = 'Shameel Abdul';
    console.log(studentList);
}

let filteredStudents = studentList.filter(s => s.charAt(0) === 'S');
console.log(filteredStudents);

console.log(studentIds.reverse());

console.log(studentIds.sort());

// Push or remove or pull value from an array
// pop
let elementpopped = console.log(studentIds.pop());
console.log(studentIds);

// last Element from the array


// push
// push will add an element to the end of the array
studentIds.push(90);
console.log(studentIds);

// delete
delete studentIds[1];
console.log(studentIds);

studentList = ['David', 'Shameel', 'Sam', 'John', 'Ram'];
console.log(studentList);
let slicedList = studentList.slice(0, 2);
console.log(slicedList);

