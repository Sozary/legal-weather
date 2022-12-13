module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      "default-theme": "#343D4B",
      "night-dark": "#222831",
    },
  },
  extends: {
    fontFamily: {
      body: ["montserrat"],
    },
  },
};
