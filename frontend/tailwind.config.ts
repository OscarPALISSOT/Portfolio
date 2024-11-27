import type {Config} from "tailwindcss";

export default {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
                'primaryHover': 'var(--primaryHover)',
                'secondaryHover': 'var(--secondaryHover)',
                'background': 'var(--background)',
                'light': 'var(--light)',
                'fontColor': 'var(--fontColor)',
                'fontSecondary': 'var(--fontSecondary)',
            },
            fontFamily: {
                poppins: ['var(--poppins)', 'sans-serif'],
            },
            keyframes: {
                slide: {
                    '0%': {
                        transform: 'translateX(0)',
                    },
                    '100%': {
                        transform: 'translateX(-100%)',
                    },
                },
            },
            animation: {
                slideLeft: 'slide 25s infinite linear',
                slideRight: 'slide 25s infinite linear reverse',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} satisfies Config;
