/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**',
    './views/layouts/**',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        "white-yellow": "#fffff2",
        "orange-sorbet": "#ffae42",
        "navy": "#000080"
    }

    },
  },
  plugins: [],
}

