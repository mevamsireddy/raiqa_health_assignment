# Counter & List App

A simple and clean single-page application built with **React** that lets users manage a dynamic list of numbers. You can increment or decrement a counter, add the current number to a list, sort the list, and reset it. The list state is also saved to the browser's local storage.

---

## Core Features

* **Counter**: Increment and decrement a number.
* **List Management**: Add numbers to a list and prevent duplicates.
* **Sorting**: Toggle the list order between ascending and descending.
* **Data Persistence**: The list is saved in `localStorage`, so your numbers are there when you return.
* **Highlighting**: The highest and lowest numbers in the list are automatically highlighted.

---

## Tech Stack

* **Frontend**: React.js
* **State Management**: `useState`, `useEffect` Hooks
* **Styling**: CSS

---

## Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/mevamsireddy/raiqa_health_assignment.git
cd raiqa_health_assignment
````

### 2\. Install dependencies

This command installs all the necessary packages for React.

```bash
npm install
```

### 3\. Run the application

This starts the development server, and the app will open on `http://localhost:5173` (or a similar port).

```bash
npm run dev
```

### 4\. Build for production (Optional)

This command checks if the app can be bundled for deployment without errors.

```bash
npm run build
```