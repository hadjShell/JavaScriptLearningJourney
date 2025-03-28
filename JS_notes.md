---
lAuthor: Jiayuan Zhang
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
  
    ![js_engine](img\js_engine.png)
  
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
  * ![script_loading](img/script_loading.png)
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

    * Large integers than the Number type cannot hold

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
  * **Use ANY data type, return ANY data type**, short-circuiting
  * OR return the first truthy value or the last falsy value if all flasy
  * AND return the first falsy value or the last truthy value if all truthy
* Bitwise operators
* Ternary operator
* Operator precedence
* Modern operators
  * Spread operator `...`
    * `...` works on iterables not objects
    * After ES2018, `...` works on objects too
  * Nullish coalescing operator `??`
    * Introduced in ES2020
    * Returns its right-hand side operand when its left-hand side operand is `null` or `undefined`, and otherwise returns its left-hand side operand
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

***

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

## Function

* Functions in JavaScript are **first-class built-in objects**, **which means they are treated as variables**, so in JavaScript we can 

  * *Store functions in variables or properties*
  * *Pass functions as arguments to other functions*
  * *Return functions from functions*
  * *Call methods on functions*

* Higher-order functions

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

* Immediately invoked function expression

  * Called once and never be called again

    ```javascript
    (function() {})();
    (() => {})();
    ```

* Functions in JavaScript is passed-by-value

* `arguments` 

  * An Array-like object accessible inside function that contains the values of the arguments passed to that function

* `this`

  * Depends on how the function is called, which means it is **dynamic**

  * Alone, `this` refers to the **global object** (`Window` in web browser)

  * In method, `this` refers to the **object**

  * In regular function, `this` refers to **`undefined`** (in strict mode; otherwise refers to `window`)

    > When a function is used as a **callback function**, `this` is lost

  * In arrow function, do **NOT** get its own `this`

  * In an event handler function (*not defined as arrow function*), `this` always refers to the **element** on which that handler is attached to

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
  
    * The rest element must be the last part
  
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
  
  * `slice(start, end)`
  
    * Returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (`end` not included) where `start` and `end` represent the index of items in that array
    * `start`, `end` can be negative
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
  
  * `join(separator)`
  
    * Returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string
  
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
  
  * `reduce(function(accumulator, currentValue, currentIndex, array) {}, initiaValue)`
  
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
  
  * `flatMap(callbackFn)`
  
    * Returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level
  
    * Identical to a `map()`followed by a `flat()` of depth 1 (`arr.map(callbackFn).flat()`), but slightly more efficient than calling those two methods separately
  
      > [A use-case](https://medium.com/@daveford/map-versup-flatmap-14780ab01d2b)
  
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
  
  * ![array_method](img/array_method.png)

### Objects (Literal Object)

* In computer science, an object is a value in memory which is possibly referenced by an [identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier). In JavaScript, objects are the only [mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) values

* [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) are, in fact, also objects with the additional capability of being *callable*

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
  
  * `forEach(function(value, key, set) {})`
  
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

  * `has(key)`

    * Check if a map has a certain key

  * `delete(key)`

    * Delete an element according to the key

  * `keys()`

    * Return an iterable of keys in map
    * `[...m.keys()]` to get the array of keys

  * `values()`

    * Return an iterable of values in map

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

  * `replaceAll`

  * `includes`

  * `startsWith`

  * `endsWith`

  * `split(pattern)`

    * Takes a pattern and divides a string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array

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
* ![DOM](img/DOM.png)
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
  * ![node](img/node.png)
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
      * A **string** containing one or more selectors to match. This string must be a valid CSS selector string

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

  * `document.createRange().createContextualFragment(markup)`

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
  * `HTMLElement.focus()`
    * Sets focus on the specified element, if it can be focused. The focused element is the element that will receive keyboard and similar events by default
  * `HTMLElement.blur()`
    * Removes keyboard focus from the current element
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

    * **Add and remove classes is the main way to manipulate the styles** instead of manipulating `style` directly
  * `ELement.src`
    * Absolute url
  * `Element.getAttribute("src")`
    * Relative url
  * `HTMLElement.dataset.${}`
    * The **`dataset`** read-only property of the `HTMLElement` interface provides read/write access to [custom data attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*) (`data-*`) on elements. It exposes a map of strings ([`DOMStringMap`](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap)) with an entry for each `data-*` attribute.

* Coordinates

  * `Element.getBoundingClientRect()`
  * `window.pageXOffset`
  * `window.pageYOffset`
  * `window.scrollTo()`
    * Old way

  * `Element.scrollIntoView(scrollIntoViewOptions)`
    * Modern way
    * Scrolls the element's ancestor containers such that the element on which `scrollIntoView()` is called is visible to the user.

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
  * Infinite scrolling

### Event and event handlers

  * An event is something happened on the page
  * **Browser will generate an object which contains all the information about the event when an event occurs**
  * Event handler: the callback function accepts a single parameter: an object based on [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event) describing the event that has occurred, and it returns nothing
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
  function callbackFn(e) {
      console.log(this);
  }
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

### BOM

* The `window` object is supported by all browsers. It represents the browser's window
* All global JavaScript objects, functions, and variables automatically become members of the window object
* Global variables are properties of the window object
* Global functions are methods of the window object
* Even the document object (of the HTML DOM) is a property of the window object

***

## Number, Math, Date, Intl and Timers

* `Number`

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

    * Create a random integer within `[min, max]`

      ```javascript
      const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;
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

  * `setTimeout(callbackFn, delay, param1, param2, paramn)`

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

* [READ THIS!!!](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
* Prototype and Object
  * Like Class and Instance (but not the same)
  * **JavaScript doesn't have Class**
* Prototype chain
  * Each object has an internal link to another object called its *prototype* (`__proto__`)
  * That prototype object has a prototype of its own, and so on until an object is reached with `null` as its prototype
  * By definition, `null` has no prototype and acts as the final link in this **prototype chain**. 
  * The prototype contains methods that are accessible to all objects linked to that prototype
  * Object literal (without `__proto__` key) automatically have `Object.prototype` as their `__proto_`
  * <img src="img/prototype_chain.jpg" alt="prototype_chain" style="zoom:150%;" />

* Three ways of implementing OOP in JavaScript
  * Constructor functions
    * Technique to create objects from a function
    * Avoid manually binding `__proto__` for every object creation
    * This is how built-in objects like Arrays, Maps or Sets are actually implemented
  * ES6 Classes
    * Modern alternative to constructor function syntax
    * "Syntactic sugar": works like constructor functions behind the scenes
    * Do NOT behave like classical OOP
  * `Object.create()`
* `instanceof` operator

### Constructor function

* Syntax

  ```javascript
  const ClassName = function (field1, field2) {
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

  > If a non-primitive is returned from the constructor function, that value will become the result of the `new` expression. In this case the `[[Prototype]]` may not be correctly bound — but this should not happen much in practice.

* ***Every object that is created by a certain constructor function will get access to all the methods and properties that we define on the constructor's `prototype` property because it will automatically have the constructor's `prototype` property as its `__proto__`***

* `Constructor.prototype` is only useful when constructing instances. It has nothing to do with `Constructor.__proto__`, which is the constructor function's *own* prototype, which is `Function.prototype` — that is, `Object.getPrototypeOf(Constructor) === Function.prototype`.

* ```javascript
  // the Behavior of the top prototype chain
  obj.__proto__ === ClassName.prototype
  ClassName.prototype.constructor === ClassName
  
  Object.__proto__ === Function.prototype
  Function.__proto__ === Function.prototype
  
  Function.prototype.prototype === undefined
  Object.__proto__.__proto__ === Object.prototype 
  Object.__proto__.__proto__.__proto__ === null
  ```

  > [A good explanation of this messy behavior](https://stackoverflow.com/questions/40920909/what-is-in-object-proto)

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
      get birth() {
          return this.birthYear;
      }
      // setter
      set birth(birth) {
          this.birthYear = birth;
      }
  }
  
  const sam = new Person(2000);
  console.log(sam.birth);		// not sam.birth()
  sam.birth = 30;			   // will change the birthYear
  ```

### `Object.create`

* Syntax

  ```javascript
  const ClassName() {}
  const obj = Object.create(ClassName);
  ```

* The `__proto__` of this object is the first argument of the function

* Be aware of the difference: **NOT** "fake class"

### Inheritance

* When an inherited function is executed, the value of `this` points to the inheriting object, not to the prototype object where the function is an own property

  ```javascript
  const parent = {
    value: 2,
    method() {
      return this.value + 1;
    },
  };
  
  console.log(parent.method()); // 3
  // When calling parent.method in this case, 'this' refers to parent
  
  // child is an object that inherits from parent
  const child = {
    __proto__: parent,
  };
  console.log(child.method()); // 3
  // When child.method is called, 'this' refers to child.
  // So when child inherits the method of parent,
  // The property 'value' is sought on child. However, since child
  // doesn't have an own property called 'value', the property is
  // found on the [[Prototype]], which is parent.value.
  
  child.value = 4; // assign the value 4 to the property 'value' on child.
  // This shadows the 'value' property on parent.
  // The child object now looks like:
  // { value: 4, __proto__: { value: 2, method: [Function] } }
  console.log(child.method()); // 5
  // Since child now has the 'value' property, 'this.value' means
  // child.value instead
  ```

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
  // Old way
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  // New way
  Object.setPrototyeOf(Student.prototype, Person.prototype);
  
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

### Promises

* Callbacks used to be the main way asynchronous functions were implemented in JavaScript

* Eventhandlers are asynchronous functions

* Call back hell

  * The problem of nested callback functions for executing asynchronous operations **in order**
  * To overcome this issue, modern JavaScript use `Promise`

* An **object** that is used as a placeholder for the future result of an asynchronous operation

* With a promise-based API, the asynchronous function starts the operation and returns a `Promise`object

* You can then attach handlers to this promise object, and these handlers will be executed when the operation has succeeded or failed

* Instead of nesting callbacks, we can chain promises for a sequence of asynchronous operations

* Lifecycle

  * Build promises (**Convert callback-based API to Promise-based API**)

    * `Promise(executor)`

      * `executor`
        * A function to be executed by the constructor
        * It receives two functions as parameters: `resolveFunc` and `rejectFunc`

    * When called via `new`, the `Promise` constructor returns a promise object. The promise object will become ***resolved*** when either of the functions `resolveFunc` or `rejectFunc` are invoked

    * Promisify callback functions

      * So that we can chain all promises  (**callbacks converted to promise workflow**)

      ```javascript
      // wait now is a promise-based API
      const wait = (seconds) => new Promise(function(resolve) {
          setTimeout(() => resolve(seconds), seconds * 1000);
        	console.log("Start");
      });
      wait(2).then(value => {console.log(`I have waited for ${value} seconds`);});
      console.log("Waiting...");
      ```

  * ![promises](img\promises.png)

  * Pending

    * The promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet

  * Settled

    * Asynchronous tasks are finished 

    * Fulfilled or Rejected

    * | myPromise.state | myPromise.result |
      | :-------------- | :--------------- |
      | "pending"       | `undefined`      |
      | "fulfilled"     | a result value   |
      | "rejected"      | an error object  |

* Consume promises

  * Consuming promises is actually executing functions

  * [`then()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)

  * [`catch()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)

  * [`finally()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

  * `Promise.resolve(value)`
    * Returns a `Promise` object that is fulfilled with a given `value`

  * `Promise.reject(error)`

    * Returns a `Promise` object that is rejected with a given `error`
  * Promise is consumed and new promise is built and settled during `then()`, therefore asynchronous operations are executed **in order**
  * Actually it is still nested, but it is coded in a non-nested way
  * `then()` is actually a new promisification (build -> callback -> settled)

* [**A typical flow**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#description)

* `Promise.all()`

  * Used for running Promises in parallel
  * Takes an iterable of promises as input and returns a single `Promise`
  * This returned promise fulfills when all of the input's promises **fulfill** (including when an empty iterable is passed), with an **array** of the fulfillment values
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

### `async`, `await`

* *`async `and `await` make promises easier to write*
  * No more `then`
  * **Asynchronous operation written in synchronous way**
* The keyword `async` before a function makes the function return a **promise** (**always fulfilled not rejected**)
* All functions invoked in `async` functions should be `async` not callback functions
* The `await` keyword can only be used inside an `async` function
* The `await` keyword makes the function pause the execution and wait for a resolved promise before it continues
* Inside an async function, you can use the `await` keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point **the fulfilled value of the promise is treated as a return value, or the rejected value is thrown**
* Rethrow the `error` in `catch` block will manually reject `async` function returned promise
* Also, note that you can only use `await` inside an `async` function, unless your code is in a JavaScript module

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

* Modern way

  * [Doc](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

  * `Fetch` API

    * `fetch(url, options)`
      * Starts the process of fetching a resource from the network, returning a **promise** which is fulfilled once the response is available
      * Only rejects **when a network error is encountered**

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

***

## Software architecture

* Web application components
  * State and database
  * HTTP libaray
    * For AJAX
    * Optional but almost always necessary in real-world apps
  * Business Logic
    * Code that solves the actual business problem
  * Application logic (Router)
    * Code that is only concerned about the implementation of application itself
    * Handles navigation and UI events
  * Presentation logic (UI layer)
    * Code that is concerned about the visible part of the application
    * Essentially displays application state

### MVC

* Model-View-Controller architecture
* ![MVC](img/MVC.png)
* Event handling in MVC
  * Publisher - Subscriber pattern
    * Callback functions (`render()`) and `eventListener` in `View` as publisher
      * Codes that know when to react
    * `Controller` as subscriber
      * Codes that want to react
      * Event handler in a nutshell
    * Subscribe to publisher by passing in the subscriber function
* [Look at this article for future read](https://www.freecodecamp.org/news/an-introduction-to-software-architecture-patterns/)
