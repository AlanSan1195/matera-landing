


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A', 'system-ui', '-apple-system', 'sans-serif'],
			pages: ['Permanent Marker', 'cursive'],
			boldes: ['boldes', 'serif']
		},
		extend: {
			colors: {

				primary: "#0C1018",
				secundary: "#efefef",
				tercero: "#ff3b3f",
			  },
		},
	},
	plugins: [],
}
