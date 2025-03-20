# futurewomenQA

## Playwright Automation

## 🚀 How to Setup the Project

Follow these steps to set up the project on your system.

### 🖥️ Windows
1. **Install Node.js** (if not installed):  
   Download and install [Node.js](https://nodejs.org/)
2. **Clone the Repository**:  
   ```sh
   git clone <your-repo-url>
   cd <your-project-folder>
   ```
3. **Install Dependencies**:  
   ```sh
   npm install
   ```
4. **Install Playwright Browsers**:  
   ```sh
   npx playwright install
   ```

### 🍏 macOS
1. **Install Homebrew (if not installed)**:  
   ```sh
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
2. **Install Node.js**:  
   ```sh
   brew install node
   ```
3. **Follow Steps 2-4 from Windows Setup**

---

## 📂 Folder Structure

```
📦 your-project-folder
├── 📂 tests           # Contains Playwright test files
│   ├── login.spec.ts  # Example test for login functionality
│   ├── home.spec.ts   # Example test for home page
│   ├── api/          # API test cases
│   └── ui/           # UI test cases
├── 📂 pages           # Page Object Model (POM) files
│   ├── loginPage.ts  # Methods for login page interactions
│   ├── homePage.ts   # Methods for home page interactions
├── 📂 utils           # Utility functions and common helpers
│   ├── config.ts     # Configuration settings (URLs, credentials)
│   ├── helpers.ts    # Common utility functions
├── 📂 reports         # Stores test reports (ignored in .gitignore)
├── 📜 playwright.config.ts  # Playwright configuration file
├── 📜 package.json   # Node.js dependencies and scripts
├── 📜 .gitignore      # Files ignored by Git
```

### 📌 Explanation of Key Folders
- **`tests/`** → Contains all test scripts (UI & API tests).
- **`pages/`** → Implements the Page Object Model for structured automation.
- **`utils/`** → Contains helper functions, configurations, and utilities.
- **`reports/`** → Stores test reports (Playwright generates reports here).
- **`playwright.config.ts`** → Main Playwright configuration file.

---

## ▶️ How to Run?

Run the tests in **headed mode** (with browser UI):
```sh
npx playwright test --headed
```

Run tests in **headless mode**:
```sh
npx playwright test
```

Run tests for a **specific file**:
```sh
npx playwright test tests/login.spec.ts
```

Generate an **HTML Report**:
```sh
npx playwright show-report
```

---

## 📌 Miscellaneous Info
- Official Playwright Documentation: [https://playwright.dev/](https://playwright.dev/)
- Install & setup guide: [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)
- Troubleshooting Guide: [https://playwright.dev/docs/troubleshooting](https://playwright.dev/docs/troubleshooting)

For any issues, feel free to contribute or raise an issue! 🚀

