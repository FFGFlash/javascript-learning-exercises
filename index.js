/**
 * @file Executes the various exercises within the javascript-learning-exercises repository.
 * @author Drake Taylor
 * @version 1.0.0
 */

import { execSync } from 'child_process'
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
// import { createTimer, formatTime, measureTime } from './@modules/timing.js'

// Simple debugger for checking how long the script takes to run
// const getElapsed = createTimer()
// process.on('exit', () => {
//   const elapsed = getElapsed()
//   console.log(`Execution time: ${formatTime(elapsed)}`)
// })

const LessonNumberRegex = /^(\d{3})-/
const ExerciseFileRegex = /^\d{3}-.*exercises\.js$/
const LessonFunctionRegex = /lesson\s*\(\s*(['"`])(.+?)\1\s*,/
const ConsoleLogRegex = /console\.log\s*\(\s*(['"`])===\s*(.+?)\s+Exercises\s*===\\n\1\s*\)/
const TitleCommentRegex = /\/\/ ={40,}\r?\n\/\/ (.+) Exercises/i

const CACHE_FILE = '.exercise-cache'

/**
 * Loads the cache from disk
 * @returns {ExerciseCache} The cached exercises
 */
function loadCache() {
  try {
    if (existsSync(CACHE_FILE)) {
      const cachedData = readFileSync(CACHE_FILE, 'utf-8')
      return JSON.parse(cachedData)
    }
  } catch {
    // If cache is corrupted, ignore it
    console.warn('Warning: Could not load cache, will rebuild')
  }
  return {}
}

/**
 * Saves the cache to disk
 * @param {ExerciseCache} cache - The cache data to save
 */
function saveCache(cache) {
  try {
    writeFileSync(CACHE_FILE, JSON.stringify(cache, null, 2), 'utf-8')
  } catch {
    // Silent fail - caching is optional
  }
}

/**
 * Extracts the exercise title from the given exercise file
 *
 * Tries multiple patterns in order of preference
 * 1. lesson('...', () => {}) function call
 * 2. console.log('=== ... Exercises ===\n')
 * 3. Comment header
 * @param {string} filePath - The path to the exercise file
 * @returns The title extracted from the exercise title
 */
function extractTitle(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8')

    const lessonMatch = content.match(LessonFunctionRegex)
    if (lessonMatch) return lessonMatch[2]

    const consoleMatch = content.match(ConsoleLogRegex)
    if (consoleMatch) return consoleMatch[2]

    const titleMatch = content.match(TitleCommentRegex)
    if (titleMatch) return titleMatch[1]

    return 'Unknown'
  } catch {
    return 'Unknown'
  }
}

/**
 * Discovers all exercise files in the project
 * @returns An object mapping lesson numbers to their exercise files
 */
function discoverExercises() {
  /** @type {Exercises} */
  const exercises = {}

  const cache = loadCache()
  let cacheUpdated = false

  // Get all directories that match the pattern: 001-, 002-, 003-
  const lessonDirs = readdirSync('.', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && LessonNumberRegex.test(dirent.name))
    .map(dirent => dirent.name)
    .sort()

  lessonDirs.forEach(dir => {
    const lessonNumber = dir.match(LessonNumberRegex)[1]

    // Find all exercise files in this directory
    const files = readdirSync(dir)
      .filter(file => ExerciseFileRegex.test(file))
      .sort()

    files.forEach(file => {
      const exerciseNumber = file.match(LessonNumberRegex)[1]
      const exercisePath = join(dir, file)

      // Check if we have this in cache
      const cacheKey = exercisePath
      let title = null

      // Use cached title if it exists
      if (cache[cacheKey]) {
        title = cache[cacheKey].title
      }

      // If not in cache extract the title
      if (!title) {
        title = extractTitle(exercisePath)

        // If the title was successfully extracted, update the cache
        if (title !== 'Unknown') {
          cache[cacheKey] = { title }
          cacheUpdated = true
        }
      }

      // If exercise number matches the lesson number, use simple key
      // Otherwise, use lesson/exercise format
      const key =
        exerciseNumber === lessonNumber ? lessonNumber : `${lessonNumber}/${exerciseNumber}`

      exercises[key] = {
        path: exercisePath,
        title,
        lessonNumber,
        exerciseNumber,
        dir,
      }
    })
  })

  // Save cache if it was updated
  if (cacheUpdated) saveCache(cache)

  return exercises
}

/**
 * Formats the exercise list for display
 * @param {Exercises} exercises - Object mapping of lesson numbers to their exercises.
 * @returns A formatted list of exercises for display.
 */
function formatExerciseList(exercises) {
  const lines = ['', '📚 Available Exercises:', '========================', '']

  let currentLesson = null

  Object.keys(exercises)
    .sort()
    .forEach(key => {
      const ex = exercises[key]

      // Add lesson seperator if we're on a new lesson
      if (ex.lessonNumber !== currentLesson) {
        if (currentLesson !== null) lines.push('')
        const lessonName = ex.dir.replace(LessonNumberRegex, '').replace(/-/g, ' ')
        lines.push(`  Lesson ${ex.lessonNumber}: ${lessonName}`)
        currentLesson = ex.lessonNumber
      }

      // Format the exercise line
      const keyPadded = key.padEnd(8)
      lines.push(`    ${keyPadded} - ${ex.title}`)
    })

  lines.push('')
  lines.push('Usage:')
  lines.push('  npm start <exercise>          Run a specific exercise (e.g., npm start 001)')
  lines.push('  npm start <lesson/exercise>   Run a nested exercise (e.g., npm start 004/001)')
  lines.push('  npm start all                 Run all exercises')
  lines.push('  npm start --list              Show this list')
  lines.push('')

  return lines.join('\n')
}

/**
 * Runs a specific exercise file
 * @param {string} exercisePath - The path to the exercise file
 * @param {string} title - The title of the exercise
 */
function runExercise(exercisePath, title) {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`Running: ${title}`)
  console.log(`File: ${exercisePath}`)
  console.log('='.repeat(60))
  console.log('')

  try {
    execSync(`node "${exercisePath}"`, { stdio: 'inherit' })
  } catch (error) {
    console.error(`\n❌ Error running exercise: ${error.message}`)
    process.exit(1)
  }
}

/**
 * Run all exercises in order
 * @param {Exercises} exercises - Object mapping containing all the exercises
 */
function runAllExercises(exercises) {
  const sortedKeys = Object.keys(exercises).sort((a, b) => {
    // Sort by lesson number first, then by exercise number
    const aLesson = exercises[a].lessonNumber
    const bLesson = exercises[b].lessonNumber
    const aExercise = exercises[a].exerciseNumber
    const bExercise = exercises[b].exerciseNumber

    if (aLesson !== bLesson) return aLesson.localeCompare(bLesson)
    return aExercise.localeCompare(bExercise)
  })

  console.log(`\n${'='.repeat(60)}`)
  console.log(`Running all ${sortedKeys.length} exercises`)
  console.log('='.repeat(60))

  sortedKeys.forEach((key, index) => {
    const ex = exercises[key]
    console.log(`\n[${index + 1}/${sortedKeys.length}] ${key}: ${ex.title}`)
    console.log('-'.repeat(60))

    try {
      execSync(`node "${ex.path}"`, { stdio: 'inherit' })
    } catch (error) {
      console.error(`\n❌ Error in ${key}: ${error.message}`)
      console.log('Continuing with next exercise...\n')
    }
  })

  console.log(`\n${'='.repeat(60)}`)
  console.log('✅ All exercises completed!')
  console.log('='.repeat(60))
  console.log('')
}

/**
 * Main entry point
 */
function main() {
  const args = process.argv.slice(2)
  const exercises = discoverExercises()

  if (args.length === 0 || args[0] === '--list' || args[0] === '-l') {
    console.log(formatExerciseList(exercises))
    return
  }

  const command = args[0]

  // Run all exercises
  if (command === 'all') {
    runAllExercises(exercises)
    return
  }

  // Run specific exercise
  if (exercises[command]) {
    const { path, title } = exercises[command]
    runExercise(path, title)
    return
  }

  // Exercise not found
  console.error(`\n❌ Exercise '${command}' not found.\n`)
  console.log('Available exercises:')
  console.log(formatExerciseList(exercises))
  process.exit(1)
}

// Run the script
main()
// measureTime('Executed main in', main)

/**
 * @typedef {Object} Exercise
 * @property {string} path
 * @property {string} title
 * @property {string} lessonNumber
 * @property {string} exerciseNumber
 * @property {string} dir
 */

/**
 * @typedef {Record<string, Exercise>} Exercises
 */

/**
 * @typedef {Object} ExerciseCacheData
 * @property {string} title
 */

/**
 * @typedef {Record<string, ExerciseCacheData>} ExerciseCache
 */
