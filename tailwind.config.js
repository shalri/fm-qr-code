/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "qr-white": "hsl(228, 45%, 44%)",
        "qr-light-gray": "hsl(212, 45%, 89%)",
        "qr-gray-blue": "hsl(220, 15%, 55%)",
        "qr-dark-blue": "hsl(218, 44%, 22%)",
      },
      fontSize: {
        body: "15px",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },
  plugins: [],
};
