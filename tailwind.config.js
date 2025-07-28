/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f8ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc8ff',
          400: '#36b0ff',
          500: '#0c98ff',
          600: '#2c5aa0',
          700: '#2c5aa0',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        teal: {
          50: '#f0fdf9',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#7dd3c0',
          700: '#7dd3c0',
          800: '#166534',
          900: '#14532d',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6C757D',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#212529',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};
