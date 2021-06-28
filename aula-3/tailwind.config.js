module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      screens: {
         sm: "100%",
         md: "100%",
         lg: "1024px",
         xl: "1800px"
      }
    },
    extend: {
      colors: {
        "purple-solid": "#7159A4",
        "purple-dark-solid": "#49317D",
        "green-whatsapp": "#009688",
        "gray-whatsapp": "#DADBD4",
        "gray-cabecalho": "#cccccc",
        "gray-busca": "#fafafa",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
