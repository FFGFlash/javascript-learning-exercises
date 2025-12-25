# 001. Basic Syntax and Types

Before we can do anything useful with JavaScript, we need to understand how
JavaScript code is written and what kinds of values it works with.

---

## Statements

A **statement** is a single instruction that tells JavaScript to do something.

```js
console.log('Hello, world!')
```

Most statements in JavaScript are written one per line. Semicolons (`;`) are
optional in most cases because JavaScript automatically inserts them, but they
are still commonly used in some codebases.

---

## Expressions

An **expression** is any piece of code that produces a value.

<!-- prettier-ignore-start -->
```js
1 + 2
'hello'
42 * 10
```
<!-- prettier-ignore-end -->

Expressions can be combined to form larger expressions:

<!-- prettier-ignore-start -->
```js
(5 + 3) * 2
```
<!-- prettier-ignore-end -->

Many statements _contain_ expressions.

---

## Values and Types

JavaScript works with several built-in data types. These are the most common
ones you'll use early on.

### Numbers

JavaScript uses a single `number` type for both integers and decimals.

<!-- prettier-ignore-start -->
```js
42
3.14
-10
```
<!-- prettier-ignore-end -->

---

### Strings

Strings represent text and are written using quotes

<!-- prettier-ignore-start -->
```js
'hello'
'world'
`template strings`
```
<!-- prettier-ignore-end -->

Template strings (backticks [`` ` ``]) allow embedded expressions:

<!-- prettier-ignore-start -->
```js
`2 + 2 = ${2 + 2}`
```
<!-- prettier-ignore-end -->

---

### Booleans

Booleans represent truth values.

<!-- prettier-ignore-start -->
```js
true
false
```
<!-- prettier-ignore-end -->

They are commonly used in conditions and expressions.

---

### Null and Undefined

- `undefined` means a value has not been assigned
- `null` represents an intentional abscence of a value

<!-- prettier-ignore-start -->
```js
let a
a // undefined

let b = null
```
<!-- prettier-ignore-end -->

---

### Variables

Variables allow you to store values and reuse them later.

#### `let`

Use `let` for values that may change.

```js
let score = 0
score = score + 1
```

---

#### `const`

Use `const` for values that should not be reassigned.

```js
const pi = 3.14159
```

Attempting to reassign a `const` variable will cause an error.

---

#### `var` (Legacy)

`var` is an older way to declare variables. It still works but it behaves
differently and is generally avoided in modern JavaScript.

```js
var oldStyle = true
```

Prefer `let` and `const`

---

### Operators

Operators allow you to work with values.

#### Arithmetic Operators

<!-- prettier-ignore-start -->
```js
+     // addition
-     // subtraction
*     // multiplication
/     // division
%     // modulus (remainder)
```
<!-- prettier-ignore-end -->

---

#### Assignment Operators

<!-- prettier-ignore-start -->
```js
=         // assign
+=        // add and assign
-=        // subtract and assign
```
<!-- prettier-ignore-end -->

Example:

```js
let x = 5
x += 2 // x is now 7
```

---

#### Comparison Operators

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

## Comments

Comments are ignored by JavaScript and are used to explain code.

```js
// This is a signle-line comment

/*
  This is a
  multi-line comment
*/

/**
 * This is a
 * documentation comment
 */
```

Documentation comments can be placed above declarations (such as variables) to add documentation
and while this has no effect on your code, many code editors have ways to display these comments.

If you'd like to learn more check out [JSDocs](https://jsdoc.app/).

```js
/**
 * An approximation of Pi.
 */
const pi = 3.14159
```

---

## Running JavaScript

JavaScript can be run in several environments:

- In the browser (DevTools console)
- In Node.js (`node file.js`)
- In online editors and playgrounds ([JSFiddle](https://jsfiddle.net/) or [CodePen](https://codepen.io/))

For now, the easiest way to experiment is using your browser's developer tools. Which can
be typically accessed with `F12` (or `Fn + F12`), `Ctrl+Shift+I` (Windows/Linux), `Cmd+Shift+I` (macOS)

---

## Summary

In this leason, you learned:

- What statements and expressions are
- The basic built-in value types
- How to declare variables using `let` and `const`
- How operators work
- How to write comments

These fundamentals form the building blocks for all JavaScript programs.

In the next lesson, we'll explore **control flow**&mdash;making decisions and running
code conditionally.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
to learn more basic syntax and types.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
to learn more about expressions and operators.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings)
to learn more about numbers and strings.

---
