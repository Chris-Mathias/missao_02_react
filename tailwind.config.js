/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            gridTemplateColumns: {
                "auto-fit": "repeat(auto-fit, 300px)",
                "auto-fill": "repeat(auto-fill, 300px)",
            },
            gridTemplateRows: {
                "auto-fit": "repeat(auto-fit, 292px)",
                "auto-fill": "repeat(auto-fill, 292px)",
            },
        },
    },
    plugins: [require("daisyui")],
};
