// ============================================
// JavaScript Asynchronous Programming Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser.

// Import the helper functions from our modules directory
import { exerciseAsync as exercise, lessonAsync as lesson } from '../@modules/exercises.js'

lesson('JavaScript Asynchronous Programming', async () => {
  // ============================================
  // Exercise 1: Understanding Synchronous Execution
  // ============================================
  await exercise('Understanding Synchronous Execution', () => {
    // TODO: Log 'First', 'Second', 'Third' in order
    // Observe that they print sequentially

    console.log('First')
    console.log('Second')
    console.log('Third')
  })

  // ============================================
  // Exercise 2: Understanding Asynchronous Execution
  // ============================================
  await exercise('Understanding Asynchronous Execution', () => {
    // TODO: Use setTimeout to log 'Delayed' after 1 second
    // TODO: Log 'Immediate' right after setting the timeout
    // TODO: Observe the order - which logs first?

    console.log('Start')
    // Your code here
    console.log('End')
  })

  // ============================================
  // Exercise 3: setTimeout with Zero Delay
  // ============================================
  await exercise('setTimeout with Zero Delay', () => {
    console.log('A')

    setTimeout(() => {
      console.log('B')
    }, 0)

    console.log('C')

    // TODO: Predict the output order before running
    // TODO: Explain why B logs last even with 0 delay
  })

  // ============================================
  // Exercise 4: Basic Callbacks
  // ============================================
  await exercise('Basic Callbacks', () => {
    // TODO: Create a function 'delayedGreeting' that:
    // - Takes a name and a callback
    // - Waits 1 second
    // - Calls the callback with a greeting message

    function delayedGreeting(name, callback) {
      // Your code here
    }

    // Test it (uncomment after completing)
    // delayedGreeting('Alice', (message) => {
    //   console.log(message)
    // })
  })

  // ============================================
  // Exercise 5: Callback Hell
  // ============================================
  await exercise('Callback Hell', () => {
    // This demonstrates the problem with deeply nested callbacks

    function step1(callback) {
      setTimeout(() => callback('Step 1 done'), 100)
    }

    function step2(callback) {
      setTimeout(() => callback('Step 2 done'), 100)
    }

    function step3(callback) {
      setTimeout(() => callback('Step 3 done'), 100)
    }

    // TODO: Chain these three steps using callbacks
    // Notice how the code indents deeper and deeper

    // step1((result1) => {
    //   console.log(result1)
    //   step2((result2) => {
    //     console.log(result2)
    //     step3((result3) => {
    //       console.log(result3)
    //     })
    //   })
    // })
  })

  // ============================================
  // Exercise 6: Creating a Promise
  // ============================================
  await exercise('Creating a Promise', () => {
    // TODO: Create a Promise that resolves after 1 second with 'Success!'

    const myPromise = new Promise((resolve, reject) => {
      // Your code here
    })

    // Test it (uncomment after completing)
    // myPromise.then(result => console.log(result))
  })

  // ============================================
  // Exercise 7: Rejecting a Promise
  // ============================================
  await exercise('Rejecting a Promise', () => {
    // TODO: Create a Promise that rejects with an error after 1 second

    const failingPromise = new Promise((resolve, reject) => {
      // Your code here
    })

    // Test it (uncomment after completing)
    // failingPromise
    //   .then(result => console.log(result))
    //   .catch(error => console.error('Caught:', error.message))
  })

  // ============================================
  // Exercise 8: Promise.then Chaining
  // ============================================
  await exercise('Promise.then Chaining', () => {
    // TODO: Create a Promise chain that:
    // 1. Resolves with the number 5
    // 2. Multiplies by 2 in the next .then
    // 3. Adds 10 in the next .then
    // 4. Logs the final result (should be 20)

    Promise.resolve(5)
    // Your code here
  })

  // ============================================
  // Exercise 9: Promise Error Handling
  // ============================================
  await exercise('Promise Error Handling', () => {
    // TODO: Create a Promise chain where:
    // 1. The first Promise resolves with 10
    // 2. The second .then throws an error
    // 3. A .catch handles the error
    // 4. A final .then runs after the catch

    Promise.resolve(10)
      .then(value => {
        // Your code here
      })
      .catch(error => {
        // Your code here
      })
      .then(() => {
        console.log('This runs after catch')
      })
  })

  // ============================================
  // Exercise 10: async Functions
  // ============================================
  await exercise('async Functions', () => {
    // TODO: Create an async function 'fetchData' that:
    // - Waits 1 second
    // - Returns 'Data loaded'

    async function fetchData() {
      // Your code here
    }

    // TODO: Call fetchData and log the result
    // Remember: async functions return Promises

    // fetchData().then(data => console.log(data))
  })

  // ============================================
  // Exercise 11: await Keyword
  // ============================================
  await exercise('await Keyword', async () => {
    // Note: This exercise function is async so we can use await

    function delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    // TODO: Use await to pause execution for 1 second
    // TODO: Log 'Before delay'
    // TODO: Await the delay
    // TODO: Log 'After delay'

    // Your code here
  })

  // ============================================
  // Exercise 12: async/await Error Handling
  // ============================================
  await exercise('async/await Error Handling', async () => {
    function riskyOperation() {
      return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('Operation failed')), 100)
      })
    }

    // TODO: Use try/catch to handle the error from riskyOperation
    // TODO: Log 'Attempting operation...'
    // TODO: Try to await riskyOperation
    // TODO: Catch and log any errors

    // Your code here
  })

  // ============================================
  // Exercise 13: Sequential vs Parallel
  // ============================================
  await exercise('Sequential vs Parallel', async () => {
    function task(name, duration) {
      return new Promise(resolve => {
        setTimeout(() => resolve(`${name} done`), duration)
      })
    }

    // TODO: Run taskA and taskB sequentially (one after another)
    // const startSeq = Date.now()
    // const a = await task('A', 1000)
    // const b = await task('B', 1000)
    // const seqTime = Date.now() - startSeq
    // console.log('Sequential:', seqTime, 'ms')

    // TODO: Run taskA and taskB in parallel (at the same time)
    // Use Promise.all
    // const startPar = Date.now()
    // const [c, d] = await Promise.all([task('C', 1000), task('D', 1000)])
    // const parTime = Date.now() - startPar
    // console.log('Parallel:', parTime, 'ms')

    // TODO: Notice the time difference!
  })

  // ============================================
  // Exercise 14: Promise.all
  // ============================================
  await exercise('Promise.all', async () => {
    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

    // TODO: Use Promise.all to wait for all promises
    // TODO: Log the array of results

    // Your code here
  })

  // ============================================
  // Exercise 15: Promise.all with Rejection
  // ============================================
  await exercise('Promise.all with Rejection', async () => {
    const promises = [Promise.resolve(1), Promise.reject(new Error('Failed')), Promise.resolve(3)]

    // TODO: Use Promise.all and try/catch
    // TODO: Observe that if ANY promise rejects, Promise.all rejects
    // TODO: The other results are lost

    try {
      // Your code here
    } catch (error) {
      console.log('Caught:', error.message)
    }
  })

  // ============================================
  // Exercise 16: Promise.allSettled
  // ============================================
  await exercise('Promise.allSettled', async () => {
    const promises = [Promise.resolve(1), Promise.reject(new Error('Failed')), Promise.resolve(3)]

    // TODO: Use Promise.allSettled instead of Promise.all
    // TODO: Log the results - notice you get ALL results, even rejections

    // Your code here
  })

  // ============================================
  // Exercise 17: Promise.race
  // ============================================
  await exercise('Promise.race', async () => {
    function delay(ms, value) {
      return new Promise(resolve => setTimeout(() => resolve(value), ms))
    }

    // TODO: Use Promise.race to get the first Promise that settles
    // TODO: Race between three delays: 1000ms, 500ms, 1500ms

    const result = await Promise.race([
      // Your code here
    ])

    console.log('Winner:', result)
  })

  // ============================================
  // Exercise 18: Dynamic Imports
  // ============================================
  await exercise('Dynamic Imports', async () => {
    // TODO: Use dynamic import to load a module
    // Note: This will fail if the module doesn't exist - that's ok for now

    try {
      // const module = await import('./some-module.js')
      // console.log('Module loaded:', module)
      console.log('Dynamic import example - create some-module.js to test')
    } catch (error) {
      console.log('Module not found - expected for this example')
    }
  })

  // ============================================
  // Exercise 19: Async Iteration
  // ============================================
  await exercise('Async Iteration', async () => {
    const urls = ['url1', 'url2', 'url3']

    // Simulate fetching data
    function fetchUrl(url) {
      return new Promise(resolve => {
        setTimeout(() => resolve(`Data from ${url}`), 100)
      })
    }

    // TODO: Use a for...of loop with await to fetch each URL sequentially
    // for (const url of urls) {
    //   const data = await fetchUrl(url)
    //   console.log(data)
    // }

    // TODO: Now fetch all URLs in parallel using Promise.all
    // const results = await Promise.all(urls.map(url => fetchUrl(url)))
    // console.log(results)
  })

  // ============================================
  // Exercise 20: Practical Challenge - Retry Logic
  // ============================================
  await exercise('Practical Challenge - Retry Logic', async () => {
    // TODO: Create an async function 'retryOperation' that:
    // - Takes an async function and max retries
    // - Tries to execute the function
    // - If it fails, retries up to max times
    // - Returns the result or throws the last error

    async function retryOperation(fn, maxRetries = 3) {
      // Your code here
    }

    // Test with an unreliable function
    let attempts = 0
    async function unreliableTask() {
      attempts++
      if (attempts < 3) {
        throw new Error(`Attempt ${attempts} failed`)
      }
      return 'Success!'
    }

    // try {
    //   const result = await retryOperation(unreliableTask, 5)
    //   console.log(result)
    // } catch (error) {
    //   console.log('All retries failed')
    // }
  })

  // ============================================
  // Exercise 21: Practical Challenge - Timeout Wrapper
  // ============================================
  await exercise('Practical Challenge - Timeout Wrapper', async () => {
    // TODO: Create a function 'withTimeout' that:
    // - Takes a Promise and a timeout duration
    // - Returns a Promise that rejects if timeout is reached
    // - Otherwise resolves with the original Promise result

    function withTimeout(promise, ms) {
      // Your code here
      // Hint: Use Promise.race
    }

    // Test it
    const slowTask = new Promise(resolve => setTimeout(() => resolve('Done'), 2000))

    // try {
    //   const result = await withTimeout(slowTask, 1000)
    //   console.log(result)
    // } catch (error) {
    //   console.log('Timeout!', error.message)
    // }
  })

  // ============================================
  // Exercise 22: Practical Challenge - Queue
  // ============================================
  await exercise('Practical Challenge - Queue', async () => {
    // TODO: Create an async function 'processQueue' that:
    // - Takes an array of async functions
    // - Processes them one at a time (sequential)
    // - Collects all results
    // - Returns array of results

    async function processQueue(tasks) {
      // Your code here
    }

    // Test it
    const tasks = [
      async () => {
        await new Promise(r => setTimeout(r, 100))
        return 'Task 1'
      },
      async () => {
        await new Promise(r => setTimeout(r, 100))
        return 'Task 2'
      },
      async () => {
        await new Promise(r => setTimeout(r, 100))
        return 'Task 3'
      },
    ]

    // const results = await processQueue(tasks)
    // console.log(results)
  })

  // ============================================
  // Exercise 23: Practical Challenge - Debounce
  // ============================================
  await exercise('Practical Challenge - Debounce', () => {
    // TODO: Create a debounce function that:
    // - Takes a function and delay
    // - Returns a new function
    // - Delays execution until calls stop for the specified delay
    // This is useful for search inputs, window resize, etc.

    function debounce(fn, delay) {
      // Your code here
      // Hint: Use setTimeout and clearTimeout
    }

    // Test it
    // const debouncedLog = debounce((msg) => console.log(msg), 500)
    // debouncedLog('Call 1')  // Won't log
    // debouncedLog('Call 2')  // Won't log
    // debouncedLog('Call 3')  // Will log after 500ms
  })

  // ============================================
  // Exercise 24: Understanding Promise States
  // ============================================
  await exercise('Understanding Promise States', async () => {
    // Promises have three states: pending, fulfilled, rejected

    const pending = new Promise(() => {}) // Never resolves
    const fulfilled = Promise.resolve('done')
    const rejected = Promise.reject(new Error('failed'))

    // TODO: Try to log these promises directly
    // console.log(pending)    // Promise { <pending> }
    // console.log(fulfilled)  // Promise { 'done' }
    // console.log(rejected)   // Promise { <rejected> }

    // TODO: Observe that you can't directly access the state
    // You must use .then, .catch, or await

    console.log('Promises are opaque - use .then or await to access values')
  })

  // ============================================
  // Exercise 25: Common Async Mistakes
  // ============================================
  await exercise('Common Async Mistakes', () => {
    // Mistake 1: Forgetting to await
    // async function bad() {
    //   const result = fetch('url')  // Returns a Promise, not the data!
    //   console.log(result.json())    // Doesn't work
    // }

    // Mistake 2: Using await in non-async function
    // function bad() {
    //   const result = await fetch('url')  // SyntaxError
    // }

    // Mistake 3: Not handling rejections
    // async function bad() {
    //   await riskyOperation()  // If this throws, it becomes unhandled
    // }

    // Mistake 4: Sequential when parallel would work
    // async function bad() {
    //   const a = await fetchA()  // Waits
    //   const b = await fetchB()  // Waits again (unnecessary)
    // }
    // Better: const [a, b] = await Promise.all([fetchA(), fetchB()])

    console.log('Review common async mistakes above')
  })

  // ============================================
  // Exercise 26: Fix the Bugs
  // ============================================
  await exercise('Fix the Bugs', async () => {
    // Bug 1: Missing await
    // async function getData() {
    //   const response = fetch('url')
    //   return response.json()  // Returns Promise, not data
    // }
    // Bug 2: Mixing callbacks and async/await
    // async function process() {
    //   setTimeout(() => {
    //     return 'done'  // This return doesn't work!
    //   }, 1000)
    // }
    // Bug 3: Not propagating errors
    // async function fetchData() {
    //   try {
    //     const data = await riskyOperation()
    //   } catch (error) {
    //     console.log(error)
    //     // Error is caught but not re-thrown or handled
    //   }
    // }
    // TODO: Fix each bug and explain the correction
  })

  // ============================================
  // Bonus Challenge: Async Pool
  // ============================================
  await exercise('Bonus Challenge - Async Pool', async () => {
    // TODO: Create a function 'asyncPool' that:
    // - Takes an array of items and an async function
    // - Processes items with a maximum concurrency limit
    // - Example: Process 100 items but only 5 at a time

    async function asyncPool(items, fn, concurrency = 5) {
      // Your code here
      // This is advanced! Consider using a queue and tracking active promises
    }

    console.log('Advanced challenge - implement controlled concurrency')
  })

  // ============================================
  // Super Bonus: Async Generator
  // ============================================
  await exercise('Super Bonus - Async Generator', async () => {
    // TODO: Create an async generator that yields delayed values

    async function* countWithDelay(max) {
      // for (let i = 1; i <= max; i++) {
      //   await new Promise(resolve => setTimeout(resolve, 100))
      //   yield i
      // }
    }

    // TODO: Use for await...of to consume the generator
    // for await (const num of countWithDelay(5)) {
    //   console.log(num)
    // }

    console.log('Async generators are an advanced feature!')
  })
})
