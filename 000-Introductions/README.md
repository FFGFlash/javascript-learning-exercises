# 000. Introduction

Let’s get you introduced to the language.

JavaScript is a high-level, dynamically typed programming language most commonly
used to add interactivity and logic to web pages. Today, it is also widely used
for server-side applications, command-line tools, desktop apps, mobile apps,
and embedded systems.

---

## Table of Contents

- [000. Introduction](#000-introduction)
  - [Table of Contents](#table-of-contents)
  - [JavaScript Engines](#javascript-engines)
  - [ECMAScript](#ecmascript)
  - [JavaScript Runtime Environments](#javascript-runtime-environments)
  - [JavaScript vs Host APIs](#javascript-vs-host-apis)
  - [What Does All This Mean?](#what-does-all-this-mean)
  - [Platform Considerations](#platform-considerations)
  - [Conclusion](#conclusion)

---

## JavaScript Engines

A JavaScript engine is a program responsible for executing JavaScript code.
Engines parse JavaScript, optimize it, and execute it—often compiling it to
machine code at runtime so it can run efficiently on a computer’s processor.

Major JavaScript engines include:

| Engine               | Maintainers            | Advantages                                                  | Memory and Startup                                                |
| -------------------- | ---------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------- |
| V8                   | Google                 | High raw execution speed and aggressive optimization        | Higher memory usage, excellent peak throughput                    |
| SpiderMonkey         | Mozilla Foundation     | Early ECMAScript feature support and strong debugging tools | Moderate memory usage with balanced performance                   |
| JavaScriptCore (JSC) | Apple                  | Tuned for memory efficiency and battery life                | Low memory usage, efficient on mobile and embedded WebKit views   |
| QuickJS              | Open Source Community  | Extremely small footprint with broad ES feature support     | Minimal memory usage and very fast startup                        |
| ChakraCore           | Microsoft (deprecated) | Historical Windows and platform integrations                | No longer maintained for mainstream browser use                   |
| Hermes               | Meta                   | Fast startup and small binary size via AOT bytecode         | Low memory usage, excellent cold-start performance (React Native) |

---

## ECMAScript

ECMAScript is the official language specification that defines how JavaScript
behaves. JavaScript engines are implementations of this specification.

When people refer to versions like **ES6**, **ES2020**, or **ESNext**, they are
talking about ECMAScript versions—not different languages.

An engine may implement new ECMAScript features earlier or later than others,
which is why feature support can sometimes vary between environments.

---

## JavaScript Runtime Environments

A JavaScript runtime environment provides everything needed to execute
JavaScript code _beyond the language itself_. This includes the engine, standard
libraries, and APIs for interacting with the outside world.

There are two broad categories of JavaScript runtimes:

- **Web Browsers** (client-side)
- **Server-side runtimes** such as [Node.js](https://nodejs.org/),
  [Deno](https://deno.com/), and [Bun](https://bun.com/)

| Runtime      | Primary Engine                                  | Distinguishing Features                                  |
| ------------ | ----------------------------------------------- | -------------------------------------------------------- |
| Web Browsers | Varies (V8, SpiderMonkey, JavaScriptCore, etc.) | Browser APIs like `window`, `document`, and DOM access   |
| Node.js      | V8                                              | System-level APIs (file system, networking, processes)   |
| Deno         | V8                                              | Built-in TypeScript support and strong security defaults |
| Bun          | JavaScriptCore                                  | Focus on extreme performance and fast tooling            |

---

## JavaScript vs Host APIs

JavaScript itself defines things like:

- `Array`, `Map`, `Promise`
- Control flow (`if`, `for`, `while`)
- The type system and operators

However, many commonly used features are **not part of JavaScript itself**, but
are provided by the runtime environment:

- Browser APIs: `document`, `window`, `fetch`
- Node.js APIs: `fs`, `path`, `process`

These are called **host APIs**, and they differ depending on where your code
runs.

---

## What Does All This Mean?

Depending on how you use JavaScript, engine and runtime differences may matter
very little—or they may matter a lot.

For front-end development, your code should be compatible with multiple
browsers and engines. While ECMAScript features are standardized, certain
behaviors—especially older or unspecified ones—can vary between engines.

For example, date parsing is only guaranteed by the specification when using
ISO-8601 formats. Other formats are implementation-dependent:

```js
// This is NOT guaranteed by the ECMAScript specification.
// Firefox correctly rejects it, while some other engines accept it.
new Date('Feb. 14, 2019')
```

Because of this, something that appears to work in one browser may fail in
another.

For back-end development, these differences are usually less impactful because
you typically target a single runtime (such as Node.js or Deno). However,
runtime APIs, performance characteristics, and security models can still differ.

---

## Platform Considerations

It is important to test your code on all target platforms. Safari, in
particular, uses JavaScriptCore and is only available on Apple devices.

Additionally, Apple requires all browsers on iOS and iPadOS to use
JavaScriptCore, regardless of branding. This makes Safari compatibility
especially important for mobile web applications.

---

## Conclusion

JavaScript is a high-level programming language executed by JavaScript engines
within JavaScript runtime environments. While the language itself is
standardized through ECMAScript, engines and runtimes each have their own
performance characteristics, APIs, and edge cases.

Understanding these layers helps you write more portable, predictable, and
robust JavaScript applications.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
for more information about JavaScript.

---
