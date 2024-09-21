/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{html,ts,js}',
        './app/**/*.{html,ts,js}',
    ],
    theme: {
        extend: {
            colors: {
                ts: {
                    DEFAULT: '#007acc',
                    50: '#f0f8ff',
                    100: '#e0f0fe',
                    200: '#b9e2fe',
                    300: '#7ccbfd',
                    400: '#36b2fa',
                    500: '#0c98eb',
                    600: '#007acc',
                    700: '#015fa3',
                    800: '#065186',
                    900: '#0b446f',
                    950: '#072b4a',
                },
            },
        },
    },
    plugins: [],
};
