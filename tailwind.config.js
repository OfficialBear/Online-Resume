/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          1: '#0B0D12',
          2: '#111827',
          3: '#1F2937',
        },
        slate: {
          1: '#F8FAFC',
          2: '#EEF2F7',
          3: '#CBD5E1',
          4: '#94A3B8',
          5: '#64748B',
        },
        brand: {
          1: '#2563EB',
          2: '#7C3AED',
          3: '#06B6D4',
        },
      },
      boxShadow: {
        subtle: '0 1px 1px rgba(15,23,42,.06), 0 8px 24px rgba(15,23,42,.08)',
        lift: '0 2px 6px rgba(15,23,42,.10), 0 20px 50px rgba(15,23,42,.18)',
      },
      borderRadius: {
        xl: '14px',
        '2xl': '20px',
      },
      letterSpacing: {
        tighter2: '-0.03em',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(900px 500px at 12% 0%, rgba(37, 99, 235, .18), transparent 55%), radial-gradient(800px 520px at 88% 12%, rgba(124, 58, 237, .16), transparent 55%), radial-gradient(800px 520px at 55% 95%, rgba(6, 182, 212, .10), transparent 55%)',
        'grid-faint':
          'linear-gradient(to right, rgba(15,23,42,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

