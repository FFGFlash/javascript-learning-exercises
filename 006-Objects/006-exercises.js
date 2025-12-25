// ============================================
// JavaScript Objects Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

console.log('=== JavaScript Objects Exercises ===\n')

// ============================================
// Exercise 1: Creating Objects
// ============================================
exercise('Creating Objects', () => {
  // TODO: Create an object called 'book' with properties:
  // - title: "The Great Gatsby"
  // - author: "F. Scott Fitzgerald"
  // - year: 1925
  // - isAvailable: true
  // TODO: Log the entire object
})

// ============================================
// Exercise 2: Accessing Properties - Dot Notation
// ============================================
exercise('Accessing Properties - Dot Notation', () => {
  const movie = {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    rating: 8.8,
  }

  // TODO: Log the movie's title using dot notation

  // TODO: Log the movie's director using dot notation

  // TODO: Log the movie's rating using dot notation
})

// ============================================
// Exercise 3: Accessing Properties - Bracket Notation
// ============================================
exercise('Accessing Properties - Bracket Notation', () => {
  const product = {
    'name': 'Laptop',
    'price': 999,
    'in-stock': true,
    'category': 'Electronics',
  }

  // TODO: Log the product name using bracket notation

  // TODO: Log the 'in-stock' property using bracket notation
  // (Note: you must use bracket notation because of the hyphen)

  // TODO: Create a variable 'key' with value 'category'
  // TODO: Use bracket notation with the variable to log the category
})

// ============================================
// Exercise 4: Modifying Objects
// ============================================
exercise('Modifying Objects', () => {
  const user = {
    username: 'alex123',
    email: 'alex@example.com',
    age: 25,
  }

  // TODO: Change the age to 26

  // TODO: Add a new property 'city' with value 'New York'

  // TODO: Log the modified object
})

// ============================================
// Exercise 5: Deleting Properties
// ============================================
exercise('Deleting Properties', () => {
  const config = {
    debug: true,
    apiKey: 'abc123',
    timeout: 5000,
    tempValue: 'delete me',
  }

  // TODO: Delete the 'tempValue' property using the delete keyword

  // TODO: Log the object to verify the property is gone
})

// ============================================
// Exercise 6: Object Methods
// ============================================
exercise('Object Methods', () => {
  // TODO: Create an object 'calculator' with methods:
  // - add(a, b): returns a + b
  // - subtract(a, b): returns a - b
  // - multiply(a, b): returns a * b
  // Test your calculator (uncomment after completing)
  // console.log(calculator.add(5, 3))
  // console.log(calculator.subtract(10, 4))
  // console.log(calculator.multiply(6, 7))
})

// ============================================
// Exercise 7: Using 'this' in Methods
// ============================================
exercise('Using this in Methods', () => {
  // TODO: Create an object 'person' with:
  // - Properties: firstName: 'John', lastName: 'Doe'
  // - Method: getFullName() that returns the full name using this
  // Test your object (uncomment after completing)
  // console.log(person.getFullName())
})

// ============================================
// Exercise 8: Objects as Data Containers
// ============================================
exercise('Objects as Data Containers', () => {
  // TODO: Create an object 'restaurant' that represents a restaurant with:
  // - name
  // - cuisine type
  // - rating (1-5)
  // - isOpen (boolean)
  // - location (nested object with street, city, state)
  // TODO: Log the restaurant name
  // TODO: Log the restaurant's city (from nested location object)
})

// ============================================
// Exercise 9: Passing Objects to Functions
// ============================================
exercise('Passing Objects to Functions', () => {
  // TODO: Create a function 'printPersonInfo' that takes a person object
  // and logs their name and age
  // TODO: Create a person object with name and age
  // TODO: Call the function with your person object
})

// ============================================
// Exercise 10: Modifying Objects in Functions
// ============================================
exercise('Modifying Objects in Functions', () => {
  // TODO: Create a function 'celebrate' that takes a person object
  // and increments their age by 1

  const person = {
    name: 'Sarah',
    age: 29,
  }

  // TODO: Call celebrate(person)

  // TODO: Log person.age - what value do you see? Why?
})

// ============================================
// Exercise 11: Nested Objects
// ============================================
exercise('Nested Objects', () => {
  // TODO: Create an object 'company' with:
  // - name: 'TechCorp'
  // - founded: 2010
  // - ceo: an object with firstName and lastName
  // - headquarters: an object with city, state, and country
  // TODO: Log the CEO's full name
  // TODO: Log the headquarters city
})

// ============================================
// Exercise 12: Object Destructuring - Basic
// ============================================
exercise('Object Destructuring - Basic', () => {
  const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'blue',
  }

  // TODO: Use destructuring to extract make, model, and year into variables

  // TODO: Log the extracted variables
})

// ============================================
// Exercise 13: Object Destructuring in Functions
// ============================================
exercise('Object Destructuring in Functions', () => {
  // TODO: Create a function 'displayProduct' that uses destructuring in its parameters
  // to extract name and price, then logs them

  const product = {
    name: 'Headphones',
    price: 79.99,
    brand: 'AudioTech',
  }

  // TODO: Call the function with the product object
})

// ============================================
// Exercise 14: Rest Properties
// ============================================
exercise('Rest Properties', () => {
  const user = {
    id: 1,
    username: 'johndoe',
    email: 'john@example.com',
    age: 30,
    city: 'Boston',
  }

  // TODO: Use destructuring to extract id and username,
  // and collect the rest into a variable called 'otherInfo'

  // TODO: Log id, username, and otherInfo
})

// ============================================
// Exercise 15: Spread Operator - Copying
// ============================================
exercise('Spread Operator - Copying', () => {
  const original = {
    x: 10,
    y: 20,
    z: 30,
  }

  // TODO: Use the spread operator to create a copy of original

  // TODO: Modify the copy's x property to 100

  // TODO: Log both original.x and copy.x - what do you see?
})

// ============================================
// Exercise 16: Spread Operator - Merging
// ============================================
exercise('Spread Operator - Merging', () => {
  const defaults = {
    theme: 'light',
    fontSize: 14,
    showNotifications: true,
  }

  const userPreferences = {
    theme: 'dark',
    fontSize: 16,
  }

  // TODO: Create a new object 'settings' that:
  // 1. Starts with all defaults
  // 2. Overwrites with userPreferences
  // Use the spread operator

  // TODO: Log the settings object - what values do you see?
})

// ============================================
// Exercise 17: Spread Operator with undefined
// ============================================
exercise('Spread Operator with undefined', () => {
  // TODO: Create a function 'createUser' that takes an optional data parameter
  // It should return an object with:
  // - name: 'Guest' (default)
  // - role: 'user' (default)
  // - ...spread the data parameter (even if undefined)
  // Test your function (uncomment after completing)
  // console.log(createUser())
  // console.log(createUser({ name: 'Alice' }))
  // console.log(createUser({ name: 'Bob', role: 'admin' }))
})

// ============================================
// Exercise 18: Shallow Copy vs Deep Copy
// ============================================
exercise('Shallow Copy vs Deep Copy', () => {
  const original = {
    name: 'Alice',
    scores: {
      math: 90,
      science: 85,
    },
  }

  // TODO: Create a shallow copy using spread operator

  // TODO: Modify the copy's name to 'Bob'
  // TODO: Modify the copy's scores.math to 95

  // TODO: Log original.name and original.scores.math
  // What values do you see? Why is scores.math changed in the original?
})

// ============================================
// Exercise 19: structuredClone
// ============================================
exercise('structuredClone', () => {
  const original = {
    name: 'Company A',
    address: {
      street: '123 Main St',
      city: 'Boston',
    },
  }

  // TODO: Create a deep copy using structuredClone

  // TODO: Modify the copy's address.city to 'New York'

  // TODO: Log original.address.city and copy.address.city
  // They should be different!
})

// ============================================
// Exercise 20: Practical Challenge - Shopping Cart
// ============================================
exercise('Practical Challenge - Shopping Cart', () => {
  // TODO: Create a shopping cart object with:
  // - items: an array of item objects (each with name, price, quantity)
  // - addItem(item): method to add an item
  // - getTotal(): method that calculates the total price (price * quantity for each item)
  // Test your cart (uncomment after completing)
  // const cart = ... // your code
  // cart.addItem({ name: 'Apple', price: 1.5, quantity: 3 })
  // cart.addItem({ name: 'Bread', price: 2.5, quantity: 1 })
  // console.log('Total:', cart.getTotal())
})

// ============================================
// Exercise 21: Practical Challenge - User Profile
// ============================================
exercise('Practical Challenge - User Profile', () => {
  // TODO: Create a function 'createUserProfile' that takes firstName, lastName, and age
  // and returns an object with:
  // - All the provided data
  // - A method getInfo() that returns a formatted string: "Name: [full name], Age: [age]"
  // - A method haveBirthday() that increments age by 1
  // Test your function (uncomment after completing)
  // const user = createUserProfile('Jane', 'Smith', 28)
  // console.log(user.getInfo())
  // user.haveBirthday()
  // console.log(user.getInfo())
})

// ============================================
// Exercise 22: Practical Challenge - Inventory System
// ============================================
exercise('Practical Challenge - Inventory System', () => {
  // TODO: Create an inventory object with:
  // - items: an object where keys are item names and values are quantities
  // - addStock(itemName, quantity): adds quantity to an item (or creates it if it doesn't exist)
  // - removeStock(itemName, quantity): removes quantity from an item
  // - checkStock(itemName): returns the quantity of an item
  // Test your inventory (uncomment after completing)
  // const inventory = ... // your code
  // inventory.addStock('apples', 50)
  // inventory.addStock('oranges', 30)
  // console.log('Apples:', inventory.checkStock('apples'))
  // inventory.removeStock('apples', 10)
  // console.log('Apples after sale:', inventory.checkStock('apples'))
})

// ============================================
// Exercise 23: Fix the Bugs
// ============================================
exercise('Fix the Bugs', () => {
  // Bug 1: Accessing nested property incorrectly
  // const data = {
  //   user: {
  //     name: 'Alice'
  //   }
  // }
  // console.log(data.name) // Should log 'Alice'
  // Bug 2: Using this incorrectly
  // const obj = {
  //   value: 42,
  //   getValue: () => {
  //     return this.value
  //   }
  // }
  // console.log(obj.getValue()) // Should return 42
  // Bug 3: Trying to reassign const object
  // const config = { debug: true }
  // config = { debug: false } // How can we change debug without reassigning?
})

// ============================================
// Bonus Challenge: Object Comparison
// ============================================
exercise('Bonus Challenge - Object Comparison', () => {
  // TODO: Create a function 'deepEqual' that takes two objects and returns true
  // if they have the same properties with the same values
  // For this exercise, assume objects only contain primitive values (no nested objects)
  // Test your function (uncomment after completing)
  // console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }))       // true
  // console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }))       // false
  // console.log(deepEqual({ a: 1, b: 2 }, { a: 1 }))             // false
  // console.log(deepEqual({ a: 1 }, { a: 1, b: undefined }))     // false
})

// ============================================
// Super Bonus: Config Manager
// ============================================
exercise('Super Bonus - Config Manager', () => {
  // TODO: Create a function 'createConfig' that returns a config manager object with:
  // - Private storage for config values
  // - get(key): returns value for key (supports nested keys like 'user.name')
  // - set(key, value): sets value for key (supports nested keys)
  // - reset(): clears all config
  // - getAll(): returns a copy of all config (use structuredClone or spread)
  // Test your config manager (uncomment after completing)
  // const config = createConfig()
  // config.set('theme', 'dark')
  // config.set('user.name', 'Alice')
  // config.set('user.email', 'alice@example.com')
  // console.log(config.get('theme'))
  // console.log(config.get('user.name'))
  // console.log(config.getAll())
})

console.log('=== End of Exercises ===')
console.log('Great job practicing objects!')

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
