/**
 * Helper function to format exercise output and reduce repetition.
 * @param {string} name - The name of the exercise.
 * @param {() => void | Promise<void>} fn - A callback containing the code related to the exercise.
 */
export async function exercise(name, fn) {
  console.log(`Exercise ${++exercise.counter}: ${name}`)
  try {
    await fn()
  } catch (e) {
    console.error(e)
  } finally {
    console.log('')
  }
}

exercise.counter = 0
