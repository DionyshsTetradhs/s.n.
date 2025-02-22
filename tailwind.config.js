module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
    variants: {
    extend: {
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce', 'hover', 'focus'],
    },
  },
}
