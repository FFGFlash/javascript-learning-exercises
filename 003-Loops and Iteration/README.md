# 003. Loops and Iteration

Often, you want to run the same code multiple times. Writing the same code over
and over would be slow, error-prone, and hard to maintain.

**Loops** allow you to repeat code while a condition is met.

---

## Why Loops Exist

Imagine you want to print the numbers 1 through 5.

Without a loop:

```js
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(4)
```

With a loop:

```js
let i = 1
while (i <= 5) {
  console.log(i)
  i++
}
```

Loops let your program scale.

---

## The `while` Loop

A `while` loop runs **as long as its condition is true**.

```js
while (condition) {
  // code to repeat
}
```

Example:

```js
let count = 0

while (count < 3) {
  console.log(count)
  count++
}
```

If the condition is `false` at the start, the loop never runs.

---

## Infinite Loops

If the condition never becomes `false`, the loop runs forever.

```js
while (true) {
  console.log('This never stops')
}
```

Infinite loops usually happen by accident and will freeze your program.

Always ensure the loop condition can change.

---

## The `do...while` Loop

A `do...while` loop runs **at least once**, even if the condition is `false`.

```js
do {} while (condition)
```

Example:

```js
let x = 5

do {
  console.log(x)
} while (x < 3)
```

This prints `5` once, even though the condition is `false`.

---

## The `for` Loop

The `for` loop is the most common loop in JavaScript

```js
for (initialization; condition; update) {
  // code to repeat
}
```

Example:

```js
for (let i = 0; i < 5; i++) {
  console.log(i)
}
```

This loop:

1. Runs the initialization once
2. Checks the condition
3. Runs the body
4. Runs the update
5. Repeats

---

## Loop Counters

Loop counters are commonly named `i`, `j`, or `k`.

```js
for (let i = 0; i <= 10; i++) {
  for (let j = 0; j <= 5; j++) {
    for (let k = 0; k <= 2; k++) {
      console.log(i, j, k)
    }
  }
}
```

These names are a convention, not a rule.

---

## Breaking Out of a Loop

Use `break` to immediately exit a loop

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break
  console.log(i)
}
```

This stops the loop when `i` reaches `5`.

---

## Skipping an Iteration

Use `continue` to skip the current iteration and move to the next one.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) continue
  console.log(i)
}
```

This skips print `2`.

---

## Loop Scope

Variables declared with `let` inside a loop are scoped to the loop block.

```js
for (let i = 0; i < 3; i++) {
  console.log(i)
}

console.log(i) // Error
```

This prevents accidental reuse of loop variables.

```js
for (var i = 0; i < 3; i++) {
  console.log(i)
}

console.log(i) // 2
```

However if you use `var` it'll be scoped to the parent block of the loop.

---

## Common Loop Patterns

### Counting

```js
for (let i = 0; i <= 10; i++) {
  console.log(i)
}
```

---

### Counting Down

```js
for (let i = 10; i > 0; i--) {
  console.log(i)
}
```

---

### Accumulating a Value

```js
let sum = 0

for (let i = 1; i <= 5; i++) {
  sum += i
}

console.log(sum)
```

---

## When to Use Which Loop

- Use `for` when you know how many times you want to loop
- Use `while` when looping depends on a condition
- Use `do...while` when looping must run at least once

---

## Common Mistakes

### Off-by-one errors

```js
for (let i = 0; i <= 5; i++) {
  // Runs 6 times, not 5
}
```

Be careful with `<` vs `<=`

---

### Modifying the counter incorrectly

```js
for (let i = 0; i < 5; i--) {
  // Infinite loop
}
```

Ensure the counter moves toward the exit condition.

---

## Summary

In this lesson, you learned:

- Why loops exist
- How `while`, `do...while`, and `for` loops work
- How to use `break` and `continue`
- Common loop patterns
- Common mistakes to avoid

Loops allow your programs to handle repetition efficiently. In the next lesson,
we'll introduce **functions**, letting you reuse logic and organize your code.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
to learn more about loops and iteration.

---
