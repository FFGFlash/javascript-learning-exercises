// ============================================
// JavaScript Error Handling Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

lesson('JavaScript Error Handling', () => {
  // ============================================
  // Exercise 1: Understanding Error Types
  // ============================================
  exercise('Understanding Error Types', () => {
    // TODO: Uncomment each line one at a time and observe the error type:
    // console.log(undefinedVariable)  // What error type?
    // null.toString()                  // What error type?
    // const x = 5; x = 10             // What error type?
    // TODO: Log what you learned about each error type
  })

  // ============================================
  // Exercise 2: Basic try...catch
  // ============================================
  exercise('Basic try...catch', () => {
    // TODO: Wrap this code in try...catch to prevent crashing:
    // const user = null
    // console.log(user.name.toUpperCase())
    // TODO: Log a friendly message in the catch block
  })

  // ============================================
  // Exercise 3: Accessing Error Properties
  // ============================================
  exercise('Accessing Error Properties', () => {
    try {
      throw new Error('This is a test error')
    } catch (error) {
      // TODO: Log error.name
      // TODO: Log error.message
      // TODO: Log error.stack
    }
  })

  // ============================================
  // Exercise 4: Multiple Operations in try
  // ============================================
  exercise('Multiple Operations in try', () => {
    // TODO: Create a try block with multiple operations
    // Only one should fail - which line stops execution?

    try {
      // console.log('Step 1')
      // console.log('Step 2')
      // throw new Error('Failure at step 3')
      // console.log('Step 4')  // Does this run?
    } catch (error) {
      // console.log('Caught:', error.message)
    }
  })

  // ============================================
  // Exercise 5: finally Block
  // ============================================
  exercise('finally Block', () => {
    let resource = 'Database connection'

    try {
      // TODO: Log 'Connecting to database...'
      // TODO: Throw an error with message 'Connection failed'
    } catch (error) {
      // TODO: Log the error message
    } finally {
      // TODO: Log 'Closing connection...'
      // This should run regardless of error
    }
  })

  // ============================================
  // Exercise 6: finally Always Runs
  // ============================================
  exercise('finally Always Runs', () => {
    // TODO: Create three scenarios:
    // 1. try succeeds, no error
    // 2. try throws error, catch handles it
    // 3. try returns early
    // In all cases, log in finally to prove it runs
  })

  // ============================================
  // Exercise 7: Throwing Custom Errors
  // ============================================
  exercise('Throwing Custom Errors', () => {
    // TODO: Create a function 'divide' that:
    // - Takes two parameters: a and b
    // - Throws an Error if b is 0
    // - Returns a / b otherwise
    // Test your function (uncomment after completing)
    // try {
    //   console.log(divide(10, 2))
    //   console.log(divide(10, 0))
    // } catch (error) {
    //   console.log(error.message)
    // }
  })

  // ============================================
  // Exercise 8: Throwing Non-Error Values
  // ============================================
  exercise('Throwing Non-Error Values', () => {
    // This demonstrates why throwing non-Error values is problematic

    try {
      throw 'Just a string'
    } catch (error) {
      // TODO: Try to log error.stack - what happens?
      // TODO: Check if error is an instance of Error
    }

    try {
      throw new Error('Proper error')
    } catch (error) {
      // TODO: Now log error.stack - what's different?
    }
  })

  // ============================================
  // Exercise 9: ensureError Function
  // ============================================
  exercise('ensureError Function', () => {
    // TODO: Create an ensureError function that:
    // - Returns the value if it's already an Error
    // - Creates a new Error with the value as message otherwise

    function ensureError(value) {
      // Your code here
    }

    // Test it (uncomment after completing)
    // console.log(ensureError(new Error('test')) instanceof Error)  // true
    // console.log(ensureError('string error') instanceof Error)     // true
    // console.log(ensureError(404) instanceof Error)                // true
  })

  // ============================================
  // Exercise 10: Using ensureError in catch
  // ============================================
  exercise('Using ensureError in catch', () => {
    function ensureError(value) {
      if (value instanceof Error) return value
      return new Error(`Thrown value: ${value}`)
    }

    // TODO: Create a function that might throw non-Error values
    // Use ensureError to normalize what you catch

    try {
      // TODO: Randomly throw either an Error or a string
      // if (Math.random() > 0.5) throw new Error('Error object')
      // else throw 'String error'
    } catch (value) {
      // TODO: Use ensureError here
      // TODO: Log the normalized error
    }
  })

  // ============================================
  // Exercise 11: Custom Error Messages
  // ============================================
  exercise('Custom Error Messages', () => {
    // TODO: Create a function 'validateAge' that:
    // - Takes an age parameter
    // - Throws descriptive errors for:
    //   - Non-number input
    //   - Negative numbers
    //   - Numbers over 150
    // - Returns true if valid
    // Test your function (uncomment after completing)
    // try {
    //   validateAge('25')
    //   validateAge(-5)
    //   validateAge(200)
    //   validateAge(25)
    // } catch (error) {
    //   console.log(error.message)
    // }
  })

  // ============================================
  // Exercise 12: Error Types - TypeError
  // ============================================
  exercise('Error Types - TypeError', () => {
    // TODO: Create a function that explicitly throws a TypeError
    // when it receives the wrong type

    function processString(value) {
      // TODO: Check if value is a string
      // TODO: Throw TypeError if not
      // TODO: Return value.toUpperCase() if valid
    }

    // Test it (uncomment after completing)
    // try {
    //   console.log(processString('hello'))
    //   console.log(processString(123))
    // } catch (error) {
    //   console.log(error.name)  // Should be 'TypeError'
    // }
  })

  // ============================================
  // Exercise 13: Error Types - RangeError
  // ============================================
  exercise('Error Types - RangeError', () => {
    // TODO: Create a function that throws a RangeError
    // when a number is out of an acceptable range

    function setVolume(level) {
      // TODO: Throw RangeError if level < 0 or level > 100
      // TODO: Return level if valid
    }

    // Test it (uncomment after completing)
    // try {
    //   setVolume(50)
    //   setVolume(150)
    // } catch (error) {
    //   console.log(error.name, error.message)
    // }
  })

  // ============================================
  // Exercise 14: When NOT to Use try...catch
  // ============================================
  exercise('When NOT to Use try...catch', () => {
    // Bad: Using errors for control flow
    // function isPositive(n) {
    //   try {
    //     if (n < 0) throw new Error()
    //     return true
    //   } catch {
    //     return false
    //   }
    // }
    // TODO: Rewrite isPositive WITHOUT using try...catch
    // Use a simple conditional instead
  })

  // ============================================
  // Exercise 15: Defensive Programming
  // ============================================
  exercise('Defensive Programming', () => {
    // TODO: Create a function 'getUserEmail' that:
    // - Takes a user object
    // - Returns user.contact.email if it exists
    // - Returns 'No email' if any part is missing
    // - Does NOT use try...catch - use defensive checks
    // Test it (uncomment after completing)
    // console.log(getUserEmail({ contact: { email: 'a@b.com' } }))
    // console.log(getUserEmail({ contact: {} }))
    // console.log(getUserEmail({}))
    // console.log(getUserEmail(null))
  })

  // ============================================
  // Exercise 16: Optional Chaining (?.)
  // ============================================
  exercise('Optional Chaining (?.)', () => {
    const user = {
      name: 'Alice',
      address: {
        city: 'NYC',
      },
    }

    // TODO: Use optional chaining to safely access:
    // - user?.name
    // - user?.address?.city
    // - user?.address?.zip
    // - user?.contact?.email

    // TODO: Log all results - which ones are undefined?
  })

  // ============================================
  // Exercise 17: Optional Chaining with Arrays
  // ============================================
  exercise('Optional Chaining with Arrays', () => {
    const users = [{ name: 'Alice' }, { name: 'Bob' }]

    // TODO: Use optional chaining to safely access:
    // - users?.[0]?.name
    // - users?.[5]?.name
    // - users?.[0]?.address?.city

    // TODO: Log all results
  })

  // ============================================
  // Exercise 18: Optional Chaining with Functions
  // ============================================
  exercise('Optional Chaining with Functions', () => {
    const obj = {
      greet() {
        return 'Hello'
      },
    }

    // TODO: Use optional chaining to safely call:
    // - obj.greet?.()
    // - obj.goodbye?.()

    // TODO: What does calling a non-existent function return?
  })

  // ============================================
  // Exercise 19: Nullish Coalescing (??)
  // ============================================
  exercise('Nullish Coalescing (??)', () => {
    const config = {
      timeout: 0,
      retries: null,
      debug: false,
    }

    // TODO: Use ?? to provide defaults for:
    // - config.timeout (should keep 0, not replace it)
    // - config.retries (should get a default)
    // - config.debug (should keep false)
    // - config.maxSize (doesn't exist)

    // TODO: Compare with || operator - what's different?
  })

  // ============================================
  // Exercise 20: Combining ?. and ??
  // ============================================
  exercise('Combining ?. and ??', () => {
    const user = {
      name: 'Alice',
      preferences: {
        theme: null,
      },
    }

    // TODO: Get user theme with fallback to 'light':
    // const theme = user?.preferences?.theme ?? 'light'

    // TODO: Get user language with fallback to 'en':
    // const language = user?.preferences?.language ?? 'en'

    // TODO: Log both values
  })

  // ============================================
  // Exercise 21: Practical Challenge - Safe JSON Parse
  // ============================================
  exercise('Practical Challenge - Safe JSON Parse', () => {
    // TODO: Create a function safeJSONParse that:
    // - Takes a string
    // - Returns parsed object if valid JSON
    // - Returns null if parsing fails
    // - Does NOT throw errors to the caller
    // Test it (uncomment after completing)
    // console.log(safeJSONParse('{"name":"Alice"}'))
    // console.log(safeJSONParse('invalid json'))
    // console.log(safeJSONParse('null'))
  })

  // ============================================
  // Exercise 22: Practical Challenge - Retry Logic
  // ============================================
  exercise('Practical Challenge - Retry Logic', () => {
    // TODO: Create a function retry that:
    // - Takes a function and max attempts
    // - Tries to execute the function
    // - If it throws, tries again up to max times
    // - Returns the result or throws the last error

    function unreliableOperation() {
      if (Math.random() < 0.7) throw new Error('Failed')
      return 'Success'
    }

    // Test it (uncomment after completing)
    // try {
    //   const result = retry(unreliableOperation, 5)
    //   console.log(result)
    // } catch (error) {
    //   console.log('All attempts failed')
    // }
  })

  // ============================================
  // Exercise 23: Practical Challenge - Input Validator
  // ============================================
  exercise('Practical Challenge - Input Validator', () => {
    // TODO: Create a function validateUser that:
    // - Takes a user object
    // - Checks required fields: name (string), age (number), email (string with @)
    // - Throws descriptive errors for missing/invalid fields
    // - Returns true if valid
    // Test it (uncomment after completing)
    // try {
    //   validateUser({ name: 'Alice', age: 25, email: 'alice@test.com' })
    //   validateUser({ name: 'Bob', age: '25', email: 'bob@test' })
    // } catch (error) {
    //   console.log(error.message)
    // }
  })

  // ============================================
  // Exercise 24: Practical Challenge - Error Logger
  // ============================================
  exercise('Practical Challenge - Error Logger', () => {
    // TODO: Create a function logError that:
    // - Takes an error and optional context object
    // - Logs formatted error information:
    //   - Timestamp
    //   - Error name and message
    //   - Context (if provided)
    //   - Stack trace (first 3 lines only)
    // Test it (uncomment after completing)
    // try {
    //   throw new Error('Something broke')
    // } catch (error) {
    //   logError(error, { userId: 123, action: 'login' })
    // }
  })

  // ============================================
  // Exercise 25: Practical Challenge - Safe Property Access
  // ============================================
  exercise('Practical Challenge - Safe Property Access', () => {
    // TODO: Create a function getNestedProperty that:
    // - Takes an object and a path string (e.g., 'user.address.city')
    // - Returns the value at that path
    // - Returns undefined if any part doesn't exist
    // - Does NOT use try...catch or optional chaining
    // Test it (uncomment after completing)
    // const data = { user: { address: { city: 'NYC' } } }
    // console.log(getNestedProperty(data, 'user.address.city'))    // 'NYC'
    // console.log(getNestedProperty(data, 'user.address.zip'))     // undefined
    // console.log(getNestedProperty(data, 'user.contact.email'))   // undefined
  })

  // ============================================
  // Exercise 26: Error Handling Anti-patterns
  // ============================================
  exercise('Error Handling Anti-patterns', () => {
    // These are BAD practices - understand why:
    // Anti-pattern 1: Empty catch
    // try {
    //   riskyOperation()
    // } catch (error) {
    //   // Silent failure - very bad!
    // }
    // Anti-pattern 2: Catching without handling
    // try {
    //   doWork()
    // } catch (error) {
    //   throw error  // Why catch at all?
    // }
    // Anti-pattern 3: Vague errors
    // throw new Error('Error')  // Not helpful!
    // TODO: Write corrected versions of each
  })

  // ============================================
  // Exercise 27: Fix the Bugs
  // ============================================
  exercise('Fix the Bugs', () => {
    // Bug 1: Missing catch or finally
    // try {
    //   doSomething()
    // }
    // Bug 2: Multiple catch blocks (not valid in JS)
    // try {
    //   doSomething()
    // } catch (TypeError) {
    //   // handle type error
    // } catch (ReferenceError) {
    //   // handle reference error
    // }
    // Bug 3: Swallowing errors
    // try {
    //   criticalOperation()
    // } catch (error) {
    //   console.log('Oops')  // Error details lost!
    // }
    // Bug 4: Wrong optional chaining
    // const name = user.?name  // Syntax error
    // TODO: Fix each bug
  })

  // ============================================
  // Bonus Challenge: Custom Error Class
  // ============================================
  exercise('Bonus Challenge - Custom Error Class', () => {
    // TODO: Create a custom ValidationError class that:
    // - Extends Error
    // - Takes a field name and message
    // - Sets name to 'ValidationError'
    // - Stores the field name
    // Test it (uncomment after completing)
    // try {
    //   throw new ValidationError('email', 'Invalid email format')
    // } catch (error) {
    //   console.log(error.name)      // 'ValidationError'
    //   console.log(error.field)     // 'email'
    //   console.log(error.message)   // 'Invalid email format'
    // }
  })

  // ============================================
  // Super Bonus: Error Boundary Pattern
  // ============================================
  exercise('Super Bonus - Error Boundary Pattern', () => {
    // TODO: Create a function withErrorBoundary that:
    // - Takes a function and an error handler
    // - Returns a new function that wraps the original
    // - Catches any errors and calls the error handler
    // - Returns undefined if error occurs
    // Test it (uncomment after completing)
    // function riskyFunction(x) {
    //   if (x < 0) throw new Error('Negative not allowed')
    //   return x * 2
    // }
    //
    // const safe = withErrorBoundary(
    //   riskyFunction,
    //   (error) => console.log('Caught:', error.message)
    // )
    //
    // console.log(safe(5))   // 10
    // console.log(safe(-5))  // Logs error, returns undefined
  })
})

// ============================================
// Helper Functions (defined at the bottom)
// ============================================

/**
 * Helper function to format lesson output and reduce repetition.
 */
function lesson(name, fn) {
  console.log(`=== ${name} Exercises ===\n`)
  measureTime(name, fn)
  console.log('')
  console.log('=== End of Exercises ===')
  console.log(`Great job practicing ${name}!`)
}

/**
 * Helper function to format exercise output and reduce repetition.
 * Now includes error handling!
 */
function exercise(name, fn) {
  if (!exercise.counter) exercise.counter = 0
  exercise.counter++
  console.log(`Exercise ${exercise.counter}: ${name}`)
  measureTime(name, () => {
    try {
      fn()
    } catch (error) {
      console.error(error)
    } finally {
      console.log('')
    }
  })
}

/**
 * Helper function to create high-precision timers
 */
function createTimer() {
  const start = performance.now()
  return () => performance.now() - start
}

/**
 * Helper function to format time in milliseconds to be human-readable
 */
function formatTime(ms) {
  if (ms < 0.001) return `${(ms * 1_000_000).toFixed(2)}ns`
  if (ms < 1) return `${(ms * 1000).toFixed(2)}μs`
  if (ms < 1000) return `${ms.toFixed(2)}ms`
  if (ms < 60000) return `${(ms / 1000).toFixed(2)}s`
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(2)
  return `${minutes}m ${seconds}s`
}

/**
 * Helper function to measure the execution time of a function
 */
function measureTime(label, fn, ...args) {
  const getElapsed = createTimer()
  const result = fn(...args)
  const elapsed = getElapsed()

  console.log(`⏱️  ${label}: ${formatTime(elapsed)}`)
  return result
}
