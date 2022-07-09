module.exports = {
  content: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  
};


