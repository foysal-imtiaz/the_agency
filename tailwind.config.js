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
        // Core neutrals
        'brand-black': '#000000',
        'brand-charcoal': '#07070B',
        'brand-dark': '#31313A',
        'brand-mid': '#474754',
        'brand-border': '#E4E3DE',
        'brand-off-white': '#FBFBF8',
        'brand-cream': '#F9F9FB',
        'brand-grain': '#F5F4EF',
        'brand-red': '#EF4444',
        // Orange / Mistral accent palette
        'brand-orange': '#F97316',        // primary accent — buttons, highlights
        'brand-orange-light': '#FFF7ED',  // tint surface
        'brand-orange-mid': '#FDBA74',    // softer orange
        'brand-orange-dark': '#EA580C',   // hover state
        'brand-orange-border': '#FED7AA', // border tint
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'display': ['48px', { lineHeight: '56px', letterSpacing: '0px' }],
        'h2': ['32px', { lineHeight: '40px', letterSpacing: '0px' }],
        'h3': ['24px', { lineHeight: '32px', letterSpacing: '0px' }],
        'body-lg': ['20px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '24px' }],
        'body-sm': ['14px', { lineHeight: '20px' }],
        'caption': ['12px', { lineHeight: '16px' }],
      },
      borderRadius: {
        'brand': '6px',
        'brand-lg': '12px',
      },
      boxShadow: {
        'brand-sm': '0px 1px 2px 0px rgba(21,21,31,0.06), 0px 0px 1px 0px rgba(21,21,31,0.04)',
        'brand-md': '0px 4px 8px 0px rgba(21,21,31,0.06), 0px 2px 4px 0px rgba(21,21,31,0.04)',
        'brand-lg': '0px 12px 24px 0px rgba(21,21,31,0.08), 0px 4px 8px 0px rgba(21,21,31,0.04)',
        'orange-sm': '0px 1px 3px 0px rgba(249,115,22,0.15)',
        'orange-md': '0px 4px 12px 0px rgba(249,115,22,0.2)',
      },
      maxWidth: {
        'container': '1440px',
      },
      minHeight: {
        'touch': '48px',
      },
    },
  },
  plugins: [],
}
