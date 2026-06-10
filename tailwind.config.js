/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* shadcn CSS-variable tokens */
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        /* Brand palette */
        'brand-black':         '#09090b',
        'brand-charcoal':      '#07070B',
        'brand-dark':          '#27272a',
        'brand-mid':           '#71717a',
        'brand-border':        '#e4e4e7',
        'brand-off-white':     '#FBFBF8',
        'brand-cream':         '#F9F9FB',
        'brand-grain':         '#F5F4EF',
        'brand-red':           '#EF4444',
        /* Orange accent */
        'brand-orange':        '#F97316',
        'brand-orange-light':  '#fff7ed',
        'brand-orange-mid':    '#FDBA74',
        'brand-orange-dark':   '#EA580C',
        'brand-orange-border': '#fed7aa',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      fontSize: {
        'display': ['3rem',   { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'h2':      ['2rem',   { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'h3':      ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body':    ['1rem',   { lineHeight: '1.5' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem',  { lineHeight: '1.33' }],
      },
      borderRadius: {
        /* shadcn uses --radius = 0.5rem (8px) */
        'brand':    'calc(var(--radius))',
        'brand-lg': 'calc(var(--radius) + 4px)',
        lg:  'calc(var(--radius))',
        md:  'calc(var(--radius) - 2px)',
        sm:  'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        /* shadcn shadow scale */
        'brand-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'brand-md': '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'brand-lg': '0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'orange-sm': '0 1px 3px 0 rgba(249,115,22,0.2)',
        'orange-md': '0 4px 14px 0 rgba(249,115,22,0.25)',
      },
      maxWidth: { 'container': '1440px' },
      minHeight: { 'touch': '2.75rem' },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up':   { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up':   'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
