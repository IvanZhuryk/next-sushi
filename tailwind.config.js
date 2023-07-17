/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'c':'1850px'
      },
      height: {
        '18':'4.375rem',
        '13':'3.125rem',
        '75':'18.75rem',
        '85':'21.25rem',
        'hv':'100vh',
      },
      width:{
        '25':'6.5625rem',
        '30':'7.5rem',
        '75':'18.75rem',
        'vw':'100vw',
        'vw-30':'30vw',
      },
      boxShadow:{
        'hed':'0 0 10px 5px rgba(221, 221, 221, 1)',
        'typeBut':'0 0 5px 3px rgba(221, 221, 221, 1)'
      },
      colors:{
        'redBtn':'#f32735'
      },
      backgroundColor:{
        'modal': 'rgba(0,0,0,0.4)'
      }
    
    },

  },
  plugins: [],
}
