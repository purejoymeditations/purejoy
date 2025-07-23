/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Main backgrounds - spa & soft
        'background': '#FDF6EC',           // Warmer cream
        'container-bg': '#FFFFFF',         // Pure white

        // Nature-inspired soft backgrounds
        'sage-whisper': '#F4F7F4',         // Light sage
        'honey-glow': '#FFFCF5',           // Soft golden tone
        'ocean-whisper': '#F6FAFE',        // Light ocean blue

        // Warm, minimal, and luxurious backgrounds
        'warm-cream': '#FDF6EC',
        'golden-sand': '#FDFBF5',
        'cream-50': '#FEFEFC',
        'warm-beige': '#FDFCF9',

        // Feminine + Spiritual Accent
        'blush-rose': '#EAD5C7',           // Soft blush pink

        // Healing & balance tone
        'calm-sky': '#CFE6EA',             // Soft sky blue

        // Text colors - grounded & readable
        'text-primary': '#4A3F35',         // Deep Earth Brown
        'text-secondary': '#8C7B70',       // Warm taupe

        // Brand / Primary Colors
        'primary': '#20B2AA',              // Healing teal
        'primary-hover': '#1A8F8A',
        'primary-light': '#E8F5F3',

        // Golds
        'logo-gold': '#C0A063',            // Logo gold
        'gold-rich': '#BFA76F',            // Deeper gold for accents
        'gold-light': '#F5F1E8',

        // Earth Tones
        'earth-brown': '#6B5B4F',
        'bronze': '#D4A574',
        'bronze-dark': '#B8945F',          // Darker bronze for hover states
        'forest-green': '#7B9B7B',

        // Support
        'secondary': '#F5F3F0',
        'nature-green': '#E8F3E8',

        // Borders
        'border-light': '#F0EBE3',
        'border-nature': '#E8F0E8',
        'border': '#E5E7EB',               // Default border color
      },
      boxShadow: {
        'golden': '0 10px 25px -5px rgba(192, 160, 99, 0.15), 0 8px 10px -6px rgba(192, 160, 99, 0.1)',
        'warm': '0 4px 20px -2px rgba(212, 165, 116, 0.12)',
        'healing': '0 4px 20px -2px rgba(32, 178, 170, 0.08)',
        'soft': '0 2px 10px -2px rgba(107, 91, 79, 0.08)',
        'nature': '0 4px 20px -2px rgba(123, 155, 123, 0.1)',
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
