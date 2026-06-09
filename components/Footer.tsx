import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'Website Development', href: '/services#website' },
    { label: 'Google Ads', href: '/services#google-ads' },
    { label: 'Meta Ads', href: '/services#meta-ads' },
    { label: 'GA4 Analytics', href: '/services#analytics' },
    { label: 'Social Media', href: '/services#social' },
    { label: 'Packages', href: '/services#packages' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Book a Call', href: '/contact#calendly' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-brand-charcoal text-brand-off-white" role="contentinfo">
      <div className="max-w-container mx-auto px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-orange rounded-brand">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="2" width="5" height="5" fill="#fff"/>
                  <rect x="9" y="2" width="5" height="5" fill="#fff" opacity="0.6"/>
                  <rect x="2" y="9" width="5" height="5" fill="#fff" opacity="0.6"/>
                  <rect x="9" y="9" width="5" height="5" fill="#fff"/>
                </svg>
              </span>
              <span className="text-body font-semibold">Nexus Digital</span>
            </Link>
            <p className="text-body-sm text-white/60 max-w-xs leading-relaxed">
              We help US-based offline businesses build a powerful online presence — from websites and ads to analytics and social media.
            </p>
            <p className="mt-6 text-body-sm text-white/40">📍 Serving clients across the United States</p>
          </div>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-caption font-semibold uppercase tracking-widest text-brand-orange-mid mb-4">{group}</h3>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-body-sm text-white/70 hover:text-white transition-colors duration-150">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-white/40">© {year} Nexus Digital. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-caption text-white/40 hover:text-white/70 transition-colors duration-150">Privacy Policy</Link>
            <Link href="/contact" className="text-caption text-white/40 hover:text-white/70 transition-colors duration-150">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
