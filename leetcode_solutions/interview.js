//Q 1 : Undefined - A variable which is not assigned a value
// let a ;
// console.log(a);
// console.log(typeof a);
// let a = 9.098;
// console.log(a);
// console.log(typeof a);

// both undefined and null represents nothingness
// let x = null;
// let y;
//----------------------------------------------------------
// Q 2:  What is the output of undefined == null
// undefined === null? Why?
// Check for data type
// null is not an object, it is a primitive data type
// console.log(x == y); // true
// console.log(x === y); // false
//----------------------------------------------------------
// Q 3: Can you explicitly assign 'undefined' to a variable?
// let x = undefined;
// console.log(x);
// console.log(typeof x);
//----------------------------------------------------------
// Q 4 : function scope bs block scope
// Scope of a variable
// let x = 10;
// function a(){
//   x += 5;
// }

// function b(){
//   console.log(x);
// }

// a();
// b();
// ES5 has function scope due to hoisting - You cannot have another variable with same name
// ES6 does not have function scope.
// Hoisting
//------------------------------
// JS compiler finds all variables declaration and bring all declaration (NOT assignments) to the top of the file;
// console.log(x);
// var x = 9;

// Block scope ES6
// let x = 9;
// {
//   x = 12;
//   console.log(12);
// }
// console.log(12);
// What is hositing? Bringing declaration to top
// How does block scope works? { create a separate scope for all variables}
// Scope of a variable - lifetime of a variable
//----------------------------------------------------------
// What is automatic semicolon insertion?
// ; in JS
// the compiler automatically adds ; at the end of those lines
// js insert at the end of new line. It is called ASI. ONLY at every new line
// let a = 4 *
// 4;
// console.log(a);
// In below example, internally, a semicolon is inserted.
// Why below code returns undefined? ->  undefined.
// Can 'use strict' statement or strict mode change the behaviour of ASI? No,
// function test(){
//   return
// {
//     a : 5,
//   }
// }

// function test(){
//   return {
//     a : 5,
//   }
// }

// const obj = test();
// console.log(obj);
// Q : Should you terminate all lines by a ; ? It is a good practice to have ; at the end.
// return {

// }
//
//----------------------------------------------------------
/**
* Q 4 : Difference between Rest and Spread Operator 
... Rest operator - rest of parameters
Create a function called sum which takes any number of arguments and at the end, it should return the sum of all the parameters passed to it.
- Rest operator is part of ES6. 
- In ES5, we have an array like object called 'arguments' which does not work with arrow function, so we avoid it.
- Arguments is an array like object.


... Spread operator 
Spreads the array into separate data values.


*/
// Rest Operator
// function sum(...nums){
//   console.log(nums);
// }
// sum(2, 3, 4);
// sum(56, 43);

// function sum() {
//   console.log(arguments);
// }
// sum(2, 3, 4);
// sum(56, 43);

// const sum = ()=> {
//   console.log(arguments);
// }
// sum(2, 3, 4);
// sum(56, 43);

// const sum = (...nums) => {
//   console.log(nums);
// };
// sum(2, 3, 4);
// sum(56, 43);

// Spread operator
// let arr1 = [1, 2, 3, 4, 5, 6, 89, -1, 23, 34];
// let arr2 = [7, 9, 10];
// Spread Operator
// let arr2 = [...arr1, 7, 9, 10];
// console.log(arr2);
// let arr1 = [1, 2, 3, 4, 5, 6, 89, -1, 23, 34];
// console.log(Math.max(arr1)); // NaN max takes individual value
// console.log(Math.max(...arr1)); // pass individual value
/**
 * Rest vs Spread Operator ...
 * Behave as per the context use
 * We cannot use arguments object in arrow function. If it is the traditional way, it can work, otherwise it won't.
 * function sum(){
 *  console.log(arguments);
 * }
 * sum(4, 5);
 * sum(5, 6, 8, 9);
 *
 * Which is the best way to create new arrays with assignment?
 * how can we assignment array
 * arr1 = arr2;
 * let arr2 = [...arr1, 4, 5, 6];
 *
 * How can we handle n number of parameters passed to a function?
 * Create a function which can take any number of parameters that returns sum or max or any other calculative values?
 *
 *
 * Can the rest operator be placed anywhere in the function parameter list?
 * function test (...a, b){
 *
 * }
 * No, we cannot have rest parameter in the beginning of parameter list.
 * If we just have the parameter list, it is OK, but if we have more parametesr then, the rest parameter should be at the last position because it is the rest of the parameters.
 */

// let arr1 = [1, 2, 3, 45, 79];
// const arrSum = (arr1) => arr1.reduce((a, b) => a + b, 0);

// console.log(arrSum(arr1));
// console.log(Math.max(...arr1));
// https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332
//----------------------------------------------------------
/**
 * When do you get infinity or - infinity as output?
 * Infinity is a special integer value which is greater than any value or the highest possible value in JS
 * positive infinity POSITIVE_INFINITY
 * negative -infinity NEGATIVE_INFINITY
 * In JS, the numbers are stored in 64-bit format. It means any value which cannot fit in the 64-bit format - will return infinity.
 * Any value that is larger than 64 bit, will get infinity
 *
 * How will you put a validation for positive or negative infinity?
 * if(num === Number.POSITIVE_INFINITY)
 *
 * What will be the output of this code?
 * console.log(1/0); // infinity - not division by zero error
 */

// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(9000);
// console.log(9e307);
// console.log(-9e650);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// if(num === Number.NEGATIVE_INFINITY){
//   return "Negative infinity value";
// }else{
//   return num;
// }
// console.log(1/0);
//----------------------------------------------------------
/**
 * When do you get NaN as an output?
 * Not a number is a global property.
 * You normally get this error when there is a non-numeric value or operation is performed.
 * NaN returns unique value whenever you use it
 * Therefore use isNaN
 * isFinite()
 *  Check for NaN
 *  Check for infinity and -infinity
 *   console.log(NaN == NaN) // false. Always returns unique value
 *   console.log(NaN === NaN) => false
 *  isNaN
 *  isFinite - check both for NaN and infinity value
 */

// let a = 4;
// let b = "String";

// if(!isNaN(a*b)){
//     console.log("It is a valid number");
// }else{
//   console.log("Not valid");
// }
// // console.log(isNaN(a-b));
// console.log(NaN === NaN);
// console.log(a+b);
// console.log(a*b);
// let a = 4, b = "apple";
// console.log(isFinite(a*b));
// console.log(isFinite(Number.MAX_VALUE));
// console.log(isFinite(a*b));
// console.log(isFinite(Infinity));
//----------------------------------------------------------
/**
 * Explain must points of arrow functions
 * Functional behaviour
 * - "this" object does not work with arrow function
 * - "arguments" object does not work with arrow function
 * - You cannot use new to call the arrow function
 * Immediately Invoked Function Expression (IIFE)
 * 
 * Explain the syntactical features of arrow function
 * no need to write return statement
 * why this does not work in arrow function. this object. 
 * Reason : We have a class keyword to deal with the classes. Therefore, no need for the function to act as a class
 *  How can you handle arguments object like functionality in arrow function
 * const test=(...a)=>{
 * }
 */
// //Function description
// function test() {}
// test();

// //Function expression
// const test1 = function () {};
// test1();

// //Arrow function is function expression
// const test2 = (a, b) => {};

// const test3 = (a) => {
//   console.log(a * 3);
// };
// test3(4);

// const test4 = (a, b) => {
//   return a + b;
// };
// const test5 = (a, b) => a + b;
// console.log(test5(4, 5));
// // Immediately invoked function expression
// (function () {
//   console.log("IIFE");
// })();
// // Immediately invoked arrow function
// (() => {
//   console.log("IIFE");
// })();


// It always run in global environment.
// Reference is window.
// Function used to act as class. 
// There is no new. Do not behave as class.
// 
// const test = ()=>{
//   console.log(this);
// }
// test();

// const obj = {
//   test1(){
//     console.log(this);
//   }
// }
// const obj2 = {
//   test2 :() =>{
//     console.log(this);
//   }
// }

// obj.test1();

// function test(){
//   console.log(arguments);
// }

// console.log(test(1, 2, 3, 4));
// const test =(...a)=>{
//   console.log(a);
// }
//----------------------------------------------------------
/**
 * How does closure work in JS
 * When a function comes under another function, a closure is created.
 * Closure patterns remembers outer variable and also helps to access outer scope members
 * When you use closure, you
 * How can you access private variable or function outside the scope?
 * function outer(){
 *    return function(){
 *        console.log("Inner");
 *    }
 * }
 * 
 * outer();
 * Advantages of closure
 * ===========================
 * - any member which is private for certain scope can be accessed keeping it private, so that variable is away from any accidental change of value
 * - Accessing private members with closure pattern assure better approach of making a variable global
 */
// cannot call inner() from outside 
// function outer(){
//   function inner(){
//     console.log("Inner called");
//   }
//   return inner();
// }

// function outer() {
//   return function () {
//     console.log("Inner called");
//   }
// }
// const outer =() =>{
//   return ()=> {
//     console.log("Inner called");
//   }
// }

// const clo = outer();
// clo();

// const addCounter = ()=>{
//   let counter = 0;
//   // local variables acts as global variable
//   // it  
//   // [[Environment -details of current environment]]
//   return ()=>{
//     counter++;
//     return counter;

//   }
// }

// const cl = addCounter();
// console.log(cl());
// console.log(cl());
// console.log(cl());
// //everytime - it gets initialise to 0
// console.log(addCounter());
// console.log(addCounter());
// console.log(addCounter());
//----------------------------------------------------------
// currying 
// It is a unique way to call inner functions where you can pass arguments partially or pass multiple arguments in a function but 1 argument at a time
// const sum = function(a){
//   return function(b){
//     return function(c){
//       return a + b + c;
//     }
//   }
// }
// What is function currying?
// It is a way to call inner functions where you can pass arguments partially or pass multiple arguments in a function but 1 argument at a time.
// const multiply = a => b => c => return a * b * c;
// What will this statement do? Explain in detail.
// currying 
// What is the practical use of currying?
// Very useful technique for functional programming which solves various purposes like passing partial parameters or avoiding unwanted repetitions. E.g. product price where price is passed only once.

// const cl = sum(5); // stored in lexical environment of JS
// const ans = cl(60);
// const final = ans(10);
// console.log(final);
// console.log(sum(5)(6)(10)); //currying 

// const sum = (a) =>{
//   return ((b)=>{
//     return ((c)=>{
//       return a + b + c;
//     })
//   })
// }

// const sum = (a)=>{
//   return((b)=>{
//     return ((c)=> a + b + c);
//   })
// }
// Currying
// const sum = a => b => c => a + b + c;

// const cl = sum(5); // stored in lexical environment of JS
// const ans = cl(60);
// const final = ans(10);
// console.log(final);
// console.log(sum(5)(6)(10)); //currying 
// Call the function partially
// const CalculatePrice=(price)=>{
//   return (discountPercent) =>{
//     return price * discountPercent;
//   }
// }

//getPrice();
// Price remains the same, the only difference is the discountPercentage
// discountAmount(300, 0.5);
// discountAmount(300, 0.4);
// discountAmount(300, 0.3);
// const discountAmount = CalculatePrice(300);
// console.log(discountAmount(0.5));
// console.log(discountAmount(0.8));
//----------------------------------------------------------
/**
 * Iterables and Iterators 
 * Iterator is ES6 - traverse through data structure
 * Array is iterable. for ... of
 * Strings, maps, sets
 */

// let arr = [4, 8, 9, 2, 3];
// let itr = arr[Symbol.iterator]();
// // for(let i of arr){
// //   console.log(i);
// // }

// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// Object literal = makes it iterable 
// Symbol.iterator

//If you want to make an object literal iterable, it should have method having key value as Symbol.iterator
// should have next()
let obj = {
  v1 : 1,
  v2 : 5,
}
obj[Symbol.iterator] = function(){
    return {
    next(){
      if(obj.v1 <= obj.v2){
        return {value:obj.v1++, done:false};
      }else{
        return{done:true};
      }
    }
  }
  // return itr;
}
for(let i in obj){
  console.log(i);
}


//----------------------------------------------------------
