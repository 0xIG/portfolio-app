/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,ts}'],
    theme: {
        extend: {
            screens: {
                xs: { min: '320px' },
                '-xs': { max: '320px' },
                '-sm': { max: '640px' },
                '-md': { max: '768px' },
                '-lg': { max: '1024px' },
                '-xl': { max: '1280px' },
                '-2xl': { max: '1536px' },
            },
        },
    },
    plugins: [],
};
