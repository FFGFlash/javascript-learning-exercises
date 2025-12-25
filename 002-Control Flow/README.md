# 002. Control Flow

So far, all of our code has run from top to bottom, one line at a time.
Control flow allows us to **make decisions** and **conditionally execute**
different pieces of code.

---

## Table of Contents

- [002. Control Flow](#002-control-flow)
  - [Table of Contents](#table-of-contents)
  - [Conditional Execution](#conditional-execution)
  - [The `if` Statement](#the-if-statement)
  - [`else` and `else if`](#else-and-else-if)
  - [Comparison Operators](#comparison-operators)
  - [Truthy and Falsy Values](#truthy-and-falsy-values)
  - [Logical Operators](#logical-operators)
    - [AND (`&&`)](#and-)
    - [OR (`||`)](#or-)
    - [NOT (`!`)](#not-)
  - [Short-Circuiting](#short-circuiting)
  - [The Conditional (Ternary) Operator](#the-conditional-ternary-operator)
  - [Block Scope](#block-scope)
  - [Common Mistakes](#common-mistakes)
    - [Using assignment instead of comparison](#using-assignment-instead-of-comparison)
    - [Forgetting braces](#forgetting-braces)
  - [Summary](#summary)

---

## Conditional Execution

Conditional execution means that some code only runs **if a condition is met**.

In JavaScript, conditions are expressions that evaluate to a boolean value:
`true` or `false`.

---

## The `if` Statement

The `if` statement runs a block of code only when its condition is `true`.

```js
if (true) {
  console.log('This will run')
}

if (false) {
  console.log('This will NOT run')
}
```

The condition must be inside parentheses `()`, and the code to run goes inside a block (`{}`).

---

## `else` and `else if`

Use `else` to run code when the condition is `false`.

```js
if (age >= 18) {
  console.log('Adult')
} else {
  console.log('Minor')
}
```

Use `else if` to check multiple conditions.

```js
if (score >= 90) {
  console.log('A')
} else if (score >= 80) {
  console.log('B')
} else if (score >= 70) {
  console.log('C')
} else {
  console.log('F')
}
```

Conditions are checked **from top to bottom**. The first matching condition
wins.

---

## Comparison Operators

Comparison operators compare values and return booleans.

<!-- prettier-ignore-start -->
```js
>         // greater than
>=        // greater than or equal to
<         // less than
<=        // less than or equal to
==        // loose equality
===       // strict equality
!=        // loose inequality
!==       // strict inequality
```
<!-- prettier-ignore-end -->

Always prefer `===` and `!==` over `==` and `!=`.

Examples:

<!-- prettier-ignore-start -->
```js
5 > 3               // true
5 < 3               // false
5 === 5             // true
5 !== 3             // true
undefined == null   // true
undefined === null  // false
```
<!-- prettier-ignore-end -->

---

## Truthy and Falsy Values

Not all conditions need to be explicit booleans.

JavaScript treats certain values as **falsy**, meaning they behave like `false` in conditions:

- `false`
- `0`
- `''` (empty string)
- `null`
- `undefined`
- `NaN` (not a number)

Everything else is **truthy**.

```js
if ('hello') {
  console.log('This runs')
}

if (0) {
  console.log('This does NOT run')
}
```

---

## Logical Operators

Logical operators allow you to combine conditions.

### AND (`&&`)

Both conditions must be true.

```js
if (age >= 18 && hasID) {
  console.log('Access granted')
}
```

---

### OR (`||`)

At least one condition must be true.

```js
if (isAdmin || isModerator) {
  console.log('Access granted')
}
```

---

### NOT (`!`)

Negates a values.

```js
if (!isLoggedIn) {
  console.log('Please log in')
}
```

---

## Short-Circuiting

Logical operators stop evaluating as soon as the result is known.

```js
false && doSomething() // doSomething is never called
true || doSomething() // doSomething is never called
```

This behavior is commonly used for default values and guards.

---

## The Conditional (Ternary) Operator

The ternary operator is a compact form of `if/else`.

```
condition ? valueIfTrue : valueIfFalse
```

Example:

```js
const status = age >= 18 ? 'Adult' : 'Minor'
```

Use ternaries for **simple decisions**. Avoid nesting them, as it hurts
readability.

---

## Block Scope

Variables declared with `let` and `const` are scoped to the block they are
defined in.

```js
if (true) {
  let x = 10
  console.log(x) // 10
}

console.log(x) // Error: x is not defined
```

This helps prevent accidental misuse of variables.

---

## Common Mistakes

### Using assignment instead of comparison

<!-- prettier-ignore-start -->
```js
if (x = 5) {
  // This assigns 5 to x and always runs
}
```
<!-- prettier-ignore-end -->

Use `===` for comparisons.

---

### Forgetting braces

<!-- prettier-ignore-start -->
```js
if (isReady)
  doThing()
  doAnotherThing() // Always runs
```
<!-- prettier-ignore-end -->

Prefer braces even for single-line blocks.

---

## Summary

In this lesson, you learned:

- How to conditionally execute code
- How `if`, `else if`, and `else` work
- Comparison operators
- Truthy and falsy values
- Logical operators and short-circuiting
- The ternary operator
- Block scope basics

Control flow is essential for writing useful programs. In the next lesson,
we'll explore **loops**, allowing code to run repeatedly.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
to learn more about control flow.

---
