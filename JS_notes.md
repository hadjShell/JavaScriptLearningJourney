---
Author: Jiayuan Zhang
Date: 2.27.2023
Version: 1.0
---

# JavaScript Note

***

## Introduction

* Three pillars in web development
  * HTML - Content - Nouns
  * CSS - Style and layout - Adjectives
  * **JavaScript - The real programming language to build web applications - Verbs**
* What applications that JavaScript can build?
  * Front-end apps
    * React, Angular, Vue, etc.
  * Back-end apps
    * Node.js
  * Native mobile apps
    * React Native, Ionic
  * Native desktop apps
    * Electron
* JavaScript is a multi-paradigm interpreted language
  * Modern JavaScript uses just-in-time compilation (no portable files)

* JavaScript runtime
  * Container including all the things that we need to use JavaScript
  * Different types of JavaScript runtime
  * Runtime in browsers
    * JavaScript engine
      * Program that executes JavaScript code
      * Example: V8 engine for chrome and node.js

    * Web APIs
    * Callback queue

  * Runtime in node.js
    * JavaScript engine
    * C++ bindings and thread pool
    * Callback queue

* JavaScript versions
  * ES6 / ES2015: biggest update to this language
  * New updates to JS every single year
  * Modern JavaScript - after ES6
  * Don't break the web
    * Backwards compatible
    * Old features are never removed
  * How to use modern JavaScript today?
    * ES5
      * Fully supported in all browsers
      * Ready to be used today
    * ES6+
      * Well supported in all modern browsers
      * No support in older browsers
      * Can use most features in production with transpiling and polyfilling
* How to link JavaScript file to the HTML file?
  * Incline script
    * Put JavaScript code in the `<script>` block
  * External JavaScript files
    * Put code in the `.js` files in the same folder of HTML files
    * Tag `<script src=""></script>` 

* Strict mode
  * Put `'use strict';` statement in the beginning of the `.js` file
  * Forbid to do certain things
  * Create visible errors


***

## Variables and Values

* `$` is allowed in the variable's name

* Declaration
  * `let`
    * Variables
    * Block-scope
  * `const`
    * Constant
    * Must be assigned with a value
    * Block-scope
  * `var`
    * Should be avoided
    * Old way of declaring variables before ES6
    * Function-scope
    * Creates property on `window` object

* Hoisting

  * Makes some types of variables accessible/usable in the code before they are actually declared

  * |                                 | Hoisted                               | Initial Value                                |
    | ------------------------------- | ------------------------------------- | -------------------------------------------- |
    | function declarations           | Yes                                   | Actual function                              |
    | `var` variables                 | Yes                                   | `undefined`                                  |
    | `let` and `const` variables     | No                                    | `<uninitialised>`, TDZ (Temperory Dead Zone) |
    | function expressions and arrows | Depends on using `var` or `let const` |                                              |

***

## Data types

* JavaScript has **dynamic typing**: we don't have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically.

* **In JavaScript, it is the value that has a type, not the variable**

* Primitive data types

  * Number

    * Floating point numbers
    * `NaN`: number value which means invalid number

  * String

    * Double quote or single quote

    * Template literals

      * Syntax

        ```javascript
        const str = `text ${varName1} text ${expression}`;
        ```

      * Can also be used to create multiple line strings

        ```javascript
        // Instead of doing this way
        const str = "text \n\
        text \n\
        text";
        // Using template literals
        const str = `text
        text
        text`;
        ```

  * Boolean

    * `true` or `false`
    * Falsy values
      * Values are not exactly false but will become false when we try to convert them into a boolean
      * `0, "", undefined, null, NaN`
    * Truthy values
      * Other values

  * Undefined

    * Empty variable

  * Null

  * Symbol

    * Value that is unique and cannot be changed

  * BigInt

    * Large integers than the Number type can hold

* Reference data type

  * Object literal
  * Arrays
  * Functions
  * Etc.

* `typeof` operator

  * `typeof var` or `typeof value`
  * Return a string

* Type conversion and coercion

  * Casting syntax

    ```javascript
    const num = Number("text");
    const str = String(10);
    const bool = Boolean(0);
    ```

  * Coercion

    * `+`: Number converts to String implicitly
    * `-`, `*`, `/`: String converts to Number implicitly
    * Using logical operators or condition statement, value will be converted to boolean implicitly

***

## Operators

* Mathematical operators
  * Exponentiation operator: `**`
  * `+`, `+=` can be used for string
* Assignment operators
* Abbreviating operators
* `++`, `--`
* Relational operators
  * `===`, `!==`
    * Strict equality operator
    * Doesn't perform type coercion
  * `==`, `!=`
    * Loose equality operator
    * Does perform type coercion
  * Avoid using loose equality operator
* Logical operators
  * Use ANY data type, return ANY data type, short-circuiting
  * OR return the first truthy value or the last falsy value if all flasy
  * AND return the first falsy value or the last truthy value if all truthy
* Bitwise operators
* Ternary operator
* Operator precedence
* Modern operators
  * `...` works on iterables not objects
    * After ES2018, `...` works on objects too
  * Nullish coalescing operator `??`
    * Introduced in ES2020
    * Updated OR
    * Work with nullish value: `null` and `undeifined` without `0`
  * Logical assignment operator
    * Introduced in ES2021
    * `||=`, `??=`, `&&=`
  * Optional chaining `?.`
    * Introduced in ES2020
    * Check if a property or function is `undefined` or not
    * Usually used with `??`

***

## Expressions and Statements

## Flow control

* `if-else`

* `switch`

* `for`

* `for-of`

  ```javascript
  const arr = [1, 2, 3];
  for(const item of arr) console.log(item);
  
  const obj = {
      "name": "John",
      "gender": "male"
  }
  for(const [key, value] of Object.entries(obj)) console.log(key, value);
  
  const m = new Map();
  for(const [key, value] of m) {}
  ```

  * `continue` and `break` is allowed

* `while`

* `do while`

***

## Functions

* Functions in JavaScript are **first-class objects**, **which means they are treated as variables**, so in JavaScript we can 

  * *Store functions in variables or properties*
  * *Pass functions as arguments to other functions*
  * *Return functions from functions*
  * *Call methods on functions*

* Higher-order funtions

  * A function that receives another function as an argument, that returns a new function, or both
  * The function as an argument is called callback function
    * `funcArg.name` returns the name of the function

  * The function that is returned is called returned function

* Syntax - **function declaration**

  ```javascript
  function funcName() {}
  
  // example
  function calcAge1(birthYear) {
      return 2023 - birthYear;
  }
  ```

* Functions can be invoked before their declarations

* Anonymous function - **function expression**

  ```javascript
  const funcName = function () {};
  
  // example
  const calcAge2 = function (birthYear) {
      return 2023 - birthYear;
  }
  ```

  * Cannot be invoked before function expression

* Arrow function - **function expression**

  * A special form of anonymous function

  ```javascript
  const funcName = para => exp;				// without {}, we don't need to return the value explicitly
  const funcName = (para1, para2) => {};		// with {}, we define the function in the traditional way
  
  // example
  const calcAge3 = birthYear => 2023 - birthYear;
  ```

  * Helpful for one-line functions
  * Does **not** get its own `this` keyword
  * Does **not** have `arguments` keyword

* Default parameters

  ```javascript
  function createBooking(
  	flightNum, 
       numPassengers = 1, 
       price = 199 * numPassengers) {}
  
  createBooking("LH123");
  createBooking("LH123", 2, 800);
  createBooking("LH123", undefined, 1000);		// skip a parameter to use its default value
  ```

* Functions in JavaScript is passed-by-value

* `arguments` key word

  * An `Array`-like object accessible inside function that contains the values of the arguments passed to that function

* `this`

  * Depends on how the function is called, which means it is **dynamic**
  * In method, `this` points to the owner of the function
  * In regular function, `this` points to `undefined` (in strict mode; otherwise points to `window`)
  * In arrow function, `this` will be the `this` of the parent function
  * ***In an event handler function, `this` always points to the element on which that handler is attached to***
  * Manually tell how it should behave
    * `func.call(thisArg, args)`
      * Calls the function with a given `this` value and arguments provided individually

    * `func.apply(thisArg, argsArr)`
      * Calls the specified function with a given `this` value, and `arguments` provided as an array
      * Equals to `func.call(thisArg, ...argsArr)`
      * Stick to `call`

    * `func.bind(thisArg, <args>)`
      *  Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called
      * If pass `args`, it will be preset when the `func` is called --- Partial application
      * Pass `null` to `thisArg` if you want to create a partial application without having `this` inside

* Immediately invoked function expression

  * Called once and never be called again

    ```javascript
    (function() {})();
    (() => {})();
    ```

* Closures

  * A function always has access to the variable environment of the execution context (call stack) in which it was created, even if that execution context is removed from the stack
  * Closure has high priority over scope chain

* Chaining methods

  * Avoid chaining the methods that mutate the original object



***

## Built-in Data structure

### Arrays

* Syntax

  * Literal syntax

  ```javascript
  const array = [element1, element2];
  ```

  * Object

  ```javascript
  const array = new Array(element1, element2);
  ```

* Can put values of different data types in one array

* Array is also an object

* Basic operations

  * `array.length`
    * Return the length of the array
  
  * `push`
    * Add new element to the end of the array
    * Return the length of the new array
  
  * `unshift`
    * Add new element to the start of the array
    * Return the length of the new array
  
  * `pop`
    * Remove the last element of the array
    * Return the removed element
  
  * `shift`
    * Removed the first element of the array
    * Return the removed element
  
  * `indexOf`
    * Return the index of the element
  
  * `includes`
  
    * Check whether the element is included in the array
  
  * Destructing array
  
    ```javascript
    const arr = [1, 2, 3];
    const [x, y, z] = arr;
    // skip elements
    const [x, , z] = arr;
    // default value
    const [a = 0, b = 0, c = 0, d = 0] = arr;		// without default value, d will be undefined
    
    // switch using this technique
    [a, b] = [b, a];
    ```
  
  * Spread array (unpack)
  
    ```javascript
    const arr = [7, 8, 9];
    const newArr = [1, 2, ...arr];		// [1, 2, 7, 8, 9]
    ```
  
  * Rest pattern (pack)
  
    * The rest element must be the last element
  
    ```javascript
    const arr = [1, 2 ,3 ,4 ,5];
    const [a, b, ...others] = arr;		// a = 1, b = 2, others = [3, 4, 5]
    ```
  
    * Using spread and rest together can write more general functions
  
      ```javascript
      function add (...numbers) {
          let sum = 0;
          for(int i = 0; i < numbers.length; i++)
              sum += numbers[i];
          return sum;
      }
      
      // All of following usages are available
      add(2, 3);
      add(1, 2, 3, 4, 5);
      const x = [1, 2, 3];
      add(...x);
      ```
  
  * `entries`
  
    * Return a new Array Iterator object that contains the key/value pairs for each index in the array
  
  * `slice`
  
  * `splice`
  
    * Works similar as `slice`, but change the original array by taking the extracted elements
  
  * `reverse`
  
    * Change the original array
  
  * `arr1.concat(arr2)`
  
    * Returns a new array, doesn't change the original arrays
  
    * Same effect: 
  
      ```javascript
      [...arr1, ...arr2]
      ```
  
  * `join`
  
  * `at`
  
    * Takes an integer value and returns the item at that index
    * Useful for accessing the last element `arr.at(-1)`
  
  * `forEach(callbackFn)`
  
  * `forEach(function(element, index, array) {})`
  
    * Executes a provided function once for each array element
    * `element`: the current element being processed in the array
    * `index`: the index of the current element being processed in the array
    * `array`: the array that calls `forEach`
  
  * `map(callbackFn)`
  
    * **Creates a new array** populated with the results of calling a provided function on every element in the calling array
  
  * `filter(callbackFn)`
  
    * Returns a **shallow copy** of a portion of the given array, filtered down to just the elements from the given array that pass the test implemented by the provided function. If no elements pass the test, an empty array will be returned
    * `callbackFn` returns a boolean value
  
  * `reduce(callbackFn, initialValue)`
  
  * `reduce(function(accumulator, cuurentValue, currentIndex, array) {}, initiaValue)`
  
    * Executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a **single value**
    * `accumulator`: the value resulting from the previous call to `callbackFn`
    * `initialValue`: a value to which `accumulator` is initialized the first time the callback is called. If `initialValue` is specified, `callbackFn` starts executing with the first value in the array as `currentValue`. If `initialValue` is *not* specified, `accumulator` is initialized to the first value in the array, and `callbackFn` starts executing with the second value in the array as `currentValue`. In this case, if the array is empty (so that there's no first value to return as `accumulator`), an error is thrown
  
  * `find(callbackFn)`
  
  * `findLast(callbackFn)`
  
    *  Returns the first / last element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned
    * `callbackFn` returns a boolean value
  
  * `findIndex(callbackFn)`
  
  * `findLastIndex(callbackFn)`
  
    * 
  

### Objects

* Syntax

  * Literal syntax

  ```javascript
  const obj = {
      key1: value1,
      key2: value2,
      func: function () {}	// Methods
  };
  ```

  * `key` are always strings

  * It's not a block scope

  * Enhanced object literals

    ```javascript
    const openingHours = {
        fri: {
            open: 11,
            close: 23
        }
    };
    const arr = ["name", "gender"];
    const restaurant = {
        // First enhancement: if the property name is the same as the variable name
        openingHours,
        // Second enhancement: function in object
        check() {},
        // Thirf enhancement: computing property name
        [arr[0]]: "John" 
    };
    ```

* In object methods, we can use `this` keyword

  * Unlike Java, `this` must be used explicitly if you need to use the reference of the object

* Basic operations

  * Access a value
    * `obj.key`
    * `obj["key"]`
      * The string can be an expression which holds the value of the string of the key name
    * Return `undefined` if there is not such a key

  * Create a new property on the current object
    * `obj.newKey = val;`
    * `obj["newKey"] = val;`

  * `Object.keys(obj)`

    * Return an array of object property names

  * `Object.values(obj)`

    * Return an array of object property values

  * `Object.entries(obj)`

    * Return an array of object property key-value pairs

  * Destructing objects

    ```javascript
    const restaurant = {
        name: "YO",
        menu: ["Ice cream", "burger"],
        openingHours: {
            fri: {
                open: 11,
                close: 23
            },
            sat: {
                open: 0,
                close: 24
            }, 
            sun: {
                open: 0,
                close: 24
            }
        }
    };
    
    const {name, openingHours, menu} = restaurant;				// order doesn't matter here
    const {name: x, openingHours: y, menu: z} = restaurant;		// new variable name
    const {menu = []} = retaurant;							 // default value
    const {fri: {open, close}} = openingHours;				 //	nested objetcs
    
    // switch
    ({a, b} = {b, a});			// () is required
    ```

  * Spread

    ```javascript
    const newRestaurant = {
        ...restaurant,
        founder: "John"
    };
    ```

  * Rest

    ```javascript
    const {fri, ...otherDays} = openHours;
    ```


### Sets

* Syntax

  ```javascript
  const s = new Set([]);
  ```

* Basic operations

  * `.size`

  * `has`

    * Check if the set contains the element

  * `add`

    * Add an element to a set if it is not included

  * `delete`

    * Delete an element

  * `clear`

    * Delete all elements

  * Convert set to array

    ```javascript
    const arr = [...s];
    ```
  
  * `forEach(function(value, key, map) {})`
  
    * `key` and `value` are the same

### Maps

* Syntax

  ```javascript
  const m = new Map([ [k1, v1], [k2, v2] ]);
  ```

* Difference from objects: **`key` in a map can be any data type**

* Basic operations

  * `.size`

    * Return the size of the map

  * `set(key, value)`

    * Add a new element into map
    * Return the changed map
    * Can be chained `m.set(a, b).set(c, d)`

  * `get(key)`

    * Return the value according to the key
    * Return `undefined` if there is not such a key

  * `has()`

    * Check if a map has a certain key

  * `delete(key)`

    * Delete an element according to the key

  * `keys()`

    * Return an iterable of values in map
    * `[...m.keys()]` to get the array of keys

  * `values()`

    * Return an iterable of keys in map

  * `entries()`

  * Convert object to map

    ```javascript
    const m = new Map(Object.entries(obj));
    ```

  * Convert map to array

    ```javascript
    const arr = [...m];
    ```
  
  * `forEach(function(value, key, map) {})`

### Strings

* Whenever call a method on a string, JavaScript will automatically create a string object (boxing)

* Operations

  * `[]`

    * Access the character (still a string)

  * `indexOf`

    * Return the index of the first appearing string

  * `lastIndexOf`

    * Return the index of the last appearing string

  * `slice()`

    * Return the substring

      ```javascript
      const airline = "TAP Air Portugal";
      
      airline.slice(4);								// <Air Portugal>
      airline.slice(4, 7);							// <Air>	
      airline.slice(0, airline.indexOf(" "));		 	  // <TAP>
      airline.slice(airline.lastIndexOf(" ") + 1);	  // <Portugal>
      airline.slice(-2);								// <al>
      airline.slice(1, -1);							// <AP Air Portuga>		
      ```

  * `toLowerCase`

  * `toUpperCase`

  * `trim`

    * Removes whitespace from both ends of a string and returns a new string 

  * `replace(pattern, replacement)`

    * Returns a new string with one, some, or all matches of a `pattern` replaced by a `replacement`
    * The `pattern` can be a string or a [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), and the `replacement` can be a string or a function called for each match
    * If `pattern` is a string, only the first occurrence will be replaced

  * `includes`

  * `startsWith`

  * `endsWith`

  * `split(pattern)`

    * Takes a pattern and divides a string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array

  * `join(separator)`

    * Returns a new string by concatenating all of the elements in an ***array***, separated by commas or a specified separator string
    * If the array has only one item, then that item will be returned without using the separator

  * `padStart(targetLength, padString)`

    * Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
    * The padding is applied from the start of the current string

  * `padEnd`

  * `repeat(count)`

    * Returns a new string which contains the specified number of copies of the string on which it was called, concatenated together

### Copy

* Reference copy

  ```javascript
  const newObj = oldObj;
  ```

* Shallow copy

  ```javascript
  const newArr = [...oldArr];
  const newObj = {...oldObj};
  const newObj = Object.assign({}, oldObj);
  ```

* Deep clone

  * Use external libraries


***

## DOM and Events

### DOM

* Document Object Model
* Structured representation of HTML documents
* Allows JavaScript to access HTML elements and styles to manipulate them
* DOM is automatically created by the browser as soon as the HTML page loads
* A **tree** structure
* ![DOM](img\DOM.png)
* `document` is the special object that is the entry point to the DOM
* DOM is a Web API that written in JavaScript

### Operations

* Select and manipulate elements

  ```javascript
  const element = document.querySelector(".className");
  const element 2 = document.getElementById("id");
  // Multiple classes, craete a NodeList
  const elements = document.querySelectorAll(".className");
  
  element.textContent = "new text";		 // content of the element
  element.innerHTML = "";					// html
  
  ```

* Handle click events

  * An event is something happened on the page
  * **JavaScript will generate an object which contains all the information about the event when an event occurs**

  ```javascript
  /* para1: type of the event
     para2: event function handler
  */
  document.querySelector(".btn").addEventListener('click', function() {})
  ```

* Manipulate CSS style

  ```javascript
  // value is always a string
  document.querySelector("body").style.brackgroundColor = "#ffffff";
  ```

  * Will not change the CSS file; add an inline style attribute

* Working with classes

  ```javascript
  const element = document.querySelector(".className1");
  // check the class names of the element
  // add, remove, contains, toggle, etc.
  // toggle: add if not contains, remove if contains
  element.classList.remove("className2");
  ```

  * Add and remove classes is the main way to manipulate the styles instead of manipulating `style` directly

* Response with keyboard events

  ```javascript
  // keyup, keypress, keydown --- three conditions of interacting with a key on the keyboard
  // usually choose keydown, happen as soon as we hit the key
  document.addEventListener("keydown", function(e) {})
  // use e.key to get which key is pressed
  ```

* Add elements

  ```javascript
  // 1. Parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position
  // Para: 
  // position: A string representing the position relative to the element. Must be one of the following strings:
  // <!-- beforebegin -->
  // <p>
  //   <!-- afterbegin -->
  //   foo
  //   <!-- beforeend -->
  // </p>
  // <!-- afterend -->
  element.insertAdjacentHTML(position, text);
  ```

* Prevent `<form>` from submmiting

  ```javascript
  e.preventDefault();			// Stop page reloading after sbumitting
  ```

* `blur()`

* 

***

## Numbers, Dates, Intl and Timers

***

## OOP

