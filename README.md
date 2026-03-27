# 📦 Package Sorter (TypeScript)

A TypeScript-based package classification system for a robotic
automation factory.
This project determines how packages should be dispatched based on their
**volume** and **mass**.

------------------------------------------------------------------------

## 🚀 Objective

Implement a function that routes packages into the correct stack:

-   **STANDARD** → Not bulky and not heavy
-   **SPECIAL** → Either bulky or heavy
-   **REJECTED** → Both bulky and heavy

------------------------------------------------------------------------

## 📏 Classification Rules

### A package is **bulky** if:

-   Volume ≥ **1,000,000 cm³**, OR
-   Any dimension ≥ **150 cm**

### A package is **heavy** if:

-   Mass ≥ **20 kg**

------------------------------------------------------------------------

## 🧠 Function Signature

``` ts
sort({ width, height, length, mass }): "STANDARD" | "SPECIAL" | "REJECTED"
```

------------------------------------------------------------------------

## 🛠 Tech Stack

-   TypeScript (strict mode)
-   Jest
-   ts-jest
-   Node.js

------------------------------------------------------------------------

## 📂 Project Structure

    src/
      sort.ts

    tests/
      sort.test.ts

------------------------------------------------------------------------

## ⚙️ Setup & Installation

``` bash
git clone https://github.com/po1206/package-sorter.git
cd package-sorter
npm install
```

------------------------------------------------------------------------

## 🧪 Running Tests

``` bash
npm test
```

------------------------------------------------------------------------

## ▶️ Run Locally

``` bash
npm start
```

------------------------------------------------------------------------

## ✅ Example Usage

``` ts
import { sort } from "./src/sort";

const result = sort({
  width: 100,
  height: 100,
  length: 100,
  mass: 25
});

console.log(result); // REJECTED
```

------------------------------------------------------------------------

## 💡 Design Decisions

-   Strict typing ensures type safety
-   Pure function design makes logic testable
-   Input validation prevents invalid data
-   Readable logic improves maintainability

------------------------------------------------------------------------

## 🚀 Future Improvements

-   API wrapper (Express / Fastify)
-   Docker support
-   CI/CD pipeline
-   UI interface

------------------------------------------------------------------------
