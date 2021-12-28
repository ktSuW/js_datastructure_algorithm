'use Strict';
// let array = new Array(6, 1, 2, 3, 4,56 , 6);
// let arr = [
//     [1,2,3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
// console.log(array, array.length);

// let nItems = new Array(1000).fill(2);

// let nItems = Array.from({length : 100}, (_, i) => i+1);
// Array.from() - static method creates a new, shallow-copied Array instance from array-like or iterable object.
// const sString = Array.from('string');
// console.log(nItems, nItems.length);

//============================================================

// const array = [1, 2, 3, 4, 5, 6];
// console.log(`First num is , ${array[0]}`);

// const multiArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// console.log(`first row, third col ${multiArray[0][2]}`);
//============================================================

const objArray = [
    {name : "John",
    'last name' : 'Doe'}
];

console.log(objArray[0].name);
console.log(objArray[0]['last name']);