// ============================================
// JavaScript Modules Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser.

// Import the helper functions from our modules directory
import { exercise, lesson } from '../@modules/exercises.js'

lesson('JavaScript Modules', () => {
  // ============================================
  // Exercise 1: Understanding Module Scope
  // ============================================
  exercise('Understanding Module Scope', () => {
    // TODO: Notice that we're importing exercise and lesson functions
    // These are NOT global variables - they're module imports

    // TODO: Try to access a variable from another module without importing
    // (This will cause an error - that's the point!)

    // TODO: Log that you understand module scope prevents global pollution
    console.log('Module scope keeps variables isolated')
  })

  // ============================================
  // Exercise 2: Create Your First Module
  // ============================================
  exercise('Create Your First Module', () => {
    // TODO: Create a new file called 'greetings.js' in this directory
    // TODO: Export a function called 'greet' that takes a name and returns "Hello, [name]!"
    // TODO: Import it here and test it
    // Uncomment after creating the module:
    // import { greet } from './greetings.js'
    // console.log(greet('Alice'))
  })

  // ============================================
  // Exercise 3: Named Exports
  // ============================================
  exercise('Named Exports', () => {
    // TODO: Create a file called 'math-utils.js'
    // TODO: Export these named exports:
    //   - function add(a, b)
    //   - function subtract(a, b)
    //   - constant PI = 3.14159
    // TODO: Import them here and test them
    // Uncomment after creating:
    // import { add, subtract, PI } from './math-utils.js'
    // console.log(add(5, 3))
    // console.log(subtract(10, 4))
    // console.log(PI)
  })

  // ============================================
  // Exercise 4: Default Exports
  // ============================================
  exercise('Default Exports', () => {
    // TODO: Create a file called 'logger.js'
    // TODO: Export a default function that logs with a timestamp
    // Example: "[2024-01-15 10:30:00] Your message here"
    // TODO: Import and use it
    // Uncomment after creating:
    // import log from './logger.js'
    // log('Hello from modules!')
  })

  // ============================================
  // Exercise 5: Mixing Default and Named Exports
  // ============================================
  exercise('Mixing Default and Named Exports', () => {
    // TODO: Create a file called 'string-utils.js'
    // TODO: Export a default function 'capitalize' that capitalizes a string
    // TODO: Also export named functions: 'uppercase', 'lowercase'
    // TODO: Import both default and named exports
    // Uncomment after creating:
    // import capitalize, { uppercase, lowercase } from './string-utils.js'
    // console.log(capitalize('hello'))
    // console.log(uppercase('world'))
    // console.log(lowercase('JAVASCRIPT'))
  })

  // ============================================
  // Exercise 6: Renaming Imports
  // ============================================
  exercise('Renaming Imports', () => {
    // TODO: Import the add function from math-utils.js but rename it to 'sum'
    // Uncomment after Exercise 3:
    // import { add as sum } from './math-utils.js'
    // console.log(sum(10, 20))
    // TODO: Why might you want to rename imports?
    // (Think about name conflicts)
  })

  // ============================================
  // Exercise 7: Importing Everything
  // ============================================
  exercise('Importing Everything', () => {
    // TODO: Import ALL exports from math-utils.js using * as
    // Uncomment after Exercise 3:
    // import * as MathUtils from './math-utils.js'
    // console.log(MathUtils.add(5, 5))
    // console.log(MathUtils.PI)
    // TODO: When is this pattern useful?
  })

  // ============================================
  // Exercise 8: Re-exporting
  // ============================================
  exercise('Re-exporting', () => {
    // TODO: Create a file called 'utils/index.js'
    // TODO: Import from multiple utility modules and re-export them
    // Example:
    // export { greet } from './greetings.js'
    // export { add, subtract } from './math-utils.js'
    // TODO: Import from the index file
    // Uncomment after creating:
    // import { greet, add } from './utils/index.js'
  })

  // ============================================
  // Exercise 9: Module Singletons
  // ============================================
  exercise('Module Singletons', () => {
    // TODO: Create a file called 'counter.js' that:
    // - Has a private count variable
    // - Exports increment() and getCount() functions
    // TODO: Import it in two different ways in this file
    // TODO: Call increment() from both imports
    // TODO: Observe that they share the same state
    // This demonstrates that modules are singletons
  })

  // ============================================
  // Exercise 10: Side Effects
  // ============================================
  exercise('Side Effects', () => {
    // TODO: Create a file called 'init.js' that logs "Module initialized!"
    // at the top level (not in a function)
    // TODO: Import it multiple times
    // Uncomment after creating:
    // import('./init.js')
    // import('./init.js')
    // import('./init.js')
    // TODO: How many times does "Module initialized!" log?
  })

  // ============================================
  // Exercise 11: Importing JSON
  // ============================================
  exercise('Importing JSON', () => {
    // TODO: Create a file called 'config.json' with:
    // { "appName": "My App", "version": "1.0.0" }
    // TODO: Import it with the JSON import assertion
    // Uncomment after creating:
    // import config from './config.json' with { type: 'json' }
    // console.log(config.appName, config.version)
  })

  // ============================================
  // Exercise 12: Practical Challenge - Calculator Module
  // ============================================
  exercise('Practical Challenge - Calculator Module', () => {
    // TODO: Create a 'calculator.js' module with:
    // - Named exports: add, subtract, multiply, divide
    // - Each function should validate inputs (numbers only)
    // - divide should throw error for division by zero
    // - Default export: a calculate function that takes (operation, a, b)
    // TODO: Import and test all functions
  })

  // ============================================
  // Exercise 13: Practical Challenge - User Module
  // ============================================
  exercise('Practical Challenge - User Module', () => {
    // TODO: Create a 'user.js' module that:
    // - Keeps a private array of users
    // - Exports: addUser(user), getUser(id), getAllUsers()
    // - Each user should have: id, name, email
    // TODO: Demonstrate that the users array is truly private
    // (cannot be accessed directly from outside)
  })

  // ============================================
  // Exercise 14: Practical Challenge - Module Organization
  // ============================================
  exercise('Practical Challenge - Module Organization', () => {
    // TODO: Create this directory structure:
    // utils/
    //   string.js (string utilities)
    //   number.js (number utilities)
    //   array.js (array utilities)
    //   index.js (re-exports everything)
    // TODO: Import from utils/index.js to get all utilities
    // This demonstrates good module organization
  })

  // ============================================
  // Exercise 15: Understanding Circular Dependencies
  // ============================================
  exercise('Understanding Circular Dependencies', () => {
    // TODO: Create two files that import each other:
    // a.js: exports function a() that calls b()
    // b.js: exports function b() that calls a()
    // TODO: Try to use these functions
    // TODO: Observe the behavior (likely undefined or errors)
    // TODO: Refactor to avoid the circular dependency
    // (Move shared logic to a third module)
  })

  // ============================================
  // Exercise 16: CommonJS vs ES Modules
  // ============================================
  exercise('CommonJS vs ES Modules', () => {
    // This is informational - no code to write

    // CommonJS (old Node.js way):
    // const fs = require('fs')
    // module.exports = { myFunction }

    // ES Modules (modern way):
    // import fs from 'fs'
    // export function myFunction() {}

    // TODO: List 3 advantages of ES Modules over CommonJS
    console.log('ES Modules advantages:')
    console.log('1. Static imports enable better tree-shaking')
    console.log('2. Cleaner syntax')
    console.log('3. Better tooling support')
  })

  // ============================================
  // Exercise 17: Module Best Practices
  // ============================================
  exercise('Module Best Practices', () => {
    // TODO: Review these best practices and implement them:
    // 1. One clear responsibility per module
    // 2. Avoid side effects at module top level
    // 3. Export only what's needed (keep internals private)
    // 4. Use meaningful file names (not utils.js)
    // 5. Keep modules small and focused
    // TODO: Create a 'validation.js' module following these practices:
    // - Single responsibility: input validation
    // - No side effects
    // - Clear, specific function names
    // - Private helper functions that aren't exported
  })

  // ============================================
  // Exercise 18: Fix the Module Bugs
  // ============================================
  exercise('Fix the Module Bugs', () => {
    // Bug 1: Missing file extension
    // import { add } from './math-utils'  // Should be './math-utils.js'
    // Bug 2: Wrong import syntax
    // import add from './math-utils.js'  // add is a named export, not default
    // Bug 3: Circular dependency
    // Create two modules that depend on each other
    // Fix by extracting shared code to a third module
    // Bug 4: Side effect order
    // Assuming modules load in a specific order
    // Fix by making dependencies explicit with imports
    // TODO: Document what you learned about each bug
  })

  // ============================================
  // Bonus Challenge: Module Factory Pattern
  // ============================================
  exercise('Bonus Challenge - Module Factory Pattern', () => {
    // TODO: Create a 'database.js' module that exports a factory function:
    // export function createDatabase(config) {
    //   // private state
    //   const records = []
    //
    //   return {
    //     insert(record) { ... },
    //     find(id) { ... },
    //     getAll() { ... }
    //   }
    // }
    // TODO: Create multiple database instances
    // TODO: Verify they have independent state
    // This pattern gives you module-like encapsulation
    // with the ability to create multiple instances
  })
})
