/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Tambahkan Font Poppins
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      // Tambahkan Warna Utama dari Desain Figma
      colors: {
        "dark-blue": "#232946",
        "grayish-blue": "#5A5F73",
        "primary-purple": "#4300FF",
        "primary-pink": "#00FFDE",
        "border-gray": "#E5E7EB",
      },
      //Background/Button Gradient
      backgroundImage: {
        "hero-gradient": "linear-gradient(90deg, #E0EAFE 0%, #F9E5FF 100%)",
        "btn-gradient": "linear-gradient(90deg, #4300FF 0%, #00FFDE 100%)",
      },
    },
  },
  plugins: [],
};
