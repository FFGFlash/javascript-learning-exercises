// ============================================
// JavaScript Arrays Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

lesson('JavaScript Arrays', () => {
  // ============================================
  // Exercise 1: Creating Arrays
  // ============================================
  exercise('Creating Arrays', () => {
    // TODO: Create an array called 'numbers' with values: 1, 2, 3, 4, 5
    // TODO: Create an array called 'colors' with: 'red', 'green', 'blue'
    // TODO: Create an array called 'mixed' with different types: a number, a string, a boolean
    // TODO: Log all three arrays
  })

  // ============================================
  // Exercise 2: Accessing Elements by Index
  // ============================================
  exercise('Accessing Elements by Index', () => {
    const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

    // TODO: Log the first fruit

    // TODO: Log the third fruit

    // TODO: Log the last fruit (use fruits.length - 1)

    // TODO: Try to access index 10 - what do you get?
  })

  // ============================================
  // Exercise 3: Array Length
  // ============================================
  exercise('Array Length', () => {
    const items = ['a', 'b', 'c', 'd', 'e']

    // TODO: Log the length of the array

    // TODO: Create an empty array and log its length

    // TODO: Create an array with one item and log its length
  })

  // ============================================
  // Exercise 4: Arrays Are Objects
  // ============================================
  exercise('Arrays Are Objects', () => {
    const arr = [1, 2, 3]

    // TODO: Use typeof to check the type of arr - what do you see?

    // TODO: Try accessing arr[0] and arr['0'] - are they the same?
  })

  // ============================================
  // Exercise 5: Array Mutability
  // ============================================
  exercise('Array Mutability', () => {
    const scores = [85, 90, 78, 92]

    // TODO: Change the second score (index 1) to 95

    // TODO: Change the last score to 100 (use length - 1)

    // TODO: Log the modified array
  })

  // ============================================
  // Exercise 6: push and pop
  // ============================================
  exercise('push and pop', () => {
    const stack = [1, 2, 3]

    // TODO: Use push to add 4 to the end, store the returned length

    // TODO: Use push to add 5 to the end

    // TODO: Log the array

    // TODO: Use pop to remove the last item, store the removed value

    // TODO: Log the popped value and the array
  })

  // ============================================
  // Exercise 7: shift and unshift
  // ============================================
  exercise('shift and unshift', () => {
    const queue = [2, 3, 4]

    // TODO: Use unshift to add 1 to the beginning

    // TODO: Use unshift to add 0 to the beginning

    // TODO: Log the array

    // TODO: Use shift to remove the first item, store the removed value

    // TODO: Log the shifted value and the array
  })

  // ============================================
  // Exercise 8: splice - Removing Items
  // ============================================
  exercise('splice - Removing Items', () => {
    const letters = ['a', 'b', 'c', 'd', 'e']

    // TODO: Use splice to remove 'c' (at index 2)
    // Store the returned array in 'removed'

    // TODO: Log both 'removed' and 'letters'
  })

  // ============================================
  // Exercise 9: splice - Inserting Items
  // ============================================
  exercise('splice - Inserting Items', () => {
    const numbers = [1, 2, 4, 5]

    // TODO: Use splice to insert 3 at index 2 (between 2 and 4)
    // Hint: splice(index, 0, item) inserts without removing

    // TODO: Log the array
  })

  // ============================================
  // Exercise 10: slice - Creating Copies
  // ============================================
  exercise('slice - Creating Copies', () => {
    const original = [1, 2, 3, 4, 5, 6]

    // TODO: Use slice to create a copy of elements from index 1 to 4 (not including 4)
    // Store in 'subset'

    // TODO: Use slice with no arguments to create a full copy
    // Store in 'fullCopy'

    // TODO: Modify fullCopy[0] to 100

    // TODO: Log original and fullCopy - are they different?
  })

  // ============================================
  // Exercise 11: Array Destructuring - Basic
  // ============================================
  exercise('Array Destructuring - Basic', () => {
    const coordinates = [10, 20, 30]

    // TODO: Use destructuring to extract the values into x, y, and z

    // TODO: Log x, y, and z
  })

  // ============================================
  // Exercise 12: Array Destructuring - Skipping Elements
  // ============================================
  exercise('Array Destructuring - Skipping Elements', () => {
    const data = ['first', 'second', 'third', 'fourth']

    // TODO: Use destructuring to get only the first and third elements
    // (skip the second by leaving an empty position)

    // TODO: Log the extracted values
  })

  // ============================================
  // Exercise 13: Rest Elements in Destructuring
  // ============================================
  exercise('Rest Elements in Destructuring', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]

    // TODO: Use destructuring with rest to get the first element and collect the rest

    // TODO: Log the first element and the rest array

    // TODO: Use destructuring to get the first two elements and the rest

    // TODO: Log all three values
  })

  // ============================================
  // Exercise 14: Spread Operator - Copying Arrays
  // ============================================
  exercise('Spread Operator - Copying Arrays', () => {
    const original = [1, 2, 3, 4]

    // TODO: Use spread operator to create a copy

    // TODO: Modify the first element of the copy to 100

    // TODO: Log both original and copy - verify they're different
  })

  // ============================================
  // Exercise 15: Spread Operator - Combining Arrays
  // ============================================
  exercise('Spread Operator - Combining Arrays', () => {
    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]

    // TODO: Use spread to combine arr1 and arr2 into 'combined'

    // TODO: Create a new array with 0 at start, then arr1, then arr2, then 7
    // Result should be: [0, 1, 2, 3, 4, 5, 6, 7]

    // TODO: Log both arrays
  })

  // ============================================
  // Exercise 16: Spread in Function Calls
  // ============================================
  exercise('Spread in Function Calls', () => {
    const numbers = [5, 12, 8, 3, 20]

    // TODO: Use Math.max with spread to find the maximum value
    // Hint: Math.max(...numbers)

    // TODO: Use Math.min with spread to find the minimum value

    // TODO: Log both results
  })

  // ============================================
  // Exercise 17: Iterating with for Loop
  // ============================================
  exercise('Iterating with for Loop', () => {
    const values = [10, 20, 30, 40, 50]

    // TODO: Use a for loop to log each value

    // TODO: Use a for loop to log each value doubled
  })

  // ============================================
  // Exercise 18: Iterating with for...of
  // ============================================
  exercise('Iterating with for...of', () => {
    const words = ['hello', 'world', 'javascript']

    // TODO: Use for...of to log each word

    // TODO: Use for...of to log each word in uppercase
  })

  // ============================================
  // Exercise 19: Nested Arrays
  // ============================================
  exercise('Nested Arrays', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    // TODO: Log the entire matrix

    // TODO: Log the first row

    // TODO: Log the middle element (5)

    // TODO: Use nested loops to log all elements
  })

  // ============================================
  // Exercise 20: Arrays of Objects
  // ============================================
  exercise('Arrays of Objects', () => {
    // TODO: Create an array 'students' with 3 student objects
    // Each should have: name, age, and grade properties
    // TODO: Log the name of the second student
    // TODO: Use a loop to log each student's name
  })

  // ============================================
  // Exercise 21: Practical Challenge - Sum Array
  // ============================================
  exercise('Practical Challenge - Sum Array', () => {
    const numbers = [5, 10, 15, 20, 25]

    // TODO: Calculate the sum of all numbers
    // Store the result in 'sum'

    // TODO: Log the sum
  })

  // ============================================
  // Exercise 22: Practical Challenge - Find Maximum
  // ============================================
  exercise('Practical Challenge - Find Maximum', () => {
    const values = [45, 23, 67, 12, 89, 34, 56]

    // TODO: Find the maximum value without using Math.max
    // Use a loop and comparison logic
    // Store in 'max'

    // TODO: Log the maximum value
  })

  // ============================================
  // Exercise 23: Practical Challenge - Find Minimum
  // ============================================
  exercise('Practical Challenge - Find Minimum', () => {
    const prices = [19.99, 4.95, 25.5, 3.75, 15.0]

    // TODO: Find the minimum value without using Math.min
    // Store in 'min'

    // TODO: Log the minimum value
  })

  // ============================================
  // Exercise 24: Practical Challenge - Count Occurrences
  // ============================================
  exercise('Practical Challenge - Count Occurrences', () => {
    const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

    // TODO: Count how many times 'apple' appears
    // Store the count in a variable

    // TODO: Log the count
  })

  // ============================================
  // Exercise 25: Practical Challenge - Reverse Array
  // ============================================
  exercise('Practical Challenge - Reverse Array', () => {
    const numbers = [1, 2, 3, 4, 5]

    // TODO: Create a new array with elements in reverse order
    // Do NOT use the built-in .reverse() method
    // Store in 'reversed'

    // TODO: Log both arrays
  })

  // ============================================
  // Exercise 26: Practical Challenge - Remove Element
  // ============================================
  exercise('Practical Challenge - Remove Element', () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple']

    // TODO: Remove 'blue' from the array using splice
    // Hint: You need to find its index first

    // TODO: Log the modified array
  })

  // ============================================
  // Exercise 27: Practical Challenge - Insert Element
  // ============================================
  exercise('Practical Challenge - Insert Element', () => {
    const sequence = [1, 2, 4, 5]

    // TODO: Insert 3 between 2 and 4 using splice

    // TODO: Log the array
  })

  // ============================================
  // Exercise 28: Practical Challenge - Filter Even Numbers
  // ============================================
  exercise('Practical Challenge - Filter Even Numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    // TODO: Create a new array containing only even numbers
    // Use a loop and the modulus operator
    // Store in 'evens'

    // TODO: Log the evens array
  })

  // ============================================
  // Exercise 29: Practical Challenge - Shopping Cart
  // ============================================
  exercise('Practical Challenge - Shopping Cart', () => {
    // TODO: Create an array 'cart' with item objects
    // Each item should have: name, price, quantity
    // TODO: Add at least 3 items to the cart
    // TODO: Calculate the total cost (price * quantity for each item)
    // TODO: Log the total
  })

  // ============================================
  // Exercise 30: Practical Challenge - Grade Statistics
  // ============================================
  exercise('Practical Challenge - Grade Statistics', () => {
    const grades = [85, 90, 78, 92, 88, 76, 95, 89]

    // TODO: Calculate the average grade

    // TODO: Count how many grades are above 85

    // TODO: Find the highest and lowest grades

    // TODO: Log all results
  })

  // ============================================
  // Exercise 31: Understanding Shallow Copies
  // ============================================
  exercise('Understanding Shallow Copies', () => {
    const original = [{ name: 'Alice' }, { name: 'Bob' }]

    // TODO: Create a shallow copy using spread operator

    // TODO: Modify copy[0].name to 'Charlie'

    // TODO: Log both original[0].name and copy[0].name
    // What do you notice? Why are both changed?
  })

  // ============================================
  // Exercise 32: Fix the Bugs
  // ============================================
  exercise('Fix the Bugs', () => {
    // Bug 1: Off-by-one error
    // const arr = [1, 2, 3, 4, 5]
    // console.log(arr[arr.length]) // Should log 5
    // Bug 2: Wrong method for removing last item
    // const items = ['a', 'b', 'c']
    // items.shift() // Trying to remove last item
    // console.log(items)
    // Bug 3: Mutating during iteration
    // const numbers = [1, 2, 3]
    // for (let i = 0; i < numbers.length; i++) {
    //   numbers.push(i) // Creates infinite loop
    // }
  })

  // ============================================
  // Bonus Challenge: Remove Duplicates
  // ============================================
  exercise('Bonus Challenge - Remove Duplicates', () => {
    const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 1, 2, 6]

    // TODO: Create a new array with duplicates removed
    // Hint: For each number, check if it's already in the result array
    // Only add it if it's not there yet

    // TODO: Log the result
  })

  // ============================================
  // Super Bonus: Flatten Array
  // ============================================
  exercise('Super Bonus - Flatten Array', () => {
    const nested = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]

    // TODO: Create a flattened array: [1, 2, 3, 4, 5, 6]
    // Use spread operator or loops

    // TODO: Log the flattened array
  })

  // ============================================
  // Ultra Bonus: Chunk Array
  // ============================================
  exercise('Ultra Bonus - Chunk Array', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const chunkSize = 3

    // TODO: Split the array into chunks of size 3
    // Result: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
    // Hint: Use a loop with slice

    // TODO: Log the chunked array
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
  fn()
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
  fn()
  console.log('')
}
