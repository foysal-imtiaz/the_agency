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
      className={`fixed top-0 left-0 right-0 z-50 bg-brand-off-white/95 backdrop-blur-sm transition-all duration-200 ${scrolled ? 'shadow-brand-sm' : ''} border-b border-brand-border`}
      style={{ height: '73px' }}
    >
      <div className="max-w-container mx-auto px-6 md:px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-orange rounded-md shadow-orange-sm">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M1 1h4.5C8.5 1 10.5 3 10.5 7s-2 6-5 6H1V1z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
              <path d="M13 10.5c1.5 0 3.5-1 3.5-3.5S14.5 3.5 13 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </span>
          <span className="text-[15px] font-semibold text-brand-black tracking-tight">DefineCore</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150 relative ${
                  isActive
                    ? 'text-brand-orange bg-brand-orange-light'
                    : 'text-brand-dark hover:text-brand-black hover:bg-accent'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-brand-orange rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA — single button only */}
        <div className="hidden md:flex items-center">
          <Link href="/contact" className="btn-default btn-sm px-4 shadow-orange-sm">
            Get a Free Audit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            {menuOpen ? (
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            ) : (
              <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-brand-off-white border-b border-brand-border transition-all duration-200 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 py-3 flex flex-col gap-0.5">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link key={href} href={href}
                className={`px-3 py-2.5 text-sm font-medium rounded-md transition-colors duration-150 ${isActive ? 'bg-brand-orange-light text-brand-orange' : 'text-brand-dark hover:bg-accent'}`}
              >
                {label}
              </Link>
            )
          })}
          <div className="pt-3 mt-1 border-t border-brand-border">
            <Link href="/contact" className="btn-default btn w-full justify-center">
              Get a Free Audit
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
