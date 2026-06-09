'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-brand-off-white transition-shadow duration-200 ${scrolled ? 'shadow-brand-sm' : ''}`}
      style={{ borderBottom: '1px solid #E4E3DE', height: '73px' }}
    >
      <div className="max-w-container mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-orange rounded-brand">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" fill="#fff"/>
              <rect x="9" y="2" width="5" height="5" fill="#fff" opacity="0.65"/>
              <rect x="2" y="9" width="5" height="5" fill="#fff" opacity="0.65"/>
              <rect x="9" y="9" width="5" height="5" fill="#fff"/>
            </svg>
          </span>
          <span className="text-body font-semibold text-brand-black tracking-tight">Nexus Digital</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 text-body rounded-brand transition-colors duration-150 relative
                  ${isActive
                    ? 'font-semibold text-brand-orange after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-brand-orange'
                    : 'text-brand-dark hover:text-brand-black hover:bg-brand-orange-light'
                  }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-brand-orange text-white text-body rounded-brand min-h-touch inline-flex items-center hover:bg-brand-orange-dark transition-colors duration-150 shadow-orange-sm"
          >
            Get a Free Audit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-0.5 bg-brand-black transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`block w-5 h-0.5 bg-brand-black transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}/>
          <span className={`block w-5 h-0.5 bg-brand-black transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-off-white border-b border-brand-border transition-all duration-200 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-8 py-4 flex flex-col gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-3 text-body rounded-brand transition-colors duration-150 ${isActive ? 'font-semibold bg-brand-orange-light text-brand-orange' : 'hover:bg-brand-orange-light'}`}
              >
                {label}
              </Link>
            )
          })}
          <div className="pt-2 mt-2 border-t border-brand-border">
            <Link href="/contact" className="w-full px-6 py-3 bg-brand-orange text-white text-body rounded-brand min-h-touch inline-flex items-center justify-center hover:bg-brand-orange-dark transition-colors duration-150">
              Get a Free Audit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
