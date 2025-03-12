module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans all JS, JSX, TS, and TSX files in the src directory
    "./public/index.html",        // If you're using any Tailwind classes in public/index.html, include it
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
