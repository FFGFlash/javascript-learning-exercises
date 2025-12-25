// ============================================
// JavaScript Scope and Closures Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

lesson('JavaScript Scope and Closures', () => {
  // ============================================
  // Exercise 1: Global Scope
  // ============================================
  exercise('Global Scope', () => {
    // TODO: Declare a global variable called 'appName' with value 'MyApp'
    // TODO: Create a function called 'printAppName' that logs the value of appName
    // TODO: Call the function
    // TODO: Log appName directly
  })

  // ============================================
  // Exercise 2: Function Scope
  // ============================================
  exercise('Function Scope', () => {
    // TODO: Create a function called 'createMessage' that:
    // 1. Declares a variable 'message' inside with value "Secret message"
    // 2. Logs the message
    // TODO: Call the function
    // TODO: Try to log 'message' outside the function - what happens?
    // console.log(message) // Should cause an error
  })

  // ============================================
  // Exercise 3: Block Scope with let
  // ============================================
  exercise('Block Scope with let', () => {
    // TODO: Create a variable 'x' with value 10 outside an if block
    // TODO: Inside an if(true) block, create a new variable 'x' with value 20
    // TODO: Log 'x' inside the block
    // TODO: Log 'x' outside the block
    // What values do you see? Why?
  })

  // ============================================
  // Exercise 4: Block Scope with const
  // ============================================
  exercise('Block Scope with const', () => {
    // TODO: Use a for loop with let i from 0 to 2
    // TODO: Inside the loop, declare a const variable 'message' with value `Iteration ${i}`
    // TODO: Log the message inside the loop
    // TODO: Try to log 'message' outside the loop - what happens?
    // console.log(message) // Should cause an error
  })

  // ============================================
  // Exercise 5: var vs let (Understanding the Difference)
  // ============================================
  exercise('var vs let', () => {
    // Part A: Using var
    // TODO: Create an if(true) block and declare a variable with var inside it
    // TODO: Try to log that variable outside the block - it works!
    // Part B: Using let
    // TODO: Create another if(true) block and declare a variable with let inside it
    // TODO: Try to log that variable outside the block - it causes an error!
    // (Comment it out after seeing the error)
  })

  // ============================================
  // Exercise 6: Scope Chain
  // ============================================
  exercise('Scope Chain', () => {
    // TODO: Declare a variable 'level' with value 'global' in global scope
    // TODO: Create a function 'outer' that:
    // 1. Declares a variable 'level' with value 'outer'
    // 2. Contains an inner function 'inner' that logs 'level'
    // 3. Calls the inner function
    // TODO: Call outer() - what value gets logged?
    // TODO: Now modify the inner function to declare its own 'level' variable
    // with value 'inner' - what gets logged now?
  })

  // ============================================
  // Exercise 7: Simple Closure
  // ============================================
  exercise('Simple Closure', () => {
    // TODO: Create a function 'createGreeting' that:
    // 1. Takes a parameter 'name'
    // 2. Returns a function that logs `Hello, ${name}!`
    // TODO: Create a variable 'greetAlice' by calling createGreeting('Alice')
    // TODO: Call greetAlice() - what happens?
    // TODO: Create another variable 'greetBob' by calling createGreeting('Bob')
    // TODO: Call both greetAlice() and greetBob() - what do you notice?
  })

  // ============================================
  // Exercise 8: Counter with Closure
  // ============================================
  exercise('Counter with Closure', () => {
    // TODO: Create a function 'createCounter' that:
    // 1. Declares a variable 'count' initialized to 0
    // 2. Returns a function that increments count and returns the new value
    // TODO: Create a counter by calling createCounter()
    // Test your counter (uncomment after completing)
    // console.log(counter()) // Should be 1
    // console.log(counter()) // Should be 2
    // console.log(counter()) // Should be 3
  })

  // ============================================
  // Exercise 9: Private Data with Closures
  // ============================================
  exercise('Private Data with Closures', () => {
    // TODO: Create a function 'createBankAccount' that:
    // 1. Takes an initial balance parameter
    // 2. Returns an object with two methods:
    //    - deposit(amount): adds amount to balance and returns new balance
    //    - getBalance(): returns current balance
    // The balance variable should be private (not directly accessible)
    // Test your bank account (uncomment after completing)
    // const account = createBankAccount(100)
    // console.log(account.getBalance())     // 100
    // console.log(account.deposit(50))      // 150
    // console.log(account.getBalance())     // 150
  })

  // ============================================
  // Exercise 10: Multiple Closures
  // ============================================
  exercise('Multiple Closures', () => {
    // TODO: Create a function 'createMultiplier' that:
    // 1. Takes a parameter 'multiplier'
    // 2. Returns a function that takes a number and returns it multiplied by 'multiplier'
    // Test your function (uncomment after completing)
    // const double = createMultiplier(2)
    // const triple = createMultiplier(3)
    // console.log(double(5))   // 10
    // console.log(triple(5))   // 15
    // console.log(double(10))  // 20
  })

  // ============================================
  // Exercise 11: Closure in Loops (Common Mistake)
  // ============================================
  exercise('Closure in Loops - The Problem', () => {
    // This demonstrates the common mistake with var in loops

    const functions = []

    // Using var (problematic)
    for (var i = 0; i < 3; i++) {
      functions.push(function () {
        return i
      })
    }

    // TODO: Call each function and log the result
    // console.log(functions[0]()) // What do you expect? What do you get?
    // console.log(functions[1]())
    // console.log(functions[2]())
  })

  // ============================================
  // Exercise 12: Closure in Loops (Solution)
  // ============================================
  exercise('Closure in Loops - The Solution', () => {
    // TODO: Create an array called 'functions'
    // TODO: Use a for loop with LET (not var) from 0 to 2
    // TODO: Push a function into the array that returns i
    // TODO: Call each function and log the result - it should work correctly now!
  })

  // ============================================
  // Exercise 13: Practical Challenge - ID Generator
  // ============================================
  exercise('Practical Challenge - ID Generator', () => {
    // TODO: Create a function 'createIdGenerator' that:
    // 1. Maintains a private counter starting at 1
    // 2. Returns a function that returns the next ID each time it's called
    // 3. The ID should be a string like "ID-1", "ID-2", "ID-3", etc.
    // Test your generator (uncomment after completing)
    // const generateId = createIdGenerator()
    // console.log(generateId())  // "ID-1"
    // console.log(generateId())  // "ID-2"
    // console.log(generateId())  // "ID-3"
  })

  // ============================================
  // Exercise 14: Practical Challenge - Temperature Tracker
  // ============================================
  exercise('Practical Challenge - Temperature Tracker', () => {
    // TODO: Create a function 'createTemperatureTracker' that returns an object with:
    // - addReading(temp): adds a temperature reading to private array
    // - getAverage(): returns the average of all readings
    // - getCount(): returns how many readings have been recorded
    // Test your tracker (uncomment after completing)
    // const tracker = createTemperatureTracker()
    // tracker.addReading(72)
    // tracker.addReading(75)
    // tracker.addReading(73)
    // console.log('Average:', tracker.getAverage())  // 73.33...
    // console.log('Count:', tracker.getCount())      // 3
  })

  // ============================================
  // Exercise 15: Practical Challenge - Secret Message
  // ============================================
  exercise('Practical Challenge - Secret Message', () => {
    // TODO: Create a function 'createSecretHolder' that:
    // 1. Takes a secret parameter
    // 2. Returns an object with two methods:
    //    - getSecret(): returns the secret
    //    - setSecret(newSecret): updates the secret
    // The secret should be private (not directly accessible)
    // Test your secret holder (uncomment after completing)
    // const holder = createSecretHolder('initial secret')
    // console.log(holder.getSecret())           // "initial secret"
    // holder.setSecret('new secret')
    // console.log(holder.getSecret())           // "new secret"
  })

  // ============================================
  // Exercise 16: Understanding Scope Chain
  // ============================================
  exercise('Understanding Scope Chain', () => {
    // TODO: Create this structure:
    // - Global variable: color = 'red'
    // - Function 'outer' that:
    //   - Has its own variable: color = 'blue'
    //   - Contains function 'middle' that:
    //     - Has its own variable: color = 'green'
    //     - Contains function 'inner' that:
    //       - Logs the value of color
    //   - Calls middle()
    // - Call outer()
    // TODO: What color gets logged? Why?
    // TODO: Remove the color variable from middle - what happens now?
    // TODO: Remove the color variable from outer - what happens now?
  })

  // ============================================
  // Exercise 17: Fix the Bugs
  // ============================================
  exercise('Fix the Bugs', () => {
    // Bug 1: Trying to access block-scoped variable
    // if (true) {
    //   let secret = 'password'
    // }
    // console.log(secret) // Fix this so it works
    // Bug 2: Loop closure problem
    // const funcs = []
    // for (var i = 0; i < 3; i++) {
    //   funcs.push(() => i)
    // }
    // console.log(funcs[0]()) // Should be 0, not 3
    // Bug 3: Accessing private variable
    // function createCounter() {
    //   let count = 0
    //   return function() { return ++count }
    // }
    // const counter = createCounter()
    // console.log(count) // How can we get the count value?
  })

  // ============================================
  // Bonus Challenge: Function Factory
  // ============================================
  exercise('Bonus Challenge - Function Factory', () => {
    // TODO: Create a function 'createCalculator' that takes an initial value
    // and returns an object with methods:
    // - add(n): adds n to the value and returns this (for chaining)
    // - subtract(n): subtracts n from the value and returns this (for chaining)
    // - multiply(n): multiplies the value by n and returns this (for chaining)
    // - divide(n): divides the value by n and returns this (for chaining)
    // - getValue(): returns the current value
    // Test your calculator (uncomment after completing)
    // const calc = createCalculator(10)
    // const result = calc.add(5).multiply(2).subtract(10).divide(2).getValue()
    // console.log(result) // Should be 10
  })

  // ============================================
  // Super Bonus: Advanced Closure Pattern
  // ============================================
  exercise('Super Bonus - Advanced Closure Pattern', () => {
    // TODO: Create a function 'createQueue' that implements a queue data structure:
    // - enqueue(item): adds an item to the end of the queue
    // - dequeue(): removes and returns the first item (or null if empty)
    // - peek(): returns the first item without removing it (or null if empty)
    // - size(): returns the number of items in the queue
    // The internal array should be completely private
    // Test your queue (uncomment after completing)
    // const queue = createQueue()
    // queue.enqueue('first')
    // queue.enqueue('second')
    // queue.enqueue('third')
    // console.log(queue.size())      // 3
    // console.log(queue.peek())      // "first"
    // console.log(queue.dequeue())   // "first"
    // console.log(queue.size())      // 2
    // console.log(queue.dequeue())   // "second"
    // console.log(queue.dequeue())   // "third"
    // console.log(queue.dequeue())   // null
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
  }
  console.log('')
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
