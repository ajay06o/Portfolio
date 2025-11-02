tailwind.config = {
  theme: {
    extend: {
      gridTemplateColumns: {
      'auto': 'repeat(auto-fit, minmax(250px, 1fr))',
    }, 
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
      'ovo': ['Ovo', 'serif'],
    },
    animation: {
      'spin': 'spin 6s linear infinite',
      'float': 'float 3s ease-in-out infinite',


    },

    keyframes: {
    float: {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
  },
},

    colors: {
      lightHover: '#fcf4ff',
      darkHover: '#2a004a',
      darkTheme: '#11001F',
    },
    boxShadow: {
      'black': '4px 4px 0 #000',
      'white': '4px 4px 0 #fff',
  }


}
  },
  plugins: [],
     darkMode: 'selector'
}