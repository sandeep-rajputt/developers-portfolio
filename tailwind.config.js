/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, #237b6d, rgba(67, 217, 173, .13))",
        "custom-radial-gradient-2":
          "radial-gradient(circle at 50% 50%, #4d5bce, rgba(76, 0, 255, 0))",
        "custom-radial-gradient-1":
          "radial-gradient(circle at 50% 50%, #43d9ad, rgba(76, 0, 255, 0))",
      },
      fontFamily: {
        firacode: ['"Fira Code"', "monospace"],
      },
      colors: {
        dark: {
          secondary: "#010c15",
          DEFAULT: "#011627",
          third: "#1e2d3d",
          fourth: "#243343",
        },
        blue: "#4d5bce",
        green: "#43d9ad",
        orange: "#e99287",
        border: "#1e2d3d",
        word: {
          DEFAULT: "#fff",
          secondary: "#607b96",
          third: "#607b96be",
        },
        hover: "#051f34",
        "purple-txt": "#c98bdf",
      },
      screens: {
        sm: "640px",
        md: "834px",
        lg: "1046px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
