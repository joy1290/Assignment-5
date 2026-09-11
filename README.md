# 🧱 Assignment 5

Assignment 5 is a responsive React-based Dev Stack Builder website. It allows users to explore different technologies and build their own development stack by adding and removing technologies.

## 🚀 Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- React-Hot-Toast
- JSON
- Vite

## ✨ Features

### 1. 🔍 Explore Technologies
Users can explore different technologies with their icon, category, description, rating, difficulty level, and badge.

### 2. 🧰 Build Your Own Stack
Users can add their favorite technologies to the "Your Stack" section. The same technology cannot be added twice.

### 3. ➕➖ Manage Your Stack
Users can remove individual technologies or remove all selected technologies at once. Toast notifications are shown for add, duplicate, remove, and remove-all actions.

## 📱 Responsive Design

The website is fully responsive and works on:

- 📱 Mobile
- 📲 Tablet
- 💻 Desktop

## 📂 Data Source

Technology information is loaded dynamically from a local `data.json` file instead of being hardcoded inside the React component.

## 🎯 Project Purpose

This project was created as Assignment 5 to practice React components, state management, JSON data fetching, event handling, conditional rendering, and responsive design.



## 📚 React Questions & Answers

1. **What is JSX, and why is it used in React?**  
   JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript. It makes React components easier to create and understand.

2. **What is the difference between props and state?**  
   Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

3. **What does the `useState` hook do, and where did you use it in this project?**  
   `useState` is used to create and manage state in React. I used it to store the selected technologies in the `stack` and the technology data loaded from JSON.

4. **What does the `useEffect` hook do, and why did you need it to load the JSON data?**  
   `useEffect` is used to perform side effects in React. I used it to fetch the technology data from `data.json` when the component loads.

5. **Why does every item in a `.map()` list need a unique `key` prop?**  
   A unique `key` helps React identify each item in a list. It helps React update the list efficiently when items are added or removed.

6. **What is conditional rendering? Show one place you used it.**  
   Conditional rendering means showing different UI based on a condition. I used it in the Your Stack section to show an empty message when no technology is selected.

7. **How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**  
   A parent passes data to a child using props. A child can send information back to the parent by calling a function passed through props. In this project, `App.tsx` passes `stack` and functions to `TechnologySection` and `YourStack`.