import react from "@vitejs/plugin-react";

/** @type {import('vite').UserConfig} */
export default {
  plugins: [react()],
  esbuild: {
    jsx: "automatic", // Enable JSX in .js files
  },
};
