/** @type {import('tailwindcss').Config} */

const { nextui } = require('@nextui-org/react')

export default {
	content: [
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				mainYellow: '#C5EA1E',
				mainGreen: '#8EFB21',
				mainBlack: '#212121',
			},
			fontFamily: {
				customFont: ['CustomFont', 'sans-serif'],
			},
			fontSize: {
				landing: '100px',
				header: '16px',
				benifits: '60px',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
}
