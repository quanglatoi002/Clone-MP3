/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            screens: {
                "3xl": "1600px",
            },
            backgroundColor: {
                "main-100": "#E7ECEC",
                "main-200": "#DDE4E4",
                "main-300": "#CED9D9",
                "main-400": "#C0D8D8",
                "main-500": "#0E8080",
                "overlay-30": "rgba(0,0,0,0.3)",
            },
            colors: {
                hover_secondary: "#0f7070",
                primary: "#32323d",
                secondary: "#696969",
                "main-100": "#E7ECEC",
                "main-200": "#DDE4E4",
                "main-300": "#CED9D9",
                "main-400": "#C0D8D8",
                "main-500": "#0E8080",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                abel: ["Abel", "sans-serif"],
            },
            keyframes: {
                "slide-right": {
                    "0%": {
                        "-webkit-transform": " translateX(-500px);",
                        transform: "translateX(-500px);",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);",
                    },
                },
                "slide-left": {
                    "0%": {
                        "-webkit-transform": " translateX(500px);",
                        transform: "translateX(500px);",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);",
                    },
                },
                "slide-left2": {
                    "0%": {
                        "-webkit-transform": " translateX(500px);",
                        transform: "translateX(500px);",
                    },
                    "100%": {
                        "-webkit-transform": "translateX(0);",
                        transform: "translateX(0);",
                    },
                },
            },
            animation: {
                "slide-right":
                    "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
                "slide-left":
                    "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
                "slide-left2":
                    "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
            },
        },
    },

    plugins: [require("@neojp/tailwindcss-line-clamp-utilities")],
    variants: {
        lineClamp: ["responsive"],
    },
};
