// ============================================
// JavaScript Loops and Iteration Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

console.log('=== JavaScript Loops and Iteration Exercises ===\n')

// ============================================
// Exercise 1: Basic while Loop
// ============================================
console.log('Exercise 1: Basic while Loop')

// TODO: Write a while loop that prints numbers from 1 to 5

// TODO: Write a while loop that prints even numbers from 2 to 10

console.log('')

// ============================================
// Exercise 2: while Loop with Countdown
// ============================================
console.log('Exercise 2: while Loop with Countdown')

// TODO: Write a while loop that counts down from 10 to 1, then prints "Liftoff!"

console.log('')

// ============================================
// Exercise 3: do...while Loop
// ============================================
console.log('Exercise 3: do...while Loop')

// TODO: Write a do...while loop that prints "This runs at least once"
// even though the condition is false from the start
// Hint: Use a condition like (false)

// TODO: Write a do...while loop that prints numbers from 1 to 3

console.log('')

// ============================================
// Exercise 4: Basic for Loop
// ============================================
console.log('Exercise 4: Basic for Loop')

// TODO: Write a for loop that prints numbers from 0 to 9

// TODO: Write a for loop that prints numbers from 1 to 10

console.log('')

// ============================================
// Exercise 5: for Loop Counting by Steps
// ============================================
console.log('Exercise 5: for Loop Counting by Steps')

// TODO: Write a for loop that prints even numbers from 0 to 20
// Hint: Start at 0 and increment by 2 (i += 2)

// TODO: Write a for loop that prints every 5th number from 0 to 50
// (0, 5, 10, 15, 20, etc.)

console.log('')

// ============================================
// Exercise 6: Counting Down with for Loop
// ============================================
console.log('Exercise 6: Counting Down with for Loop')

// TODO: Write a for loop that counts down from 10 to 1

// TODO: Write a for loop that counts down from 20 to 0 by 2s
// (20, 18, 16, 14, etc.)

console.log('')

// ============================================
// Exercise 7: Accumulating Values
// ============================================
console.log('Exercise 7: Accumulating Values')

// TODO: Use a for loop to calculate the sum of numbers from 1 to 10
// Store the result in a variable called 'sum'

// Test your sum (uncomment after completing)
// console.log('Sum of 1 to 10:', sum)

// TODO: Use a for loop to calculate the product of numbers from 1 to 5 (factorial)
// Store the result in a variable called 'product'

// console.log('Product of 1 to 5:', product)

console.log('')

// ============================================
// Exercise 8: Using break
// ============================================
console.log('Exercise 8: Using break')

// TODO: Write a for loop from 1 to 20 that stops when it reaches 10
// Use break to exit the loop

// TODO: Write a for loop that searches for the number 7
// Loop from 1 to 20 and use break when you find 7
// Log "Found 7!" when you find it

console.log('')

// ============================================
// Exercise 9: Using continue
// ============================================
console.log('Exercise 9: Using continue')

// TODO: Write a for loop from 1 to 10 that skips the number 5
// Use continue to skip printing 5

// TODO: Write a for loop from 1 to 20 that only prints odd numbers
// Use continue to skip even numbers
// Hint: Use the modulus operator (%) to check if a number is even

console.log('')

// ============================================
// Exercise 10: Nested Loops
// ============================================
console.log('Exercise 10: Nested Loops')

// TODO: Write nested for loops to create a multiplication table for 1-3
// Output should look like:
// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 2 x 1 = 2
// 2 x 2 = 4
// etc.

console.log('')

// ============================================
// Exercise 11: Building Patterns
// ============================================
console.log('Exercise 11: Building Patterns')

// TODO: Use nested loops to print a triangle pattern:
// *
// **
// ***
// ****
// *****
// Hint: Outer loop for rows, inner loop for stars in each row

console.log('')

// ============================================
// Exercise 12: Practical Challenge - FizzBuzz
// ============================================
console.log('Exercise 12: Practical Challenge - FizzBuzz')

// TODO: Write a loop from 1 to 30 that implements FizzBuzz:
// - If the number is divisible by 3, print "Fizz"
// - If the number is divisible by 5, print "Buzz"
// - If divisible by both 3 and 5, print "FizzBuzz"
// - Otherwise, print the number
// Hint: Check divisibility by both first!

console.log('')

// ============================================
// Exercise 13: Practical Challenge - Find Prime Numbers
// ============================================
console.log('Exercise 13: Practical Challenge - Find Prime Numbers')

// TODO: Write code to find all prime numbers between 2 and 20
// A prime number is only divisible by 1 and itself
// Use nested loops: outer loop for each number, inner loop to check divisibility
// Print each prime number found

console.log('')

// ============================================
// Exercise 14: String Iteration
// ============================================
console.log('Exercise 14: String Iteration')

const word = 'JavaScript'

// TODO: Use a for loop to print each character of 'word' on a separate line
// Hint: Strings have a .length property and can be accessed like word[0], word[1], etc.

// TODO: Use a loop to count how many vowels (a, e, i, o, u) are in 'word'
// Store the count in a variable called 'vowelCount'

// console.log('Vowel count:', vowelCount)

console.log('')

// ============================================
// Exercise 15: Loop Scope
// ============================================
console.log('Exercise 15: Loop Scope')

// TODO: Write a for loop with 'let i' that loops 3 times
// Inside the loop, log i

// TODO: Try to log i after the loop - what happens?
// console.log('i after loop:', i) // This should cause an error

console.log('')

// ============================================
// Exercise 16: while vs for - Temperature Converter
// ============================================
console.log('Exercise 16: while vs for - Temperature Converter')

// TODO: Use a for loop to convert Celsius to Fahrenheit for 0°C to 10°C
// Formula: F = (C * 9/5) + 32
// Print each conversion like: "0°C = 32°F"

console.log('')

// TODO: Now do the same thing using a while loop

console.log('')

// ============================================
// Exercise 17: Fix the Bugs
// ============================================
console.log('Exercise 17: Fix the Bugs')

// The following code has errors. Fix them!

// Bug 1: Off-by-one error
// for (let i = 1; i < 5; i++) {
//   console.log(i) // Should print 1, 2, 3, 4, 5
// }

// Bug 2: Infinite loop (be careful running this!)
// for (let i = 0; i < 10; i--) {
//   console.log(i)
// }

// Bug 3: Wrong increment
// let count = 0
// while (count < 5) {
//   console.log(count)
//   // Missing increment - infinite loop!
// }

console.log('')

// ============================================
// Exercise 18: Practical Challenge - Sum of Multiples
// ============================================
console.log('Exercise 18: Practical Challenge - Sum of Multiples')

// TODO: Find the sum of all numbers from 1 to 100 that are divisible by 3 or 5
// Store the result in a variable called 'sumOfMultiples'
// This is a common programming challenge!

// console.log('Sum of multiples:', sumOfMultiples)

console.log('')

// ============================================
// Bonus Challenge: Guess the Number Game
// ============================================
console.log('Bonus Challenge: Guess the Number Game')

// TODO: Simulate a simple number guessing game
// The "secret number" is 7
// Use a for loop to simulate 10 guesses (use numbers 1-10 as guesses)
// For each guess:
//   - If guess is less than 7, log "Too low!"
//   - If guess is greater than 7, log "Too high!"
//   - If guess equals 7, log "You win!" and break out of the loop

console.log('')

// ============================================
// Super Bonus: Drawing a Square
// ============================================
console.log('Super Bonus: Drawing a Square')

// TODO: Use nested loops to draw a 5x5 square of asterisks
// Output should be:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// Hint: You'll need to build each row as a string, then log it

console.log('')
console.log('=== End of Exercises ===')
console.log('Great job practicing loops!')
