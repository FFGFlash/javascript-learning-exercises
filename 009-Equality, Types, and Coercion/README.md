# 009. Equality, Types, and Coercion

JavaScript allows values of different types to interact in ways thatcan be surprising at first.
Understanding **types**, **equality**, and **coercion** is critical for writing correct and predictable code.

This lesson explains _why_ JavaScript behaves the way it does, not just _what_ it does.

---

## Table of Contents

- [009. Equality, Types, and Coercion](#009-equality-types-and-coercion)
  - [Table of Contents](#table-of-contents)
  - [Types in JavaScript](#types-in-javascript)
    - [Primitive Types](#primitive-types)
    - [Reference Types](#reference-types)
  - [`typeof`](#typeof)
    - [Important Quirks](#important-quirks)
  - [Equality Operators](#equality-operators)
    - [Strict Equality (`===`)](#strict-equality-)
    - [Loose Equality (`==`)](#loose-equality-)
  - [Type Coercion](#type-coercion)
    - [String coercion](#string-coercion)
    - [Numeric coercion](#numeric-coercion)
    - [Boolean coercion](#boolean-coercion)
  - [Truthy and Falsy Values](#truthy-and-falsy-values)
  - [Equality Edge Cases](#equality-edge-cases)
  - [Comparing Objects and Arrays](#comparing-objects-and-arrays)
  - [Explicit Conversion](#explicit-conversion)
    - [To Number](#to-number)
    - [To String](#to-string)
    - [To Boolean](#to-boolean)
  - [Common Pitfalls](#common-pitfalls)
  - [Best Practices](#best-practices)
  - [Summary](#summary)

---

## Types in JavaScript

Every value in JavaScript has a type. There are two broad categories:

### Primitive Types

Primitive values are **immutable** and are compared by value.

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

```js
let a = 5
let b = 5

a === b // true
```

---

### Reference Types

Reference types are **objects** and are compared by reference (identity), not be contents

- `Object`
- `Array`
- `Function`
- `Map`
- `Set`
- `Date`

```js
let a = [1, 2, 3]
let b = [1, 2, 3]

a === b // false
```

Even though the contents look the same, these are two different objects in memory.

---

## `typeof`

The `typeof` operator tells you the type of a value.

```js
typeof 42 // 'number'
typeof 'hello' // 'string'
typeof true // 'boolean'
typeof undefined // 'undefined'
typeof {} // 'object'
typeof [] // 'object'
typeof function () {} // 'function'
```

### Important Quirks

```js
typeof null // 'object' (historical bug)
```

Because of this, `null` is usually checked explicitly:

```js
value === null
```

---

## Equality Operators

JavaScript has **two main equality operators**:

### Strict Equality (`===`)

Strict equality checks:

- Same type
- Same value

No type conversion happens.

```js
5 === 5 // true
5 === '5' // false
null === undefined // false
```

This is the **recommended** equality operator.

---

### Loose Equality (`==`)

Loose equality allows **type coercion** before comparison.

```js
5 == '5' // true
null == undefined // true
```

This can be convenient, but it can also lead to bugs.

---

## Type Coercion

**Type coercion** is when JavaScript automatically converts one type into another.

Coercion happens in:

- Loose equality (`==`)
- Arithmetic operations
- Logical operations
- String concatenation

---

### String coercion

```js
'hello ' + 5 // 'hello 5'
```

If either side of `+` is a string, JavaScript converts the other value to a string.

---

### Numeric coercion

```js
'5' * 2 // 10
'5' - 1 // 4
```

Operators like `*`, `-`, `/` force numeric conversion.

---

### Boolean coercion

Values are often coerced to booleans in conditionals.

```js
if (value) {
  // runs if value is truthy
}
```

---

## Truthy and Falsy Values

Falsy values are:

- `false`
- `0`
- `-0`
- `''` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy**.

```js
Boolean([]) // true
Boolean({}) // true
Boolean('0') // true
```

---

## Equality Edge Cases

Some comparisons can be surprising:

```js
[] == false // true
[] == '' // true
false == '' // true
```

This happens because multiple coercion steps occur.

This is why `===` is preferred.

---

## Comparing Objects and Arrays

Objects are compared by reference, not structure.

```js
{} === {} // false
[] === [] // false
```

But references to the same object are equal:

```js
const a = {}
const b = a

a === b // true
```

---

## Explicit Conversion

Instead of relying on coercion, you can convert types explicity.

### To Number

```js
Number('42') // 42
```

### To String

```js
String(42) // '42'
```

### To Boolean

```js
Boolean(0) // false
Boolean(1) // true
```

Explicit conversion makes code clearer and safer.

---

## Common Pitfalls

```js
NaN === NaN // false
```

Use:

```js
Number.isNaN(value)
```

---

```js
0.1 + 0.2 === 0.3 // false
```

This is due to floating-point precision.

Click [here](https://medium.com/@sanduniP/understanding-floating-point-precision-in-javascript-avoiding-unexpected-results-28fb01920f7a)
for an article talking about this issue.

---

## Best Practices

- Prefer `===` and `!==`
- Avoid relying on implicit coercion
- Compare objects by identity, not structure
- Use explicit conversions when intent matters

---

## Summary

- JavaScript has primitive and reference types
- `===` compares type and value
- `==` allows coercion (use carefully)
- Objects and arrays compare by reference
- Understanding coercion prevents subtle bugs

This knowledge will help explain many behaviors you'll encounter later, especially in conditionals, APIs, and async code.

---
