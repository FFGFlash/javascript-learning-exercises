// ============================================
// JavaScript Built-in Objects and Utilities Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

lesson('JavaScript Built-in Objects and Utilities', () => {
  // ============================================
  // Exercise 1: Array.map - Basic Transformation
  // ============================================
  exercise('Array.map - Basic Transformation', () => {
    const numbers = [1, 2, 3, 4, 5]

    // TODO: Use map to create a new array with each number doubled

    // TODO: Use map to create a new array with each number squared

    // TODO: Log both results and the original array to verify it wasn't modified
  })

  // ============================================
  // Exercise 2: Array.map - Transforming Objects
  // ============================================
  exercise('Array.map - Transforming Objects', () => {
    const users = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 35 },
    ]

    // TODO: Use map to create an array of just the names

    // TODO: Use map to create an array of user info strings like "Alice (25)"

    // TODO: Log the results
  })

  // ============================================
  // Exercise 3: Array.filter - Basic Filtering
  // ============================================
  exercise('Array.filter - Basic Filtering', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // TODO: Use filter to create an array of only even numbers

    // TODO: Use filter to create an array of numbers greater than 5

    // TODO: Log both results
  })

  // ============================================
  // Exercise 4: Array.filter - Filtering Objects
  // ============================================
  exercise('Array.filter - Filtering Objects', () => {
    const products = [
      { name: 'Laptop', price: 999, inStock: true },
      { name: 'Phone', price: 699, inStock: false },
      { name: 'Tablet', price: 499, inStock: true },
      { name: 'Monitor', price: 299, inStock: true },
    ]

    // TODO: Use filter to get only products that are in stock

    // TODO: Use filter to get only products under $500

    // TODO: Log both results
  })

  // ============================================
  // Exercise 5: Array.reduce - Sum and Product
  // ============================================
  exercise('Array.reduce - Sum and Product', () => {
    const numbers = [1, 2, 3, 4, 5]

    // TODO: Use reduce to calculate the sum of all numbers (start with 0)

    // TODO: Use reduce to calculate the product of all numbers (start with 1)

    // TODO: Log both results
  })

  // ============================================
  // Exercise 6: Array.reduce - Building Objects
  // ============================================
  exercise('Array.reduce - Building Objects', () => {
    const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

    // TODO: Use reduce to count occurrences of each item
    // Result should be: { apple: 3, banana: 2, orange: 1 }
    // Hint: Start with an empty object {}

    // TODO: Log the result
  })

  // ============================================
  // Exercise 7: Chaining Array Methods
  // ============================================
  exercise('Chaining Array Methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // TODO: Use filter to get even numbers, then map to square them
    // Chain the methods: numbers.filter(...).map(...)

    // TODO: Use filter to get numbers > 5, map to double them, then reduce to sum

    // TODO: Log both results
  })

  // ============================================
  // Exercise 8: Declarative vs Imperative
  // ============================================
  exercise('Declarative vs Imperative', () => {
    const numbers = [1, 2, 3, 4, 5]

    // TODO: Write imperative code (with a for loop) to double each number
    // Store in 'imperativeResult'

    // TODO: Write declarative code (with map) to double each number
    // Store in 'declarativeResult'

    // TODO: Log both results - they should be the same
  })

  // ============================================
  // Exercise 9: Object.keys, Object.values, Object.entries
  // ============================================
  exercise('Object.keys, Object.values, Object.entries', () => {
    const user = {
      name: 'Alice',
      age: 30,
      email: 'alice@example.com',
      city: 'New York',
    }

    // TODO: Use Object.keys to get an array of property names

    // TODO: Use Object.values to get an array of values

    // TODO: Use Object.entries to get an array of [key, value] pairs

    // TODO: Log all three results
  })

  // ============================================
  // Exercise 10: Object.fromEntries
  // ============================================
  exercise('Object.fromEntries', () => {
    const entries = [
      ['name', 'Bob'],
      ['age', 25],
      ['city', 'Boston'],
    ]

    // TODO: Use Object.fromEntries to create an object from the entries

    // TODO: Log the result
  })

  // ============================================
  // Exercise 11: Transforming Objects with Object Methods
  // ============================================
  exercise('Transforming Objects with Object Methods', () => {
    const prices = {
      apple: 1.5,
      banana: 0.75,
      orange: 2.0,
    }

    // TODO: Use Object.entries and map to create a new object with prices doubled
    // Hint: Use Object.fromEntries at the end

    // TODO: Use Object.entries and filter to keep only items under $1.50
    // Then convert back to an object

    // TODO: Log both results
  })

  // ============================================
  // Exercise 12: Creating and Using Maps
  // ============================================
  exercise('Creating and Using Maps', () => {
    // TODO: Create a new Map
    // TODO: Use set to add three key-value pairs
    // Include at least one non-string key (like a number or object)
    // TODO: Use get to retrieve a value
    // TODO: Use has to check if a key exists
    // TODO: Log the results
  })

  // ============================================
  // Exercise 13: Iterating Over Maps
  // ============================================
  exercise('Iterating Over Maps', () => {
    const map = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ])

    // TODO: Use a for...of loop to iterate over the map
    // Destructure the key and value

    // TODO: Log each key-value pair
  })

  // ============================================
  // Exercise 14: Maps vs Objects
  // ============================================
  exercise('Maps vs Objects', () => {
    // TODO: Create an object with string keys
    // TODO: Create a Map with the same data
    // TODO: Try using a number as a key in the object - what happens?
    // TODO: Use a number as a key in the Map - does it work?
    // TODO: Log the size of the Map using .size
    // TODO: Log the "size" of the object (use Object.keys().length)
  })

  // ============================================
  // Exercise 15: Creating and Using Sets
  // ============================================
  exercise('Creating and Using Sets', () => {
    // TODO: Create a new Set with some duplicate values
    // TODO: Log the Set - notice duplicates are removed
    // TODO: Use add to add a new value
    // TODO: Use has to check if a value exists
    // TODO: Use delete to remove a value
    // TODO: Log the Set after modifications
  })

  // ============================================
  // Exercise 16: Removing Duplicates with Set
  // ============================================
  exercise('Removing Duplicates with Set', () => {
    const numbers = [1, 2, 2, 3, 4, 4, 5, 1, 3, 6]

    // TODO: Use Set and spread operator to create an array with unique values

    // TODO: Log the result
  })

  // ============================================
  // Exercise 17: Set Operations
  // ============================================
  exercise('Set Operations', () => {
    const set1 = new Set([1, 2, 3, 4])
    const set2 = new Set([3, 4, 5, 6])

    // TODO: Create a union (all values from both sets)
    // Hint: new Set([...set1, ...set2])

    // TODO: Create an intersection (only values in both sets)
    // Hint: Use filter on array from set1

    // TODO: Log both results
  })

  // ============================================
  // Exercise 18: Choosing the Right Data Structure
  // ============================================
  exercise('Choosing the Right Data Structure', () => {
    // TODO: Create an Array for a todo list (ordered items)
    // TODO: Create an Object for user profile data (named properties)
    // TODO: Create a Map for tracking user login counts (user IDs as keys)
    // TODO: Create a Set for tracking unique visitor IPs
    // TODO: Log all four structures
  })

  // ============================================
  // Exercise 19: Math Utilities
  // ============================================
  exercise('Math Utilities', () => {
    const numbers = [3.7, 8.2, 5.9, 2.1, 9.8]

    // TODO: Use Math.max with spread to find the maximum

    // TODO: Use Math.min with spread to find the minimum

    // TODO: Use map with Math.floor to round all numbers down

    // TODO: Use map with Math.ceil to round all numbers up

    // TODO: Log all results
  })

  // ============================================
  // Exercise 20: Random Numbers
  // ============================================
  exercise('Random Numbers', () => {
    // TODO: Generate a random number between 0 and 1
    // TODO: Generate a random integer between 1 and 10
    // Hint: Math.floor(Math.random() * 10) + 1
    // TODO: Generate a random integer between 50 and 100
    // TODO: Log all results (run multiple times to see different values)
  })

  // ============================================
  // Exercise 21: Working with Dates
  // ============================================
  exercise('Working with Dates', () => {
    const now = new Date()

    // TODO: Log the current year using getFullYear()

    // TODO: Log the current month (remember it's 0-based)

    // TODO: Log the current day of the month

    // TODO: Log the current day of the week (0 = Sunday)

    // TODO: Create a Date object for January 1, 2000
  })

  // ============================================
  // Exercise 22: Date Calculations
  // ============================================
  exercise('Date Calculations', () => {
    const birthday = new Date('1990-05-15')
    const now = new Date()

    // TODO: Calculate age in years
    // Hint: Subtract years and adjust if birthday hasn't occurred this year

    // TODO: Calculate days since birthday
    // Hint: Use getTime() to get milliseconds, then convert to days

    // TODO: Log both results
  })

  // ============================================
  // Exercise 23: JSON.stringify
  // ============================================
  exercise('JSON.stringify', () => {
    const user = {
      name: 'Alice',
      age: 30,
      hobbies: ['reading', 'coding'],
      address: {
        city: 'New York',
        zip: '10001',
      },
    }

    // TODO: Convert the user object to a JSON string

    // TODO: Log the JSON string

    // TODO: Try to stringify a function - what happens?
    // const obj = { fn: () => {} }
  })

  // ============================================
  // Exercise 24: JSON.parse
  // ============================================
  exercise('JSON.parse', () => {
    const jsonString = '{"name":"Bob","age":25,"city":"Boston"}'

    // TODO: Parse the JSON string into an object

    // TODO: Log the parsed object

    // TODO: Access and log the name property
  })

  // ============================================
  // Exercise 25: JSON Round Trip
  // ============================================
  exercise('JSON Round Trip', () => {
    const original = {
      items: ['a', 'b', 'c'],
      count: 3,
      active: true,
    }

    // TODO: Convert to JSON string

    // TODO: Parse back to object

    // TODO: Verify the parsed object matches the original (log both)
  })

  // ============================================
  // Exercise 26: String Methods
  // ============================================
  exercise('String Methods', () => {
    const text = 'Hello, World!'

    // TODO: Convert to uppercase

    // TODO: Convert to lowercase

    // TODO: Check if it includes 'World'

    // TODO: Get a slice from index 7 to 12

    // TODO: Replace 'World' with 'JavaScript'

    // TODO: Log all results
  })

  // ============================================
  // Exercise 27: Number Methods
  // ============================================
  exercise('Number Methods', () => {
    const num = 3.14159

    // TODO: Use toFixed to round to 2 decimal places

    // TODO: Check if 42 is an integer using Number.isInteger

    // TODO: Check if NaN is NaN using Number.isNaN

    // TODO: Log all results
  })

  // ============================================
  // Exercise 28: Practical Challenge - Data Processing Pipeline
  // ============================================
  exercise('Practical Challenge - Data Processing Pipeline', () => {
    const orders = [
      { id: 1, product: 'Laptop', price: 999, quantity: 1 },
      { id: 2, product: 'Mouse', price: 25, quantity: 2 },
      { id: 3, product: 'Keyboard', price: 75, quantity: 1 },
      { id: 4, product: 'Monitor', price: 300, quantity: 2 },
    ]

    // TODO: Filter orders with total (price * quantity) > 100

    // TODO: Map to get just product names

    // TODO: Get total revenue using reduce

    // TODO: Log all results
  })

  // ============================================
  // Exercise 29: Practical Challenge - User Statistics
  // ============================================
  exercise('Practical Challenge - User Statistics', () => {
    const users = [
      { name: 'Alice', age: 25, active: true },
      { name: 'Bob', age: 30, active: false },
      { name: 'Charlie', age: 35, active: true },
      { name: 'David', age: 28, active: true },
    ]

    // TODO: Count active users

    // TODO: Calculate average age of active users

    // TODO: Get array of names of active users

    // TODO: Log all results
  })

  // ============================================
  // Exercise 30: Practical Challenge - Data Transformation
  // ============================================
  exercise('Practical Challenge - Data Transformation', () => {
    const data = [
      ['name', 'Alice'],
      ['age', 30],
      ['city', 'NYC'],
    ]

    // TODO: Convert the array to an object using Object.fromEntries

    // TODO: Add a new property 'country' with value 'USA'

    // TODO: Convert back to entries format

    // TODO: Log all steps
  })

  // ============================================
  // Exercise 31: Practical Challenge - Deduplication
  // ============================================
  exercise('Practical Challenge - Deduplication', () => {
    const emails = [
      'alice@test.com',
      'bob@test.com',
      'alice@test.com',
      'charlie@test.com',
      'bob@test.com',
    ]

    // TODO: Remove duplicates using Set

    // TODO: Sort the unique emails alphabetically
    // Hint: Arrays have a .sort() method

    // TODO: Log the result
  })

  // ============================================
  // Exercise 32: Practical Challenge - Grouping Data
  // ============================================
  exercise('Practical Challenge - Grouping Data', () => {
    const students = [
      { name: 'Alice', grade: 'A' },
      { name: 'Bob', grade: 'B' },
      { name: 'Charlie', grade: 'A' },
      { name: 'David', grade: 'C' },
      { name: 'Eve', grade: 'B' },
    ]

    // TODO: Use reduce to group students by grade
    // Result should be: { A: ['Alice', 'Charlie'], B: ['Bob', 'Eve'], C: ['David'] }

    // TODO: Log the result
  })

  // ============================================
  // Exercise 33: Fix the Bugs
  // ============================================
  exercise('Fix the Bugs', () => {
    // Bug 1: Map doesn't modify original array
    // const numbers = [1, 2, 3]
    // numbers.map(n => n * 2)
    // console.log(numbers) // Expected [2, 4, 6]
    // Bug 2: Reduce without initial value
    // const numbers = []
    // const sum = numbers.reduce((a, b) => a + b)
    // console.log(sum) // Causes error
    // Bug 3: Wrong use of Object.entries
    // const user = { name: 'Alice', age: 30 }
    // for (const entry of Object.entries(user)) {
    //   console.log(entry.key, entry.value) // Doesn't work
    // }
  })

  // ============================================
  // Bonus Challenge: Custom Map Implementation
  // ============================================
  exercise('Bonus Challenge - Custom Map Implementation', () => {
    // TODO: Create a function 'myMap' that mimics Array.map
    // It should take an array and a callback function
    // Return a new array with transformed values
    // Test your implementation (uncomment after completing)
    // const doubled = myMap([1, 2, 3], n => n * 2)
    // console.log(doubled) // [2, 4, 6]
  })

  // ============================================
  // Super Bonus: Custom Filter Implementation
  // ============================================
  exercise('Super Bonus - Custom Filter Implementation', () => {
    // TODO: Create a function 'myFilter' that mimics Array.filter
    // It should take an array and a predicate function
    // Return a new array with only values that pass the test
    // Test your implementation (uncomment after completing)
    // const evens = myFilter([1, 2, 3, 4, 5], n => n % 2 === 0)
    // console.log(evens) // [2, 4]
  })

  // ============================================
  // Ultra Bonus: Custom Reduce Implementation
  // ============================================
  exercise('Ultra Bonus - Custom Reduce Implementation', () => {
    // TODO: Create a function 'myReduce' that mimics Array.reduce
    // It should take an array, a reducer function, and an initial value
    // Return the accumulated result
    // Test your implementation (uncomment after completing)
    // const sum = myReduce([1, 2, 3, 4], (acc, n) => acc + n, 0)
    // console.log(sum) // 10
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
export function measureTime(label, fn, ...args) {
  const getElapsed = createTimer()
  const result = fn(...args)
  const elapsed = getElapsed()

  console.log('')
  console.log(`⏱️  ${label}: ${formatTime(elapsed)}`)
  return result
}
