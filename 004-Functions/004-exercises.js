// ============================================
// JavaScript Functions Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

lesson('JavaScript Functions', () => {
  // ============================================
  // Exercise 1: Basic Function Declaration
  // ============================================
  exercise('Basic Function Declaration', () => {
    // TODO: Declare a function called 'sayHello' that logs "Hello, World!"
    // TODO: Call the function
  })

  // ============================================
  // Exercise 2: Functions with Parameters
  // ============================================
  exercise('Functions with Parameters', () => {
    // TODO: Declare a function called 'greetPerson' that takes a 'name' parameter
    // and logs "Hello, [name]!"
    // TODO: Call the function with your name
    // TODO: Call it again with a different name
  })

  // ============================================
  // Exercise 3: Returning Values
  // ============================================
  exercise('Returning Values', () => {
    // TODO: Write a function called 'add' that takes two parameters and returns their sum
    // TODO: Write a function called 'multiply' that takes two parameters and returns their product
    // Test your functions (uncomment after completing)
    // console.log('5 + 3 =', add(5, 3))
    // console.log('4 * 7 =', multiply(4, 7))
  })

  // ============================================
  // Exercise 4: Multiple Parameters
  // ============================================
  exercise('Multiple Parameters', () => {
    // TODO: Write a function called 'calculateArea' that takes width and height
    // and returns the area (width * height)
    // TODO: Write a function called 'getFullName' that takes firstName and lastName
    // and returns them combined with a space in between
    // Test your functions (uncomment after completing)
    // console.log('Area:', calculateArea(5, 10))
    // console.log('Full name:', getFullName('John', 'Doe'))
  })

  // ============================================
  // Exercise 5: Function Expressions
  // ============================================
  exercise('Function Expressions', () => {
    // TODO: Create a function expression called 'subtract' that takes two parameters
    // and returns their difference
    // TODO: Create a function expression called 'divide' that takes two parameters
    // and returns the result of dividing the first by the second
    // Test your functions (uncomment after completing)
    // console.log('10 - 4 =', subtract(10, 4))
    // console.log('20 / 5 =', divide(20, 5))
  })

  // ============================================
  // Exercise 6: Arrow Functions - Basic
  // ============================================
  exercise('Arrow Functions - Basic', () => {
    // TODO: Create an arrow function called 'square' that takes a number
    // and returns its square (number * number)
    // TODO: Create an arrow function called 'isEven' that takes a number
    // and returns true if it's even, false otherwise
    // Test your functions (uncomment after completing)
    // console.log('Square of 5:', square(5))
    // console.log('Is 4 even?', isEven(4))
    // console.log('Is 7 even?', isEven(7))
  })

  // ============================================
  // Exercise 7: Arrow Functions - Concise Syntax
  // ============================================
  exercise('Arrow Functions - Concise Syntax', () => {
    // TODO: Create a concise arrow function called 'double' that takes a number
    // and returns it doubled (use single expression, no braces or return keyword)
    // TODO: Create a concise arrow function called 'isPositive' that takes a number
    // and returns true if it's greater than 0
    // Test your functions (uncomment after completing)
    // console.log('Double 7:', double(7))
    // console.log('Is 5 positive?', isPositive(5))
    // console.log('Is -3 positive?', isPositive(-3))
  })

  // ============================================
  // Exercise 8: Default Parameters
  // ============================================
  exercise('Default Parameters', () => {
    // TODO: Write a function called 'greet' with parameters 'name' and 'greeting'
    // Set default value of 'greeting' to 'Hello'
    // Return a string like "[greeting], [name]!"
    // Test your function (uncomment after completing)
    // console.log(greet('Alice'))              // Should use default "Hello"
    // console.log(greet('Bob', 'Hi'))          // Should use "Hi"
    // console.log(greet('Charlie', 'Hey'))     // Should use "Hey"
  })

  // ============================================
  // Exercise 9: Early Returns
  // ============================================
  exercise('Early Returns', () => {
    // TODO: Write a function called 'safeDivide' that takes two parameters: a and b
    // If b is 0, return the string "Cannot divide by zero"
    // Otherwise, return a / b
    // TODO: Write a function called 'getGrade' that takes a score (0-100)
    // If score is less than 0 or greater than 100, return "Invalid score"
    // Otherwise return "A" for 90+, "B" for 80+, "C" for 70+, "D" for 60+, "F" for below 60
    // Test your functions (uncomment after completing)
    // console.log(safeDivide(10, 2))
    // console.log(safeDivide(10, 0))
    // console.log(getGrade(95))
    // console.log(getGrade(150))
  })

  // ============================================
  // Exercise 10: Function Scope
  // ============================================
  exercise('Function Scope', () => {
    // TODO: Create a function called 'testScope' that:
    // 1. Declares a variable 'inner' inside the function
    // 2. Logs the value of 'inner'
    // TODO: Call the function
    // TODO: Try to log 'inner' outside the function - what happens?
    // console.log(inner) // Should cause an error
  })

  // ============================================
  // Exercise 11: Functions as Values
  // ============================================
  exercise('Functions as Values', () => {
    // TODO: Declare a function called 'sayGoodbye' that logs "Goodbye!"
    // TODO: Create a variable called 'farewell' and assign the sayGoodbye function to it
    // (reference it, don't call it)
    // TODO: Call the function using the 'farewell' variable
  })

  // ============================================
  // Exercise 12: Practical Challenge - Temperature Converter
  // ============================================
  exercise('Practical Challenge - Temperature Converter', () => {
    // TODO: Write a function 'celsiusToFahrenheit' that converts Celsius to Fahrenheit
    // Formula: F = (C * 9/5) + 32
    // TODO: Write a function 'fahrenheitToCelsius' that converts Fahrenheit to Celsius
    // Formula: C = (F - 32) * 5/9
    // Test your functions (uncomment after completing)
    // console.log('25°C in Fahrenheit:', celsiusToFahrenheit(25))
    // console.log('77°F in Celsius:', fahrenheitToCelsius(77))
  })

  // ============================================
  // Exercise 13: Practical Challenge - String Utilities
  // ============================================
  exercise('Practical Challenge - String Utilities', () => {
    // TODO: Write a function 'countVowels' that takes a string and returns
    // the number of vowels (a, e, i, o, u) in it
    // Hint: You'll need a loop and conditional logic
    // TODO: Write a function 'reverseString' that takes a string and returns it reversed
    // Hint: You can loop backwards or use string methods
    // Test your functions (uncomment after completing)
    // console.log('Vowels in "hello":', countVowels('hello'))
    // console.log('Reverse of "hello":', reverseString('hello'))
  })

  // ============================================
  // Exercise 14: Practical Challenge - Array Sum
  // ============================================
  exercise('Practical Challenge - Array Sum', () => {
    // Note: We haven't covered arrays in detail yet, but here's what you need to know:
    // Arrays store multiple values: const nums = [1, 2, 3, 4, 5]
    // You can access length with: nums.length
    // You can access items with: nums[0], nums[1], etc.
    // TODO: Write a function 'sumArray' that takes an array of numbers
    // and returns their sum
    // Test your function (uncomment after completing)
    // console.log('Sum of [1, 2, 3, 4, 5]:', sumArray([1, 2, 3, 4, 5]))
    // console.log('Sum of [10, 20, 30]:', sumArray([10, 20, 30]))
  })

  // ============================================
  // Exercise 15: Practical Challenge - Number Validator
  // ============================================
  exercise('Practical Challenge - Number Validator', () => {
    // TODO: Write a function 'isValidAge' that takes an age parameter
    // Return true if age is a number between 0 and 120 (inclusive)
    // Return false otherwise
    // TODO: Write a function 'isValidEmail' that takes an email string
    // For simplicity, just check if it contains an '@' symbol
    // Return true if it does, false otherwise
    // Test your functions (uncomment after completing)
    // console.log('Is 25 a valid age?', isValidAge(25))
    // console.log('Is 150 a valid age?', isValidAge(150))
    // console.log('Is "test@email.com" valid?', isValidEmail('test@email.com'))
    // console.log('Is "notanemail" valid?', isValidEmail('notanemail'))
  })

  // ============================================
  // Exercise 16: Fix the Bugs
  // ============================================
  exercise('Fix the Bugs', () => {
    // Bug 1: Function doesn't return anything
    // function add(a, b) {
    //   a + b
    // }
    // console.log(add(2, 3)) // Should print 5
    // Bug 2: Arrow function trying to return an object
    // const getUser = () => { name: 'Alice', age: 30 }
    // console.log(getUser()) // Should print the object
    // Bug 3: Calling vs referencing
    // function sayHi() { console.log('Hi!') }
    // const greet = sayHi()  // What's wrong here?
    // greet()
  })

  // ============================================
  // Bonus Challenge: Calculator
  // ============================================
  exercise('Bonus Challenge - Calculator', () => {
    // TODO: Create a calculator function that takes three parameters:
    // - num1: first number
    // - operator: a string ('+', '-', '*', '/')
    // - num2: second number
    // Return the result of the operation
    // Handle division by zero
    // Test your calculator (uncomment after completing)
    // console.log('10 + 5 =', calculator(10, '+', 5))
    // console.log('10 - 5 =', calculator(10, '-', 5))
    // console.log('10 * 5 =', calculator(10, '*', 5))
    // console.log('10 / 5 =', calculator(10, '/', 5))
    // console.log('10 / 0 =', calculator(10, '/', 0))
  })

  // ============================================
  // Super Bonus: Fibonacci
  // ============================================
  exercise('Super Bonus - Fibonacci', () => {
    // TODO: Write a function 'fibonacci' that takes a number n
    // and returns the nth Fibonacci number
    // Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21...
    // Each number is the sum of the previous two
    // fibonacci(0) = 0, fibonacci(1) = 1, fibonacci(2) = 1, etc.
    // Test your function (uncomment after completing)
    // console.log('Fibonacci(0):', fibonacci(0))
    // console.log('Fibonacci(1):', fibonacci(1))
    // console.log('Fibonacci(6):', fibonacci(6))
    // console.log('Fibonacci(10):', fibonacci(10))
  })
})

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
  } finally {
    console.log('')
  }
}

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
