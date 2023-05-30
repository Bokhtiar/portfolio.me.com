/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': "1536px"
    },
     container: {
      center: true,
      padding: "1rem"
     },
    extend: {
      fontFamily: {
        nunito : " 'Nunito', sans-serif  ",
        quicksand : " 'Quicksand', sans-serif ",
        roboto : "  'Roboto', sans-serif "
      },
      colors: {
        'primary' : "#16141c",
        'secondary' : "#E93009"
      }
    },
  },
  plugins: [require("daisyui")],
}
