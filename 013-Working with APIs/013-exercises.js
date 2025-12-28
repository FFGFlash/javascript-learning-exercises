// ============================================
// JavaScript Working with APIs Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser.

// Import the helper functions from our modules directory
import { exerciseAsync as exercise, lessonAsync as lesson } from '../@modules/exercises.js'

// We'll use JSONPlaceholder as our test API
// https://jsonplaceholder.typicode.com/
const API_BASE = 'https://jsonplaceholder.typicode.com'

lesson('JavaScript Working with APIs', async () => {
  // ============================================
  // Exercise 1: Understanding HTTP Methods
  // ============================================
  await exercise('Understanding HTTP Methods', () => {
    // TODO: Match each HTTP method with its purpose:
    // GET    - ?
    // POST   - ?
    // PUT    - ?
    // PATCH  - ?
    // DELETE - ?

    console.log('GET    - Retrieve data')
    console.log('POST   - Send new data')
    console.log('PUT    - Replace existing data')
    console.log('PATCH  - Update existing data')
    console.log('DELETE - Remove data')
  })

  // ============================================
  // Exercise 2: Basic fetch Request
  // ============================================
  await exercise('Basic fetch Request', async () => {
    // TODO: Make a GET request to fetch all posts
    // URL: `${API_BASE}/posts`
    // const response = await fetch(`${API_BASE}/posts`)
    // console.log('Response status:', response.status)
    // console.log('Response ok:', response.ok)
  })

  // ============================================
  // Exercise 3: Reading JSON Response
  // ============================================
  await exercise('Reading JSON Response', async () => {
    // TODO: Fetch posts and parse the JSON
    // TODO: Log the first post
    // const response = await fetch(`${API_BASE}/posts`)
    // const posts = await response.json()
    // console.log('First post:', posts[0])
  })

  // ============================================
  // Exercise 4: Checking Response Status
  // ============================================
  await exercise('Checking Response Status', async () => {
    // TODO: Try to fetch a non-existent resource
    // URL: `${API_BASE}/posts/999999`
    // TODO: Check if response.ok is true
    // TODO: Handle the error case

    try {
      // const response = await fetch(`${API_BASE}/posts/999999`)
      // if (!response.ok) {
      //   throw new Error(`HTTP Error: ${response.status}`)
      // }
      // const data = await response.json()
      // console.log(data)
    } catch (error) {
      console.log('Caught error:', error.message)
    }
  })

  // ============================================
  // Exercise 5: Complete GET Request Function
  // ============================================
  await exercise('Complete GET Request Function', async () => {
    // TODO: Create a function 'fetchPosts' that:
    // - Fetches posts from the API
    // - Checks response.ok
    // - Returns parsed JSON
    // - Throws on errors

    async function fetchPosts() {
      // Your code here
    }

    // Test it (uncomment after completing)
    // try {
    //   const posts = await fetchPosts()
    //   console.log(`Fetched ${posts.length} posts`)
    // } catch (error) {
    //   console.error(error.message)
    // }
  })

  // ============================================
  // Exercise 6: Fetching a Single Resource
  // ============================================
  await exercise('Fetching a Single Resource', async () => {
    // TODO: Fetch a specific post by ID
    // URL: `${API_BASE}/posts/1`
    // TODO: Log the title and body
    // const response = await fetch(`${API_BASE}/posts/1`)
    // const post = await response.json()
    // console.log('Title:', post.title)
    // console.log('Body:', post.body)
  })

  // ============================================
  // Exercise 7: POST Request - Creating Data
  // ============================================
  await exercise('POST Request - Creating Data', async () => {
    // TODO: Create a new post using POST
    // URL: `${API_BASE}/posts`
    // Send: { title: 'Test Post', body: 'Test content', userId: 1 }
    // Don't forget: method, headers, and JSON.stringify
    // const response = await fetch(`${API_BASE}/posts`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title: 'Test Post',
    //     body: 'Test content',
    //     userId: 1,
    //   }),
    // })
    // const data = await response.json()
    // console.log('Created post:', data)
  })

  // ============================================
  // Exercise 8: PUT Request - Replacing Data
  // ============================================
  await exercise('PUT Request - Replacing Data', async () => {
    // TODO: Replace post #1 using PUT
    // URL: `${API_BASE}/posts/1`
    // Send complete replacement data
    // const response = await fetch(`${API_BASE}/posts/1`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     id: 1,
    //     title: 'Updated Post',
    //     body: 'Updated content',
    //     userId: 1,
    //   }),
    // })
    // const data = await response.json()
    // console.log('Updated post:', data)
  })

  // ============================================
  // Exercise 9: PATCH Request - Partial Update
  // ============================================
  await exercise('PATCH Request - Partial Update', async () => {
    // TODO: Update only the title of post #1 using PATCH
    // URL: `${API_BASE}/posts/1`
    // Send only: { title: 'Patched Title' }
    // Your code here
  })

  // ============================================
  // Exercise 10: DELETE Request
  // ============================================
  await exercise('DELETE Request', async () => {
    // TODO: Delete post #1 using DELETE
    // URL: `${API_BASE}/posts/1`
    // Check the response status
    // const response = await fetch(`${API_BASE}/posts/1`, {
    //   method: 'DELETE',
    // })
    // console.log('Delete status:', response.status)
    // console.log('Delete successful:', response.ok)
  })

  // ============================================
  // Exercise 11: Query Parameters
  // ============================================
  await exercise('Query Parameters', async () => {
    // TODO: Fetch posts by a specific user (userId=1)
    // URL: `${API_BASE}/posts?userId=1`
    // URLSearchParams can help build query strings
    // const params = new URLSearchParams({ userId: '1' })
    // const response = await fetch(`${API_BASE}/posts?${params}`)
    // const posts = await response.json()
    // console.log(`User 1 has ${posts.length} posts`)
  })

  // ============================================
  // Exercise 12: Multiple Requests in Parallel
  // ============================================
  await exercise('Multiple Requests in Parallel', async () => {
    // TODO: Fetch posts and users simultaneously using Promise.all
    // URLs: `${API_BASE}/posts` and `${API_BASE}/users`
    // const [postsResponse, usersResponse] = await Promise.all([
    //   fetch(`${API_BASE}/posts`),
    //   fetch(`${API_BASE}/users`),
    // ])
    // const posts = await postsResponse.json()
    // const users = await usersResponse.json()
    // console.log(`Fetched ${posts.length} posts and ${users.length} users`)
  })

  // ============================================
  // Exercise 13: Handling Network Errors
  // ============================================
  await exercise('Handling Network Errors', async () => {
    // TODO: Try to fetch from an invalid URL
    // URL: 'https://invalid-domain-that-does-not-exist.com/data'
    // This will cause a network error (not an HTTP error)

    try {
      // const response = await fetch('https://invalid-domain-that-does-not-exist.com/data')
      // const data = await response.json()
    } catch (error) {
      console.log('Network error caught:', error.message)
    }
  })

  // ============================================
  // Exercise 14: Response Headers
  // ============================================
  await exercise('Response Headers', async () => {
    // TODO: Fetch posts and examine response headers
    // Log the Content-Type header
    // const response = await fetch(`${API_BASE}/posts`)
    // console.log('Content-Type:', response.headers.get('Content-Type'))
    // console.log('Status:', response.status)
    // console.log('Status Text:', response.statusText)
  })

  // ============================================
  // Exercise 15: Request Headers - Authorization
  // ============================================
  await exercise('Request Headers - Authorization', async () => {
    // TODO: Make a request with custom headers
    // Add an Authorization header (even though this API doesn't require it)
    // const response = await fetch(`${API_BASE}/posts/1`, {
    //   headers: {
    //     'Authorization': 'Bearer fake-token-123',
    //     'X-Custom-Header': 'custom-value',
    //   },
    // })
    // const data = await response.json()
    // console.log('Request with headers:', data.title)
  })

  // ============================================
  // Exercise 16: Defensive Data Validation
  // ============================================
  await exercise('Defensive Data Validation', async () => {
    // TODO: Fetch a post and validate that it has expected fields
    // Check for: id, title, body, userId
    // Log a warning if any are missing
    // const response = await fetch(`${API_BASE}/posts/1`)
    // const post = await response.json()
    // const required = ['id', 'title', 'body', 'userId']
    // for (const field of required) {
    //   if (!(field in post)) {
    //     console.warn(`Missing field: ${field}`)
    //   }
    // }
    // console.log('Validation complete')
  })

  // ============================================
  // Exercise 17: XMLHttpRequest - Basic GET
  // ============================================
  await exercise('XMLHttpRequest - Basic GET', async () => {
    // TODO: Make a GET request using XMLHttpRequest
    // Use the 'load' event to handle the response

    return new Promise((resolve, reject) => {
      // const xhr = new XMLHttpRequest()
      // xhr.open('GET', `${API_BASE}/posts/1`)
      // xhr.responseType = 'json'

      // xhr.onload = () => {
      //   if (xhr.status >= 200 && xhr.status < 300) {
      //     console.log('XHR response:', xhr.response.title)
      //     resolve()
      //   } else {
      //     reject(new Error(`HTTP ${xhr.status}`))
      //   }
      // }

      // xhr.onerror = () => reject(new Error('Network error'))
      // xhr.send()

      resolve() // Remove this when you implement
    })
  })

  // ============================================
  // Exercise 18: XMLHttpRequest - Progress Events
  // ============================================
  await exercise('XMLHttpRequest - Progress Events', async () => {
    // TODO: Use XHR to track download progress
    // Log progress updates as data arrives

    return new Promise((resolve, reject) => {
      // const xhr = new XMLHttpRequest()
      // xhr.open('GET', `${API_BASE}/posts`)

      // xhr.onprogress = (event) => {
      //   if (event.lengthComputable) {
      //     const percent = (event.loaded / event.total) * 100
      //     console.log(`Progress: ${percent.toFixed(1)}%`)
      //   }
      // }

      // xhr.onload = () => {
      //   console.log('Download complete')
      //   resolve()
      // }

      // xhr.onerror = () => reject(new Error('Download failed'))
      // xhr.send()

      resolve() // Remove this when you implement
    })
  })

  // ============================================
  // Exercise 19: XMLHttpRequest - POST Request
  // ============================================
  await exercise('XMLHttpRequest - POST Request', async () => {
    // TODO: Send a POST request using XMLHttpRequest
    // Set headers and send JSON data

    return new Promise((resolve, reject) => {
      // const xhr = new XMLHttpRequest()
      // xhr.open('POST', `${API_BASE}/posts`)
      // xhr.setRequestHeader('Content-Type', 'application/json')
      // xhr.responseType = 'json'

      // xhr.onload = () => {
      //   if (xhr.status >= 200 && xhr.status < 300) {
      //     console.log('Created:', xhr.response)
      //     resolve()
      //   } else {
      //     reject(new Error(`HTTP ${xhr.status}`))
      //   }
      // }

      // xhr.onerror = () => reject(new Error('Request failed'))

      // xhr.send(JSON.stringify({
      //   title: 'XHR Post',
      //   body: 'Created with XHR',
      //   userId: 1,
      // }))

      resolve() // Remove this when you implement
    })
  })

  // ============================================
  // Exercise 20: Practical Challenge - API Wrapper
  // ============================================
  await exercise('Practical Challenge - API Wrapper', async () => {
    // TODO: Create an API wrapper class with methods:
    // - get(endpoint)
    // - post(endpoint, data)
    // - put(endpoint, data)
    // - delete(endpoint)
    // Each should handle errors and parse JSON

    class APIClient {
      constructor(baseURL) {
        this.baseURL = baseURL
      }

      async get(endpoint) {
        // Your code here
      }

      async post(endpoint, data) {
        // Your code here
      }

      // Add put and delete...
    }

    // Test it (uncomment after completing)
    // const api = new APIClient(API_BASE)
    // const posts = await api.get('/posts')
    // console.log(`API Wrapper fetched ${posts.length} posts`)
  })

  // ============================================
  // Exercise 21: Practical Challenge - Retry Logic
  // ============================================
  await exercise('Practical Challenge - Retry Logic', async () => {
    // TODO: Create a fetchWithRetry function that:
    // - Attempts a fetch request
    // - Retries up to 3 times on failure
    // - Waits progressively longer between retries (100ms, 200ms, 400ms)

    async function fetchWithRetry(url, options = {}, maxRetries = 3) {
      // Your code here
    }

    // Test it
    // try {
    //   const response = await fetchWithRetry(`${API_BASE}/posts/1`)
    //   const data = await response.json()
    //   console.log('Fetch with retry succeeded')
    // } catch (error) {
    //   console.log('All retries failed')
    // }
  })

  // ============================================
  // Exercise 22: Practical Challenge - Caching
  // ============================================
  await exercise('Practical Challenge - Caching', async () => {
    // TODO: Create a simple cache for API responses
    // Cache responses for 5 seconds
    // Return cached data if available and fresh

    const cache = new Map()

    async function cachedFetch(url) {
      const now = Date.now()
      const cached = cache.get(url)

      if (cached && now - cached.timestamp < 5000) {
        console.log('Returning cached data')
        return cached.data
      }

      // Your code here to fetch and cache
    }

    // Test it (uncomment after completing)
    // await cachedFetch(`${API_BASE}/posts/1`)
    // await cachedFetch(`${API_BASE}/posts/1`) // Should use cache
  })

  // ============================================
  // Exercise 23: Practical Challenge - Rate Limiting
  // ============================================
  await exercise('Practical Challenge - Rate Limiting', async () => {
    // TODO: Create a rate limiter that allows max 3 requests per second
    // Queue additional requests

    class RateLimiter {
      constructor(maxPerSecond) {
        this.maxPerSecond = maxPerSecond
        this.queue = []
        this.count = 0
      }

      async fetch(url) {
        // Your code here
      }
    }

    console.log('Rate limiter - implement request queuing')
  })

  // ============================================
  // Exercise 24: Practical Challenge - Error Logger
  // ============================================
  await exercise('Practical Challenge - Error Logger', async () => {
    // TODO: Create a fetch wrapper that logs all errors
    // Include: timestamp, URL, status, error message

    async function fetchWithLogging(url, options = {}) {
      try {
        // Your code here
      } catch (error) {
        console.error('API Error Log:', {
          timestamp: new Date().toISOString(),
          url,
          error: error.message,
        })
        throw error
      }
    }

    // Test it
    // try {
    //   await fetchWithLogging(`${API_BASE}/invalid`)
    // } catch (error) {
    //   console.log('Error was logged')
    // }
  })

  // ============================================
  // Exercise 25: Understanding CORS
  // ============================================
  await exercise('Understanding CORS', () => {
    // This is informational - CORS errors happen when:
    // - Browser blocks cross-origin requests
    // - Server doesn't allow your origin
    // - You're trying to access certain headers

    // CORS is a BROWSER security feature
    // It doesn't apply to server-to-server requests

    console.log('CORS is controlled by the server, not your code')
    console.log('If you get a CORS error, the API needs to allow your origin')
    console.log('JSONPlaceholder allows all origins, so we dont see CORS errors')
  })

  // ============================================
  // Exercise 26: Common API Mistakes
  // ============================================
  await exercise('Common API Mistakes', () => {
    // Mistake 1: Not checking response.ok
    // fetch(url).then(r => r.json())  // Might parse error HTML!

    // Mistake 2: Forgetting await
    // const data = fetch(url)  // data is a Promise, not the response

    // Mistake 3: Not handling network errors
    // fetch(url).then(...)  // No .catch()

    // Mistake 4: Exposing API keys in frontend
    // fetch(url, { headers: { 'API-Key': 'secret123' } })  // Visible in browser!

    // Mistake 5: Not validating response data
    // const user = await getUser()
    // console.log(user.name.toUpperCase())  // Crashes if name is undefined

    console.log('Review common API mistakes above')
  })

  // ============================================
  // Exercise 27: Fix the Bugs
  // ============================================
  await exercise('Fix the Bugs', async () => {
    // Bug 1: Missing await
    // async function getData() {
    //   const response = fetch(url)
    //   return response.json()  // response is a Promise!
    // }

    // Bug 2: Not checking status
    // const response = await fetch(url)
    // const data = await response.json()  // Might be error HTML

    // Bug 3: Wrong Content-Type
    // fetch(url, {
    //   method: 'POST',
    //   body: { key: 'value' }  // Should be JSON.stringify!
    // })

    // Bug 4: XHR without error handling
    // const xhr = new XMLHttpRequest()
    // xhr.open('GET', url)
    // xhr.send()
    // // No onload or onerror!

    console.log('Fix the bugs above')
  })

  // ============================================
  // Bonus Challenge: Upload Progress Bar
  // ============================================
  await exercise('Bonus Challenge - Upload Progress Bar', async () => {
    // TODO: Create a file upload simulator with progress tracking
    // Use XMLHttpRequest.upload.onprogress
    // Simulate uploading a large string as a file

    console.log('Implement file upload with progress tracking using XHR')
  })

  // ============================================
  // Super Bonus: GraphQL Query
  // ============================================
  await exercise('Super Bonus - GraphQL Query', async () => {
    // TODO: Make a request to a GraphQL API
    // Use POST with a query in the body
    // Example GraphQL endpoint: https://countries.trevorblades.com/
    // const query = `
    //   query {
    //     country(code: "US") {
    //       name
    //       capital
    //     }
    //   }
    // `
    // const response = await fetch('https://countries.trevorblades.com/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ query }),
    // })
    // const data = await response.json()
    // console.log('GraphQL response:', data)
  })
})
