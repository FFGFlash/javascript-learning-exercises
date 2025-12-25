const IS_NODE = typeof process !== 'undefined' && process.hrtime && process.hrtime.bigint
const HAS_PERF_NOW = typeof performance !== 'undefined' && performance.now

/**
 * Creates a high-precision timer that works in both Node.js and browsers
 * @returns A function that returns the elapsed tim in milliseconds
 */
export function createTimer() {
  if (IS_NODE) {
    const start = process.hrtime.bigint()
    return () => Number(process.hrtime.bigint() - start) / 1_000_000
  } else if (HAS_PERF_NOW) {
    const start = performance.now()
    return () => performance.now() - start
  } else {
    const start = Date.now()
    return () => Date.now() - start
  }
}

/**
 * Formats time in a human-readable way
 * @param {number} ms - Time in milliseconds
 * @returns Formatted time string
 */
export function formatTime(ms) {
  if (ms < 0.001) return `${(ms * 1_000_000).toFixed(2)}ns`
  if (ms < 1) return `${(ms * 1000).toFixed(2)}μs`
  if (ms < 1000) return `${ms.toFixed(2)}ms`
  if (ms < 60000) return `${(ms / 1000).toFixed(2)}s`
  const minutes = Math.floor(ms / 60000)
  const seconds = ((ms % 60000) / 1000).toFixed(2)
  return `${minutes}m ${seconds}s`
}

/**
 * Measures execution time of a function
 * @template TReturn
 * @template {any[]} TArgs
 * @param {string} label - Description of what's being measured
 * @param {(...args: TArgs) => TReturn} fn - Function to measure
 * @param {TArgs} args
 * @returns {TReturn} The return value of the function
 */
export function measureTime(label, fn, ...args) {
  const getElapsed = createTimer()
  const result = fn(...args)
  const elapsed = getElapsed()

  console.log('')
  console.log(`⏱️  ${label}: ${formatTime(elapsed)}`)
  return result
}

/**
 * Async Version: Measures execution time of an async function
 * @template TReturn
 * @template {any[]} TArgs
 * @param {string} label - Description of what's being measured
 * @param {(...args: TArgs) => Promise<TReturn>} fn - Async function to measure
 * @param {TArgs} args
 * @returns {Promise<TReturn>} The return value of the function
 */
export async function measureTimeAsync(label, fn, ...args) {
  const getElapsed = createTimer()
  const result = await fn(...args)
  const elapsed = getElapsed()

  console.log('')
  console.log(`⏱️  ${label}: ${formatTime(elapsed)}`)
  return result
}
