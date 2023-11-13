/*
Great question! The main difference between a regular function and an anonymous function in JavaScript lies in their names and how they are defined.

1. **Regular Function:**
   - Has a name.
   - Defined using the `function` keyword followed by a name.
   - Can be used for both function declarations and function expressions.

   Example:
   ```javascript
   function add(a, b) {
     return a + b;
   }
   ```

2. **Anonymous Function:**
   - Does not have a name.
   - Can be defined using the `function` keyword without a name, or using arrow functions (`=>`).
   - Often used as function expressions or as arguments to other functions.

   Example:
   ```javascript
   // Anonymous function expression
   var multiply = function(x, y) {
     return x * y;
   };

   // Anonymous arrow function
   var square = (num) => num * num;
   ```

Anonymous functions are handy when you need a function temporarily or when passing functions as arguments to other functions. Regular functions, on the other hand, are more suitable when you need a named function for reuse or better readability.
*/

// Regular function definition
function sayName(name) {
  console.log(name);
}

sayName("Kenichi");

// Anonymous Function

(function () {
  console.log('Anonymous function');
})();

let anonymousFunction = function () {
  console.log('Anonymous function');
}

// Arrow function syntax
let arrowFunctionExample = () => { console.log("we got the arrow function example working!") }

arrowFunctionExample();

// Advanced functions/Higher Order Functions
// - Map
// - Filter
// - Find
// .....

// The thing about higher order functions. They are funtions that take other
// functions as arguments

