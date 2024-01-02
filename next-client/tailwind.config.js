/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            'primary': '#5c88da',
            'secondary': '#a6a6a6',
            'primaryHover': '#2d61c2',
            'secondaryHover': '#8c8c8c',
            'dark': '#242423',
            'darkHover': '#333533',
            'light': '#e8e8e8',
            'lightHover': '#f5f5f5',
            'fontColor': '#1a202c',
            'fontSecondary': '#718096',
            'fontColorLight': '#FFF',
            'border' : '#dbdbde',
        }
    },
    plugins: [],
}

