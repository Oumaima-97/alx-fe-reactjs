// tailwind.config.js

module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",  // Paths to your template files
      "./public/index.html",         // Include HTML files
    ],
    darkMode: "media", // Use 'media' for system preference or 'class' for manual control
    theme: {
      extend: {},  // Extend the default theme if necessary
    },
    plugins: [],  // Add Tailwind CSS plugins if needed
  }
  