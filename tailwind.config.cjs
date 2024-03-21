


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			colors: {

				primary: "#0C1018",
				secundary: " #efefef",
				tercero: "#ff3b3f",
			  },
		},
	},
	plugins: [],
}
