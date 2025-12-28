// ============================================
// JavaScript Classes and Prototypes Exercises
// ============================================

// Instructions: Complete each exercise by writing code where indicated.
// Run this file with Node.js or in your browser console to see results.

lesson('JavaScript Classes and Prototypes', () => {
  // ============================================
  // Exercise 1: Creating Your First Class
  // ============================================
  exercise('Creating Your First Class', () => {
    // TODO: Create a class called 'Person' with:
    // - constructor that takes 'name' parameter
    // - method 'introduce' that returns "Hi, I'm [name]"
    // TODO: Create an instance and test it
    // const person = new Person('Alice')
    // console.log(person.introduce())
  })

  // ============================================
  // Exercise 2: Constructor Parameters
  // ============================================
  exercise('Constructor Parameters', () => {
    // TODO: Create a class 'Book' with:
    // - constructor taking: title, author, year
    // - Store all parameters as properties
    // TODO: Create a book instance and log its properties
    // const book = new Book('1984', 'George Orwell', 1949)
    // console.log(book.title, book.author, book.year)
  })

  // ============================================
  // Exercise 3: Class Methods
  // ============================================
  exercise('Class Methods', () => {
    // TODO: Create a class 'Rectangle' with:
    // - constructor taking width and height
    // - method 'area()' that returns width * height
    // - method 'perimeter()' that returns 2 * (width + height)
    // TODO: Create a rectangle and test both methods
    // const rect = new Rectangle(5, 10)
    // console.log('Area:', rect.area())
    // console.log('Perimeter:', rect.perimeter())
  })

  // ============================================
  // Exercise 4: Class Fields
  // ============================================
  exercise('Class Fields', () => {
    // TODO: Create a class 'Counter' with:
    // - field 'count' initialized to 0
    // - method 'increment()' that increases count by 1
    // - method 'getValue()' that returns current count
    // TODO: Create a counter and test it
    // const counter = new Counter()
    // counter.increment()
    // counter.increment()
    // console.log(counter.getValue())  // Should be 2
  })

  // ============================================
  // Exercise 5: Understanding 'this'
  // ============================================
  exercise('Understanding this', () => {
    class BankAccount {
      balance = 0

      deposit(amount) {
        this.balance += amount
        return this.balance
      }

      withdraw(amount) {
        this.balance -= amount
        return this.balance
      }
    }

    // TODO: Create an account
    // TODO: Deposit 100, then withdraw 30
    // TODO: Log the final balance

    // const account = new BankAccount()
    // account.deposit(100)
    // account.withdraw(30)
    // console.log('Balance:', account.balance)
  })

  // ============================================
  // Exercise 6: Multiple Instances
  // ============================================
  exercise('Multiple Instances', () => {
    class Student {
      constructor(name, grade) {
        this.name = name
        this.grade = grade
      }

      study() {
        console.log(`${this.name} is studying`)
      }
    }

    // TODO: Create two students with different names and grades
    // TODO: Call study() on both
    // TODO: Verify they have independent state

    // const student1 = new Student('Alice', 90)
    // const student2 = new Student('Bob', 85)
    // student1.study()
    // student2.study()
    // console.log(student1.name, student1.grade)
    // console.log(student2.name, student2.grade)
  })

  // ============================================
  // Exercise 7: this Context Problem
  // ============================================
  exercise('this Context Problem', () => {
    class Timer {
      seconds = 0

      tick() {
        this.seconds++
        return this.seconds
      }
    }

    const timer = new Timer()

    // TODO: Call timer.tick() directly - it works
    // console.log(timer.tick())

    // TODO: Store tick in a variable and call it
    // const tick = timer.tick
    // console.log(tick())  // What happens? Why?

    // This demonstrates why 'this' can be tricky
    console.log('Methods lose their context when passed around')
  })

  // ============================================
  // Exercise 8: Basic Inheritance with extends
  // ============================================
  exercise('Basic Inheritance with extends', () => {
    // TODO: Create a base class 'Animal' with:
    // - constructor taking 'name'
    // - method 'speak()' that logs "The animal makes a sound"
    // TODO: Create a class 'Dog' that extends Animal
    // - Override speak() to log "The dog barks"
    // TODO: Create a Dog instance and call speak()
    // const dog = new Dog('Rex')
    // dog.speak()
  })

  // ============================================
  // Exercise 9: Using super in Constructor
  // ============================================
  exercise('Using super in Constructor', () => {
    // TODO: Create a class 'Vehicle' with:
    // - constructor taking 'brand'
    // TODO: Create a class 'Car' that extends Vehicle with:
    // - constructor taking 'brand' and 'model'
    // - call super(brand)
    // - store model
    // TODO: Create a car and log both properties
    // const car = new Car('Toyota', 'Camry')
    // console.log(car.brand, car.model)
  })

  // ============================================
  // Exercise 10: Calling Parent Methods with super
  // ============================================
  exercise('Calling Parent Methods with super', () => {
    class Shape {
      constructor(color) {
        this.color = color
      }

      describe() {
        return `A ${this.color} shape`
      }
    }

    // TODO: Create a class 'Circle' that extends Shape
    // - constructor takes color and radius
    // - method describe() that calls super.describe() and adds radius info

    // const circle = new Circle('red', 5)
    // console.log(circle.describe())
    // Should output something like: "A red shape with radius 5"
  })

  // ============================================
  // Exercise 11: instanceof Operator
  // ============================================
  exercise('instanceof Operator', () => {
    class Animal {}
    class Dog extends Animal {}
    class Cat extends Animal {}

    const dog = new Dog()
    const cat = new Cat()

    // TODO: Check if dog is instance of Dog
    // TODO: Check if dog is instance of Animal
    // TODO: Check if dog is instance of Cat

    // console.log(dog instanceof Dog)     // true
    // console.log(dog instanceof Animal)  // true
    // console.log(dog instanceof Cat)     // false
  })

  // ============================================
  // Exercise 12: Classes Are Objects
  // ============================================
  exercise('Classes Are Objects', () => {
    class User {
      constructor(name) {
        this.name = name
      }
    }

    const user = new User('Alice')

    // TODO: Check the type of user
    // TODO: Check if user is an instance of User
    // TODO: Try accessing user like an object

    // console.log(typeof user)              // 'object'
    // console.log(user instanceof User)     // true
    // console.log(Object.keys(user))        // ['name']
  })

  // ============================================
  // Exercise 13: Getter Methods
  // ============================================
  exercise('Getter Methods', () => {
    // TODO: Create a class 'Temperature' with:
    // - field 'celsius'
    // - getter 'fahrenheit' that converts celsius to fahrenheit
    // Formula: F = C * 9/5 + 32
    // class Temperature {
    //   constructor(celsius) {
    //     this.celsius = celsius
    //   }
    //
    //   get fahrenheit() {
    //     return this.celsius * 9/5 + 32
    //   }
    // }
    // const temp = new Temperature(25)
    // console.log(temp.fahrenheit)  // Use like a property, not a method!
  })

  // ============================================
  // Exercise 14: Setter Methods
  // ============================================
  exercise('Setter Methods', () => {
    // TODO: Create a class 'Person' with:
    // - private field '_age'
    // - getter 'age' that returns _age
    // - setter 'age' that validates age is positive before setting
    // class Person {
    //   _age = 0
    //
    //   get age() {
    //     return this._age
    //   }
    //
    //   set age(value) {
    //     if (value < 0) {
    //       throw new Error('Age cannot be negative')
    //     }
    //     this._age = value
    //   }
    // }
    // const person = new Person()
    // person.age = 25
    // console.log(person.age)
    // person.age = -5  // Should throw error
  })

  // ============================================
  // Exercise 15: Static Methods
  // ============================================
  exercise('Static Methods', () => {
    // TODO: Create a class 'MathHelper' with:
    // - static method 'square(n)' that returns n * n
    // - static method 'cube(n)' that returns n * n * n
    // Static methods are called on the class, not instances
    // class MathHelper {
    //   static square(n) {
    //     return n * n
    //   }
    //
    //   static cube(n) {
    //     return n * n * n
    //   }
    // }
    // console.log(MathHelper.square(5))  // 25
    // console.log(MathHelper.cube(3))    // 27
  })

  // ============================================
  // Exercise 16: Practical Challenge - Todo Class
  // ============================================
  exercise('Practical Challenge - Todo Class', () => {
    // TODO: Create a class 'Todo' with:
    // - constructor taking 'title'
    // - field 'completed' initialized to false
    // - method 'toggle()' that flips completed state
    // - method 'display()' that returns formatted string
    // class Todo {
    //   constructor(title) {
    //     this.title = title
    //     this.completed = false
    //   }
    //
    //   toggle() {
    //     this.completed = !this.completed
    //   }
    //
    //   display() {
    //     const status = this.completed ? '✓' : ' '
    //     return `[${status}] ${this.title}`
    //   }
    // }
    // const todo = new Todo('Learn JavaScript')
    // console.log(todo.display())
    // todo.toggle()
    // console.log(todo.display())
  })

  // ============================================
  // Exercise 17: Practical Challenge - Shopping Cart
  // ============================================
  exercise('Practical Challenge - Shopping Cart', () => {
    // TODO: Create classes:
    // - CartItem: constructor(name, price, quantity)
    // - ShoppingCart: manages array of CartItems
    //   - addItem(item)
    //   - removeItem(name)
    //   - getTotal()
    //   - getItemCount()
    // Test it (uncomment after completing)
    // const cart = new ShoppingCart()
    // cart.addItem(new CartItem('Apple', 1.5, 3))
    // cart.addItem(new CartItem('Bread', 2.5, 1))
    // console.log('Total:', cart.getTotal())
    // console.log('Items:', cart.getItemCount())
  })

  // ============================================
  // Exercise 18: Practical Challenge - Bank Account System
  // ============================================
  exercise('Practical Challenge - Bank Account System', () => {
    // TODO: Create a class hierarchy:
    // - BankAccount (base class)
    //   - balance, deposit(), withdraw()
    // - SavingsAccount extends BankAccount
    //   - interestRate, addInterest()
    // - CheckingAccount extends BankAccount
    //   - overdraftLimit
    // Demonstrate inheritance and method overriding
  })

  // ============================================
  // Exercise 19: Practical Challenge - Game Character
  // ============================================
  exercise('Practical Challenge - Game Character', () => {
    // TODO: Create a class 'Character' with:
    // - name, health, maxHealth
    // - takeDamage(amount)
    // - heal(amount)
    // - isAlive()
    // TODO: Create a class 'Player' that extends Character with:
    // - level, experience
    // - gainExperience(amount)
    // - levelUp() when experience reaches threshold
    // This demonstrates game object modeling
  })

  // ============================================
  // Exercise 20: Classes vs Object Literals
  // ============================================
  exercise('Classes vs Object Literals', () => {
    // With object literal:
    const user1 = {
      name: 'Alice',
      greet() {
        return `Hi, I'm ${this.name}`
      },
    }

    // With class:
    class User {
      constructor(name) {
        this.name = name
      }

      greet() {
        return `Hi, I'm ${this.name}`
      }
    }

    const user2 = new User('Bob')

    // TODO: Consider when to use each approach
    // - Object literal: single instance, simple data
    // - Class: multiple instances, shared behavior, inheritance

    console.log(user1.greet())
    console.log(user2.greet())
  })

  // ============================================
  // Exercise 21: Private Fields (Modern JavaScript)
  // ============================================
  exercise('Private Fields (Modern JavaScript)', () => {
    // TODO: Create a class with private fields using #
    // Private fields are truly private and cannot be accessed outside the class
    // class BankAccount {
    //   #balance = 0  // Private field
    //
    //   deposit(amount) {
    //     this.#balance += amount
    //   }
    //
    //   getBalance() {
    //     return this.#balance
    //   }
    // }
    // const account = new BankAccount()
    // account.deposit(100)
    // console.log(account.getBalance())  // Works
    // console.log(account.#balance)      // SyntaxError!
  })

  // ============================================
  // Exercise 22: Method Chaining
  // ============================================
  exercise('Method Chaining', () => {
    // TODO: Create a class 'Calculator' with chainable methods
    // Each method should return 'this' to enable chaining
    // class Calculator {
    //   value = 0
    //
    //   add(n) {
    //     this.value += n
    //     return this  // Enable chaining
    //   }
    //
    //   multiply(n) {
    //     this.value *= n
    //     return this
    //   }
    //
    //   getResult() {
    //     return this.value
    //   }
    // }
    // const result = new Calculator()
    //   .add(5)
    //   .multiply(2)
    //   .add(3)
    //   .getResult()
    // console.log(result)  // 13
  })

  // ============================================
  // Exercise 23: Factory Pattern with Classes
  // ============================================
  exercise('Factory Pattern with Classes', () => {
    // TODO: Create a class 'User' with a static factory method
    // class User {
    //   constructor(name, role) {
    //     this.name = name
    //     this.role = role
    //   }
    //
    //   static createAdmin(name) {
    //     return new User(name, 'admin')
    //   }
    //
    //   static createGuest() {
    //     return new User('Guest', 'guest')
    //   }
    // }
    // const admin = User.createAdmin('Alice')
    // const guest = User.createGuest()
    // console.log(admin.role, guest.role)
  })

  // ============================================
  // Exercise 24: Fix the Bugs
  // ============================================
  exercise('Fix the Bugs', () => {
    // Bug 1: Forgetting 'new' keyword
    // class Person {
    //   constructor(name) { this.name = name }
    // }
    // const person = Person('Alice')  // Error!

    // Bug 2: Not calling super()
    // class Employee extends Person {
    //   constructor(name, role) {
    //     this.role = role  // Error: must call super first
    //   }
    // }

    // Bug 3: Accessing private field incorrectly
    // class Account {
    //   #balance = 0
    //   getBalance() {
    //     return this.balance  // Should be this.#balance
    //   }
    // }

    // Bug 4: Losing 'this' context
    // class Timer {
    //   count = 0
    //   increment() { this.count++ }
    // }
    // const timer = new Timer()
    // const inc = timer.increment
    // inc()  // Error: 'this' is undefined

    console.log('Review and fix the bugs above')
  })

  // ============================================
  // Bonus Challenge: Observable Pattern
  // ============================================
  exercise('Bonus Challenge - Observable Pattern', () => {
    // TODO: Create a class 'Observable' with:
    // - subscribe(callback) - adds observer
    // - unsubscribe(callback) - removes observer
    // - notify(data) - calls all observers with data
    // class Observable {
    //   observers = []
    //
    //   subscribe(callback) {
    //     this.observers.push(callback)
    //   }
    //
    //   unsubscribe(callback) {
    //     this.observers = this.observers.filter(obs => obs !== callback)
    //   }
    //
    //   notify(data) {
    //     this.observers.forEach(obs => obs(data))
    //   }
    // }
    // const observable = new Observable()
    // observable.subscribe(data => console.log('Observer 1:', data))
    // observable.subscribe(data => console.log('Observer 2:', data))
    // observable.notify('Hello!')
  })

  // ============================================
  // Super Bonus: Implementing a Linked List
  // ============================================
  exercise('Super Bonus - Implementing a Linked List', () => {
    // TODO: Create classes for a linked list:
    // - Node class: value, next
    // - LinkedList class: head, append(value), prepend(value), find(value)

    // This demonstrates how classes model data structures

    // class Node {
    //   constructor(value) {
    //     this.value = value
    //     this.next = null
    //   }
    // }
    //
    // class LinkedList {
    //   head = null
    //
    //   append(value) {
    //     const node = new Node(value)
    //     if (!this.head) {
    //       this.head = node
    //       return
    //     }
    //     let current = this.head
    //     while (current.next) {
    //       current = current.next
    //     }
    //     current.next = node
    //   }
    // }

    console.log('Implement a linked list using classes')
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
