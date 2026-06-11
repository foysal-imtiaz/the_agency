import Link from 'next/link'

const footerLinks = {
  Services: [
    { label: 'Website Development', href: '/services#website' },
    { label: 'Google Ads', href: '/services#google-ads' },
    { label: 'Meta Ads', href: '/services#meta-ads' },
    { label: 'GA4 Analytics', href: '/services#analytics' },
    { label: 'Social Media', href: '/services#social' },
    { label: 'Growth Packages', href: '/services#packages' },
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
      <div className="max-w-container mx-auto px-6 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 w-fit">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-brand-orange rounded-md">
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                  <path d="M1 1h4.5C8.5 1 10.5 3 10.5 7s-2 6-5 6H1V1z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
                  <path d="M13 10.5c1.5 0 3.5-1 3.5-3.5S14.5 3.5 13 3.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </span>
              <span className="text-[15px] font-semibold tracking-tight">DefineCore</span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs leading-relaxed mb-6">
              We help businesses build a powerful online presence — websites, ads, analytics, and social media, all under one roof.
            </p>
            <p className="text-xs text-white/35">📍 Serving clients across the United States</p>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-[11px] font-semibold uppercase tracking-widest text-brand-orange-mid mb-4">{group}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-sm text-white/65 hover:text-white transition-colors duration-150">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">© {year} DefineCore. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-xs text-white/35 hover:text-white/60 transition-colors duration-150">Privacy Policy</Link>
            <Link href="/contact" className="text-xs text-white/35 hover:text-white/60 transition-colors duration-150">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
