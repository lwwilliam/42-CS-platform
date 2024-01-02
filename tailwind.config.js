/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },

		colors: {
			'lightmode-blue': '#99DEFF',
			'lightmode-white': '#FAF9F6',
			'lightmode-green': '#99FFC2',
			'lightmode-red': '#FF9999',
			'darkmode-darkblue': '#020076',
			'darkmode-black': '#121212',
			'darkmode-purple': '#5552FF',
		},

		transitionProperty: {
			'height': 'height',
			'grid-template-rows': 'grid-template-rows',
		},
	},
  },

  variants: {
    extend: {
    	display: ["group-hover"],
	},
  },

  plugins: [require('flowbite/plugin')],
}