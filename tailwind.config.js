module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000",
      white: "#fff",
      "default-theme": "#343D4B",
      "night-dark": "rgb(34, 40, 49)",
      "light-night-dark": "rgb(39, 46, 55 )",
      "light-white": "rgba(255, 255, 255,.5)",
    },
    fontFamily: {
      montserrat: ["Montserrat"],
      lato: ["Lato"],
      garamond: ["Garamond"],
      body: ["Montserrat"],
    },
  },
  extends: {
    fontFamily: {
      montserrat: ["Montserrat"],
      lato: ["Lato"],
      garamond: ["Garamond"],
      body: ["Montserrat"],
    },
  },
};
