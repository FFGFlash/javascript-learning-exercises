# 012. Asynchronous JavaScript

Not all JavaScript code runs immediately.

Some operations take time:

- Fetching data from a server
- Reading files
- Waiting for user input
- Timers

JavaScript handles these using **asynchronous programming**.

In this lesson, you'll learn how async JavaScript works and how
to write code that handles delayed results correctly.

---

## Synchronous vs Asynchronous Code

### Synchronous Code

Synchronous code runs **one step at a time**, in order.

```js
console.log('A')
console.log('B')
console.log('C')
```

Output:

```bash
A
B
C
```

Each line blocks until it finishes.

---

### Asynchronous Code

Asynchronous code allows long-running work to happen without blocking the rest of the program.

```js
console.log('A')

setTimeout(() => console.log('B'), 1000)

console.log('C')
```

Output:

```bash
A
C
B
```

---

## The Call Stack (Conceptual)

JavaScript executes code using a call stack.

- Functions are pushed onto the stack
- When a function finishes, it is popped off
- Only one thing runs at a time

Long-running tasks would freeze the program &mdash; so async
work is handled **outside** the call stack.

---

## The Event Loop (High-Level)

The event loop allows JavaScript to:

- Start async work
- Continue executing other code
- Resume when async work completes

You don't control the event loop directly &mdash; but understanding
it explains why async code behaves the way it does.

---

## Callbacks

A callback is a function passed into another function to be called later.

```js
setTimeout(() => {
  console.log('Done')
}, 1000)
```

Callbacks were the original way to handle async work.

---

## Callback Problems

Callbacks can lead to:

- Deep nesting
- Hard-to-read code
- Error-handling difficulties

```js
doTask1(() => {
  doTask2(() => {
    doTask3(() => {
      // callback hell
    })
  })
})
```

Promises were created to solve this.

---

## Promises

A Promise represents a value that will be available later.

A Promise is always in one of three states:

- `pending`
- `fulfilled`
- `rejected`

---

### Creating a Promise

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success')
  }, 1000)
})
```

---

### Consuming a Promise

```js
promise
  .then(value => {
    console.log(value)
  })
  .catch(error => {
    console.error(error)
  })
```

- `.then` runs on success (`resolve`)
- `.catch` runs on failure (`reject`)

---

## Promise Chaining

Promises can be chained to sequence async work.

```js
doTask()
  .then(result => doNext(result))
  .then(finalResult => {
    console.log(finalResult)
  })
  .catch(error => {
    console.error(error)
  })
```

Each `.then` receives the result of the previous step.

---

## `async` and `await`

`async` / `await` is syntax built on top of Promises that makes async code easier to read.

Let's refactor the chaining example to use `async` / `await`.

```js
async function run() {
  const result = await doTask()
  const finalResult = await doNext(result)
  console.log(finalResult)
}
```

- `async` functions always return a Promise.
- `await` pauses execution _inside the function_ until the Promise settles

While not currently fully supported [Top-level `await`](https://caniuse.com/wf-top-level-await)
is something coming to JavaScript standard.

---

## Error Handling with `async` / `await`

Use `try...catch` to handle async errors.

Again let's refactor the previous code-snippet to add back in our error handling.

```js
async function run() {
  try {
    const result = await doTask()
    const finalResult = await doNext(result)
    console.log(finalResult)
  } catch (error) {
    console.error(error)
  }
}
```

---

## Parallel vs Sequential Awaiting

### Sequential

Runs one after the other.

```js
const a = await taskA()
const b = await taskB()
```

---

### Parallel

Runs both at the same time.

```js
const [a, b] = await Promise.all([taskA(), taskB()])
```

---

## Dynamic Imports

Modules can be loaded asynchronously using `import()`.

```js
const module = await import('./math.js')
module.add(2, 3)
```

Important notes:

- `import()` returns a Promise
- This works only inside `async` code (or with `.then`)
- Useful for code splitting, conditional loading, and dynamic loading

---

## Promises vs `async` / `await`

| Feature          | Promises    | async / await |
| ---------------- | ----------- | ------------- |
| Syntax           | Chain-based | Sequential    |
| Readability      | Moderate    | High          |
| Error handling   | `.catch()`  | `try...catch` |
| Underlying model | Promise     | Promise       |

They are the same mechanism &mdash; `async` / `await` is syntax sugar.

---

## Common Mistakes

```js
await doTask() // SyntaxError outside async
```

`await` only works inside `async` functions (or top-level modules).

---

```js
try {
  await doTask()
} catch {}
```

Catching errors without handling them hides failures.

---

## Best Practices

- Prefer `async` / `await` for readability
- Always handle rejected Promises
- Avoid mixing callbacks and Promises
- Use `Promise.all` for parallel work
- Keep async functions small and focused

---

## Summary

- JavaScript is single-threaded but asynchronous
- Async work is handled via the event loop
- Callbacks were the original async pattern
- Promises represent future values
- `async` / `await` makes async code more readable
- Dynamic imports return Promises

Asynchronous JavaScript is foundational for working with APIs, the browser, and modern
applications &mdash; which is exactly where we're headed next.

---
