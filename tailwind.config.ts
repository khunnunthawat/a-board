import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
    fontFamily: {
      castoro: 'var(--castoro)',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        green: {
          100: '#D8E9E4',
          300: '#2B5F44',
          500: '#243831',
        },
        golden: '#C5A365',
        black: '#000000',
        white: '#FFFFFF',
        text: '#191919',
        grey: {
          100: '#BBC2C0',
          200: '#DADADA',
          300: '#939494',
          400: '#F9F9F9',
          500: '#A0AFBA',
          600: '#5B5B5B',
          900: '#101828',
        },
        success: '#49A569',
        error: '#F23536',
      },
      boxShadow: {
        xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
        xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
      },
    },
    debugScreens: {
      position: ['bottom', 'left'],
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
} satisfies Config;
