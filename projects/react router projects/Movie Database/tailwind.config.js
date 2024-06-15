/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        movieDatabase: {
          primary: "#2D3142",
          accent: "#EF8354",
          secondary: "#4F5D75",
          backgroundMain: "#F5F5F5",
          backgroundCard: "#FFFFFF",
          textPrimary: "#2D3142",
          textSecondary: "#4F5D75",
          buttonPrimary: {
            DEFAULT: "#EF8354",
            hover: "#D66B38",
          },
          buttonSecondary: {
            DEFAULT: "#4F5D75",
            hover: "#3B4759",
          },
        },
      },
    },
    plugins: [],
  },
};
