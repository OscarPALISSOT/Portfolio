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
                'fontColor': 'var(--fontColor)',
                'fontSecondary': 'var(--fontSecondary)',
            },
            fontFamily: {
                poppins: ['var(--poppins)', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
