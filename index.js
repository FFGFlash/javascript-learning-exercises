import { execSync } from 'child_process'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'

const LessonNumberRegex = /^(\d{3})-/
const ExerciseFileRegex = /^\d{3}-.*exercises\.js$/
const TitleRegex = /\/\/ ={40,}\r?\n\/\/ (.+) Exercises/i

/**
 * Discovers all exercise files in the project
 * @returns An object mapping lesson numbers to their exercise files
 */
function discoverExercises() {
  /** @type {Exercises} */
  const exercises = {}

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

      // Read the first few lines to get the title of the exercise
      const content = readFileSync(exercisePath, 'utf-8')
      const titleMatch = content.match(TitleRegex)
      const title = titleMatch ? titleMatch[1] : 'Unknown'

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
