import { measureTimeAsync } from './timing'

/**
 * Helper function to format lesson output and reduce repetition
 * @param {string} name - The name of lesson
 * @param {() => void | Promise<void>} fn - A callback containing all the execises
 */
export async function lesson(name, fn) {
  console.log(`=== ${name} Exercises ===\n`)

  await measureTimeAsync(name, fn)

  console.log('')
  console.log('=== End of Exercises ===')
  console.log(`Great job practicing ${name}!`)
}

/**
 * Helper function to format exercise output and reduce repetition.
 * @param {string} name - The name of the exercise.
 * @param {() => void | Promise<void>} fn - A callback containing the code related to the exercise.
 */
export async function exercise(name, fn) {
  console.log(`Exercise ${++exercise.counter}: ${name}`)
  try {
    await measureTimeAsync(name, fn)
  } catch (e) {
    console.error(e)
  } finally {
    console.log('')
  }
}

exercise.counter = 0
