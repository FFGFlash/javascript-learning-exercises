import { measureTime, measureTimeAsync } from './timing.js'

let counter = 0

/**
 * Helper function to format lesson output and reduce repetition
 * @param {string} name - The name of lesson
 * @param {() => void} fn - A callback containing all the execises
 */
export async function lesson(name, fn) {
  console.log(`=== ${name} Exercises ===\n`)

  measureTime(name, fn)

  console.log('')
  console.log('=== End of Exercises ===')
  console.log(`Great job practicing ${name}!`)
}

/**
 * Helper function to format exercise output and reduce repetition.
 * @param {string} name - The name of the exercise.
 * @param {() => void} fn - A callback containing the code related to the exercise.
 */
export function execise(name, fn) {
  console.log(`Exercise ${++counter}: ${name}`)
  measureTime(name, () => {
    try {
      fn()
    } catch (e) {
      console.error(e)
    } finally {
      console.log('')
    }
  })
}

/**
 * Helper function to format lesson output and reduce repetition
 * @param {string} name - The name of lesson
 * @param {() => Promise<void>} fn - A callback containing all the execises
 */
export async function lessonAsync(name, fn) {
  console.log(`=== ${name} Exercises ===\n`)

  await measureTimeAsync(name, fn)

  console.log('')
  console.log('=== End of Exercises ===')
  console.log(`Great job practicing ${name}!`)
}

/**
 * Helper function to format exercise output and reduce repetition.
 * @param {string} name - The name of the exercise.
 * @param {() => Promise<void>} fn - A callback containing the code related to the exercise.
 */
export async function exerciseAsync(name, fn) {
  console.log(`Exercise ${++counter}: ${name}`)
  await measureTimeAsync(name, () => {
    try {
      fn()
    } catch (e) {
      console.error(e)
    } finally {
      console.log('')
    }
  })
}
