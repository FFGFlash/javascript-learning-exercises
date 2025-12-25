// ============================================
// JavaScript Control Flow Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

lesson('JavaScript Control Flow', () => {
  // ============================================
  // Exercise 1: Basic if Statements
  // ============================================
  exercise('Basic if Statements', () => {
    const temperature = 75

    // TODO: Write an if statement that logs "It's warm!" if temperature is greater than 70

    // TODO: Write an if statement that logs "It's freezing!" if temperature is less than 32
  })

  // ============================================
  // Exercise 2: if/else Statements
  // ============================================
  exercise('if/else Statements', () => {
    const age = 16

    // TODO: Write an if/else statement that logs "Can drive" if age is >= 16, otherwise "Too young"

    const hour = 14 // 24-hour format

    // TODO: Write an if/else statement that logs "Good morning" if hour is < 12, otherwise "Good afternoon"
  })

  // ============================================
  // Exercise 3: else if Chains
  // ============================================
  exercise('else if Chains', () => {
    const score = 85

    // TODO: Write an if/else if/else chain that logs the letter grade:
    // 90 or above: "A"
    // 80-89: "B"
    // 70-79: "C"
    // 60-69: "D"
    // Below 60: "F"

    const trafficLight = 'yellow'

    // TODO: Write an if/else if/else chain for traffic light colors:
    // green: "Go"
    // yellow: "Slow down"
    // red: "Stop"
    // anything else: "Invalid light"
  })

  // ============================================
  // Exercise 4: Comparison Operators
  // ============================================
  exercise('Comparison Operators', () => {
    const userAge = 21
    const legalAge = 21

    // TODO: Create a variable 'isLegalAge' that checks if userAge >= legalAge
    // TODO: Create a variable 'isExactMatch' that checks if userAge === legalAge (strict equality)
    // TODO: Create a variable 'isYounger' that checks if userAge < legalAge

    // Test your comparisons (uncomment after completing)
    // console.log('Is Legal Age:', isLegalAge)
    // console.log('Is Exact Match:', isExactMatch)
    // console.log('Is Younger:', isYounger)
  })

  // ============================================
  // Exercise 5: Truthy and Falsy Values
  // ============================================
  exercise('Truthy and Falsy Values', () => {
    const emptyString = ''
    const nonEmptyString = 'hello'
    const zero = 0
    const number = 42
    const nullValue = null
    const undefinedValue = undefined

    // TODO: For each variable above, write an if statement that logs whether it's truthy or falsy
    // Example: if (emptyString) { console.log('truthy') } else { console.log('falsy') }
  })

  // ============================================
  // Exercise 6: Logical Operators - AND (&&)
  // ============================================
  exercise('Logical Operators - AND', () => {
    const hasTicket = true
    const hasID = true
    const isOver18 = false

    // TODO: Write an if statement that checks if someone can enter a venue
    // They need BOTH a ticket AND an ID
    // Log "Entry allowed" or "Entry denied"

    // TODO: Write an if statement that checks if someone can buy alcohol
    // They need a ticket AND an ID AND must be over 18
    // Log "Can purchase" or "Cannot purchase"
  })

  // ============================================
  // Exercise 7: Logical Operators - OR (||)
  // ============================================
  exercise('Logical Operators - OR', () => {
    const isAdmin = false
    const isModerator = true
    const isOwner = false

    // TODO: Write an if statement that checks if someone has special privileges
    // They need to be EITHER an admin OR a moderator
    // Log "Has privileges" or "No privileges"

    // TODO: Write an if statement that checks if someone has full access
    // They need to be an admin OR an owner
    // Log "Full access granted" or "Limited access"
  })

  // ============================================
  // Exercise 8: Logical Operators - NOT (!)
  // ============================================
  exercise('Logical Operators - NOT', () => {
    const isLoggedIn = false
    const hasErrors = true

    // TODO: Write an if statement using ! that logs "Please log in" if the user is NOT logged in

    // TODO: Write an if statement using ! that logs "All clear!" if there are NO errors
  })

  // ============================================
  // Exercise 9: Combining Logical Operators
  // ============================================
  exercise('Combining Logical Operators', () => {
    const username = 'alice'
    const password = 'secret123'
    const accountActive = true

    // TODO: Write an if statement that checks if login is successful
    // Requirements: username must be 'alice' AND password must be 'secret123' AND accountActive must be true
    // Log "Login successful" or "Login failed"

    const dayOfWeek = 'Saturday'
    const isHoliday = false

    // TODO: Write an if statement that checks if it's a day off
    // A day off is when it's Saturday OR Sunday OR it's a holiday
    // Log "Day off!" or "Work day"
  })

  // ============================================
  // Exercise 10: Ternary Operator
  // ============================================
  exercise('Ternary Operator', () => {
    const numItems = 5

    // TODO: Use a ternary operator to create a variable 'message' that says:
    // "You have items" if numItems > 0, otherwise "Your cart is empty"

    // Test your ternary (uncomment after completing)
    // console.log(message)

    const speed = 45
    const speedLimit = 55

    // TODO: Use a ternary operator to create a variable 'status' that says:
    // "Speeding" if speed > speedLimit, otherwise "Within limit"

    // console.log(status)
  })

  // ============================================
  // Exercise 11: Block Scope
  // ============================================
  exercise('Block Scope', () => {
    // TODO: Create a variable 'outside' with value 'I am outside' before any if block

    if (true) {
      // TODO: Create a variable 'inside' with value 'I am inside' here
      // TODO: Log both 'outside' and 'inside' variables
    }

    // TODO: Try to log 'inside' here - what happens?
    // console.log(inside) // This should cause an error
  })

  // ============================================
  // Exercise 12: Practical Challenge - Password Validator
  // ============================================
  exercise('Practical Challenge - Password Validator', () => {
    const userPassword = 'Pass123!'

    // TODO: Create a password validation system that checks:
    // 1. Password length is at least 8 characters
    // 2. Password contains a number (you can check if it includes '1', '2', '3', etc. for simplicity)
    // 3. Password is not equal to 'password123'
    //
    // If ALL conditions are met, log "Password is valid"
    // Otherwise, log "Password is invalid"
  })

  // ============================================
  // Exercise 13: Practical Challenge - Discount Calculator
  // ============================================
  exercise('Practical Challenge - Discount Calculator', () => {
    const purchaseAmount = 150
    const isMember = true
    const couponCode = 'SAVE20'

    // TODO: Calculate the final price based on these rules:
    // - If purchase is >= 100 AND customer is a member: 15% discount
    // - If customer has coupon code 'SAVE20': additional 20% off (applied after member discount)
    // - If purchase is >= 200: free shipping (worth $10), subtract this from total
    //
    // Calculate finalPrice and log it
    // Log whether free shipping was applied
  })

  // ============================================
  // Exercise 14: Fix the Bugs
  // ============================================
  exercise('Fix the Bugs', () => {
    // The following code has errors. Fix them!
    // Bug 1: Using assignment instead of comparison
    // let x = 10
    // if (x = 5) {
    //   console.log('x is 5')
    // }
    // Bug 2: Missing braces causing unexpected behavior
    // let ready = true
    // if (ready)
    //   console.log('Starting...')
    //   console.log('Ready!') // Should only run when ready is true
    // Bug 3: Wrong comparison operator
    // let value = '10'
    // if (value === 10) {
    //   console.log('Value is ten')
    // }
  })

  // ============================================
  // Bonus Challenge: Rock, Paper, Scissors
  // ============================================
  exercise('Bonus Challenge - Rock, Paper, Scissors', () => {
    const player1 = 'rock'
    const player2 = 'scissors'

    // TODO: Write the logic to determine the winner
    // Rules: rock beats scissors, scissors beats paper, paper beats rock
    // Log "Player 1 wins", "Player 2 wins", or "It's a tie"
    //
    // Hint: You'll need multiple conditions!
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
