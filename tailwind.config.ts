import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        orange: { base: '#F24D0D', dark: '#C43C08' },
        blue: { light: '#D7EFF9', base: '#5EC5FD', dark: '#009CF0' },
        background: '#FBF4F4',
        shape: '#F5EAEA',
        gray: {
          100: '#ADADAD',
          200: '#949494',
          300: '#666666',
          400: '#3D3D3D',
          500: '#1D1D1D',
        },
        danger: '#DC3545',
        success: '#28A745',
      },
      fontFamily: {
        dmsans: ['var(--font-dm-sans)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
  plugins: [],
}

export default config
