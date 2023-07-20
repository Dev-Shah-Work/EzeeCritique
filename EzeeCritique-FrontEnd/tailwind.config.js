/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      
    },
    fontFamily: {
      'handdrawn': "'Delicious Handrawn', cursive",
      'victormono':"'Victor Mono', monospace",
      'paratext':"'Pangolin', cursive", 
      'headtext':"'Russo One', sans-serif", 
    }
  },
  plugins: [],
}