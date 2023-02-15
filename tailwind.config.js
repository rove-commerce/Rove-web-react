/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		screens: {
			tablet: "640px",
			"tablet-lg": "768px",
			laptop: "1024px",
			desktop: "1280px",
		},
		colors: {
			transparent: "transparent",
			black: "#333333",
			white: "#fff",
			blue: "#0532D1",
			"blue-transparent": "rgba(5,50,209,.2)",
			"blue-light": "#EBE9F2",
			pink: "#FFD5CF",
			green: "#ADFFD9",
			yellow: "#FFF5A0",
			orange: "#ffce75",
			red: "#FF694C",
			gray: "#999999",
			"gray-light": "#F6F6F6",
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			fontSize: {
				48: "3rem",
				36: "2.25rem",
				32: "2rem",
				24: "1.5rem",
				20: "1.25rem",
				18: "1.125rem",
				16: "1rem",
				14: ".875rem",
				12: ".75rem",
				10: ".625rem",
			},
			width: {
				13: "3.25rem",
				"480px": "480px",
				"960px": "960px",
			},
			height: {
				"299px": "299px",
				"569px": "569px",
			},
		},
	},
  plugins: [],
}