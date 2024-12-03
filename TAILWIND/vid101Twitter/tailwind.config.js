/** @type {import('tailwindcss').Config} */

module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ["*html"],
  // content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.start-flex': {
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'center',
          gap: '0.75rem', // Tailwind's `gap-3` corresponds to 0.75rem
        },
      });
    },
  ],
}

