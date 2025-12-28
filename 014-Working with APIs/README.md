# 013. Working with APIs

Most real-world JavaScript programs communicate with other systems.

They do this through **APIs** &ndash; Application Programming Interfaces.

In this lesson, you'll learn how JavaScript interacts with APIs, how to make HTTP requests,
and how to safely handle responses and errors.

---

## Table of Contents

- [013. Working with APIs](#013-working-with-apis)
  - [Table of Contents](#table-of-contents)
  - [What Is an API?](#what-is-an-api)
  - [HTTP Basics](#http-basics)
  - [Request Components](#request-components)
  - [The `fetch` API](#the-fetch-api)
  - [Reading the Response](#reading-the-response)
  - [Checking Response Status](#checking-response-status)
  - [Full GET Example](#full-get-example)
  - [Sending Data with POST](#sending-data-with-post)
  - [APIs and JSON](#apis-and-json)
  - [Headers](#headers)
  - [CORS (Conceptual Overview)](#cors-conceptual-overview)
  - [API Design Is External](#api-design-is-external)
  - [XMLHttpRequest (XHR)](#xmlhttprequest-xhr)
    - [Why Learn XMLHttpRequest?](#why-learn-xmlhttprequest)
  - [Making a Basic XHR Request](#making-a-basic-xhr-request)
  - [Response Type](#response-type)
  - [Progress Events (Key Advantage)](#progress-events-key-advantage)
    - [Download Progress](#download-progress)
    - [Upload Progress](#upload-progress)
  - [Streaming Data in Chunks](#streaming-data-in-chunks)
  - [Handling Errors and Status Codes](#handling-errors-and-status-codes)
  - [XMLHttpRequest vs fetch](#xmlhttprequest-vs-fetch)
  - [When Should You Use XHR?](#when-should-you-use-xhr)
  - [Best Practices](#best-practices)
  - [Summary](#summary)

---

## What Is an API?

An API is a defined way for one program to communicate with another.

For web applications, this usually means:

- Sending HTTP requests
- Receiving structured data (often JSON)

---

## HTTP Basics

HTTP is a request-response protocol.

Common HTTP methods:

| Method | Purpose               |
| -----: | --------------------- |
|    GET | Retrieve data         |
|   POST | Send new data         |
|    PUT | Replace existing data |
|  PATCH | Update existing data  |
| DELETE | Remove data           |

---

## Request Components

An HTTP request may include:

- A URL
- A method
- Headers
- A body (for POST, PUT, PATCH)

Example URL:

```
https://jsonplaceholder.typicode.com/posts
```

---

## The `fetch` API

JavaScript provides the `fetch` function to make HTTP requests.

```js
const response = await fetch('https://jsonplaceholder.typicode.com/posts')
```

`fetch` returns a Promise that resolves to a `Response` object.

---

## Reading the Response

The response body is not read automatically.

```js
const response = await fetch(url)
const data = await response.json()
```

Common body readers:

- `response.json()`
- `response.text()`
- `response.blob()`

---

## Checking Response Status

`fetch` only rejects on **network errors**, not HTTP errors.

You must check `response.ok`.

```js
if (!response.ok) {
  throw new Error(`Request failed: ${response.status}`)
}
```

---

## Full GET Example

```js
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
  return response.json()
}
```

---

## Sending Data with POST

```js
await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
```

Key points:

- Use `Content-Type` to specify what you're sending (in this case we're sending `application/json`)
- `body` must be a string (use `JSON.stringify` to convert objects to a string)

---

## APIs and JSON

Most APIs use JSON because it:

- Is language-independent
- Maps well to JavaScript objects
- Is easy to parse and serialize

Remember:

- JSON has no functions
- Dates become strings
- `undefined` is dropped

---

## Headers

Headers provide metadata about the request or response.

```js
fetch(url, {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'bearer <api-token>',
    // ...
  },
})
```

Headers are often used for:

- Authentication
- Content type
- Versioning

---

## CORS (Conceptual Overview)

Browsers restrict cross-origin requests for security.

CORS rules are:

- Enforced by browsers
- Controlled by the server

If an API blocks your request, it's usually a server configuration issue &mdash; not your code.

---

## API Design Is External

Important mindset:

- You do not control API shape
- Data may be missing or malformed
- Errors must be handled defensively

Never assume API responses are perfect.

---

## XMLHttpRequest (XHR)

Before `fetch` existed, JavaScript used `XMLHttpRequest` (often called **XHR**) to make HTTP requests.
While it's considered _legacy_ in many cases, XHR still has **unique strengths**, especially when working
with **streaming data and progress indicators**.

### Why Learn XMLHttpRequest?

Even though `fetch` is the modern default, XHR is still useful when you need:

- 📊 Upload or download progress event
- 📡 Streaming data in chunks
- 📁 File uploads with progress bars
- 🌐 Compatibility with older environments

Some features (like reliable progress tracking) are **much easier with XHR than with fetch**.

---

## Making a Basic XHR Request

Here's the simplest way to make a GET request with XHR:

```js
const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts')
xhr.send()

xhr.onload = () => {
  console.log(xhr.responseText)
}

xhr.onerror = () => {
  console.error('Request failed')
}
```

This may look more verbose than `fetch`, but it gives you **fine-grained control** over the request lifecycle.

---

## Response Type

XHR lets you specify how the response should be interpreted:

```js
xhr.responseType = 'json'
```

Common response type include:

- `'text'`
- `'json'`
- `'blob'`
- `'arrayBuffer'`

Example:

```js
xhr.responseType = 'json'
xhr.onload = () => {
  console.log(xhr.response) // Already parsed JSON
}
```

---

## Progress Events (Key Advantage)

One of XHR's biggest advantages is **progress tracking**.

### Download Progress

```js
xhr.onprogress = event => {
  if (event.lengthComputable) {
    const percent = (event.loaded / event.total) * 100
    console.log(`Download at ${percent.toFixed(1)}%`) // 'Download at 15.3%' and so on...
  }
}
```

This enables:

- Progress bars
- Loading indicators
- Streaming UI updates

---

### Upload Progress

When uploading data (like files), you can track progress separately:

```js
xhr.upload.onprogress = event => {
  if (event.lengthComputable) {
    console.log(`Uploaded ${event.loaded} of ${event.total} bytes`)
  }
}
```

This is **not directly supported by fetch** in most browsers.

---

## Streaming Data in Chunks

XHR fire `onprogress` multiple times as data arrives, allowing you to:

- Process partial responses
- Update UI incrementally
- Handle large downloads efficiently

```js
xhr.onprogress = () => {
  console.log(xhr.responseText) // Partial response
}
```

This makes XHR useful for **long-lived or streaming responses**.

---

## Handling Errors and Status Codes

XHR does **not reject automatically** like `fetch`, so you must check status codes manually:

```js
xhr.onload = () => {
  // HTtP status codes 2XX are successful responses
  if (xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.response)
  } else {
    console.error('HTTP Error:', xhr.status)
  }
}
```

---

## XMLHttpRequest vs fetch

| Feature          | XMLHttpRequest        | fetch                      |
| ---------------- | --------------------- | -------------------------- |
| Syntax           | Verbose               | Clean & modern             |
| Promises         | No                    | Yes                        |
| Progress events  | Yes                   | Limited                    |
| Streaming chunks | Easy                  | Advanced                   |
| Upload progress  | Yes                   | No                         |
| Abort requests   | Yes, but it's awkward | Yes, using AbortController |

---

## When Should You Use XHR?

Use fetch by default.

Use XMLHttpRequest when you need:

- Upload/Download progress
- Chunked or streaming UI updates
- Legacy browser support
- Fine-grained request lifecycle control

---

## Best Practices

- Always check `response.ok`
- Handle network and parsing errors
- Validate data before using it
- Keep API logic separate from UI logic
- Avoid hardcoding secrets in frontend code

---

## Summary

- APIs enable communication between systems
- HTTP is the foundation of web APIs
- `fetch` is used to make requests
- Responses must be checked and parsed
- JSON is the most common data format
- Error handling is critical when working with external data
- `XMLHttpRequest` is an older but still relevant API

APIs are the backbone of modern web applications &mdash; and now you have the tools to use them safely and
effectively.

---

See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API)
to learn more about the XMLHttpRequest API.
See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
to learn more about the Fetch API.

---
