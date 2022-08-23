/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'yellow': '#FFBC00',
                'black': '#000000'
            },
            fontFamily: {
                'anton': ['Anton'],
                'ubuntu': ['Ubuntu']
            },
            boxShadow: {
                'boxShadow': '0px 4px 4px rgba(0, 0, 0, 0.25)'
            },
            fontSize: {
                'font-50px': '3.125rem'
            }
        },
    },
    plugins: [],
}
