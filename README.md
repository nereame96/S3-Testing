# Sprint 3 IT Academy | Video management tool


## Description

This project focuses on applying core **JavaScript functional programming techniques** (e.g., `.map()`, `.reduce()`) to process and analyze a dataset of movie records. The primary objective is to write efficient, pure functions that successfully pass a comprehensive suite of unit tests defined using the **Jest** library.

-----

## 🎯 Objectives

  * **Functional JavaScript:** Write efficient functions with a single responsibility, utilizing modern array methods (`map`, `reduce`, `sort`).
  * **Unit Testing with Jest:** Define code to satisfy strict validation checks for data filtering, transformation, and aggregation.
  * **Data Management:** Master complex data manipulation tasks such as calculating average scores, multi-criteria sorting (e.g., by year and title), and ensuring **data immutability**.
  * **Data Transformation:** Implement robust logic for converting non-standard string formats (e.g., movie duration: `"Xh Ymin"`) into standardized numerical data (total minutes).

-----

## 💻 Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **JavaScript (ES6+)** | Core language for implementation. |
| **Jest** | Primary framework used for running and validating unit tests. |
| **Node.js & npm** | Required environment for test execution and dependency management. |

-----

## 📋 Requirements and Installation (Testing)

**🚨 IMPORTANT:** To run the unit tests, the project requires the Node.js runtime environment. The browser is only used for viewing the final application (if applicable).

### 🛠 Installation

1.  **Clone the Repository:**

    ```bash
    git clone [repository URL]
    cd [Your Project Folder]
    ```

2.  **Install Dependencies:** (This installs Jest and all necessary packages.)

    ```bash
    npm install
    ```

3.  **Run the Tests:** (This executes the validation against your implemented functions.)

    ```bash
    npm run test:watch
    ```

    *(Note: Check the generated `test-results.html` file for a visual report of all passing/failing tests.)*

-----

## 📁 Project Structure

The project follows a standard testing structure to keep source code separate from the testing specifications.

```
📁 starter-code-frontend-sprint-3-movies
├── 📁 .github
├── 📁 node_modules
├── 📁 src
│   ├── 📄 data.js
│   ├── 📄 films.js
│   └── 📄 index.html
├── 📁 tests
│   └── 📄 films.spec.js
├── 📄 package-lock.json
├── 📄 test-results.html
└── 📄 README.md

```

-----

## 📋 Takeaways

  * Mastered writing **pure functions** that avoid side effects (e.g., using the Spread operator for immutability).
  * Gained expertise in complex array manipulation using chained methods (`filter`, `map`, `reduce`).
  * Developed skills in writing code to directly satisfy predefined **unit test requirements**.