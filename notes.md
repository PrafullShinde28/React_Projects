# 1🚀 About the React fibre 
Read from here
[Github Contribution](https://github.com/acdlite/react-fiber-architecture)


npm install
npm run dev


npm create vite@latest
cd <> npm install


npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

postcss.config.js

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}