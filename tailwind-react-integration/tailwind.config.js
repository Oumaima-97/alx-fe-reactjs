module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind will scan these files for classes
    "./public/index.html",        // Include index.html if you have classes there
  ],
  darkMode: 'media',  // Optional, defaults to 'media'
  theme: {
    extend: {},         // Extend the theme if needed
  },
  plugins: [],         // Add plugins if necessary
}
