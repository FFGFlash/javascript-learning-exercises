# 007. Arrays

Arrays are ordered collections of values. They allow you to store
multiple related values in a single variable and work with them
as a group.

Arrays are one of the most commonly used data structures in JavaScript.

---

## Table of Contents

- [007. Arrays](#007-arrays)
  - [Table of Contents](#table-of-contents)
  - [Creating Arrays](#creating-arrays)
  - [Indexing and Length](#indexing-and-length)
  - [Arrays Are Objects](#arrays-are-objects)
  - [Mutability](#mutability)
  - [Common Mutating Methods](#common-mutating-methods)
    - [`push` and `pop`](#push-and-pop)
    - [`shift` and `unshift`](#shift-and-unshift)
    - [`splice`](#splice)
  - [Non-Mutating Methods](#non-mutating-methods)
    - [`slice`](#slice)
  - [Array Destructuring](#array-destructuring)
    - [Rest Elements (`...rest`)](#rest-elements-rest)
  - [Spread Operator (`...`)](#spread-operator-)
  - [Iterating Over Arrays](#iterating-over-arrays)
    - [`for` Loop](#for-loop)
    - [`for...of` Loop](#forof-loop)
  - [Array vs Objects](#array-vs-objects)
  - [Rest Parameters (`...rest`)](#rest-parameters-rest)
    - [Basic Example](#basic-example)
    - [Rest Parameters with Other Parameters](#rest-parameters-with-other-parameters)
    - [Rest Parameters and Array Methods](#rest-parameters-and-array-methods)
  - [Summary](#summary)

---

## Creating Arrays

Arrays are created using square brackets (`[]`).

```js
const numbers = [1, 2, 3, 4]
const words = ['apple', 'banana', 'cherry']
const mixed = [1, 'two', true]
```

Arrays can contain values of any type, including other arrays.

```js
const nested = [
  [1, 2],
  [3, 4],
]
```

---

## Indexing and Length

Each item in an array has a numeric index, starting at `0`.

```js
const colors = ['red', 'green', 'blue']

console.log(colors[0]) // 'red'
console.log(colors[2]) // 'blue
```

The `length` property tells you how many items are in the array.

```js
console.log(colors.length) // 3
```

Because indexing starts at `0`, the last index is always `length - 1`.

---

## Arrays Are Objects

Arrays are a special kind of object in JavaScript

```js
const arr = [1, 2, 3]

typeof arr // 'object'
```

They use numeric keys internally and have additional behavior provided
by `Array.prototype` (which we'll discuss in future lessons).

```js
arr[0] // same as arr['0']
```

Even though arrays are objects, they are optimized for **ordered lists**,
which is why they should be treated differently than plain objects.

---

## Mutability

Arrays are **mutable**, meaning their contents can be changed after creation.

```js
const scores = [10, 20, 30]

scores[1] = 25
console.log(scores) // [10, 25, 30]
```

Even if an array is declared with `const`, its contents can still change.
`const` only prevents reassignment of the variable itself.

---

## Common Mutating Methods

Some array methods **modify the original array**.

### `push` and `pop`

`push` adds items to the end of the array and returns the new length.

```js
const list = ['a', 'b']
list.push('c') // 3
console.log(list) // ['a', 'b', 'c']
```

`pop` removes the last item and returns it

```js
const list = ['a', 'b', 'c']
const last = list.pop()

console.log(last) // 'c'
console.log(list) // ['a', 'b']
```

---

### `shift` and `unshift`

`shift` removes the first item from the array and returns it.

```js
const list = ['a', 'b', 'c']
const first = list.shift()

console.log(first) // 'a'
console.log(list) // ['b', 'c']
```

`unshift` adds items to the beginning of the array and returns the new length.

```js
const list = ['b', 'c']
list.unshift('a') // 3

console.log(list) // ['a', 'b', 'c']
```

---

### `splice`

`splice` can remove items at a specific index and returns a new array containing the removed items.

```js
const items = ['a', 'b', 'c']

const removed = items.splice(1, 1)
console.log(removed) // ['b']
console.log(items) // ['a', 'c']
```

It can also insert items at a specific index.

```js
const items = ['a', 'c']

items.splice(1, 0, 'b')
console.log(items) // ['a', 'b', 'c']
```

---

## Non-Mutating Methods

Some methods return a **new array** without changing the original.

### `slice`

`slice` creates a shallow copy of part (or all) of an array.

```js
const original = [1, 2, 3, 4]
const copy = original.slice(1, 3)

console.log(copy) // [2, 3]
console.log(original) // [1, 2, 3, 4]
```

Calling `slice()` with no arguments creates a shallow copy of the array.

---

## Array Destructuring

Destructuring lets you extract values from an array into variables.

```js
const [a, b] = [1, 2]

console.log(a) // 1
console.log(b) // 2
```

You can skip elements by leaving empty positions.

```js
const [first, , third] = [10, 20, 30]

console.log(first) // 10
console.log(third) // 30
```

### Rest Elements (`...rest`)

The rest operator collects remaining elements into a new array.

```js
const [first, ...rest] = [1, 2, 3, 4]

console.log(first) // 1
console.log(rest) // [2, 3, 4]
```

The rest operator must always come last.

---

## Spread Operator (`...`)

The spread operator expands an array into individual values

```js
const nums = [1, 2, 3]
const copy = [...nums]

console.log(copy) // [1, 2, 3]
```

It's commonly used to combine arrays.

```js
const a = [1, 2]
const b = [3, 4]

const combined = [...a, ...b]
```

Spread creates a **shallow copy**, not a deep one (for that you can use `structuredClone` discussed in the previous lesson).

It's also commonly used to pass function arguments

```js
const args = [1, 2, 3]

console.log('Args:', ...args) // Args: 1 2 3
```

---

## Iterating Over Arrays

Arrays are often processed one item at a time.

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

for (const value of numbers) {
  console.log(value)
}
```

`for...of` iterates over values, not indexes.

---

## Array vs Objects

Arrays and Objects are both collections, but they are used differently.

- Arrays are best for **ordered data**
- Objects are best for **named properties**

```js
const array = ['Alex', 30]
const object = { name: 'Alex', age: 30 }
```

Although arrays are objects internally, using them as dictionaries is discouraged.

If order matters, use an array.\
If meaning matters, use an object.

---

## Rest Parameters (`...rest`)

Now that we know what arrays are, we can introduce **rest parameters**. Rest parameters
allow functions to accept **any number of values** and collect them into an array.

### Basic Example

```js
function logValues(...values) {
  for (const value of values) {
    console.log(value)
  }
}

logValues(1, 2, 3) // 1\n2\n3
```

Here, all arguments passed to the function are collected into a single array called `values`.

---

### Rest Parameters with Other Parameters

A function can have regular parameters **before** a rest parameter.

```js
function greet(greeting, ...names) {
  console.log(greeting)
  console.log(names)
}

greet('Hello', 'Alex', 'Sam', 'Jordan')
// 'Hello'
// ['Alex', 'Sam', 'Jordan']
```

Rules to remember:

- A function can only have **one** rest parameter
- The rest parameter must be **last**

---

### Rest Parameters and Array Methods

Because rest parameters create a real array, we can use array methods on them.

```js
function sum(...numbers) {
  let total = 0

  for (const n of numbers) {
    total += n
  }

  return total
}

sum(1, 2, 3, 4) // 10
```

This works because `numbers` is a normal array.

---

## Summary

- Arrays are ordered, mutable collections
- Arrays are a specialized kind of object
- Some methods mutate arrays, others return new ones
- Destructuring, rest, and spread make array manipulation easier
- Arrays and objects serve different purposes

In the next lesson, we'll build on this by exploring **built-in objects and utilities**,
including more expressive ways to transform arrays.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections)
to learn more about arrays.

---
