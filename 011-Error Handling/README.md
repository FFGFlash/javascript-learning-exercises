# 010. Error Handling

Errors are a normal part of programming.
What matters is **how your code responds to them**.

In this lesson, you'll learn how JavaScript represents errors, how to handle them safely, and how to write code that fails gracefully instead of crashing.

---

## Table of Contents

- [010. Error Handling](#010-error-handling)
  - [Table of Contents](#table-of-contents)
  - [What Is an Error?](#what-is-an-error)
  - [Types of Errors](#types-of-errors)
    - [`SyntaxError`](#syntaxerror)
    - [`ReferenceError`](#referenceerror)
    - [`TypeError`](#typeerror)
  - [Runtime Errors](#runtime-errors)
  - [`try...catch`](#trycatch)
  - [The `error` Object](#the-error-object)
  - [`finally`](#finally)
  - [Throwing Your Own Errors](#throwing-your-own-errors)
  - [Throwing Non-Error Values](#throwing-non-error-values)
  - [Normalizing Thrown Values](#normalizing-thrown-values)
    - [Using `ensureError` in `catch`](#using-ensureerror-in-catch)
  - [Custom Error Messages](#custom-error-messages)
  - [When to Use Error Handling](#when-to-use-error-handling)
  - [Defensive Programming](#defensive-programming)
  - [Optional Chaining (`?.`)](#optional-chaining-)
  - [Nullish Coalescing (`??`)](#nullish-coalescing-)
  - [Common Mistakes](#common-mistakes)
  - [Best Practices](#best-practices)
  - [Summary](#summary)

---

## What Is an Error?

An error occurs when JavaScript cannot execute a piece of code correctly.

Examples:

- Invalid syntax
- Accessing something that doesn't exist
- Calling a function incorrectly
- Runtime failures (network issues, bad input, etc.)

```js
console.log(user.name) // ReferenceError: user is not defined
```

---

## Types of Errors

JavaScript has several built-in error types. The most common are:

### `SyntaxError`

Occurs when JavaScript can't parse your code.

```js
if (true {
  // missing closing parenthesis
}
```

Syntax errors stop your program before it runs.

---

### `ReferenceError`

Occurs when you reference a variable that doesn't exist.

```js
console.log(x) // ReferenceError: x is not defined
```

---

### `TypeError`

Occurs when a value is not the type you expect.

```js
null.toString() // TypeError: Cannot read properties of null
```

---

## Runtime Errors

Most errors happen **while the program is running**, not when it starts.

```js
function greet(user) {
  return user.name.toUpperCase()
}

greet(null) // TypeError
```

These are the errors error handling is designed to manage.

---

## `try...catch`

JavaScript provides `try...catch` to safely handle runtime errors.

```js
try {
  const result = riskyOperation()
  console.log(result)
} catch (error) {
  console.error('Something went wrong:', error)
}
```

- Code in `try` is executed normally
- If an error occurs, execution jumps to `catch`
- The program does **not crash**

---

## The `error` Object

The value caught in `catch` is an `Error` object.

```js
try {
  throw new Error('Oops')
} catch (error) {
  console.log(error.message)
}
```

Common properties:

- `error.name`
- `error.message`
- `error.stack`

---

## `finally`

The `finally` block runs **no matter what**, whether an error occurred or not.

```js
try {
  doWork()
} catch (error) {
  handleError(error)
} finally {
  cleanup()
}
```

Useful for:

- Cleaning up resources
- Resetting state
- Logging

---

## Throwing Your Own Errors

You can create and throw errors intentionally.

```js
function withdraw(balance, amount) {
  if (amount > balance) {
    throw new Error('Insufficient funds')
  }

  return balance - amount
}
```

Throwing errors allows:

- Clear failure signals
- Early exits
- Centralized handling

---

## Throwing Non-Error Values

In JavaScript, **any value can be thrown**, not just `Error` objects.

```js
throw 'Something went wrong'
throw 404
throw { message: 'Failure' }
```

While this is allowed, it is **strongly discouraged**.

Thrown values that are not `Error` objects:

- Do not have a stack trace
- Do not have a consistent shape
- Make debugging and logging harder

---

## Normalizing Thrown Values

Because anything can be thrown, code that catches errors should not assume it will always receive an `Error`.

A common pattern is to **normalize** the caught value into an `Error` object.

```js
function ensureError(value) {
  if (value instanceof Error) return value
  return new Error(`Thrown value: ${value}`)
}
```

---

### Using `ensureError` in `catch`

```js
try {
  riskyOperation()
} catch (value) {
  const error = ensureError(value)
  console.error(error.message)
}
```

This ensures:

- You always work with a real `Error`
- Logging is consistent
- Stack traces are preserved when available

---

## Custom Error Messages

Clear error messages make debugging easier.

```js
throw new TypeError('Expected a number but received a string')
```

Avoid vague messages like `'Something went wrong'`.

---

## When to Use Error Handling

Use error handling when:

- Input is unpredictable
- External systems are involved
- Failure is expected and recoverable

Do **not** use errors for normal control flow.

---

## Defensive Programming

Defensive programming reduces errors before they happen

```js
function printLength(value) {
  if (typeof value !== 'string') return

  console.log(value.length)
}
```

This avoids throwing an error altogether.

---

## Optional Chaining (`?.`)

Optional chaining safely accesses nested properties

```js
user?.profile?.email
```

If any part is `null` or `undefined`, the expression returns `undefined` instead of throwing.

---

## Nullish Coalescing (`??`)

Provides a default value for `null` or `undefined`.

```js
const name = user?.name ?? 'Guest'
```

Unlike `||`, it does not treat `0` or `''` as falsy.

---

## Common Mistakes

```js
try {
  doSomething()
} // SyntaxError: catch missing

console.log('This will not run')
```

A `try` block **must** be followed by `catch` or `finally`.

---

```js
catch {
  // catching but ignoring the error
}
```

Swallowing errors silently makes debugging harder.

---

## Best Practices

- Handle errors close to where they occur
- Always throw `Error` objects
- Normalize unknown thrown values defensively when catching
- Use clear error messages
- Prefer early validation over catching
- Log errors during development
- Never ignore errors silently

---

## Summary

- Errors represent failures in execution
- `try...catch` prevents crashes
- Errors are objects with useful information
- You can throw your own errors
- Defensive coding reduces failures

Error handling becomes especially important in asynchronous code, APIs, and user input &mdash; all of which we'll cover next.

---
