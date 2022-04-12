// while loop
// do-while loop
// for loop

// process payment
// 10 students
// perform payment processing for all these 10 students
// wherever - need repeat of same task - loops
// a way to repeat code multiple times

// while (condition) {
//     // until this condition is valid
//     // keep executing
//     // have a way to break this condtion
    
// }

// let noOfStudents = 10;
// let i = noOfStudents;

// while (i > 0) {
//     console.log(i + ' < ' + noOfStudents);
//     // console.log(noOfStudents);
//     i--; // i = i + 1 - increment 1 value to i
// }

// FInd Peach
// let array1 = ['Apples','Oranges','Peach','Mangoes','Bananas'];
// let n = array1.length;
// i = 0;
// while (i < n) {
//     console.log(i + ' ' + array1[i]);
//     if (array1[i] === 'Peach')
//     {
//         console.log('FOund Peach');
//     }
//     i++;
// }

// array[index] - 0,1,2,4 ... length - 1
array1 = [1,2,3,4,5,6,7,8,9,10];
console.log(array1);
n = array1.length;
i = 0;
let sum = 0;
// while (i < n) {
//     console.log('===========');
//     console.log(sum + ' ' + array1[i]);
//     sum += array1[i];
//     console.log(sum);
//     console.log('===========');
//     i++;
// }

// DO while little different to while
// do this task and evaluate the condition
// do {
//     // task or loop will be run atleast once
//     console.log('===========');
//     console.log(sum + ' ' + array1[i]);
//     sum += array1[i];
//     console.log(sum);
//     console.log('===========');
//     i++;  // i = i + 1
// } while (i < n);

// for loop
// print only even numbers
// for (let index = 0; index < array1.length; index++) {
//     console.log('===========');
//     console.log(sum + ' ' + array1[index]);
//     sum += array1[index];
//     console.log(sum);
//     console.log('===========');
// }

// for...in
// for...of
// for (let data of array1) {
//     console.log('===========');
//     console.log(sum + ' ' + data);
//     sum += data;
//     console.log(sum);
//     console.log('===========');
// }

// break
array1 = ['Apples','Oranges','Peach','Mangoes','Bananas'];

for(data of array1)
{
    if (data == 'Peach')
    {
        console.log('Found ' + data);
        break;
        // it will break entire loop or iterations for good
    }
    console.log(data);
}

// continue
for(data of array1)
{
    if (data == 'Peach')
    {
        continue;
    }
    // skips below steps and goes to next in the iteration
    console.log('Processing Data ' + data);
}