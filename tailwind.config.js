/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    applyComplexClasses: true,
  },
  content: [
    "./src/App.js",
    "./src/assets/components/Grades/Grades.jsx",
    "./src/assets/components/Modal/modal.css",
    "./src/assets/components/Person/Person.jsx",
    "./src/assets/pages/ErrorPage/errorPage.scss",
    "./src/assets/pages/Main/mainPage.scss",
    "./src/assets/pages/StudentProfile/StudentProfile.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
