# 007. Arrays

So far, we've worked with individual values and grouped data using objects.
In this lesson, we'll learn how to work with **lists of values** using **arrays**.

Arrays are used to store **ordered collections** of data and are one of the most
commonly used structures in JavaScript.

---

## Table of Contents

- [007. Arrays](#007-arrays)
  - [Table of Contents](#table-of-contents)
  - [What Is an Array?](#what-is-an-array)
  - [Creating Arrays](#creating-arrays)
  - [Accessing Array Elements](#accessing-array-elements)
  - [Array Length](#array-length)
  - [Modifying Arrays](#modifying-arrays)
  - [Adding and Removing Elements](#adding-and-removing-elements)
    - [`push` and `pop`](#push-and-pop)
    - [`unshift` and `shift`](#unshift-and-shift)
  - [Iterating Over Arrays](#iterating-over-arrays)
    - [`for` Loop](#for-loop)
    - [`for...of` Loop](#forof-loop)
  - [Arrays and Objects](#arrays-and-objects)
  - [Array Destructuring](#array-destructuring)
  - [Rest Elements (`...rest`)](#rest-elements-rest)
  - [The Spread Operator (`...`)](#the-spread-operator-)
  - [Combining Arrays](#combining-arrays)
  - [Arrays Are Objects](#arrays-are-objects)
  - [Summary](#summary)

---

## What Is an Array?

An **array** is an ordered list of values.

```js
const numbers = [1, 2, 3, 4, 5]
```

Each value in an array is stored at a numeric **index**, starting at `0`.

---

## Creating Arrays

Arrays are created using square brackets `[]`.

```js
const empty = []

const colors = ['red', 'green', 'blue']
```

Arrays can store values of any type.

```js
const mixed = [1, 'hello', true, null]
```

---

## Accessing Array Elements

You access array values using their index.

```js
const colors = ['red', 'green', 'blue']

console.log(colors[0]) // 'red'
console.log(colors[2]) // 'blue'
```

Accessing an index that doesn't exist returns `undefined`.

---

## Array Length

Arrays have a `length` property.

```js
const colors = ['red', 'green', 'blue']

console.log(colors.length) // 3
```

The last element of an array can be accessed using `length - 1`.

```js
console.log(colors[colors.length - 1])
```

---

## Modifying Arrays

Arrays declared with `const` can still be modified.

```js
const numbers = [1, 2, 3]

numbers[0] = 10

console.log(numbers) // [10, 2, 3]
```

---

## Adding and Removing Elements

### `push` and `pop`

```js
const numbers = [1, 2, 3]

const length = numbers.push(4) // add to the end and return the new length
const number = numbers.pop() // remove the last element and return it
```

---

### `unshift` and `shift`

```js
const numbers = [1, 2, 3]

const length = numbers.unshift(0) // add to the beginning and return the new length
const number = numbers.shift() // remove from the first element and return it
```

---

## Iterating Over Arrays

### `for` Loop

```js
const numbers = [1, 2, 3]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}
```

---

### `for...of` Loop

```js
const numbers = [1, 2, 3]

for (const number of numbers) {
  console.log(number)
}
```

`for...of` is often easier to read when you don't need the index.

---

## Arrays and Objects

Arrays can store objects.

```js
const users = [
  { name: 'Alex', age: 25 },
  { name: 'Sam', age: 30 },
]

console.log(users[0].name) // 'Alex'
```

---

## Array Destructuring

Array destructuring allows you to extract values by position.

```js
const colors = ['red', 'green', 'blue']

const [first, , third] = colors

console.log(first) // 'red'
console.log(third) // 'blue'
```

Note that you can skip elements in an array by adding extra commas without a variable name.

---

## Rest Elements (`...rest`)

You can collect remaining values using the rest operator.

```js
const numbers = [1, 2, 3, 4]

const [first, ...rest] = numbers

console.log(first) // 1
console.log(rest) // [2, 3, 4]
```

The rest operator (`...rest`) only works as the **last** property in destructuring.

---

## The Spread Operator (`...`)

The spread operator can be used to copy arrays.

```js
const original = [1, 2, 3]
const copy = [...original]

copy[0] = 10

console.log(original) // [1, 2, 3]
console.log(copy) // [10, 2, 3]
```

---

## Combining Arrays

Spread can also be used to merge arrays.

```js
const a = [1, 2]
const b = [3, 4]

const combined = [...a, ...b]

console.log(combined) // [1, 2, 3, 4]
```

---

## Arrays Are Objects

Arrays are a special type of objects.

```js
console.log(typeof []) // 'object'
```

This means arrays are passed by reference, just like objects.

---

## Summary

In this lesson, we learned:

- Arrays store ordered lists of values
- Array indices start at `0`
- Arrays can be modified even when declared with `const`
- `push`, `pop`, `shift`, and `unshift` add or remove elements
- Arrays can be iterated with `for` and `for...of`
- Destructuring extracts values by position
- Spread and rest work with arrays just like objects

In the next lesson, we'll explore **Common Array Methods**, such as `map`, `filter`, and `reduce`.

---
