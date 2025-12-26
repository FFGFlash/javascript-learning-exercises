# 008. Built-in Objects and Utilities

JavaScript includes a rich set of built-in objects that solve common problems:
working with data, collections, numbers, dates, and serialization.

These tools are part of the language itself and are available in all JavaScript
environments.

This lesson focuses on **practical usage** and **good judgment**, not memorization.

---

## Table of Contents

- [008. Built-in Objects and Utilities](#008-built-in-objects-and-utilities)
  - [Table of Contents](#table-of-contents)
  - [What Are Built-in Objects?](#what-are-built-in-objects)
  - [Array Utility Methods](#array-utility-methods)
    - [`map`](#map)
    - [`filter`](#filter)
    - [`reduce`](#reduce)
  - [Declarative vs Imperative Code](#declarative-vs-imperative-code)
  - [Object Utility Methods](#object-utility-methods)
    - [`Object.keys`, `Object.values`, `Object.entries`](#objectkeys-objectvalues-objectentries)
    - [`Object.fromEntries`](#objectfromentries)
    - [Iterating Over Object Entries](#iterating-over-object-entries)
  - [Maps](#maps)
    - [Creating and Using a Map](#creating-and-using-a-map)
    - [Iterating Over a Map](#iterating-over-a-map)
  - [Sets](#sets)
    - [Common Set Operations](#common-set-operations)
    - [Iterating Over a Set](#iterating-over-a-set)
    - [Common Pattern: Removing Duplicates](#common-pattern-removing-duplicates)
  - [Arrays vs Objects vs Maps vs Sets](#arrays-vs-objects-vs-maps-vs-sets)
    - [How do I Pick Which to Use?](#how-do-i-pick-which-to-use)
  - [Math](#math)
    - [Random Numbers](#random-numbers)
  - [Date](#date)
    - [Common Date Methods](#common-date-methods)
  - [JSON](#json)
    - [`JSON.stringify`](#jsonstringify)
    - [`JSON.parse`](#jsonparse)
  - [Wrapper Objects](#wrapper-objects)
    - [`String`](#string)
    - [`Number`](#number)
    - [`Boolean`](#boolean)
  - [Summary](#summary)

---

## What Are Built-in Objects?

Built-in objects are globally available constructors and objects provided by JavaScript.

Examples include:

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Map`
- `Set`
- `Math`
- `Date`
- `JSON`

They provide **methods and utilities** that operate on common data types.

---

## Array Utility Methods

Arrays provide serveral higher-level methods that allow you to work with data
**declaratively**, rather than manually looping and mutating values.

These methods do **not** modify the original array unless explicity stated.

---

### `map`

`map` transforms each element in an array and returns a new array.

```js
const numbers = [1, 2, 3]

const doubled = numbers.map(n => n * 2)

console.log(doubled) // [2, 4, 6]
console.log(numbers) // [1, 2, 3]
```

- `map` always returns a new array
- The callback runs once per element
- Use `map` when you want to **transform data**

---

### `filter`

`filter` returns a new array containing only elements that pass a condition.

```js
const numbers = [1, 2, 3, 4, 5]

const evens = numbers.filter(n => n % 2 === 0)

console.log(events) // [2, 4]
```

- The callback must return a boolean
- Use `filter` when you want to **remove unwanted data**

---

### `reduce`

`reduce` combines all elements into a single value.

```js
const numbers = [1, 2, 3, 4]

const sum = numbers.reduce((total, n) => total + n, 0)

console.log(sum)
```

- The first parameter is a callback that returns the accumulated value
  - The first argument is the accumulator
  - The second argument is the current value
- The second parameter (`0`) is the initial value

`reduce` can produce **any type**, not just numbers

```js
const words = ['a', 'b', 'c']

const joined = words.reduce((result, word) => result + word, '')

console.log(joined) // 'abc'
```

> If `map` and `filter` are clearer, prefer them.
> `reduce` is most useful when accumulation is required.

---

## Declarative vs Imperative Code

Compare these two approaches:

```js
// Imperative
const result = []
for (const n of numbers) {
  result.push(n * 2)
}

// Declarative
const result = numbers.map(n => n * 2)
```

Both are valid.\
The declarative version emphasizes **what** you want, not **how** to do it.

---

## Object Utility Methods

Objects also provide built-in helpers for inspecting and transforming data.

---

### `Object.keys`, `Object.values`, `Object.entries`

```js
const user = {
  name: 'Alex',
  age: 30,
}

Object.keys(user) // ['name', 'age']
Object.values(user) // ['Alex', 30]
Object.entries(user) // [['name', 'Alex'], ['age', 30]]
```

These methods return **arrays**, which means you can combine them with
array utilities like `map` and `filter`.

---

### `Object.fromEntries`

`Object.fromEntries` creates a new object from an entries array (an array of arrays containing key-value pairs as the zeroth and first indexes)

```js
const entries = [
  ['name', 'Alex'],
  ['age', 30],
]

Object.fromEntries(entries) // { name: 'Alex', age: 30 }
```

---

### Iterating Over Object Entries

```js
for (const [key, value] of Object.entries(user)) {
  console.log(key, value)
}
```

This is often preferred over older patterns like `for...in`\
(which we'll discuss in a later lesson)

---

## Maps

`Map` is a built-in data structure designed for key-value pairs.

Unlike objects:

- Keys can be **any type**
- Order is preserved
- No prototype-related pitfalls

---

### Creating and Using a Map

```js
const map = new Map()

map.set('a', 1)
map.set(2, 'two')
map.set({}, 'object key')

console.log(map.get('a')) // 1
```

---

### Iterating Over a Map

```js
for (const [key, value] of map) {
  console.log(key, value)
}
```

---

Maps are ideal when:

- Keys are not strings
- You need predictable iteration order
- You're storing dynamic key-value data

---

## Sets

`Set` is a collection of **unique values**.

```js
const set = new Set([1, 2, 2, 3])

console.log(set) // Set { 1, 2, 3 }
```

---

### Common Set Operations

```js
set.add(4)
set.has(2) // true
set.delete(1)
```

---

### Iterating Over a Set

```js
for (const value of set) {
  console.log(value)
}
```

---

Sets are useful for:

- Removing duplicates
- Membership checks
- Tracking unique values

---

### Common Pattern: Removing Duplicates

```js
const numbers = [1, 2, 2, 3, 3]

const unique = [...new Set(numbers)]

console.log(unique) // [1, 2, 3]
```

---

## Arrays vs Objects vs Maps vs Sets

| Feature / Structure       | Array                                             | Object                               | Map                                      | Set                         |
| ------------------------- | ------------------------------------------------- | ------------------------------------ | ---------------------------------------- | --------------------------- |
| Primary Use               | Ordered list of value                             | Key-value data (records)             | Key-value data (collections)             | Collection of unique values |
| Key type                  | Numeric indices (`0`, `1`, `2`)                   | Strings & Symbols                    | Any type                                 | N/A (values only)           |
| Value uniqueness          | No, can contain duplicates                        | No, values can duplicate             | No, values can duplicate                 | Yes, values are unique      |
| Maintains insertion order | Yes                                               | Mostly (not guaranteed historically) | Yes                                      | Yes                         |
| Length / size             | `.length`                                         | `Object.keys(obj).length`            | `.size`                                  | `.size`                     |
| Access value              | `arr[index]`                                      | `obj.key` or `obj['key']`            | `map.get(key)`                           | `set.has(value)`            |
| Add value                 | `push`, `unshift`, `splice`, `arr[index] = value` | `obj.key = value`                    | `map.set(key, value)`                    | `set.add(value)`            |
| Remove value              | `pop`, `shift`, `splice`, `delete arr[index]`     | `delete obj.key`                     | `map.delete(key)`                        | `set.delete(value)`         |
| Check existance           | `arr.includes(value)`                             | `'key' in obj`                       | `map.has(key)`                           | `set.has(value)`            |
| Iteration style           | `for`, `for...of`, methods                        | `for...in`, `Object.keys()`          | `for...of`, `map.forEach()`              | `for...of`, `set.forEach()` |
| Common methods            | `map`, `filter`, `reduce`                         | `Object.keys`, `Object.entries`      | `get`, `set`, `has`, `entries`, `delete` | `add`, `has`, `delete`      |
| JSON support              | Yes                                               | Yes                                  | No                                       | No                          |
| Best when...              | Order & Transformation matter                     | Structured named data                | Dynamic keys & frequent updates          | Enforcing uniqueness        |

---

### How do I Pick Which to Use?

- Use an Array when:
  - Order matters
  - You want to transform data (`map`, `filter`, `reduce`)
  - You need index-based access
- Use an Object when:
  - You're modeling structured data (users, configs, settings)
  - Keys are known and string-based
  - JSON compatibility matters
- Use a Map when:
  - Keys are dynamic or non-strings
  - You frequently add/remove entries
  - You need reliable iteration order
- Use a Set when:
  - Values must be unique
  - You want fast membership checks
  - You don't care about indexing or key/value pairs

---

## Math

`Math` provides mathematical constants and functions.

```js
Math.PI
Math.max(1, 3, 2)
Math.min(1, 3, 2)
Math.floor(3.7)
Math.ceil(3.1)
Math.round(3.5)
```

---

### Random Numbers

`random()` returns a number greater than or equal to 0 and less than 1.

```js
Math.random() // 0 <= n < 1
```

A common pattern for random integers is:

```js
function randInt(max = 100, min = 0) {
  return Math.floor(Math.random() * (max - min) + min)
}

randInt() // 0 <= n < 100
```

---

## Date

`Date` represents a single moment in time.

```js
const now = new Date()
```

Dates can also be created from strings or numbers.

```js
const birthday = new Date('1995-08-15')
```

---

### Common Date Methods

```js
now.getFullYear()
now.getMonth() // 0-based; 0 = January, 11 = December
now.getDate() // day of the month
now.getDay() // day of the week
now.getTime() // the time since epoch (January 1, 1970 GMT+0) in milliseconds

Date.now() // the current time since epoch in milliseconds
```

> Date handling can be tricky due to time zones and formats.
> We'll revist this later when discussing common pitfalls.

---

## JSON

`JSON` is used to convert data between JavaScript objects and text.

---

### `JSON.stringify`

Converts a JavaScript value into a JSON string.

```js
const user = { name: 'Alex', age: 25 }

const json = JSON.stringify(user) // '{"name":"Alex","age":25}'
```

---

### `JSON.parse`

Converts a JSON string back into a JavaScript value

```js
const json = '{"name":"Alex","age":25}'

const user = JSON.parse(json) // { name: 'Alex', age: 25 }
```

> JSON only supports basic data types and does not preserve functions,
> dates, or custom object behavior.

---

## Wrapper Objects

JavaScript provides object wrappers for primitive values.

---

### `String`

```js
const text = 'hello' // same as `String('hello')`

text.toUpperCase()
text.includes('ell')
text.slice(1, 4)
```

Although strings are primitives, JavaScript temporarily wraps them to provide methods.

---

### `Number`

```js
const n = 3.14159 // same as `Number(3.14159)`

n.toFixed(2) // '3.14'
Number.isNaN(n)
Number.isInteger(n)
```

---

### `Boolean`

```js
Boolean(0) // false
Boolean('') // false
Boolean('hi') // true
```

Wrapper objects exist mostly for historical reasons.\
You should always use **primitive values**, not `new String()` or `new Number()`.

---

## Summary

- Built-in objects provide powerful, standardized tools
- Array methods enable expressive transformations
- Objects, Maps, and Sets serve different data needs
- Math, Date, and JSON handle common real-world problems
- Wrapper objects expose useful methods on primitives

In the next lesson, we'll explore **types, equality, and coercion** &mdash; and why
JavaScript sometimes behaves in surprising ways.

---

---
