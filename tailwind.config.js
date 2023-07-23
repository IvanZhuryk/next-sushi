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
        'c':'1850px',
      },
      maxHeight:{
        'hv-50':'50vh',
      },
      height: {
        '18':'4.375rem',
        '13':'3.125rem',
        '21':'5.25rem',
        '22':'5.5rem',
        '75':'18.75rem',
        '85':'21.25rem',
        'hv':'100vh',
        'hv-50':'50vh',
      },
      width:{
        '21':'5.25.rem',
        '25':'6.5625rem',
        '30':'7.5rem',
        '75':'18.75rem',
        '78':'22.5rem',
        '120':'31.25rem',
        '130':'34.375rem',
        '150':'40rem',
        '1536':'90rem',
        'vw':'100vw',
        'vw-30':'30vw',
        'vw-50':'50vw',
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
      },
      
    },
  },
  plugins: [
    
  ],
}
