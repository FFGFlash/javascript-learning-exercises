# 009. Classes and Prototypes

JavaScript is a prototype-based language, but most modern
JavaScript code uses **classes** as a cleaner, more structured
way to create objects.

Classes do **not** introduce a new kind of object &ndash; they provide
a more readable syntax for patterns you've already been using with objects
and functions.

---

## Creating a Class

A class is defined using the `class` keyword.

```js
class User {
  constructor(name) {
    this.name = name
  }

  greet() {
    return `Hello, ${this.name}`
  }
}
```

- The `constructor` runs when a new instance is created using the `new` keyword
- Methods defined in the class become available on every instance
- `this` refers to the current instance

---

## Creating Instances

You can create an instance of a class using `new`.

```js
const user = new User('Alex')

console.log(user.name) // 'Alex'
console.log(user.greet()) // 'Hello, Alex'
```

Each instance has its own state, but shares the same methods.

---

## Fields (Properties)

Classes can define fields directly on the instance.

```js
class Counter {
  count = 0

  increment() {
    return ++this.count
  }
}
```

```js
const counter = new Counter()
counter.increment()

console.log(counter.count) // 1
```

These fields are created for every instance.

---

## Methods and `this`

Inside a class method, `this` refers to the instance that called the method.

```js
class Timer {
  seconds = 0

  tick() {
    this.seconds++
  }
}
```

Be careful when passing methods around &mdash; `this` depends on how a function was called.

```js
const timer = new Timer()
const tick = timer.tick

tick() // Error: `this` is undefined (or global)
```

This will be revisited later when discussing function binding.

---

## Inheritance with `extends`

Classes can inherit from other classes using `extends`.

```js
class Animal {
  speak() {
    console.log('The animal makes a sound')
  }
}

class Dog extends Animal {
  speak() {
    console.log('The dog barks')
  }
}
```

```js
const dog = new Dog()
dog.speak() // "The dog barks"
```

---

## Using `super`

When extending a class that has a constructor, you must call `super()`.

```js
class Person {
  constructor(name) {
    this.name = name
  }
}

class Employee extends Person {
  constructor(name, role) {
    super(name)
    this.role = role
  }
}
```

```js
const emp = new Employee('Jamie', 'Engineer')
console.log(emp.name) // 'Jamie'
console.log(emp.role) // 'Engineer'
```

---

## Classes Are Just Objects

Instances created from classes are still plain objects.

```js
const user = new User('Alex')

console.log(typeof user) // 'object'
console.log(user instanceof User) // true
```

They behave like any other object:

- They have properties
- They can be passed around
- They can be stored in arrays, maps, or sets

---

## Classes vs Object Literals

You could write this without a class:

```js
const user = {
  name: 'Alex',
  greet() {
    return `Hello, ${this.name}`
  },
}
```

Classes become useful when:

- You need many similar objects
- You want shared behavior
- You want a clear constructor
- You need inheritance

---

## When to Use Classes

Classes are a good fit for:

- Models (User, Product, Order)
- Services (API clients, state managers)
- Game objects or simulations
- Complex stateful logic

Classes are **not required** for everything &mdash; simple objects and functions are often enough.

---

## Summary

- Classes are syntax for creating structured objects
- `constructor` initializes instances
- Methods are shared across instances
- `extends` enables inheritance
- Classes do not replace objects &mdash; they organize them

In the next lesson, we'll build on this understanding to talk about
**types, equality, and how JavaScript compares values and objects**.

---
