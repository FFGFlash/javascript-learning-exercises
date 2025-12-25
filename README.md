# JavaScript Learning Exercises

A collection of hands-on exercises to help you learn JavaScript fundamentals.

## Prerequisites

You'll either need a browser with DevTools or Node.js and a code editor
installed on your computer to run these exercises.

[Click here](#installing-nodejs) to learn more about installing node.js

### Installing Node.js

#### Windows

1. Go to [Node.js](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts
4. Restart your terminal/command prompt after installation

#### maxOS

##### Option 1: Official Installer

1. Go to [Node.js](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Run the installer and follow the prompts

##### Option 2: Using Homebrew (if you have Homebrew installed)

```bash
brew install node
```

#### Linux (Ubuntu/Debian)

```bash
# Using NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Verify Installation

After installing, verify Node.js is installed correctly:

```bash
node --version
npm --version
```

You should see version numbers for both commands.

### Installing Visual Studio Code (Recommended)

#### All Platforms

1. Visit [code.visualstudio.com](https://code.visualstudio.com/)
2. Download the version for your operating system
3. Run the installer and follow the prompts

Windows: Make sure to check "Add to PATH" during installation for easier terminal access.

macOS: After installation, open VSCode and press `Cmd+Shift+P`, type "shell command", and select "Install 'code' command in PATH".

#### Verify Installation

```bash
code --version
```

If this works, you can open files and folders from the terminal:

```bash
code .              # Opens current directory
code filename.js    # Opens a specific file
```

### Recommended VSCode Extensions

Install these extensions to enhance your JavaScript learning experience:

#### Installing Extensions

##### Method 1: Using the command palette (recommended)

1. Press `Ctrl+P` (Windows/Linux) or `Cmd+P` (Mac)
2. Paste the extension command (e.g., `ext install dbaeumer.vscode-eslint`)
3. Press Enter

##### Method 2: Using the Extensions sidebar

1. Click the Extensions icon in the sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search for the extension name
3. Click "Install"

#### Essential Extensions

1. ESLint (`dbaeumer.vscode-eslint`)
   - Helps catch errors and enforce code quality
   - Install: `ext install dbaeumer.vscode-eslint`
2. Prettier - Code formatter (`esbenp.prettier-vscode`)
   - Automatically formats your code consistently
   - Install: `ext install esbenp.prettier-vscode`
3. JavaScript (ES6) code snippets (`xabikos.JavaScriptSnippets`)
   - Provides helpful code snippets and shortcuts
   - Install: `ext install xabikos.JavaScriptSnippets`

#### Helpful Extensions

1. Path Intellisense (`christian-kohler.path-intellisense`)
   - Autocompletes file paths
   - Install: `ext install christian-kohler.path-intellisense`
2. Better Comments (`aaron-bond.better-comments`)
   - Makes your comments more colorful and organized
   - Install: `ext install aaron-bond.better-comments`
3. Code Runner (`formulahendry.code-runner`)
   - Run JavaScript code directly from the editor
   - Install: `ext install formulahendry.code-runner`
   - Use: Right-click in your file and select "Run Code" or press Ctrl+Alt+N
4. Bracket Pair Colorizer (built into VSCode now!)
   - Colors matching brackets - now built-in to VSCode
   - Enable: Add to settings.json: "editor.bracketPairColorization.enabled": true

### Recommended VSCode Settings

Add these to your VSCode settings for a better experience:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.tabSize": 2,
  "editor.detectIndentation": true,
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "javascript.suggest.autoImports": true,
  "javascript.updateImportsOnFileMove.enabled": "always"
}
```

### Alternative Code Editors

While VSCode is recommended, there are also good alternatives:

- Sublime Text: Fast and Lightweight - [sublimetext.com](https://www.sublimetext.com/)
- WebStorm: Full-featured IDE (paid) - [jetbrains.com/webstorm](https://www.jetbrains.com/webstorm/)
  - Has a free non-commercial license for learning and hobby development

#### Method 1: Open Settings via Menu

1. Open Settings `Ctrl+,` (Windows/Linux) or `Cmd+,` (Mac)
2. Click the "Open Settings (JSON)" icon in the top-right

#### Method 2: Open Settings via Command palette

1. Press `Ctrl+Shift+P` (Windows/Linux) or `Cmd+Shift+P` (Mac)
2. Type "Preferences: Open User Settings (JSON)"
3. Press Enter

## Getting Started

1. Clone or download this repository to your computer
2. Navigate to the project directory in your terminal:

```bash
cd path/to/javascript-exercises
code .
```

3. Install dependencies (optional, only needed for npm scripts):

```bash
npm install
```

## Running Exercises

### Method 1: Using `npm start` (Recommended)

The easiest way to run exercises is using the built-in exercise runner:

```bash
# List all available exercises
npm start --list
# or
npm start

# Run specific exercises
npm start 001 # Basic Syntax and Types
npm start 002 # Control Flow
npm start 003 # Loops and Iteration

# Run nested exercises (lessons with multiple exercise files)
npm start 004/001 # Functions lesson, but with exercise 001 refactored

# Run all exercises in order
npm start all
```

The exercise runner automatically discovers all exercises in your project and organizes
them by lesson.

If you're having issues running the script, make sure your terminal's
current working directory is the directory containing `package.json`.

### Method 2: Using node directly

You can also run exercises directly with node:

```bash
node "001-Basic Syntax and Types\001-exercises.js"
node "002-Control Flow\002-exercises.js"
node "003-Loops and Iteration\003-exercises.js"
# ... and so on
```

### Method 3: Using Code Runner extension (VSCode)

If you installed the Code Runner extension:

1. Open the exercise file
2. Right-click in the edtior
3. Select "Run Code" or press `Ctrl+Alt+N` (Windows/Linux) or `Cmd+Alt+N` (Mac)

### Method 4: Using a browser based code editor and runtime

1. Go to [JSFiddle](https://jsfiddle.net/)
2. Copy and paste the exercise code in the JavaScript section (Select all `Ctrl+A`/`Cmd+A`, Copy `Ctrl+C`/`Cmd+C`, and Paste `Ctrl+V`/`Cmd+V`)
3. Press `Run` to execute the script

### Method 5: Using the browser console

1. Open your browser's Developer Tools (`F12`, `Fn + F12`, `Ctrl+Shift+I`, or `Cmd+Shift+I`)
2. Go to the Console tab
3. Copy and paste the exercise code (Select all `Ctrl+A`/`Cmd+A`, Copy `Ctrl+C`/`Cmd+C`, and Paste `Ctrl+V`/`Cmd+V`)

## Exercise Structure

Each exercise file follows this pattern:

1. Instructions at the top of the file
2. Numbered exercises with TODO comments
3. Test code (commented out) to verify your solutions
4. Comments explaining what to do

### Working Through an Exercise

1. Open the exercise file in your code editor
2. Read the instructions for each exercise
3. Complete the TODO sections
4. Uncomment the test code to verify your solution
5. Run the file to see the results

Example:

```js
// TODO: Create a variable called 'name' with your name

// Uncomment to test:
// console.log(name)
```

After completing the TODO:

```js
const name = 'Alice'

// Uncomment to test:
console.log(name)
```

## Tips for Success

- Read the lesson documents first before attempting exercises
- Complete exercises in order - they build on each other
- Don't skip the basics - foundational concepts are crucial
- Experiment freely - try things beyond the exercises
- Use `console.log()` liberally to understand what's happening
- Read error messages carefully - they often tell you exactly what's wrong.
- Take breaks when you're stuck - fresh eyes help!

## VSCode Keyboard Shortcuts (Essential)

### General

- `Ctrl+P` / `Cmd+P` - Quick file open
- `Ctrl+Shift+P` / `Cmd+Shift+P` - Command palette
- `Ctrl+B` / `Cmd+B` - Toggle sidebar
- `` Ctrl+` `` / `` Cmd+` `` - Toggle terminal

### Editing

- `Ctrl+/` / `Cmd+/` - Toggle line comment
- `Shift+Alt+F` / `Shift+Option+F` - Format document
- `Alt+Up/Down` / `Option+Up/Down` - Move line up/down
- `Ctrl+D` / `Cmd+D` - Select next occurrence
- `Ctrl+Space` - Trigger suggestion
- `F2` - Rename Symbol

### Running Code

- `Ctrl+Alt+N` / `Cmd+Alt+N` - Run code (with Code Runner extension)

## Common Issues

### "node is not recognized as an internal or external command"

This means Node.js isn't in your system PATH. Try:

- Restarting your terminal/command prompt
- Restarting your computer
- Reinstalling Node.js
- Manually adding Node.js to your PATH

### "Cannot find module"

Make sure you're in the correct directory:

```bash
pwd   # On Mac/Linux
cd    # On Windows
```

### Syntax Errors

Double-check:

- All brackets, braces, and parentheses are matched: `()`, `{}`, `[]`
- Strings are properly quoted: `'`, `` ` ``, `"`

### VSCode Terminal Not Working

If the terminal doesn't work:

- Try using an external terminal instead
- Check your default shell settings in VSCode
- On Windows, try switching to Command Prompt or PowerShell

## Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [JavaScript.info](https://javascript.info/)
- [Node.js Documentation](https://nodejs.org/docs/latest/api/)
- [VSCode JavaScript Tutorial](https://code.visualstudio.com/docs/languages/javascript)
- [VSCode Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

## Lesson Guide

- [000. Introductions](./000-Introductions/README.md)
- [001. Basic Syntax and Types](./001-Basic%20Syntax%20and%20Types/README.md)
- [002. Control Flow](./002-Control%20Flow/README.md)
- [003. Loops and Iteration](./003-Loops%20and%20Iteration/README.md)
- [004. Functions](./004-Functions/README.md)
- [005. Scope and Closures](./005-Scope%20and%20Closures/README.md)
- [006. Objects](./006-Objects/README.md)
- [007. Arrays](./007-Arrays/README.md)

## Getting Help

If you're stuck:

1. Re-read the lesson document for that topic
2. Check the commented hints in the exercise
3. Look at the test code to understand expected result
4. Try breaking the problem into smaller steps
5. Search for JavaScript documentation on MDN

Happy coding! 🚀
