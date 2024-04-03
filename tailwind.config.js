/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: "#01314a",
        text2: "#4b5563",
        text3: "#4b5563",
        text4: "#374151",
        nav: "#065c8b",
        box: "#005a87",
        butt: "rgb(232 95 60 / var(--tw-bg-opacity))",
      },
      width: {
        card: "160px",
        srv: "65%",
      },
      backgroundImage: {
        back: "radial-gradient(ellipse at center, #1e5799 0, #013652 63%, #002031 100%)",
      },
      content: {
        empty: "",
      },
      opacity: {
        btn: "0.8",
      },
    },
  },
  plugins: [],
};
