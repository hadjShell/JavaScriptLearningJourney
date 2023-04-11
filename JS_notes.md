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
* Script Loading
  * ![script_loading](img\script_loading.png)
  * Async in head
    * Scripts not guaranteed to execute in order
    * Use for 3rd-party scripts where order doesn't matter

  * Defer in head
    * Scripts are executed in order
    * Overall best solution



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

  * Object
  * Array
  * Function
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

  * This is allowed in JavaScript:

    ```javascript
    const y = 2;
    if (y === 3) console.log(x);
    const x = 1;
    console.log(x);
    ```

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

  * Use default parameters whenever is possible

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

    > For example, `this` in the callback functions

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

* Functional programming

  * Declarative paradigm
  * Based on the idea of writing software by combining many pure functions, avoiding side effects and mutating data
  * Pure functions are stateless


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
  const array2 = new Array(len);			// Empty array with length len
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
  
    * Create a shallow copy of array: `arr.slice()`
  
  * `splice(start, deleteCount)`
  
    * Works similar as `slice`, but **change the original array** by taking the extracted elements
    * Useful for deleting elements
  
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
  
  * `forEach((e, i, arr) => {})`
  
    * Executes a provided function once for each array element
    * `element`: the current element being processed in the array
    * `index`: the index of the current element being processed in the array
    * `array`: the array that calls `forEach`
    * Throw-away parameter: use `_` to name it
  
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
  
    * Returns the index of the first / last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned
  
  * `some(callbackFn)`
  
    * Tests whether at least one element in the array passes the test implemented by the provided function
    * Returns a boolean value
    * It doesn't modify the array
  
  * `every(callbackFn)`
  
    * Tests whether all elements in the array pass the test implemented by the provided function
  
  * `flat(depth)`
  
    * Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
    * `depth`: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1
  
  * `fLatMap(callbackFm)`
  
    * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level
    * Identical to a `map()`followed by a `flat()` of depth 1 (`arr.map(callbackFn).flat()`), but slightly more efficient than calling those two methods separately
  
  * `sort(compareFn)`
  
  * `sort((a, b) => {})`
  
    * Sorts the elements of an array *[in place](https://en.wikipedia.org/wiki/In-place_algorithm)* and returns the reference to the same array, now sorted
  
    * The default sort order is ascending, built upon converting the elements into **strings**, then comparing their sequences of UTF-16 code units values
  
    * | `compareFn(a, b)` return value | sort order                         |
      | :----------------------------- | :--------------------------------- |
      | > 0                            | sort `a` after `b`                 |
      | < 0                            | sort `a` before `b`                |
      | === 0                          | keep original order of `a` and `b` |
  
    * Comparing numbers
  
      ```javascript
      // ascending order
      function compareNumbers(a, b) {
        return a - b;
      }
      
      // descending order
      function compareNumbers(a, b) {
        return b - a;
      }
      ```
  
  * `fill(value)`
  
  * `fill(value, start, end)`
  
    * Changes all elements in an array to a static value, from a start index (default `0`) to an end index (default `array.length`)
    * Returns the modified array
  
  * `Array.from(arrayLike)`
  
  * `Array.from(arrayLike, mapFn)`
  
    * Creates a new, shallow-copied `Array` instance from an iterable or array-like object
  
    * `Array.from()` lets you create `Array` from:
  
      - [Iterable objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) (objects such as `Map` and `Set`); or, if the object is not iterable
  
      - Array-like objects (objects with a `length` property and indexed elements)
  
        ```javascript
        const arr = Array.from({ length: 7 }, () => 1);
        ```
  
  * ![array_method](img\array_method.png)

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

  * `key` are always **strings**

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
        // Third enhancement: computing property name
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

  * `Object.freeze(obj)`

    * Make the object immutable
    * However, it's a shallow freeze
  
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
  newArr = oldArr.slice();
  ```

* Deep clone

  * Use external libraries like `Lodash`


***

## DOM and Events

### DOM

* Document Object Model
* Structured representation of HTML documents
* Allows JavaScript to access HTML elements and styles to manipulate them
* DOM is automatically created by the browser as soon as the HTML page loads
* A **tree** structure
* ![DOM](img\DOM.png)
* DOM is a Web API that written in JavaScript
* **DOM objects are unique**
* *Every single node in the DOM tree is the type **`Node`***
  * Represented by JavaScript object
  * `textContent`, `childNodes`, `parentNode`, `cloneNode()`, etc
  * `Node` child classes
    * `Element`
      * `HTMLElemnt`
        * `HTMLButtonElement`
        * ...
        * `HTMLDivElement`

    * `Text`
    * `Comment`
    * `Document`
      * The special object that is the entry node of the DOM
  * `Node` inherits `EventTarget` which has two methods
    * `addEventListener()`
    * `removeEventListener()`
  * ![node](img\node.png)
* DOM traversal
  * `Element.children`
    * Returns a live `HTMLCollection` which contains all of the child `elements` of the element upon which it was called
    * Includes only element nodes

  * `Element.childNodes`
    * Returns a live `NodeList` of child `nodes` of the given element where the first child node is assigned index `0`

  * `Element.parentNode`
  * `Element.parentElement`
    * Direct parent

  * **`Element.closest(selector)`**
    * Traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified selector

  * `Element.previousElementSibling`
  * `Element.nextElementSibling`
  * `Element.previousSibling`
  * `Element.nextSibling`

### Operations

* Select elements

  * `document`
    * The `Document` object represents your web page

  * `document.documentElement`
    * Returns the `Element` that is a direct child of the document. For HTML documents, this is normally the `HTMLHtmlElement` object representing the document's `<html>` element

  * `document.head`
  * `document.body`
  * `document.querySelector(selector)`
    * Returns the first `Element` within the document that matches the specified selector
    * `selector`
      * A string containing one or more selectors to match. This string must be a valid CSS selector string

  * `document.querySelectorAll(selector)`
    * Returns a `NodeList` of `Element`s

  * `document.getElementByID(id)`
  * `document.getElementsByTagName(name)`
    * Returns an `HTMLCollection` of elements with the given tag name
    * The returned `HTMLCollection` is live, meaning that it updates itself automatically to stay in sync with the DOM tree without having to call `document.getElementsByTagName()` again

  * `document.getElementsByClassName(className)`
    * Returns an `HTMLCollection` of elements with the given class name

  * `Element.querySelector()`
  * `Element.getElementsByTagName(name)`

* Create and insert elements

  * `Element.insertAdjacentHTML(position, text)`

    * Parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position

    * `position`

      * A string representing the position relative to the element. Must be one of the following strings:

      * ```javascript
        // <!-- beforebegin -->
        // <p>
        //   <!-- afterbegin -->
        //   foo
        //   <!-- beforeend -->
        // </p>
        // <!-- afterend -->
        ```

  * `document.createElement(tagName)`

    * Returns a new created `Element` specified by `tagName`

  * `Node.cloneNode(deep)`

    * Return a new cloned `Node`. The cloned node has no parent and is not part of the document, *until* it is added to another node that is part of the document

    * `deep`
      * If `true`, then the node and its whole subtree, including text that may be in child `Text` nodes, is also copied
      * If `false`, only the node will be cloned. The subtree, including any text that the node contains, is not cloned

  * `Element.prepend(para1, paraN)`

    * Inserts a set of `Node`objects or string objects before the first child of the `Element`
    * String objects are inserted as equivalent `Text` nodes

  * `Element.append(para1, paraN)`

    * Inserts a set of `Node`objects or string objects after the first child of the `Element`

  * `Element.before(para1, paraN)`

    * Inserts a set of `Node`objects or string objects in the children list of this `Element`'s parent, just before this `Element`

  * `Element.after(para1, paraN)`

    * Inserts a set of `Node`objects or string objects in the children list of this `Element`'s parent, just after this `Element`

* Delete elements

  * `Element.remove()`
    * Removes the element from the DOM

* Manipulate elements

  * `Element.${attribute}`
  * `Node.textContent`
    * Represents the text content of the node and its descendants
    * Setting `textContent` on a node removes *all* of the node's children and replaces them with a single text node with the given string value

  * `Element.innerHTML`
    * Gets or sets the HTML or XML markup contained within the element

  * `HTMLInputElement.value`
    * Returns a String

  * `HTMLElement.style.${property} = ""`
    * Returns the *inline* style of an element in the form of a `CSSStyleDeclaration` object
    * Will not change the CSS file; add an inline style attribute

  * `window.getComputedStyle(element)`
    * Returns an object containing the values of all CSS properties of an element, after applying active stylesheets and resolving any basic computation those values may contain

  * `Element.classList`
    * Returns a **live** [`DOMTokenList`](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList) collection of the `class` attributes of the element
    * `contains()`
    * `add()`
    * `remove()`
    * `toggle()`
      * Add if not contains, remove if contains

    * Add and remove classes is the main way to manipulate the styles instead of manipulating `style` directly

  * `ELement.src`
    * Absolute url

  * `Element.getAttribute("src")`
    * Relative url

  * `Element.dataset.${}`
    * Data attributes

* Coordinates

  * `Element.getBoundingClientRect()`
  * `window.pageXOffset`
  * `window.pageYOffset`
  * `window.scrollTo()`
    * Old way

  * `Element.scrollIntoView(scrollIntoViewOptions)`
    * Modern way

* [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

  ```javascript
  const obsCallbackFn = function (entries, observer) {}
  const obsOptions = {
      root: null,
      threshold: [0, 0.2]
  };
  const observer = new IntersectionObserver(obsCallbackFn, obsOptions);
  observer.observe(element);
  ```

  * Sticky nav
  * Lazy loaded images

### Event and event handlers

  * An event is something happened on the page
  * **JavaScript will generate an object which contains all the information about the event when an event occurs**
  * The callback function accepts a single parameter: an object based on [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) describing the event that has occurred, and it returns nothing
  * **In an event handler function *(except arrow function)*, `this` always points to the element on which that handler is attached to**

  ```javascript
  /* para1: type of the event
     para2: event function handler
  */
  document.querySelector(".btn").addEventListener('click', function(e) {})
  
  // pass parameters into callback function
  function callbackFn(e, para) {}
  e.addEventListener("click", function (e) { callbackFn(e, para) });
  
  // or
  function callbackFn(e, this) {}
  e.addEventListener("click", callbackFn.bind(para));
  ```

  * Response with keyboard events


  ```javascript
  // keyup, keypress, keydown --- three conditions of interacting with a key on the keyboard
  // usually choose keydown, happen as soon as we hit the key
  document.addEventListener("keydown", function(e) {})
  // use e.key to get which key is pressed
  ```

* `removeEventListener()`
* `e.preventDefault()`
* `e.target`
  * A reference to the object onto which the event was dispatched
* `e.currentTarget`
  * The current target for the event, as the event traverses the DOM
* Event propagation
    * Capturing phase
      * Event happens, travels all the way down from `document` to the target element
      * Pass through every single parent of the target
    * Target phase
      * Events can be handled right at the target
    * Bubbling phase
      * Events bubble up from target element to `document`
      * Normally `addEventListener` happens in this phase
      * `addEventListener(event, callbackFn, true)` will listen to event in capture phase
    * Not all events have these phases
    * Stop propagation: `e.stopPropagation()`
    * **Event delegation**
      * Take advantage of event propagation that add one event listener to the container of similar events instead of add same event listeners to all of them
      * Use `e.target`
      * Matching strategy
      * Guard clause (Guard `null` pointer)

***

## Numbers, Dates, Intl and Timers

* Numbers

  * Always float numbers

  * Properties

    * `MAX_SAFE_INTEGER`
    * `MIN_SAFE_INTEGER`

  * Methods (Global functions --- `Number` can be omitted)

    * `Number.parseInt(string, radix)`

      * parses a string argument and returns an integer of the specified radix

      * `string`: a string **starting with an integer**. Leading whitespace in this argument is ignored

        `radix`: the base in mathematical numeral systems

    * `Number.parseFloat(string, radix)`
    * `Number.isNaN(value)`
      
      * Determines whether the passed value is the number value [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN), and returns `false` if the input is not of the Number type
    * `Number.isFinite(value)`
      
      * Determines whether the passed value is a finite number — that is, it checks that a given value is a number, and the number is neither positive `Infinity`, negative `Infinity`, nor `NaN`
      * Check if `value` is a number
    * `Number.isInteger(value)`
    * `Number.prototype.toFixed(digits)`
      
      * Formats a number using fixed-point notation

* `Math`

  * Do type coercion itself

  * `Math.PI`

  * `Math.max(val1, val2, valN)`

  * `Math.min(val1, val2, valN)`

  * `Math.random()`

    * Returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range

  * `Math.trunc(val)`

    * Returns the integer part of a number by removing any fractional digits

  * `Math.round(val)`

    * Returns the value of a number rounded to the nearest integer

  * `Math.ceil(val)`

    * Always rounds up and returns the smaller integer greater than or equal to a given number

  * `Math.floor(val)`

    * Always rounds down and returns the largest integer less than or equal to a given number

    * Create a random integer within `(min, max]`

      ```javascript
      const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
      ```

* Numeric separators

  ```javascript
  const diameter = 287_460_000_000;
  const price = 345_99;
  ```

* `BigInt`

  * with `n` suffix: `56435468453453453453453454344684868n`
  * Cannot mix `BigInt` and other types except logical operators and `+` with String
  * Division of `BigInt`: works like C `int`

* `Date`

  * `new Date()`
    * Returns a string representing the current time
  * `new Date(dateString)`
    * ISO 8601 format (`YYYY-MM-DDTHH:mm:ss.sssZ`)
  * `new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)`
    * `monthIndex` starts with 0
  * `new Date(value)`
    * `value`: an integer value representing the number of milliseconds since `January 1, 1970, 00:00:00 UTC` (the ECMAScript epoch, equivalent to the UNIX epoch), with leap seconds ignored
  * `getFullYear()`
  * `getMonth()`
  * `getDate()`
  * `getDay()`
    * 0 represents Sunday
  * `getHours()`
  * `getMinutes()`
  * `getSeconds()`
  * `getTime()`
    * Returns the number of milliseconds since the [epoch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_ecmascript_epoch_and_timestamps)
    * The return value is called *timestamp*
  * `set...()`
  * `toISOString()`
  * `Date.now()`
    * Returns the current timestamp

* `Intl`

  * The namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting
  * `Intl.DateTimeFormat(locale, options).format(date)`
    * Formats a date according to the locale and formatting options
    * [`options`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
  * `Intl.NumberFormat(locale, options).format(num)`
    * Formats a number

* Timers

  * `setTimeout(callbackFn, dalay, param1, param2, paramn)`

    * Sets a timer which executes a function or specified piece of code once the timer expires
    * Returns an timeout ID which uniquely identifies the timeout
    * `delay`: in milliseconds
    * `param`: additional arguments which are passed through to the function specified by `functionRef`
    * `setTimeout()` is an **asynchronous function**, meaning that the timer function will not pause execution of other functions in the functions stack

  * `clearTimeout(timeoutID)`

    * cancels a timeout previously established by calling `setTimeout()`
    * If the parameter provided does not identify a previously established action, this method does nothing

  * `setInterval(callbackFn, delay, params)`

    * Returns an interval ID which uniquely identifies the interval

    * Repeatedly calls a function or executes a code snippet, with a fixed time delay between each call

    * `callbackFn` is not called immediately, actually get called after one second

      * Solution:

        ```javascript
        callbackFn();
        const timer = setInterval(callbackFn, delay);
        ```

        

  * `clearInterval(intervalID)`

***

## OOP In JavaScript

* Prototype and Object
  * In terms of Class and Instance (but not the same)
    * JavaScript doesn't have Class
  * Objects are linked to a prototype object
  * Prototypal inheritance/delegation: the prototype contains methods that are accessible to all objects linked to that prototype
* Three ways of implementing OOP in JavaScript
  * Constructor functions
    * Technique to create objects from a function
    * This is how built-in objects like Arrays, Maps or Sets are actually implemented
  * ES6 Classess
    * Modern alternative to constructor function syntax
    * "Syntactic sugar": works like constructor functions behind the scenes
    * Do NOT behave like classical OOP
  * `Object.create()`
* `instanceof` operator

### Constructor function

* Syntax

  ```javascript
  const ClassNmae = function (field1, field2) {
      this.field1 = field1;
      this.field2 = field2;
  }
  ClassName.prototype.method1 = function () {}
  ClassName.prototype.method2 = function () {}
  const obj = new ClassName(para1, para2);
  ```

* Works done behind `new`

  1.  An empty object is created 
  2. The function is called, `this` is linked to the empty object
  3. The empty object is linked to prototype
  4. Return the newly created object automatically

* Never declare methods in constructor functions

* Every object in JavaScript automatically has a property `prototype`

* ***Every object that is created by a certain constructor function will get access to all the methods and properties that we define on the constructors prototype property***

* `ClassName.prototype` is an object which is the prototype of the `obj`

  * `obj.__proto__ === ClassName.prototype`
  * `ClassName.prototype.isPrototypeOf(obj) === true`
  * `ClassName.prototype.isPrototypeOf(ClassName) === false`
  * `ClassName.prototype.constructor === ClassName`

* Prototype chain

  ![prototype_chain](img\prototype_chain.png)

* Static methods

  * Methods attached to the constructor function instead of its prototype

    ```javascript
    ClassName.helper = function() {}
    ```

### ES6 Classes

* Not the actual `Class`, just another way of using constructor functions

* Syntax

  ```javascript
  class ClassName {
      constructor(field1, field2) {
          this.field1 = field1;
          this.field2 = field2;
      }
      
      method1() {}
      method2() {}
      static helper() {}
  }
  ```

* Getter and setter

  * Existed to make code more clear

  ```javascript
  class Person {
      constructor(birthYear) {
          this.birthYear = birthYear;
      }
      // getter
      get age() {
          return 2023 - this.birthYear;
      }
      // setter
      set age(age) {
          this.birthYear = 2023 - age;
      }
  }
  
  const sam = new Person(2000);
  console.log(sam.age);		// not sam.age()
  sam.age = 30;			   // will change the birthYear
  ```

### `Object.create`

* Syntax

  ```javascript
  const ClassName() {}
  const obj = Object.create(ClassName);
  ```

* ==Be aware of the difference==: NOT "fake class"

### Inheritance

* Constructor function

  ```javascript
  const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
  };
  // Linking prototypes
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
  ```

* ES6 Classes

  ```javascript
  class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
    // Instance methods
    calcAge() {
      console.log(2037 - this.birthYear);
    }
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
    // Static method
    static hey() {
      console.log('Hey there 👋');
    }
  }
  class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
      // Always needs to happen first!
      super(fullName, birthYear);
      this.course = course;
    }
    introduce() {
      console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }
    greet() {
        console.log("Hi");
    }
  }
  ```

### Encapsulation

* JavaScript doesn't have real `private`

* Protected fields and methods

  * Just add a `_` before the name to indicate it is protected
  * Faked encapsulation

* Private Class fields and methods

  * Truly encapsulation

    ```javascript
    class Account {
      // 1) Public fields (instances)
      locale = navigator.language;
      // 2) Private fields (instances)
      #movements = [];
      #pin;
      constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        console.log(`Thanks for opening an account, ${owner}`);
      }
      // 3) Public methods
      // Public interface
      getMovements() {
        return this.#movements;
      }
      deposit(val) {
        this.#movements.push(val);
        return this;
      }
      withdraw(val) {
        this.deposit(-val);
        return this;
      }
      requestLoan(val) {
        if (this.#approveLoan(val)) {
          this.deposit(val);
          console.log(`Loan approved`);
          return this;
        }
      }
      static helper() {
        console.log('Helper');
      }
      // 4) Private methods
      #approveLoan(val) {
        return true;
      }
    }
    ```


***

## Asynchronous JavaScript

* Synchronous code is executed line by line
* Long-running operations block code execution
* Asynchronous code is executed after a task that runs in the background finishes
* Asynchronous code is non-blocking

### AJAX

* Asynchronous JavaScript And XML

* Allow us to communicate with remote web servers in an asynchronous way

* With AJAX calls, we can request data from web server dynamically

* XML data format is not used anymore

* JSON is the most popular data format now

* Old way

  ```javascript
  const request = new XMLHttpRequest();
  request.open("GET", ${url});
  request.send();
  request.addEventListener("load", function() {
      const [data] = JSON.parse(this.responseText);
      ...
  });
  ```

* Call back hell

  * The problem of nested callback functions for executing asynchronous operations in order

* Modern way

  * `Fetch` API

    * `fetch(url)`
      * Starts the process of fetching a resource from the network, returning a **promise** which is fulfilled once the response is available
      * Only rejects **when a network error is encountered**
    * `Promise.prototype.then(onFulfilled, onRejected)`
      * It immediately returns an equivalent `Promise` object, allowing you to chain calls to other promise methods
      * `onFulfilled(value)`
        * Its return value becomes the fulfillment value of the promise returned by `then()`
        * The function is called with the following arguments `value`: The value that the promise was fulfilled with
        * If it is not a function, it is internally replaced with an *identity* function (`(x) => x`) which simply passes the fulfillment value forward
      * `onRejected(error)`
        *  Its return value becomes the fulfillment value of the promise returned by `catch()`
        * The function is called with the following arguments `error`: The `error` object that the promise was rejected with
        * If it is not a function, it is internally replaced with a *thrower* function (`(x) => { throw x; }`) which throws the rejection reason it received
    * `Promise.prototype.catch()`
      * It is a shortcut for `Promise.prototype.then(undefined, onRejected)`

  * Example

    ```javascript
    const getJSON = function (url, errorMsg = 'Something went wrong') {
      return fetch(url).then(response => {
        if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
        return response.json();		// create a new promise
      });
    };
    
    const getCountryData = function (country) {
      // Country 1
      getJSON(
        `https://restcountries.eu/rest/v2/name/${country}`,
        'Country not found'
      )
        .then(data => {
          renderCountry(data[0]);
          const neighbour = data[0].borders[0];
          if (!neighbour) throw new Error('No neighbour found!');
          // Country 2
          return getJSON(
            `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
            'Country not found'
          );
        })
        .then(data => renderCountry(data))
        .catch(err => {
          console.error(`${err} 💥💥💥`);
          renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
        })
    };
    ```

### Promises

* An **object** that is used as a placeholder for the future result of an asynchronous operation

* We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results

* Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations

* A Promise is a JavaScript object that links producing code and consuming code

* Lifecycle
  * Build promises

    * `Promise(function(resolve, reject) {})`

    * `Promise.resolve(value)`

      * Returns a `Promise` object that is fulfilled with a given `value`

    * `Promise.reject(error)`

      * Returns a `Promise` object that is rejected with a given `error`

    * Promisify `Timer`

      * So that we can chain all promises  (callbacks converted to promise)

      ```javascript
      // The para is the executor
      const wait = (seconds) => new Promise(function(resolve) {
          setTimeout(resolve, seconds * 1000);
      });
      wait(2).then(function() {console.log("I have waited for 2 seconds");});
      ```

  * Pending

    * Execute the executor

  * Settled
    * Asynchronous tasks are finished 

    * Fulfilled or Rejected

    * | myPromise.state | myPromise.result |
      | :-------------- | :--------------- |
      | "pending"       | `undefined`      |
      | "fulfilled"     | a result value   |
      | "rejected"      | an error object  |

  * Consume promises

    * `then()`, `catch()`, `finally()`

    * `async` and `await`

      * *`async `and `await` make promises easier to write*
        * No more `then`
        * **Asynchronous operation written in synchronous way**
      * The keyword `async` before a function makes the function return a **promise** (**always fulfilled not rejected**)
      * The `await` keyword can only be used inside an `async` function
      * The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues
      * Use with error handling `try...catch`
        * Rethrow the `error` in `catch` block will manually reject `async` function

      ```javascript
      // Promisify geolocation
      const getPosition = function () {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
      };
      
      const whereAmI = async function () {
        try {
          // Geolocation
          const pos = await getPosition();
          const { latitude: lat, longitude: lng } = pos.coords;
          // Reverse geocoding
          const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
          if (!resGeo.ok) throw new Error('Problem getting location data');
          const dataGeo = await resGeo.json();
          return `You are in ${dataGeo.city}, ${dataGeo.country}`;
        } catch (err) {
          // Reject promise returned from async function
          throw err;
        }
      };
      console.log('1: Will get location');
      // const city = whereAmI();
      // console.log(city);
      // whereAmI()
      //   .then(city => console.log(`2: ${city}`))
      //   .catch(err => console.error(`2: ${err.message} 💥`))
      //   .finally(() => console.log('3: Finished getting location'));
      
      // More async way
      (async function () {
        try {
          const city = await whereAmI();
          console.log(`2: ${city}`);
        } catch (err) {
          console.error(`2: ${err.message} 💥`);
        }
        console.log('3: Finished getting location');
      })();
      ```

* `Promise.all()`

  * Used for running Promises in parallel
  * Takes an iterable of promises as input and returns a single `Promise`
  * This returned promise fulfills when all of the input's promises **fulfill** (including when an empty iterable is passed), with an array of the fulfillment values
  * It rejects when any of the input's promises rejects, with this first rejection reason

* `Promise.race()`

  * Takes an iterable of promises as input and returns a single `Promise`
  * This returned promise settles with the eventual state of the first promise that settles
  * Usually use with a timer

* `Promise.allSettled()`

  * Takes an iterable of promises as input and returns a single `Promise`
  * This returned promise fulfills when all of the input's promises **settle** (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise

* `Promise.any()`

  * Takes an iterable of promises as input and returns a single `Promise`
  * This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value
  * It rejects when all of the input's promises reject (including when an empty iterable is passed), with an [`AggregateError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AggregateError) containing an array of rejection reasons


### The Event Loop

* JavaScript only has one thread of execution
* Web APIs environment (building / pending) -> Callback queue or Microtasks queue (settled) -> Call stack (consuming)
  * Callback functions go into the callback queue
  * Promises go into the microtasks queue
    * Microtasks queue has priority over callback queue
* Event loop check if call stack has no execution and then pick a callback function from the callback queue to the call stack

***

## Web APIs

* Browser APIs
  * All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data
  * DOM
  * `Fetch` API
  * [`Geoloaction` API](https://www.w3schools.com/js/js_api_geolocation.asp)
  * [`Strorage` API](https://www.w3schools.com/js/js_api_web_storage.asp)
* Server APIS (Third party APIs)

***

## Modules

* Module

  * Reusable piece of code that encapsulate implementation details

  * Usually a standalone file, but it doesn't have to be

  * ```markdown
    import { ${} } from ${};		// Dependency
    // module code
    export { ${} };				   // Public API
    ```

* ES6 module

  * Modules stored in files, exactly one module per file

  * |                     | ES6 module               | Script                 |
    | ------------------- | ------------------------ | ---------------------- |
    | Top-level variables | Scoped to module         | Global                 |
    | Default mode        | Strict mode              | "Sloppy" mode          |
    | Top-level `this`    | `undefined`              | `window`               |
    | Imports and exports | Yes                      | No                     |
    | HTML                | `<script type="module">` | `<script>`             |
    | File downloading    | Asynchronous             | Synchronous by default |

  * Modules are imported synchronously

  * This make bundling and dead code elimination possible

  * Imports and exports are live connection, not copies

  * Two types of export

    * Named export
      * In-line
      * All at bottom
    * Default export

  * Top-level `await` (ES2022)
    * Only works in modules
    * Use `await` without `async`
    * Will block the execution on call stack, and importing and exporting
    * Useful for calling `async` functions and consuming it instead of `func().then()`

* CommonJS module

  * The module system in `Node.js`

* Development -> Modules -> Bundling -> Transpiling / Polyfilling -> Production

* Build Process

  * Bundling
    * Join all modules into one file
  * Polyfilling
    * Convert modern JavaScript back to ES5
    * Usually done by Babel
    * `import "core-js/stable"`
    * `import "regenerator-runtime/runtime"`
  * Using tools like webpack or PARCEL
