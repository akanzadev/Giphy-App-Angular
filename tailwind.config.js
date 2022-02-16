module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#121212",
        secondary: "#1E1E1E",
      }),
      textColor: {
        primary: "#121212",
        secondary: "#1E1E1E",
      },
      keyframes: {
        entryleft: {
          "0%": {
            transform: "translateX(2rem)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        entryright: {
          "0%": {
            transform: "translateX(-2rem)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        entryleft: "entryleft 500ms ease-in-out",
        entryright: "entryright 500ms ease-in-out",
      },
    },
  },
  plugins: [],
};
