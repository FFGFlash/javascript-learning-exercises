// ============================================
// JavaScript Arrays Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

console.log('=== JavaScript Arrays Exercises ===\n')

// ============================================
// Exercise 1: Creating Arrays
// ============================================
exercise('Creating Arrays', () => {
  // TODO: Create an array called 'fruits' with: 'apple', 'banana', 'orange'
  // TODO: Create an array called 'numbers' with: 10, 20, 30, 40, 50
  // TODO: Create an array called 'mixed' with different types: a number, a string, a boolean
  // TODO: Log all three arrays
})

// ============================================
// Exercise 2: Accessing Array Elements
// ============================================
exercise('Accessing Array Elements', () => {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple']

  // TODO: Log the first element

  // TODO: Log the third element

  // TODO: Log the last element (use colors.length)

  // TODO: Try to access index 10 - what happens?
})

// ============================================
// Exercise 3: Array Length
// ============================================
exercise('Array Length', () => {
  const animals = ['dog', 'cat', 'bird', 'fish']

  // TODO: Log the length of the array

  // TODO: Log the last element using length - 1

  // TODO: Create an empty array and log its length
})

// ============================================
// Exercise 4: Modifying Array Elements
// ============================================
exercise('Modifying Array Elements', () => {
  const scores = [85, 90, 78, 92, 88]

  // TODO: Change the first score to 95

  // TODO: Change the last score to 100 (use length - 1)

  // TODO: Log the modified array
})

// ============================================
// Exercise 5: push and pop
// ============================================
exercise('push and pop', () => {
  const stack = [1, 2, 3]

  // TODO: Use push to add 4 to the end

  // TODO: Use push to add 5 to the end

  // TODO: Log the array

  // TODO: Use pop to remove the last element and store it in a variable

  // TODO: Log the popped value and the array
})

// ============================================
// Exercise 6: unshift and shift
// ============================================
exercise('unshift and shift', () => {
  const queue = [2, 3, 4]

  // TODO: Use unshift to add 1 to the beginning

  // TODO: Use unshift to add 0 to the beginning

  // TODO: Log the array

  // TODO: Use shift to remove the first element and store it in a variable

  // TODO: Log the shifted value and the array
})

// ============================================
// Exercise 7: Iterating with for Loop
// ============================================
exercise('Iterating with for Loop', () => {
  const numbers = [10, 20, 30, 40, 50]

  // TODO: Use a for loop to log each number in the array

  // TODO: Use a for loop to log each number doubled
})

// ============================================
// Exercise 8: Iterating with for...of
// ============================================
exercise('Iterating with for...of', () => {
  const fruits = ['apple', 'banana', 'cherry', 'date']

  // TODO: Use for...of to log each fruit

  // TODO: Use for...of to log each fruit in uppercase (use .toUpperCase())
})

// ============================================
// Exercise 9: Arrays of Objects
// ============================================
exercise('Arrays of Objects', () => {
  // TODO: Create an array 'students' with 3 objects, each having name and grade properties
  // TODO: Log the name of the first student
  // TODO: Log the grade of the second student
  // TODO: Use a for...of loop to log each student's name
})

// ============================================
// Exercise 10: Array Destructuring - Basic
// ============================================
exercise('Array Destructuring - Basic', () => {
  const coordinates = [10, 20, 30]

  // TODO: Use destructuring to extract the first value into 'x' and second into 'y'

  // TODO: Log x and y
})

// ============================================
// Exercise 11: Array Destructuring - Skipping Elements
// ============================================
exercise('Array Destructuring - Skipping Elements', () => {
  const data = ['first', 'second', 'third', 'fourth']

  // TODO: Use destructuring to get the first and third elements (skip the second)

  // TODO: Log the extracted values
})

// ============================================
// Exercise 12: Rest Elements
// ============================================
exercise('Rest Elements', () => {
  const numbers = [1, 2, 3, 4, 5, 6]

  // TODO: Use destructuring with rest to get the first element and the rest

  // TODO: Log the first element and the rest array

  // TODO: Use destructuring to get the first two elements and the rest

  // TODO: Log all three values
})

// ============================================
// Exercise 13: Spread Operator - Copying
// ============================================
exercise('Spread Operator - Copying', () => {
  const original = [1, 2, 3, 4]

  // TODO: Use spread operator to create a copy

  // TODO: Modify the first element of the copy to 100

  // TODO: Log both original and copy - are they different?
})

// ============================================
// Exercise 14: Spread Operator - Combining Arrays
// ============================================
exercise('Spread Operator - Combining Arrays', () => {
  const first = [1, 2, 3]
  const second = [4, 5, 6]

  // TODO: Use spread operator to combine both arrays into 'combined'

  // TODO: Log the combined array

  // TODO: Create a new array with 0 at the start, then first, then second, then 7
  // Example result: [0, 1, 2, 3, 4, 5, 6, 7]
})

// ============================================
// Exercise 15: Arrays Are Objects
// ============================================
exercise('Arrays Are Objects', () => {
  const arr = [1, 2, 3]

  // TODO: Log typeof arr - what do you see?

  // TODO: Create a function that modifies the array (changes arr[0] to 100)

  // TODO: Call the function and then log arr - the original is modified!
})

// ============================================
// Exercise 16: Practical Challenge - Sum Array
// ============================================
exercise('Practical Challenge - Sum Array', () => {
  const numbers = [5, 10, 15, 20, 25]

  // TODO: Write code to calculate the sum of all numbers in the array
  // Store the result in a variable called 'sum'

  // TODO: Log the sum
})

// ============================================
// Exercise 17: Practical Challenge - Find Maximum
// ============================================
exercise('Practical Challenge - Find Maximum', () => {
  const values = [45, 23, 67, 89, 12, 56]

  // TODO: Write code to find the maximum value in the array
  // Store it in a variable called 'max'
  // Hint: Start with the first value and compare with each element

  // TODO: Log the maximum value
})

// ============================================
// Exercise 18: Practical Challenge - Count Occurrences
// ============================================
exercise('Practical Challenge - Count Occurrences', () => {
  const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

  // TODO: Count how many times 'apple' appears in the array
  // Store the count in a variable

  // TODO: Log the count
})

// ============================================
// Exercise 19: Practical Challenge - Reverse Array
// ============================================
exercise('Practical Challenge - Reverse Array', () => {
  const numbers = [1, 2, 3, 4, 5]

  // TODO: Create a new array that contains all elements in reverse order
  // Do NOT use the built-in .reverse() method - use a loop
  // Store the result in 'reversed'

  // TODO: Log both the original and reversed arrays
})

// ============================================
// Exercise 20: Practical Challenge - Filter Even Numbers
// ============================================
exercise('Practical Challenge - Filter Even Numbers', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // TODO: Create a new array containing only the even numbers
  // Use a loop and the modulus operator (%)
  // Store the result in 'evenNumbers'

  // TODO: Log the even numbers array
})

// ============================================
// Exercise 21: Practical Challenge - Shopping List
// ============================================
exercise('Practical Challenge - Shopping List', () => {
  // TODO: Create a shopping list array with at least 3 items
  // TODO: Add 2 more items using push
  // TODO: Remove the first item using shift
  // TODO: Log the current shopping list
  // TODO: Log how many items are in the list
})

// ============================================
// Exercise 22: Practical Challenge - Grade Average
// ============================================
exercise('Practical Challenge - Grade Average', () => {
  const grades = [85, 90, 78, 92, 88, 95]

  // TODO: Calculate the average grade
  // Hint: sum all grades and divide by length

  // TODO: Log the average

  // TODO: Count how many grades are above the average
})

// ============================================
// Exercise 23: Practical Challenge - Todo List
// ============================================
exercise('Practical Challenge - Todo List', () => {
  // TODO: Create an array of todo objects, each with:
  // - text: the todo description
  // - completed: boolean
  // TODO: Add at least 3 todos
  // TODO: Loop through and log only the todos that are NOT completed
  // TODO: Count how many todos are completed
})

// ============================================
// Exercise 24: Fix the Bugs
// ============================================
exercise('Fix the Bugs', () => {
  // Bug 1: Off-by-one error accessing last element
  // const arr = [1, 2, 3, 4, 5]
  // console.log(arr[arr.length]) // Should log the last element (5)
  // Bug 2: Modifying array during iteration incorrectly
  // const numbers = [1, 2, 3, 4, 5]
  // for (let i = 0; i < numbers.length; i++) {
  //   numbers.push(i) // This creates an infinite loop!
  // }
  // Bug 3: Trying to use array method on non-array
  // const notAnArray = 'hello'
  // notAnArray.push('world') // This will cause an error
})

// ============================================
// Bonus Challenge: Remove Duplicates
// ============================================
exercise('Bonus Challenge - Remove Duplicates', () => {
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5, 1, 2]

  // TODO: Create a new array with duplicates removed
  // Hint: For each number, check if it's already in the result array
  // Only add it if it's not already there

  // TODO: Log the result
})

// ============================================
// Super Bonus: Flatten Nested Array
// ============================================
exercise('Super Bonus - Flatten Nested Array', () => {
  const nested = [
    [1, 2],
    [3, 4],
    [5, 6],
  ]

  // TODO: Create a new array with all values flattened into a single array
  // Result should be: [1, 2, 3, 4, 5, 6]
  // Hint: Use nested loops or spread operator

  // TODO: Log the flattened array
})

// ============================================
// Ultra Bonus: Chunk Array
// ============================================
exercise('Ultra Bonus - Chunk Array', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const chunkSize = 3

  // TODO: Split the array into chunks of size 3
  // Result should be: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
  // Hint: Use a loop and slice or push elements into sub-arrays

  // TODO: Log the chunked array
})

console.log('=== End of Exercises ===')
console.log('Great job practicing arrays!')

// ============================================
// Helper Function (defined at the bottom)
// ============================================

/**
 * Helper function to format exercise output and reduce repetition.
 */
function exercise(name, fn) {
  if (!exercise.counter) exercise.counter = 0
  exercise.counter++

  console.log(`Exercise ${exercise.counter}: ${name}`)
  try {
    fn()
  } catch (e) {
    console.error(e)
  }
  console.log('')
}
