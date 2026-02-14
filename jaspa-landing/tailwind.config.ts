import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors from Figma design
        'blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // Custom Jaspa brand colors
        'jaspa': {
          'blue': '#044ea4',
          'light-blue': '#87b6ed',
          'orange': '#f97316',
          'red': '#df2202',
          'offwhite': '#f5f5f5',
        },
      },
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
        'display': ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      },
      spacing: {
        // Custom spacing based on 4px grid system
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backgroundImage: {
        'dotted-pattern': 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dotted-sm': '12px 12px',
        'dotted-md': '16px 16px',
        'dotted-lg': '20px 20px',
      },
    },
  },
  plugins: [],
};

export default config;
