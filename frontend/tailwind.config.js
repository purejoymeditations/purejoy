/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FDFBF8',      // Very Light, Warm Cream
        'container-bg': '#FFFFFF',
        'text-primary': '#4A3F35',    // Rich, Dark Brown
        'text-secondary': '#8C7B70',  // Soft Brown
        'primary': '#D89B72',         // Rich Amber (Golden with red richness)
        'primary-hover': '#C38962',    // Darker Amber
        'secondary': '#F5F3F0',       // Light, earthy beige for contrast
        'accent': '#6C757D',          // Muted Grey for secondary elements
        'accent-hover': '#5A6268',     // Darker Muted Grey
        'border': '#EAEAEA',          // Light Grey Border
      },
      boxShadow: {
        'golden': '0 10px 25px -5px rgba(180, 140, 77, 0.2), 0 8px 10px -6px rgba(180, 140, 77, 0.2)',
      },
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

