/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        buttonColor: "#6F01FE",
        lightGray : "#6B7280"
      }, 
      fontSize: {
        navFont: ["1rem", { lineHeight: "0.625rem" }],
        headFont: ["2.5rem", { lineHeight: "3rem", letterSpacing: "0.02em" }],
        mobHeadFont: [
          "2.2rem",
          { lineHeight: "3rem", letterSpacing: "0.02em" },
        ],
        subHeadFont: [
          "2rem",
          { lineHeight: "2.5rem", letterSpacing: "0.02em" },
        ],
        minHeadFont: [
          "1.75rem",
          { lineHeight: "2.4rem", letterSpacing: "0.02em" },
        ],
        miniHeadFont: [
          "1.5rem",
          { lineHeight: "2rem", letterSpacing: "0.02em" },
        ],
        mobSubHead: [
          "1.4rem",
          { lineHeight: "1.75rem", letterSpacing: "0.02em" },
        ],
        minSubHead: [
          "1.2rem",
          { lineHeight: "1.75rem", letterSpacing: "0.02em" },
        ],
        miniSubHead: [
          "1.1rem",
          { lineHeight: "1.75rem", letterSpacing: "0.02em" },
        ],
        paraFont: ["1rem", { lineHeight: "1.5rem" }],
        subParaFont: [
          "0.9rem",
          { lineHeight: "1.5rem", letterSpacing: "0.02em" },
        ],
        minParaFont: [
          "0.850rem",
          { lineHeight: "1.2rem", letterSpacing: "0.02em" },
        ],
        miniParaFont: [
          "0.750rem",
          { lineHeight: "1.1rem", letterSpacing: "0.02em" },
        ],
        leastMiniFont: [
          "0.720rem",
          { lineHeight: "1rem", letterSpacing: "0.02em" },
        ],
        newLeastMiniFont: [
          "0.620rem",
          { lineHeight: "0.8rem", letterSpacing: "0.02em" },
        ],
      },
    },
  },
  plugins: [],
}

