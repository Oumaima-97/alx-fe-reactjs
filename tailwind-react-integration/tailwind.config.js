module.exports = {
  // Tailwind will scan these files for class names
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all relevant file extensions in the source directory
    "./public/index.html",         // Include the HTML file if it contains Tailwind classes
  ],
  
  // Optional dark mode configuration. You can remove it or set it to 'media'
  darkMode: 'media',  // Use 'media' or 'class' for dark mode behavior

  theme: {
    extend: {},
  },

  plugins: [],
}
