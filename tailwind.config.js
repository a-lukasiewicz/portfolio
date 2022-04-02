module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainDarker: "#1f2937",
        mainLighter: "#3b82f6",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
