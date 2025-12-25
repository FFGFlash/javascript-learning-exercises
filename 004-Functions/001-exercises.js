// ============================================
// JavaScript Basic Syntax and Types Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

console.log('=== JavaScript Basics Exercises ===\n')

// ============================================
// Exercise 1: Variables and Values
// ============================================
exercise('Variables and Values', () => {
  // TODO: Create a variable called 'userName' using let and assign it your name
  // TODO: Create a constant called 'birthYear' and assign it a year
  // TODO: Create a variable called 'isStudent' and assign it a boolean value
  // Test your variables (uncomment these lines after completing the TODOs above)
  // console.log('User Name:', userName)
  // console.log('Birth Year:', birthYear)
  // console.log('Is Student:', isStudent)
})

// ============================================
// Exercise 2: Arithmetic Operators
// ============================================
exercise('Arithmetic Operators', () => {
  // TODO: Calculate the sum of 45 and 67 and store it in a variable called 'sum'
  // TODO: Calculate the product of 12 and 8 and store it in 'product'
  // TODO: Calculate the remainder of 17 divided by 5 and store it in 'remainder'
  // Test your calculations (uncomment after completing)
  // console.log('Sum:', sum)
  // console.log('Product:', product)
  // console.log('Remainder:', remainder)
})

// ============================================
// Exercise 3: String Operations
// ============================================
exercise('String Operations', () => {
  // TODO: Create a variable 'firstName' with your first name
  // TODO: Create a variable 'lastName' with your last name
  // TODO: Use a template string to create 'fullName' that combines them with a space
  // Test your strings (uncomment after completing)
  // console.log('Full Name:', fullName)
  // TODO: Create a template string that says "Hello, my name is [fullName]"
  // Store it in a variable called 'greeting'
  // console.log(greeting)
})

// ============================================
// Exercise 4: Comparison Operators
// ============================================
exercise('Comparison Operators', () => {
  let age = 25
  let votingAge = 18

  // TODO: Create a variable 'canVote' that checks if age is greater than or equal to votingAge
  // TODO: Create a variable 'isExactly25' that checks if age is strictly equal to 25
  // TODO: Create a variable 'isNotMinor' that checks if age is not equal to 17

  // Test your comparisons (uncomment after completing)
  // console.log('Can Vote:', canVote)
  // console.log('Is Exactly 25:', isExactly25)
  // console.log('Is Not Minor:', isNotMinor)
})

// ============================================
// Exercise 5: Assignment Operators
// ============================================
exercise('Assignment Operators', () => {
  let points = 100

  // TODO: Add 50 to points using the += operator
  // TODO: Subtract 25 from points using the -= operator
  // TODO: Multiply points by 2 using the *= operator

  // Test your result (uncomment after completing)
  // console.log('Final Points:', points) // Should be 250
})

// ============================================
// Exercise 6: Type Exploration
// ============================================
exercise('Type Exploration', () => {
  // TODO: Create variables demonstrating each type:
  // - A number called 'temperature'
  // - A string called 'weather'
  // - A boolean called 'isSunny'
  // - A null value called 'data'
  // - An undefined value called 'result' (just declare it without assigning)
  // Use typeof to check the types (uncomment after completing)
  // console.log('temperature type:', typeof temperature)
  // console.log('weather type:', typeof weather)
  // console.log('isSunny type:', typeof isSunny)
  // console.log('data type:', typeof data)
  // console.log('result type:', typeof result)
})

// ============================================
// Exercise 7: Practical Challenge
// ============================================
exercise('Practical Challenge', () => {
  // Scenario: You're building a simple calculator for a store

  const itemPrice = 29.99
  const quantity = 3
  const taxRate = 0.08 // 8% tax

  // TODO: Calculate the subtotal (price * quantity)
  // TODO: Calculate the tax amount (subtotal * taxRate)
  // TODO: Calculate the total (subtotal + tax)
  // TODO: Create a template string message that says:
  //       "Your order of [quantity] items costs $[total]"
  // TODO: Store this message in a variable called 'orderSummary'

  // Test your calculations (uncomment after completing)
  // console.log('Subtotal:', subtotal)
  // console.log('Tax:', tax)
  // console.log('Total:', total)
  // console.log(orderSummary)
})

// ============================================
// Exercise 8: Fixing Mistakes
// ============================================
exercise('Fixing Mistakes', () => {
  // The following code has errors. Fix them!
  // var message = "Hello World  // Missing closing quote
  // const pi = 3.14
  // pi = 3.14159  // Can't reassign const
  // let result = 10 + + 5  // Extra plus sign
  // console.log(resuIt)  // Typo in variable name
})

// ============================================
// Bonus Challenge
// ============================================
exercise('Bonus Challenge - Temperature Converter', () => {
  // Create a temperature converter that converts Celsius to Fahrenheit
  // Formula: F = (C * 9/5) + 32

  const celsius = 25

  // TODO: Calculate fahrenheit using the formula above
  // TODO: Create a template string that says:
  //       "[celsius]°C is equal to [fahrenheit]°F"
  // TODO: Store it in a variable called 'conversionMessage'

  // Test your converter (uncomment after completing)
  // console.log(conversionMessage)
})

console.log('=== End of Exercises ===')
console.log('Great job practicing JavaScript basics!')

// ============================================
// Helper Function (defined at the bottom)
// ============================================

/**
 * Helper function to format exercise output and reduce repetition.
 * This demonstrates closures in action - it maintains state (counter)
 * across multiple calls!
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
