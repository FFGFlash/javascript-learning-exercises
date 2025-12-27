let exercises = {}
let lineCount = 0

// Load exercise cache
async function loadExercises() {
  try {
    const response = await fetch('./exercises.cache.json')
    if (!response.ok) {
      throw new Error('Cache file not found. Run `npm start` to generate it.')
    }

    const cache = await response.json()
    exercises = cache

    populateDropdown()
    hideError()
  } catch (error) {
    showError(error.message)
    addToConsole('Failed to load exercise cache: ' + error.message, 'error')
  }
}

// Populate the dropdown with exercises
function populateDropdown() {
  const select = document.getElementById('exerciseSelect')
  select.innerHTML = '<option value="">-- Select an exercise --</option>'

  // Group by lesson
  const grouped = {}
  for (const [key, ex] of Object.entries(exercises)) {
    if (!grouped[ex.lessonNumber]) {
      grouped[ex.lessonNumber] = []
    }
    grouped[ex.lessonNumber].push({ key, ...ex })
  }

  // Add options grouped by lesson
  for (const [lessonNum, exs] of Object.entries(grouped).sort()) {
    const optgroup = document.createElement('optgroup')
    optgroup.label = `Lesson ${lessonNum}: ${exs[0].dir.replace(/^\d{3}-/, '').replace(/-/g, ' ')}`

    exs.sort((a, b) => a.exerciseNumber.localeCompare(b.exerciseNumber))

    for (const ex of exs) {
      const option = document.createElement('option')
      option.value = ex.key
      option.textContent = `${ex.key} - ${ex.title}`
      optgroup.appendChild(option)
    }

    select.appendChild(optgroup)
  }

  const sessionData = sessionStorage.getItem('selected-exercise')
  if (sessionData) {
    select.value = sessionData
    updateExerciseInfo()
  }

  // Update exercise info on selection
  select.addEventListener('change', updateExerciseInfo)

  select.disabled = false
}

// Update the exercise info display
function updateExerciseInfo() {
  const select = document.getElementById('exerciseSelect')
  const key = select.value
  sessionStorage.setItem('selected-exercise', key)

  const infoBox = document.getElementById('exerciseInfo')
  if (!infoBox) return

  if (!key) {
    infoBox.classList.remove('active')
    return
  }

  const ex = exercises[key]
  document.getElementById('exerciseTitle').textContent = ex.title
  document.getElementById('exercisePath').textContent = ex.path
  document.getElementById('exerciseLesson').textContent = `${ex.lessonNumber} - ${ex.dir}`

  infoBox.classList.add('active')
}

// Run the selected exercise
window.runExercise = async function () {
  const select = document.getElementById('exerciseSelect')
  const key = select.value

  if (!key) {
    addToConsole('Please select an exercise first', 'warn')
    return
  }

  const ex = exercises[key]
  const runBtn = document.getElementById('runBtn')

  try {
    clearConsole()
    runBtn.disabled = true
    runBtn.innerHTML = '<span class="loading"></span> Running...'
    updateStatus('Running')

    addToConsole(`${'='.repeat(60)}`, 'info')
    addToConsole(`Running: ${ex.title}`, 'info')
    addToConsole(`File: ${ex.path}`, 'info')
    addToConsole(`${'='.repeat(60)}`, 'info')
    addToConsole('', 'log')

    // Try dynamic import first (works for ES modules)
    try {
      // Add timestamp to bypass cache
      const modulePath = `/${ex.path}?t=${Date.now()}`
      await import(modulePath)
      addToConsole('', 'log')
      addToConsole(`${'='.repeat(60)}`, 'success')
      addToConsole('✅ Exercise completed successfully!', 'success')
      addToConsole(`${'='.repeat(60)}`, 'success')
      updateStatus('Complete')
    } catch (importError) {
      // If dynamic import fails, try fetch + eval (for non-module scripts)
      console.log('Dynamic import failed, trying fetch...', importError)

      const response = await fetch(ex.path)
      if (!response.ok) {
        throw new Error(`Failed to load ${ex.path}`)
      }

      const code = await response.text()

      // Check if it's a module (has import/export)
      if (code.includes('import ') || code.includes('export ')) {
        throw new Error(
          "This exercise uses ES Modules. Make sure you're serving through a web server."
        )
      }

      // Execute the code
      eval(code)

      addToConsole('', 'log')
      addToConsole(`${'='.repeat(60)}`, 'success')
      addToConsole('✅ Exercise completed successfully!', 'success')
      addToConsole(`${'='.repeat(60)}`, 'success')
      updateStatus('Complete')
    }
  } catch (error) {
    console.error('Exercise error:', error)
    addToConsole('', 'log')
    addToConsole(`${'='.repeat(60)}`, 'error')
    addToConsole(`❌ Error: ${error.message}`, 'error')
    if (error.stack) {
      addToConsole(error.stack, 'error')
    }
    addToConsole(`${'='.repeat(60)}`, 'error')
    updateStatus('Error')
  } finally {
    runBtn.disabled = false
    runBtn.innerHTML = '▶️ Run Exercise'
  }
}

// Console capture and display
const consoleOutput = document.getElementById('consoleOutput')
const originalLog = console.log
const originalError = console.error
const originalWarn = console.warn
const originalInfo = console.info

function addToConsole(message, type = 'log') {
  const div = document.createElement('div')
  div.className = type
  div.textContent = message
  consoleOutput.appendChild(div)
  consoleOutput.scrollTop = consoleOutput.scrollHeight

  lineCount++
  document.getElementById('lineCount').textContent = lineCount
}

function formatArgs(args) {
  return args
    .map(arg => {
      if (typeof arg !== 'object' || arg === null) return String(arg)
      try {
        return JSON.stringify(arg)
      } catch {
        return String(arg)
      }
    })
    .join(' ')
}

console.log = (...args) => {
  originalLog.apply(console, args)
  addToConsole(formatArgs(args), 'log')
}

console.error = (...args) => {
  originalError.apply(console, args)
  addToConsole(formatArgs(args), 'error')
}

console.warn = (...args) => {
  originalWarn.apply(console, args)
  addToConsole(formatArgs(args), 'warn')
}

console.info = (...args) => {
  originalInfo.apply(console, args)
  addToConsole(formatArgs(args), 'info')
}

window.clearConsole = function () {
  consoleOutput.innerHTML = ''
  lineCount = 0
  document.getElementById('lineCount').textContent = '0'
  updateStatus('Ready')
}

function updateStatus(status) {
  document.getElementById('status').textContent = status
}

function showError(message) {
  const errorBox = document.getElementById('errorBox')
  const errorMessage = document.getElementById('errorMessage')
  errorMessage.textContent = message
  errorBox.style.display = 'block'
}

function hideError() {
  document.getElementById('errorBox').style.display = 'none'
}

// Handle global errors
window.addEventListener('error', event => {
  addToConsole(`Global Error: ${event.message}`, 'error')
  if (event.filename) {
    addToConsole(`  at ${event.filename}:${event.lineno}:${event.colno}`, 'error')
  }
})

window.addEventListener('unhandledrejection', event => {
  addToConsole(`Unhandled Promise Rejection: ${event.reason}`, 'error')
})

// Initialize
loadExercises()
