# 004. Functions

As programs grow larger, repeating the same logic becomes a problem.
**Functions** allow you to group code into reusable units that can be executed
whenever needed.

---

## Table of Contents

- [004. Functions](#004-functions)
  - [Table of Contents](#table-of-contents)
  - [What Is a Function?](#what-is-a-function)
  - [Declaring a Function](#declaring-a-function)
  - [Parameters and Arguments](#parameters-and-arguments)
  - [Returning Values](#returning-values)
  - [Function Expressions](#function-expressions)
  - [Arrow Functions](#arrow-functions)
  - [Calling vs Referencing Functions](#calling-vs-referencing-functions)
  - [Functions as Values](#functions-as-values)
  - [Default Parameters](#default-parameters)
  - [Scope Inside Functions](#scope-inside-functions)
  - [Early Returns](#early-returns)
  - [Common Mistakes](#common-mistakes)
    - [Forgetting to return a value](#forgetting-to-return-a-value)
    - [Using arrow functions incorrectly](#using-arrow-functions-incorrectly)
  - [Summary](#summary)

---

## What Is a Function?

A function is a block of code that:

- Has a name (optional)
- Can receive input (parameters)
- Can return a value

Functions help you avoid repetition and organize your code.

---

## Declaring a Function

The most common way to declare a function using a **function declaration**.

```js
function greet() {
  console.log('Hello!')
}
```

To run the function, you **call** it:

```js
greet()
```

---

## Parameters and Arguments

Parameters are variables listed in a function definition.

Arguments are the values passed when calling the function.

```js
function greet(name) {
  console.log(`Hello, ${name}`)
}

greet('Alice')
greet('Bob')
```

---

## Returning Values

Functions can return values using the `return` keyword.

```js
function add(a, b) {
  return a + b
}

const result = add(2, 3)
```

Once `return` is executed, the function stops running.

---

## Function Expressions

Functions can also be stored in variables

```js
const multiply = function (a, b) {
  return a * b
}
```

This is called a **function expression**.

---

## Arrow Functions

Arrow functions provide a shorter syntax.

```js
const subtract = (a, b) => {
  return a - b
}
```

If the function body has a single expression, `return` can be omitted:

```js
const subtract = (a, b) => a - b
```

---

## Calling vs Referencing Functions

Be careful not to confuse **calling** a function with **referencing** it.

```js
sayHi // reference
sayHi() // call
```

This distinction is important when passing functions as values.

---

## Functions as Values

In JavaScript, functions are values

```js
function sayHello() {
  console.log('Hello')
}

const fn = sayHello
fn()
```

This allows functions to be passed around just like numbers or strings.

---

## Default Parameters

Parameters can have default values.

```js
function greet(name = 'Guest') {
  console.log(`Hello, ${name}`)
}

greet()
greet('Alice')
```

If no argument is provided, the default is used.

---

## Scope Inside Functions

Variables declared inside a function are scoped to that function.

```js
function example() {
  const x = 10
}

console.log(x)
```

Functions create their own scope.

---

## Early Returns

Functions can return early to exit under certain conditions.

```js
function divide(a, b) {
  if (b === 0) return null
  return a / b
}
```

This pattern improves readability and safety.

---

## Common Mistakes

### Forgetting to return a value

```js
function add(a, b) {
  a + b
}
```

This returns `undefined`.

---

### Using arrow functions incorrectly

```js
const fn = () => {
  value: 10,
}
```

This does **not** return an object.

Correct version:

```js
const fn = () => ({
  value: 10,
})
```

---

## Summary

In this lesson, you learned:

- What functions are and why they exist
- Function declarations and expressions
- Parameters, arguments, and return values
- Arrow functions
- Functions as values
- Function scope and early returns

Functions are one of the most important concepts in JavaScript. In the next
lesson, we'll explore **scope and closures**, which explain _how functions remember things_.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
to learn more about functions.

---
