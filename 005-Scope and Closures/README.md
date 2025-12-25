# 005. Scope and Closures

In the previous lesson, we learned how to defined and call functions.
In this lesson, we'll learn **where variables are allowed to exist**,
**who can access them**, and **how functions remember values over time**.

These ideas are called **scope** and **closures**, and they are fundamental
to understanding JavaScript.

---

## What Is Scope?

**Scope** describes _where a variable can be accessed_ in your program.

In JavaScript, scope answers questions like:

- Where is this variable defined?
- Which parts of the code can see it?
- When does it stop existing?

JavaScript has several kinds of scope:

- Global scope
- Function scope
- Block scope

---

## Global Scope

A variable declared outside of any function or block is in **global scope**.

```js
let greeting = 'Hello'

function sayHello() {
  console.log(greeting)
}

sayHello()
```

Because `greeting` is global, it can be accessed from anywhere in the file.

Be careful with global variables, they can be changed from anywhere,
which makes bugs harder to track down.

---

## Function Scope

Variables declared inside a function are **only accessible inside that function**.

```js
function makeMessage() {
  let message = 'Hi!'
  console.log(message)
}

makeMessage()
console.log(message) // Error
```

`message` exists **only while the function is running**.

This helps prevent variables from accidentally interfering with each other.

---

## Block Scope (`let` and `const`)

A **block** is code inside `{}`, such as in `if`, `for`, or `while` statements.

Variables declared with `let` or `const` are **block scoped**.

```js
if (true) {
  let secret = 'shhh'
  console.log(secret)
}

console.log(secret) // Error
```

---

## `var` vs `let` and `const`

Older JavaScript used `var`, which does **not** follow block scope.

```js
if (true) {
  var x = 10
}

console.log(x) // 10
```

This behavior can cause bugs, so modern JavaScript uses `let` and `const` instead.

Best Practices:

- Use `const` by default
- Use `let` when you need to reassign
- Avoid `var`

---

## Scope Chain

When JavaScript looks for a variable, it checks:

1. The current scope
2. The outer scope
3. The global scope

This is called the **scope chain**

```js
let value = 'global'

function outer() {
  let value = 'outer'

  function inner() {
    console.log(value)
  }

  inner()
}

outer() // "outer"
```

The inner function finds `value` in the nearest scope that defines it.

---

## What Is a Closure?

A **closure** happens when a function remembers variables from the scope where it was created,
even after that scope is gone.

This may sound strange at first&mdash;but it's very powerful.

---

## A Simple Closure Example

```js
function createCounter() {
  let count = 0

  return function () {
    return ++count
  }
}

const counter = createCounter()

counter() // 1
counter() // 2
counter() // 3
```

### What's happening?

- `createCounter` runs and creates `count`
- It returns a function
- That function **closes over `count`**
- Even after `createCounter` finishes, `count` still exists

That's a **closure**.

---

## Why Closures Are Useful

Closures allow you to:

- Keep data private
- Preserve state between function calls
- Build reusable function factories

Example: private data

```js
function createUser(name) {
  return function () {
    return name
  }
}

const user = createUser('Alex')
console.log(user()) // 'Alex'
```

The variable `name` cannot be accessed directly&mdash;only through the function.

---

## Common Mistakes

### Loop Closures

```js
let funcA
let funcB
let funcC

for (var i = 0; i < 3; i++) {
  if (!funcA) funcA = () => i
  else if (!funcB) funcB = () => i
  else funcC = () => i
}

funcA() // 2
funcB() // 2
funcC() // 2
```

All functions return the same value.

Correct version:

```js
let funcA
let funcB
let funcC

for (let i = 0; i < 3; i++) {
  if (!funcA) funcA = () => i
  else if (!funcB) funcB = () => i
  else funcC = () => i
}

funcA() // 0
funcB() // 1
funcC() // 2
```

Using `let` creates a new `i` for each loop iteration.

---

## Mental Model to Remember

- **Scope** controls where variables live
- **Functions** create new scopes
- **Closures** allow functions to remember variables
- JavaScript never copies variables, only references them

---

## Summary

In this lesson, you learned:

- Scope determines where variables can be accessed
- `let` and `const` are block scoped
- Functions create their own scope
- Closures let functions remember variables from outer scopes
- Closures are a core feature of JavaScript&mdash;not a trick

In the next lesson, we'll explore **Objects and Data Structure**,
which will build on everything we've learned so far.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures)
to learn more about function scope and closures.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures)
to learn more about closures.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#block_statement)
to learn more about block scope.

---
