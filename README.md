# React + Vite


Foodify
Foodify is a web application that helps users discover new recipes and keep track of their favorite ones. The app allows users to browse a variety of recipes, filter them by category, and save their favorites.

## Features

Browse and search recipes.
Filter recipes by category.
Save favorite recipes for easy access.
User authentication via Firebase.
Responsive design for optimal viewing on various devices.

## Technologies Used

Frontend: React, Redux, Bootstrap, HTML, CSS

Backend: Node.js

Authentication: Firebase Authentication

State Management: Redux, Redux Persist

API: Custom Recipe API

## Advanced react features used

-Auth context: shares authentication state of the user across the application

-Custom hook: Auth context uses a custom hook that can be used in any page or component where authorisation is required

-Redux persist: saves the redux state to local storage; this allows users to save their favorite recipes, and be able to access them after refreshing the page or closing the browser

## Installation

Clone the repository:
bash
Copy code

git clone https://github.com/Akila-bite/SPA-project.git

## Deploys

https://spa-project-akilas-projects-fa44ae48.vercel.app/

Install dependencies:
bash
npm install
Start the development server:
bash
Copy code
npm start


Configuration
Make sure to set up Firebase authentication by following the steps below:

Create a Firebase project at Firebase Console.
Add Firebase credentials to your project by setting up the Firebase configuration in the src/firebase.js file.
 ## IMPROVEMENTS THAT COULD BE MADE
 -a pop up modal, or page transfer to a login when a user who isn't registered and logged in to their Foodify account tries to access the Favorites page

 -More functionalities and dynamic media added to the home page

 -The navbar toggle function and overall display, when on a smaller screen should be changed to a toggle bar

 -Users being able to search and filter by specific ingredients

Contributing
If you'd like to contribute to the development of Foodify, feel free to fork the repository and create a pull request. Make sure to follow the coding standards and write tests where necessary.



Feel free to update or add specific information depending on the current state of your project!

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
