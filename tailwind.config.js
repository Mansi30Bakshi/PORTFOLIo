/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'global-bg': "url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      textColor: {
        'alice-blue': '#E6E6FA',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.disable-selection': {
          '-webkit-user-select': 'none',
          'user-select': 'none',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

