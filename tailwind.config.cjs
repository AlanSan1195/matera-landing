


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['DM Sans Variable', 'system-ui', '-apple-system', 'sans-serif'],
			pages: ['Permanent Marker', 'cursive'],
			boldes: ['Cormorant Garamond Variable', 'Georgia', 'serif'],
			display: ['Playfair Display', 'Georgia', 'serif'],
			body: ['DM Sans Variable', 'system-ui', 'sans-serif'],
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
