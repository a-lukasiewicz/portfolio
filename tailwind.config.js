module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainDark: "#002233",
      mainLight: "#0066FF",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
