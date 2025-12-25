# 006. Objects

So far, we've worked mostly with individual values and variables.
In this lesson, we'll learn how to **group related data together** using **objects**.

Objects are one of the most important data types in JavaScript and are used everywhere&ndash;from
configuration values to complex application state.

---

## Table of Contents

- [006. Objects](#006-objects)
  - [Table of Contents](#table-of-contents)
  - [What Is an Object?](#what-is-an-object)
  - [Creating Objects](#creating-objects)
  - [Accessing Properties](#accessing-properties)
    - [Dot Notation](#dot-notation)
    - [Bracket Notation](#bracket-notation)
  - [Modifying Objects](#modifying-objects)
  - [Removing Properties](#removing-properties)
  - [Objects and Functions](#objects-and-functions)
  - [Introducing `this`](#introducing-this)
  - [Objects as Data Containers](#objects-as-data-containers)
  - [Passing Objects to Functions](#passing-objects-to-functions)
  - [Nested Objects](#nested-objects)
  - [Object Destructuring](#object-destructuring)
    - [Rest Properties (`...rest`)](#rest-properties-rest)
  - [The Spread Operator (`...`)](#the-spread-operator-)
  - [Copying Objects](#copying-objects)
    - [`structuredClone`](#structuredclone)
    - [`JSON.stringify` and `JSON.parse`](#jsonstringify-and-jsonparse)
  - [Summary](#summary)

---

## What Is an Object?

An **object** is a collection of key-value pairs.

```js
const user = {
  name: 'Alex',
  age: 25,
  isAdmin: false,
  country: 'Canada',
}
```

Each key is a string (called a **property name**), and each value can be _any_ JavaScript value.

---

## Creating Objects

Objects are created using curly braces `{}`.

```js
const empty = {}

const point = {
  x: 10,
  y: 20,
}
```

Properties are seperated by commas.

---

## Accessing Properties

You can access object properties in two ways

### Dot Notation

```js
console.log(user.name) // 'Alex'
```

Dot notation is the most common and easiest to read.

---

### Bracket Notation

```js
console.log(user['age']) // 25
```

Bracket notation is required when:

- The property name is stored in a variable
- The property name is not a valid identifier

```js
const key = 'isAdmin'
console.log(user[key]) // false
```

---

## Modifying Objects

Objects declared with `const` can still be modified.

```js
user.age = 26
user.country = 'USA'
```

You cannot reassign the object itself, but you _can_ change its contents.

---

## Removing Properties

You can remove a property using the `delete` keyword.

```js
delete user.isAdmin
```

---

## Objects and Functions

Functions can be stored on objects. When a function is a property of an object,
it's usually called a **method**.

```js
const user = {
  name: 'Alex',
  greet() {
    console.log('Hello!')
  },
}

user.greet() // 'Hello!'
```

---

## Introducing `this`

Inside an object method, the keywork `this` refers to **the object the method belongs to**.

```js
const user {
  name: 'Alex',
  greet() {
    console.log(`Hello, ${this.name}`)
  },
}

user.greet() // 'Hello, Alex'
```

Here, `this.name` means "the `name` property of this object."

> For now, remember:
> Inside an object method, `this` usually refers to the object itself.

We'll explore more complex `this` behavior later.

## Objects as Data Containers

Objects are often used to represent real-world things.

```js
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020,
}
```

This makes related data easier to manage and pass around.

---

## Passing Objects to Functions

Objects can be passed into functions like any other value

```js
function printUser(user) {
  console.log('Name:', user.name)
  console.log('Age:', user.age)
}

printUser({ name: 'Sam', age: 30 })
```

Because objects are passed around by reference, changes inside the function affect the original object.

```js
function incrementAge(user) {
  user.age++
}

const user = { name: 'Sam', age: 30 }
incrementAge(user)
console.log(user.age) // 31
```

---

## Nested Objects

Objects can contain other objects.

```js
const user = {
  name: 'Alex',
  address: {
    city: 'Denver',
    zip: '80201',
  },
}

console.log(user.address.city) // "Denver"
```

---

## Object Destructuring

**Destructuring** lets you extract properties from an object into variables.

```js
const user = {
  name: 'Alex',
  age: 25,
}

const { name, age } = user

console.log(name) // 'Alex'
console.log(age) // 25
```

This is commonly used when working with function parameters.

```js
function greet({ name }) {
  console.log(`Hello, ${name}`)
}
```

### Rest Properties (`...rest`)

When destructuring, you can collect the remaining properties into a new object using the **rest operator**.

```js
const user = {
  name: 'Alex',
  age: 25,
  isAdmin: true,
}

const { name, ...rest } = user

console.log(name) // 'Alex'
console.log(rest) // { age: 25, isAdmin: true }
```

The `rest` object contains everything that wasn't explicitly extracted.

This is useful when you want to separate known properties from the remaining data.

```js
function logUser({ name, ...details }) {
  console.log(name)
  console.log(details)
}
```

The rest operator (`...rest`) only works as the **last** property in destructuring.

---

## The Spread Operator (`...`)

The **spread operator** allows you to copy properties from one object into another.

```js
const defaults = {
  theme: 'dark',
  showSidebar: true,
}

const settings = {
  ...defaults,
  showSidebar: false,
}
```

If a property appears multiple times, the **last value wins**.

Something to note about the spread operator when it comes to objects,
you can spread `undefined` and `null` as if they were an empty object.

```js
function createUser(data) {
  return {
    name: 'Guest',
    ...data, // This doesn't throw an error if `data` is `undefined`
  }
}

const guestUser = createUser()
const namedUser = createUser({ name: 'Alex' })
```

---

## Copying Objects

The spread operator is commonly used to create shallow copies.

```js
const original = { x: 1, y: 2 }
const copy = { ...original }

copy.x = 10

console.log(original.x) // 1
console.log(copy.x) // 10
```

### `structuredClone`

`structuredClone` is a newer built-in method used to create **deep copies** of objects.

```js
const original = {
  name: 'Alex',
  address: {
    city: 'Denver',
    zip: '80201',
  },
}

const copy = structuredClone(original)

copy.address.city = 'Colorado Springs'
copy.address.zip = '80901'

console.log(original.address) // { city: 'Denver', zip: '80201' }
console.log(copy.address) // { city: 'Colorado Springs', zip: '80901' }
```

`structuredClone` cannot clone objects that contain `functions`, `DOMNodes`, or
objects with custom prototypes.

See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)
for a full list of supported and unsupported types.

### `JSON.stringify` and `JSON.parse`

We'll go more in-depth about `JSON` later, but it can also be used to deep clone objects.

```js
const original = {
  name: 'Alex',
  address: {
    city: 'Denver',
    zip: '80201',
  },
}

const copy = JSON.parse(JSON.stringify(original))

copy.address.city = 'Colorado Springs'
copy.address.zip = '80901'

console.log(original.address) // { city: 'Denver', zip: '80201' }
console.log(copy.address) // { city: 'Colorado Springs', zip: '80901' }
```

The caveat with this method is that it only works with basic built-in types
(`object`, `number`, `string`, `boolean`, and `array`).

It also does not preserve shared references.

```js
const other = { value: true }
const original = {
  other1: other,
  other2: other,
}

const copy = JSON.parse(JSON.stringify(original))

console.log(original.other1 === original.other2) // true
console.log(copy.other1 === copy.other2) // false
```

---

## Summary

In this lesson, you learned:

- Objects group related data together
- Properties are accessed with dot or bracket notation
- Objects can store functions (methods)
- `this` refers to the object inside a method
- Objects can be nested and passed to functions
- Destructuring extracts values from objects
- The spread operator copies and merges objects

In the next lesson, we'll look at **Arrays**, which are used to store and
work with **ordered collections of values**.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects)
to learn more about objects.

---
