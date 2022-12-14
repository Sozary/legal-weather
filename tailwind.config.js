module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      "default-theme": "#343D4B",
      "night-dark": "#222831",
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
