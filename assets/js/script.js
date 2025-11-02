tailwind.config = {
  theme: {
    extend: {
      colors: {
        "voltic-teal": "#43CADB",
        "voltic-purple-mid": "#8660E7",
        "voltic-purple-dark": "#440885",
        "voltic-purple-light": "#726ECD",
        "voltic-blue": "#382CCE",
      },
      fontFamily: {
        amaranth: ["Amaranth", "sans-serif"],
        spartan: ["League Spartan", "sans-serif"],
      },
      fontSize: {
        "2xs": ".65rem",
        "3xs": ".55rem",
      },
    },
  },
};

AOS.init({
  duration: 800,
  once: true,
  offset: 50,
});
