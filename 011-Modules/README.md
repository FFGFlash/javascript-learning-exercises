# 011. Modules

As programs grow, putting all your code in a single file becomes difficult to manage.

Modules allow you to:

- Split code into multiple files
- Control what code is shared
- Avoid polluting the global scope
- Organize programs logically

In this lesson, you'll learn how JavaScript modules work and how to use them effectively.

---

## What Is a Module?

A module is a JavaScript file that:

- Has its **own scope**
- Can **export** values
- Can **import** values from other modules

Each module is evaluated once and then reused.

---

## Why Modules Exist

Before modules, JavaScript relied on:

- Script loading order
- Global variables
- Naming conventions

This led to:

- Name collisions
- Hidden dependencies
- Fragile code

Modules solve these problems by making dependencies explicit.

---

## Module Scope

Variables declared in a module are **not global**.

```js
// math.js
const secret = 42
```

```js
// main.js
console.log(secret) // ReferenceError
```

Each module has its own isolated scope.

---

## Exported Values

You can export values from a module using `export`.

### Named Exports

```js
/** @file math.js */
export function add(a, b) {
  return a + b
}

export const PI = 3.14159
```

You can export:

- Functions
- Variables
- Constants
- Classes

---

### Default Exports

A module can have **one default export**.

```js
/** @file logger.js */
export default function log(message) {
  console.log(message)
}
```

### Mixing Default and Named Exports

```js
/** @file utils.js */
export default function greet(name) {
  return `Hello ${name}`
}

export function shout(text) {
  return text.toUpperCase()
}
```

## Import Values

You can import values from a module using `import` and `import(...)`.

`import` must be at the top-level, while `import(...)` can be used
for dynamic imports which we will talk about in the next lesson.

### Importing Named Exports

```js
import { add, PI } from './math.js'

console.log(add(2, 3)) // 5
console.log(PI) // 3.14159
```

Import names must match exported names exactly.

---

### Renaming Imports

You can rename imports to avoid conflicts using `as`.

```js
import { add as sum } from './math.js'

sum(1, 2) // 3
```

### Importing Default Exports

```js
import log from './logger.js'

log('hello') // 'hello'
```

The import name is chosen by the importer.

---

### Mixing Default and Named Imports

```js
import greet, { shout } from './utils.js'

greet('Alex') // 'Hello Alex'
shout('Steve') // 'STEVE'
```

---

### Import Non-JavaScript Files

You can also import non-js files such as `.json` files and `.css` files.

```js
import config from './config.json' with { type: 'json' }
import styles from './styles.css' with { type: 'css' }

console.log(config) // the parsed JSON object
console.log(styles) // CSSStyleSheet object
```

`.css` files can only be imported in browser environments.

---

### Import Paths

Module paths are:

- Relative (`./`, `../`)
- File-based

```js
import { add } from './math.js'
```

Important:

- File extensions are required in browsers
- Paths are resolved at load time

---

## Modules Are Loaded Once

Modules are singletons.

```js
/** @file counter.js */
let count = 0

export function increment() {
  return ++count
}
```

Every import shares the same module state.

---

## Side Effects in Modules

Any top-level code runs **once when the module is loaded**.

```js
/** @file side-effect.js */
console.log('Module Loaded')
```

Avoid unexpected side effects at the top level.

---

### Importing Side Effects Only

If you have a script that runs side effects that need to run you
can import it without any imported values.

```js
import './side-effect.js'
```

---

## ES Modules vs Scripts

Modules differ from classic scripts.

| Feature             | Script   | ES Module        |
| ------------------- | -------- | ---------------- |
| Scope               | Global   | Module-scoped    |
| `import` / `export` | No       | Yes              |
| Strict mode         | Optional | Always on        |
| Load order          | Manual   | Dependency-based |

Modules are always in strict mode.

---

## Modules in the Browser

To use modules in the browser:

```html
<script type="module" src="main.js"></script>
```

This enables:

- `import` / `export`
- Deferred loading
- Module scope

---

## Modules in Node.js (Overview)

Modern Node supports ES modules.

Common approaches:

- `.mjs` files
- `"type": "module"` in `package.json`

Node also has **CommonJS**, which we'll briefly compare later.

---

## CommonJS (High-Level Overview)

```js
const fs = require('fs') // import statement
module.exports = { readFile } // export statement
```

This exists mainly in older Node projects.

Prefer ES modules for new code.

---

## Circular Dependencies (Conceptual)

Two modules importing each other can cause issues.

```js
/** @file a.js */
import { test } from 'b.js'
```

```js
/** @file b.js */
import { test } from 'a.js'
```

JavaScript handles this, but it can lead to:

- Undefined values
- Hard-to-debug behavior

Avoid circular dependencies when possible.

---

## Best Practices

- One responsibilty per module (No `utils.js` make meaningful files `utils/ensureError.js`)
- Export and import only what's needed
- Prefer named exports for libraries
- Avoid side effects
- Keep modules small and focussed

---

## Summary

- Modules organize code into files
- Each module has its own scope
- Use `export` and `import` to share code
- Modules are loaded once
- ES modules are the modern standard

Modules are the foundation for scalable JavaScript applications and are essential for understanding modern
tooling and frameworks.

---
