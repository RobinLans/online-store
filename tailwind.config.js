module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lBeige: "#F3E5DB",
          beige: "#EBD5C4",
          dBeige: "#E0B9A3",
          blue: "#337B91",
          green: "#A2CAC0",
        },
      },
      width: {
        footer: "70rem",
        mainContent: "66rem",
        nav: "62rem",
        modal: "905px",
      },
      height: {
        modal: "600px",
        special1: "26rem",
        special2: "28rem",
        special3: "30rem",
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
