module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bobred:{
          DEFAULT:"#C51D23",
        },
        bobblue:{
          DEFAULT:"#1B306C",
        },
        bobgray:{
          DEFAULT:"#231F20",
        },
      },
    },
  },
  plugins: [],
};