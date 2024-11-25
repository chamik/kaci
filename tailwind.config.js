module.exports = {
    mode: 'jit',
    content: [
        './build/**/*.{js,html}',
        './_site/**/*.{js,html}',
        './src/**/*.{js,html}',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Source\ Serif\ Pro', 'Cantarell\ Regular', 'sans-serif']
            },
            colors: {
                'ochre': '#E5C09C',
                'brown': '#5E4B38',
                'dark-blue': '#1B343C',
                'sky-blue': '#AFEEEE',
                'anime-water': '#7A73FA',
            },
            width: {
                'small': '15rem',
                'medium': '25rem',
                'large': '30rem', // Custom height size
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}