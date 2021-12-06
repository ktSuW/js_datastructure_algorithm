'use strict';
const restaurant = {
    name : "Sang",
    location : 'Surry Hills, Eastwood, Melbourne',
    categories : ['Bimbimbap', 'Kimchi_jjijae', 'Kimchi_Jeon', 'Fried_Chicken'],
    starterMenu : ['Pancake', 'Chips', 'Snacks', 'Side dishes'],
    mainMenu : ['Noodles', 'Soup', 'Fried', 'Dessert'],
};

// Destructuring - unpack array elements into variables
// Unpacking 
const arr = [2, 3, 4];
const [a, b, c] = arr;
//console.log(a, b, c);

const [first, ,, second] = restaurant.categories;
//console.log(first, second);

// const temp = first;
// first = second;
// seond = temp;

var nums = [1, 2, 3, 4];
// console.log(nums.indexOf(4));

let studentNames = ['Mia', 'Lili', 'Song', 'Miyako'];
let department = ['Computer Science', 'Engineering', 'Science', 'Art'];

// console.log(studentNames.concat(department));

let numss = [1, 2,3, 7, 8, 9];
let newNums = [4, 5, 6];
numss.splice(3, 0, newNums);
//console.log(numss);

function square(num){
    console.log(num, num * num);
}
const array1 = [ 1, 2, 3, 4];
// array1.forEach(square);

function isEven(num){
    return num % 2 === 0;
}

let array2 = [2, 4, 6, 8, 11];
// Boolean function
let even = array2.every(isEven);
if(even){
    console.log("Numbers are even");
} else {
    console.log("Some numbers are odd");
}
//==============================

function add(runningTotal, currVal){
    return runningTotal + currVal;
}

/*
    const add = (runningTotal, currVal) => runningTotal + currVal;
*/
let array3 = [1, 2, 3, 4, 5,6];
let sum = array3.reduce(add);
// console.log(sum);

let array4 = [1, 2, 3, 4];

const map1 = array4.map(num => num * 2);
function map2(num){
    return num * 2;
}

let result = array4.map(map2);
// console.log(result);

// console.log(map1);

const words = ["delicisous", "yummy", "So good"];
const result_filter = words.filter(word => word.length > 6);
console.log(result_filter);
