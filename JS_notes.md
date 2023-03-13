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

### Strict mode

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
  ```

  * `continue` and `break` is allowed

* `while`

* `do while`

***

## Functions

* Functions in JavaScript are first-class, which means they are treated as variables

* Syntax

  ```javascript
  function funcName() {}
  
  // example
  function calcAge1(birthYear) {
      return 2023 - birthYear;
  }
  ```

* Functions can be invoked before their declarations

* Anonymous function

  ```javascript
  const funcName = function () {}
  
  // example
  const calcAge2 = function (birthYear) {
      return 2023 - birthYear;
  }
  ```

  * Cannot be invoked before function expression

* Arrow function

  * A special form of anonymous function

  ```javascript
  const funcName = para => exp;	// without {}, we don't need to return the value explicitly
  const funcName = (para1, para2) => {}		// with {}, we define the function in the traditional way
  
  // example
  const calcAge3 = birthYear => 2023 - birthYear;
  ```

  * Helpful for one-line functions
  * Does **not** get its own `this` keyword
  * Does **not** have `arguments` keyword

* `arguments` key word

***

## Data structure

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

#### Operations

* Select and manipulate elements

  ```javascript
  document.querySelector(".className").textContent = "new text";
  document.getElementById("id");
  // Multiple classes
  // Craete a NodeList
  document.querySelectorAll(".className")
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

***

## OOP

