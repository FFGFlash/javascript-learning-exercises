// ============================================
// JavaScript Equality, Types, and Coercion Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

lesson('JavaScript Equality, Types, and Coercion', () => {
  // ============================================
  // Exercise 1: Identifying Primitive Types
  // ============================================
  exercise('Identifying Primitive Types', () => {
    // TODO: Use typeof to check the type of each value:
    // - 42
    // - 'hello'
    // - true
    // - undefined
    // - null (note the quirk!)
    // TODO: Log each result
  })

  // ============================================
  // Exercise 2: Identifying Reference Types
  // ============================================
  exercise('Identifying Reference Types', () => {
    // TODO: Use typeof to check the type of:
    // - {}
    // - []
    // - function() {}
    // - new Date()
    // TODO: Log each result and notice which are 'object'
  })

  // ============================================
  // Exercise 3: Primitive Value Comparison
  // ============================================
  exercise('Primitive Value Comparison', () => {
    const a = 5
    const b = 5
    const c = '5'

    // TODO: Compare a and b using ===

    // TODO: Compare a and c using ===

    // TODO: Compare a and c using ==

    // TODO: Log all three results
  })

  // ============================================
  // Exercise 4: Reference Type Comparison
  // ============================================
  exercise('Reference Type Comparison', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [1, 2, 3]
    const arr3 = arr1

    // TODO: Compare arr1 and arr2 using === - what do you get?

    // TODO: Compare arr1 and arr3 using === - what do you get?

    // TODO: Modify arr3[0] to 100, then log arr1 - what happened?
  })

  // ============================================
  // Exercise 5: Strict Equality (===)
  // ============================================
  exercise('Strict Equality (===)', () => {
    // TODO: Test these comparisons with === and log the results:
    // - 5 === 5
    // - 5 === '5'
    // - true === 1
    // - false === 0
    // - null === undefined
    // - '' === 0
  })

  // ============================================
  // Exercise 6: Loose Equality (==)
  // ============================================
  exercise('Loose Equality (==)', () => {
    // TODO: Test these comparisons with == and log the results:
    // - 5 == '5'
    // - true == 1
    // - false == 0
    // - null == undefined
    // - '' == 0
    // TODO: Compare the results with Exercise 5
  })

  // ============================================
  // Exercise 7: String Coercion
  // ============================================
  exercise('String Coercion', () => {
    // TODO: Calculate and log these expressions:
    // - 'hello ' + 5
    // - 'The answer is ' + 42
    // - '10' + '20'
    // - '10' + 20
    // TODO: What pattern do you notice?
  })

  // ============================================
  // Exercise 8: Numeric Coercion
  // ============================================
  exercise('Numeric Coercion', () => {
    // TODO: Calculate and log these expressions:
    // - '5' * 2
    // - '10' - 5
    // - '20' / 4
    // - '15' % 4
    // TODO: What happens with + vs other operators?
  })

  // ============================================
  // Exercise 9: Truthy and Falsy Values
  // ============================================
  exercise('Truthy and Falsy Values', () => {
    // TODO: Use Boolean() to convert these values and log the results:
    // - false
    // - 0
    // - ''
    // - null
    // - undefined
    // - NaN
    // - 1
    // - 'hello'
    // - []
    // - {}
    // TODO: Which ones are falsy?
  })

  // ============================================
  // Exercise 10: Truthy/Falsy in Conditionals
  // ============================================
  exercise('Truthy/Falsy in Conditionals', () => {
    const values = [0, '', null, undefined, 'hello', 42, [], {}]

    // TODO: Loop through the values array
    // For each value, use an if statement to check if it's truthy
    // Log whether each value is truthy or falsy
  })

  // ============================================
  // Exercise 11: Array Equality Edge Cases
  // ============================================
  exercise('Array Equality Edge Cases', () => {
    // TODO: Test these comparisons and log the results:
    // - [] == false
    // - [] == ''
    // - [] == 0
    // - [1] == 1
    // - [1, 2] == '1,2'
    // TODO: Why do these work the way they do?
  })

  // ============================================
  // Exercise 12: Object Equality
  // ============================================
  exercise('Object Equality', () => {
    const obj1 = { a: 1, b: 2 }
    const obj2 = { a: 1, b: 2 }
    const obj3 = obj1

    // TODO: Compare obj1 and obj2 using ===

    // TODO: Compare obj1 and obj3 using ===

    // TODO: Modify obj3.a to 100, then log obj1.a

    // TODO: What does this tell you about object references?
  })

  // ============================================
  // Exercise 13: typeof null Quirk
  // ============================================
  exercise('typeof null Quirk', () => {
    // TODO: Check typeof null
    // TODO: Write a function isNull that correctly checks if a value is null
    // Don't use typeof - use strict equality
    // Test your function (uncomment after completing)
    // console.log(isNull(null))        // true
    // console.log(isNull(undefined))   // false
    // console.log(isNull(0))           // false
  })

  // ============================================
  // Exercise 14: Explicit Number Conversion
  // ============================================
  exercise('Explicit Number Conversion', () => {
    // TODO: Use Number() to convert these and log the results:
    // - '42'
    // - '3.14'
    // - '10px'
    // - ''
    // - true
    // - false
    // - null
    // - undefined
    // TODO: Which conversions are surprising?
  })

  // ============================================
  // Exercise 15: Explicit String Conversion
  // ============================================
  exercise('Explicit String Conversion', () => {
    // TODO: Use String() to convert these and log the results:
    // - 42
    // - true
    // - false
    // - null
    // - undefined
    // - [1, 2, 3]
    // - { a: 1 }
  })

  // ============================================
  // Exercise 16: Explicit Boolean Conversion
  // ============================================
  exercise('Explicit Boolean Conversion', () => {
    // TODO: Use Boolean() to convert these and log the results:
    // - 0
    // - 1
    // - -1
    // - ''
    // - 'false'
    // - '0'
    // - []
    // - {}
    // TODO: Note which string values are truthy
  })

  // ============================================
  // Exercise 17: NaN Behavior
  // ============================================
  exercise('NaN Behavior', () => {
    // TODO: Create a NaN value (e.g., 0 / 0 or Number('hello'))
    // TODO: Test NaN === NaN - what do you get?
    // TODO: Use Number.isNaN() to check if the value is NaN
    // TODO: Use isNaN() (without Number.) - note the difference
    // TODO: Test isNaN('hello') vs Number.isNaN('hello')
  })

  // ============================================
  // Exercise 18: Floating Point Precision
  // ============================================
  exercise('Floating Point Precision', () => {
    // TODO: Calculate 0.1 + 0.2
    // TODO: Check if 0.1 + 0.2 === 0.3
    // TODO: Log the actual result to see the precision issue
    // TODO: Use toFixed(2) to round to 2 decimal places
  })

  // ============================================
  // Exercise 19: Safe Equality Checks
  // ============================================
  exercise('Safe Equality Checks', () => {
    // TODO: Create a function isEqual that safely compares two values
    // Use === for the comparison
    // Handle NaN as a special case (two NaN values should be considered equal)
    // Test your function (uncomment after completing)
    // console.log(isEqual(5, 5))           // true
    // console.log(isEqual(5, '5'))         // false
    // console.log(isEqual(NaN, NaN))       // true
    // console.log(isEqual(null, undefined))// false
  })

  // ============================================
  // Exercise 20: Type Checking Function
  // ============================================
  exercise('Type Checking Function', () => {
    // TODO: Create a function getType that returns the actual type of a value
    // Handle the null quirk correctly
    // Handle arrays differently from objects
    // Test your function (uncomment after completing)
    // console.log(getType(42))           // 'number'
    // console.log(getType('hello'))      // 'string'
    // console.log(getType(null))         // 'null'
    // console.log(getType([]))           // 'array'
    // console.log(getType({}))           // 'object'
  })

  // ============================================
  // Exercise 21: Practical Challenge - Input Validation
  // ============================================
  exercise('Practical Challenge - Input Validation', () => {
    // TODO: Create a function validateNumber that:
    // - Takes a value
    // - Returns true if it's a valid number (not NaN, not Infinity)
    // - Returns false otherwise
    // Test your function (uncomment after completing)
    // console.log(validateNumber(42))          // true
    // console.log(validateNumber('42'))        // false
    // console.log(validateNumber(NaN))         // false
    // console.log(validateNumber(Infinity))    // false
    // console.log(validateNumber(3.14))        // true
  })

  // ============================================
  // Exercise 22: Practical Challenge - Safe Parse
  // ============================================
  exercise('Practical Challenge - Safe Parse', () => {
    // TODO: Create a function safeParseInt that:
    // - Takes a string
    // - Returns the parsed integer if valid
    // - Returns null if parsing fails or result is NaN
    // Test your function (uncomment after completing)
    // console.log(safeParseInt('42'))      // 42
    // console.log(safeParseInt('3.14'))    // 3
    // console.log(safeParseInt('hello'))   // null
    // console.log(safeParseInt(''))        // null
  })

  // ============================================
  // Exercise 23: Practical Challenge - Deep Object Comparison
  // ============================================
  exercise('Practical Challenge - Deep Object Comparison', () => {
    // TODO: Create a function deepEqual that compares two objects
    // For this exercise, only handle objects with primitive values (no nesting)
    // Return true if they have the same keys and values
    // Test your function (uncomment after completing)
    // console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }))     // true
    // console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }))     // true
    // console.log(deepEqual({ a: 1 }, { a: 1, b: undefined }))   // false
    // console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }))     // false
  })

  // ============================================
  // Exercise 24: Practical Challenge - Type Coercion Quiz
  // ============================================
  exercise('Practical Challenge - Type Coercion Quiz', () => {
    // TODO: Before running, predict what these will return:
    // Then uncomment and check your predictions
    // console.log(true + true)
    // console.log(true + false)
    // console.log([] + [])
    // console.log([] + {})
    // console.log({} + [])
    // console.log('5' - 3)
    // console.log('5' + 3)
    // console.log(!![])
    // console.log(!!{})
    // console.log([] == ![])
    // TODO: Explain why each result is what it is
  })

  // ============================================
  // Exercise 25: Understanding Loose Equality Chain
  // ============================================
  exercise('Understanding Loose Equality Chain', () => {
    // TODO: Test this chain of comparisons:
    // '' == 0
    // 0 == false
    // false == ''
    // Does '' == 0 == false work? Why or why not?
    // TODO: Use strict equality for the same comparisons
    // How do the results differ?
  })

  // ============================================
  // Exercise 26: Practical Challenge - isEmpty
  // ============================================
  exercise('Practical Challenge - isEmpty', () => {
    // TODO: Create a function isEmpty that returns true if a value is:
    // - null
    // - undefined
    // - empty string
    // - empty array
    // - empty object
    // Test your function (uncomment after completing)
    // console.log(isEmpty(null))           // true
    // console.log(isEmpty(undefined))      // true
    // console.log(isEmpty(''))             // true
    // console.log(isEmpty([]))             // true
    // console.log(isEmpty({}))             // true
    // console.log(isEmpty('hello'))        // false
    // console.log(isEmpty([1]))            // false
    // console.log(isEmpty({ a: 1 }))       // false
  })

  // ============================================
  // Exercise 27: Fix the Bugs
  // ============================================
  exercise('Fix the Bugs', () => {
    // Bug 1: Using == instead of ===
    // function isZero(value) {
    //   return value == 0
    // }
    // console.log(isZero(''))    // Should be false, but returns true
    // Bug 2: Not handling NaN correctly
    // function addNumbers(a, b) {
    //   return a + b
    // }
    // console.log(addNumbers(5, 'hello'))  // Returns '5hello' instead of detecting error
    // Bug 3: Assuming array equality works
    // const expected = [1, 2, 3]
    // const actual = [1, 2, 3]
    // if (expected === actual) {
    //   console.log('Arrays match!')
    // }
    // This never logs - why?
    // Bug 4: typeof for arrays
    // function isArray(value) {
    //   return typeof value === 'array'
    // }
    // console.log(isArray([]))  // Returns false - fix this
  })

  // ============================================
  // Bonus Challenge: Smart Equality Function
  // ============================================
  exercise('Bonus Challenge - Smart Equality Function', () => {
    // TODO: Create a function smartEqual that:
    // - Uses === for primitives
    // - Handles NaN correctly (NaN equals NaN)
    // - Compares arrays by contents (same length and elements)
    // - Compares objects by contents (same keys and values)
    // Test your function (uncomment after completing)
    // console.log(smartEqual(5, 5))                        // true
    // console.log(smartEqual(5, '5'))                      // false
    // console.log(smartEqual(NaN, NaN))                    // true
    // console.log(smartEqual([1, 2], [1, 2]))              // true
    // console.log(smartEqual({ a: 1 }, { a: 1 }))          // true
    // console.log(smartEqual([1, 2], [2, 1]))              // false
  })

  // ============================================
  // Super Bonus: Type Guard Functions
  // ============================================
  exercise('Super Bonus - Type Guard Functions', () => {
    // TODO: Create these type guard functions:
    // - isString(value): true if value is a string
    // - isNumber(value): true if value is a number (not NaN)
    // - isBoolean(value): true if value is a boolean
    // - isArray(value): true if value is an array
    // - isObject(value): true if value is a plain object (not array, null, etc.)
    // - isNull(value): true if value is null
    // - isUndefined(value): true if value is undefined
    // Test your functions (uncomment after completing)
    // console.log(isString('hello'))       // true
    // console.log(isNumber(42))            // true
    // console.log(isNumber(NaN))           // false
    // console.log(isArray([]))             // true
    // console.log(isObject({}))            // true
    // console.log(isObject([]))            // false
    // console.log(isObject(null))          // false
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
 */
function exercise(name, fn) {
  if (!exercise.counter) exercise.counter = 0
  exercise.counter++
  console.log(`Exercise ${exercise.counter}: ${name}`)
  measureTime(name, fn)
  console.log('')
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
