// Map - similar to array where we store data as a collection
// as Key, value pair - map
// students - objects, student Ids unique identifier.
// collection of students with keys as their Id
// You know Id, you can query the student and get their object. You dont have to loop through and array and find them.

// new Map()

let myMap = new Map();

const student1 = {
    name: 'Shameel',
    Id: '245'
}

const student2 = {
    name: 'Alex',
    Id: '341'
}

const student3 = {
    name: 'Mai',
    Id: '523'
}

// student4 we did not create a new object - saves a reference to student 2
const student4 = student2;

// Creates a new object
const student5 = {
    name: 'Alex',
    Id: '341'
}
// (key, object)
// key should always unque identifier
// myMap.set(student1.Id, student1);
// myMap.set(student2.Id, student2);
// myMap.set(student3.Id, student3);

// myMap.set(student1.Id, student1).set(student2.Id, student2).set(student3.Id, student3);

// console.log(myMap);
// // === strict equals
// // Nan value is allowed as a key in map
// console.log(myMap.get('341'));

// let isPresent = myMap.has('341');
// console.log(isPresent);

// myMap.delete('341');
// console.log(myMap);

// isPresent = myMap.has('341');
// console.log(isPresent);

// console.log(myMap.size);

// myMap.clear();
// console.log(myMap);
// console.log(myMap.size);

// Keys
// const Keys = myMap.keys();
// const Values = myMap.values();
// const Entries = myMap.entries();
// console.log(Keys);
// console.log(Values);
// console.log(Entries);

// for (let key of Keys)
// {
//     console.log(key);
// }

// for (let entry of myMap)
// {
//     // key
//     console.log(entry[0]);
//     // value
//     console.log(entry[1]);
// }

// Set
// Collection of Objects
// Biggest difference - no key here
// You cannot have duplicate values


let mySet = new Set();

// adding
mySet.add(student1);
mySet.add(student2);
mySet.add(student3);
mySet.add(student4);
mySet.add(student5);
console.log(mySet);

console.log(mySet.size);

for(let student of mySet)
{
    console.log(student);
}

