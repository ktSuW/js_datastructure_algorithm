# DSA - JavaScript

This repo contains javascript data structures and methods that I am currently learning to solve coding problems.

## Data Structures

<hr>

### Array

- **Creating Arrays**
  - var nums = [];
  - var nums = new Array();
  - **_It does not have to be the same data types_**
  - var nums = [1, true, 'Joe', null];
  - print(Array.isArray()); // true
- **Creating Arrays from string**
  - var sentence = "the quick brown fox";
  - var words = sentence.split(" ");
  - for(let i = 0; i < words.length; i++){ <br>
    print("Word" + i + ":" + words[i]); <br>
    }
- **Accessor Functions**

  - var nums = [2, 3, 6, 5, 1, 7, 8];
  - var position = nums.indexOf(3);
  - **_Searching for a value_** : [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  - **_String representation of Arrays_** : [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) creates and returns a new string by concatenating all of the elements in an array
  - **_String representation of Arrays_** : [Object.prototype.toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) returns a string representing the object
  - **_Creating new Arrays from existing arrays_** : [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) merge two or more arrays. It does not change the original array and returns a new array.
  - **_Creating new Arrays from existing arrays_** : [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) returns a shallow copy of a portion of array into a new array object selected from start to end (end not included). It does not change the original array
  - **_Creating new Arrays from existing arrays_** : [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

- **Mutator Functions** - Add elements to the array

  - [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - adds an element to the end of an array and returns a new length of the array
  - [Array.prototype.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - adds one or more elements to the beginning of an array and returns the new length of the array.

- **Removing elements from the beginning and end of an array** - pop() mutator function

  - [Array.prototype.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) - removes the last element from an array and returns that element.
  - [Array.prototype.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - removes the first element from an array and return the removed element. This method changes the length of an array

- **Adding or removing elements from the middle of an array**

  - **splice()**
    - let nums = [1, 2,3, 4, 5, 6];
    - let newNums = [8, 9, 10, 11];
    - nums.splice();

- **Putting array elements in order**

  - [Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse) - The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
  - [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

- **Iterators**
  - [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) - executes a provided function once for each array element
  - [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
  - [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.
- **Iteraor functions that returns a new Array**

  - [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - creates a new array populated with the results of calling a provided function on every element in the calling array.

- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - creates a new array that pass the test implemented by the provided function.
  - const words = ["delicisous", "yummy", "So good"];
  - const result = words.filter(word => word.length > 6);
  - console.log(result);
  <hr>

### Lists

List is an abstract data type (ADT).
// Write Code - TB added
| **List method/function Name** | **Description**|
|---|---|
|- listSize() | Number of elements in the list |
|- pos(property) | current positoin in the list|
|- length(property)| returns the number of elements in the list|
|- clear(function)|clears all the elements from list|
|- tostring(function)| return string represetnatation of list|
|- getElement(function)| retirms element at current postiion|
|- insert(function)| inserts new element after existing element|
|- append(function)| add new element to end of list|
|- remove(function)|re,pve elements from list|
|- front(function)|sets current position of first element of list|
|- end(function)|sets current position to last of the list|
|- end(function)|sets current positoin to last element of list|
|- prev(function)|moves current position back one element|
|- next(function)|moves current position forward one element|
|- currPos(function)|returns the current position in list|
|- moveTo(function)|move the current position to specified position|

<hr>

### LinkedLists

### Stacks

### Queues

### Dictionaries

### Hashing

### Sets

### Binary Trees and Binary Search Trees

### Graphs
