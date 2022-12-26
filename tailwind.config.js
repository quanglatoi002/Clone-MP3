/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                primary: "#32323d",
                secondary: "#0f7070",
                bg_public: "#ced9d9",
                bg_navLeft: "#DCE5E5",
                search_text: "#282828",
            },
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                abel: ["Abel", "sans-serif"],
            },
        },
    },
    plugins: [],
};
