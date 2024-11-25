import { Config } from 'tailwindcss'

export default {
  // important: '#app',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {},
    // set same with antd
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px',
      xxxl: '2000px'
    }
  },
  plugins: []
} satisfies Config
