import Link from 'next/link'
import AnimateOnScroll from '../components/AnimateOnScroll'

export const metadata = {
  title: 'Nexus Digital — We Put Your Business Online & Make It Grow',
  description: 'US-based digital marketing agency specializing in websites, Google Ads, Meta Ads, GA4 analytics, and social media for offline businesses ready to grow online.',
  openGraph: {
    title: 'Nexus Digital — We Put Your Business Online & Make It Grow',
    description: 'US-based digital marketing agency. Websites, ads, analytics, social media.',
  },
}

const services = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Website Development',
    desc: 'Custom WordPress or Next.js websites — fast, mobile-first, and built to convert visitors into customers.',
    href: '/services#website',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6.5 10h7M10 6.5v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Google Ads',
    desc: 'Data-driven search campaigns targeting local customers actively searching for your services right now.',
    href: '/services#google-ads',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="14.5" cy="5.5" r="1" fill="currentColor"/>
      </svg>
    ),
    title: 'Meta Ads',
    desc: 'Facebook and Instagram campaigns that build brand awareness and drive qualified leads for your business.',
    href: '/services#meta-ads',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 14l4-4 3 3 4-5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'GA4 Analytics',
    desc: 'Full Google Analytics 4 setup, event tracking, and custom dashboards so you always know what\'s working.',
    href: '/services#analytics',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2C5.6 2 2 5.6 2 10s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10c0-1.7 1.3-3 3-3s3 1.3 3 3-1.3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Social Media Setup',
    desc: 'Complete social presence setup with content strategy and brand guidelines for businesses starting from zero.',
    href: '/services#social',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.6L10 14.8l-4.9 2.5.9-5.6-4-3.9 5.6-.8L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full Growth Package',
    desc: 'Our all-in-one bundle: website + ads + analytics + social — everything you need to dominate your local market.',
    href: '/services#packages',
  },
]

const differentiators = [
  {
    number: '01',
    title: 'Built for Offline-to-Online',
    desc: 'We specialize in businesses making the digital leap — restaurants, contractors, salons, clinics, and more. We speak your language, not tech jargon.',
  },
  {
    number: '02',
    title: 'Transparent & Results-First',
    desc: 'No vanity metrics. Every campaign comes with clear KPIs, monthly reporting, and a direct line to your account manager — no middlemen.',
  },
  {
    number: '03',
    title: 'Full-Stack Digital Team',
    desc: 'Designers, developers, and ad specialists all under one roof. You get a cohesive strategy, not a patchwork of freelancers.',
  },
]

const process = [
  { step: '01', title: 'Consult', desc: 'Free 30-min discovery call to understand your business, goals, and current online presence.' },
  { step: '02', title: 'Build', desc: 'Our team gets to work — websites, campaigns, analytics — configured with precision and speed.' },
  { step: '03', title: 'Grow', desc: 'Monthly reports, A/B tests, and strategy updates keep your business growing continuously.' },
]

const packages = [
  {
    name: 'Launch',
    subtitle: 'Digital Marketing',
    price: '$2,500',
    note: '/month',
    desc: 'Everything you need to start winning online — ads, analytics, and social presence fully managed.',
    features: [
      'Google Ads campaign setup & management',
      'Meta Ads (Facebook + Instagram)',
      'GA4 Analytics setup + dashboard',
      'Social media presence setup',
      'Monthly performance report',
      'Dedicated account manager',
    ],
    cta: 'Start Growing',
    highlight: false,
  },
  {
    name: 'Accelerate',
    subtitle: 'Website + Digital Marketing',
    price: '$4,500',
    note: '/month',
    desc: 'A professional website combined with a full-stack marketing engine — the complete online presence.',
    features: [
      'Everything in Launch',
      'Custom website (WordPress or Next.js)',
      'On-page SEO optimization',
      'Landing page creation for campaigns',
      'Bi-weekly strategy calls',
      'Priority support & faster turnaround',
    ],
    cta: 'Get the Full Stack',
    highlight: true,
  },
  {
    name: 'Dominate',
    subtitle: 'Custom Advanced Package',
    price: 'Custom',
    note: 'quote',
    desc: 'For businesses ready to invest seriously — custom web apps, advanced analytics, and full-channel marketing.',
    features: [
      'Everything in Accelerate',
      'Custom Next.js web application',
      'Advanced analytics & attribution',
      'Multi-channel ad strategy',
      'Full social media management',
      'Dedicated team + weekly calls',
    ],
    cta: 'Talk to Us',
    highlight: false,
  },
]

export default function Home() {
  return (
    <>
      {/* ── HERO (centered) ── */}
      <section className="relative bg-brand-off-white overflow-hidden" style={{ borderBottom: '1px solid #E4E3DE' }}>
        {/* Subtle radial orange glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)',
        }}/>
        {/* Grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]" style={{
          backgroundImage: 'linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)',
          backgroundSize: '40px 40px',
        }}/>

        <div className="max-w-container mx-auto px-8 py-24 md:py-32 lg:py-40 relative">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            <AnimateOnScroll>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-orange-border bg-brand-orange-light mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange inline-block"/>
                <span className="text-caption font-semibold text-brand-orange uppercase tracking-widest">Digital Marketing Agency · US Based</span>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={80}>
              <h1 className="text-4xl md:text-5xl lg:text-display font-normal text-brand-black leading-tight mb-6">
                Your business is great.<br />
                <span className="font-semibold text-gradient-orange">Let the internet know it.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={160}>
              <p className="text-body-lg text-brand-dark max-w-2xl mb-10 leading-relaxed">
                We help US-based offline businesses build a powerful online presence — from a high-converting website to ads that bring real customers through your door.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={240}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white text-body rounded-brand min-h-touch hover:bg-brand-orange-dark transition-colors duration-150 shadow-orange-sm">
                  Get Your Free Audit
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/services" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-off-white text-brand-black text-body rounded-brand min-h-touch border border-brand-border hover:bg-brand-orange-light hover:border-brand-orange-border transition-colors duration-150">
                  View Services
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={320}>
              <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-12 w-full" style={{ borderTop: '1px solid #E4E3DE' }}>
                {[
                  { stat: '50+', label: 'Businesses Served' },
                  { stat: '3.8x', label: 'Avg. ROAS on Ads' },
                  { stat: '< 48h', label: 'First Draft Delivery' },
                ].map(({ stat, label }) => (
                  <div key={label} className="flex flex-col items-center">
                    <span className="text-h2 font-semibold text-brand-orange">{stat}</span>
                    <span className="text-body-sm text-brand-mid">{label}</span>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="bg-brand-off-white py-24 md:py-32" style={{ borderBottom: '1px solid #E4E3DE' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-16">
              <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-3">What We Do</p>
              <h2 className="text-h2 font-semibold text-brand-black mb-4">Everything you need to win online</h2>
              <p className="text-body-lg text-brand-dark">From your first website to multi-channel ad campaigns — we handle the entire digital stack.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 equal-height">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 60}>
                <Link href={s.href} className="group flex flex-col p-6 bg-brand-off-white border border-brand-border rounded-brand hover:border-brand-orange hover:shadow-orange-sm transition-all duration-200 h-full">
                  <div className="w-10 h-10 flex items-center justify-center rounded-brand bg-brand-orange-light text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200">
                    {s.icon}
                  </div>
                  <h3 className="text-body font-semibold text-brand-black mb-2">{s.title}</h3>
                  <p className="text-body-sm text-brand-mid leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-body-sm font-medium text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="mt-8 text-center">
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 border border-brand-border bg-brand-off-white text-brand-black text-body rounded-brand min-h-touch hover:bg-brand-orange-light hover:border-brand-orange-border transition-colors duration-150">
                See all services & pricing
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-brand-orange-light py-24 md:py-32" style={{ borderTop: '1px solid #FED7AA', borderBottom: '1px solid #FED7AA' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-16">
              <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-3">Why Nexus Digital</p>
              <h2 className="text-h2 font-semibold text-brand-black mb-4">The agency that actually gets it</h2>
              <p className="text-body-lg text-brand-dark">We built Nexus Digital specifically for businesses that have never had an online presence.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 equal-height">
            {differentiators.map((d, i) => (
              <AnimateOnScroll key={d.number} delay={i * 100}>
                <div className="flex flex-col p-8 bg-brand-off-white border border-brand-orange-border rounded-brand shadow-brand-sm h-full">
                  <span className="text-display font-semibold text-brand-orange/15 block mb-4 leading-none">{d.number}</span>
                  <h3 className="text-h3 font-semibold text-brand-black mb-3">{d.title}</h3>
                  <p className="text-body text-brand-dark leading-relaxed flex-1">{d.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-brand-off-white py-24 md:py-32" style={{ borderBottom: '1px solid #E4E3DE' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-16">
              <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-3">How It Works</p>
              <h2 className="text-h2 font-semibold text-brand-black mb-4">From conversation to customers in 3 steps</h2>
              <p className="text-body-lg text-brand-dark">Simplified onboarding so you get started without a headache.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 equal-height">
            {process.map((p, i) => (
              <AnimateOnScroll key={p.step} delay={i * 100}>
                <div className="flex flex-col p-6 border border-brand-border rounded-brand h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-9 h-9 rounded-full bg-brand-orange text-white text-body-sm font-semibold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-body font-semibold text-brand-black">{p.title}</span>
                  </div>
                  <p className="text-body text-brand-dark leading-relaxed pl-[52px] flex-1">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-brand-grain py-24 md:py-32" style={{ borderBottom: '1px solid #E4E3DE' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-4">
              <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-3">Pricing</p>
              <h2 className="text-h2 font-semibold text-brand-black mb-4">Simple, transparent packages</h2>
              <p className="text-body-lg text-brand-dark">No hidden fees. Pick the package that fits where your business is right now.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 equal-height">
            {packages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 80}>
                <div className={`relative flex flex-col rounded-brand border p-8 h-full transition-shadow duration-200 ${
                  pkg.highlight
                    ? 'bg-brand-orange border-brand-orange shadow-orange-md'
                    : 'bg-brand-off-white border-brand-border hover:shadow-brand-sm'
                }`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-charcoal text-white text-caption font-semibold rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-mid inline-block"/>
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <p className={`text-caption font-semibold uppercase tracking-widest mb-1 ${pkg.highlight ? 'text-white/70' : 'text-brand-orange'}`}>
                      {pkg.name}
                    </p>
                    <p className={`text-body-sm mb-4 ${pkg.highlight ? 'text-white/80' : 'text-brand-mid'}`}>{pkg.subtitle}</p>
                    <div className="flex items-baseline gap-1.5">
                      <span className={`text-h2 font-semibold ${pkg.highlight ? 'text-white' : 'text-brand-black'}`}>{pkg.price}</span>
                      <span className={`text-body-sm ${pkg.highlight ? 'text-white/60' : 'text-brand-mid'}`}>{pkg.note}</span>
                    </div>
                    <p className={`text-body-sm mt-3 leading-relaxed ${pkg.highlight ? 'text-white/75' : 'text-brand-dark'}`}>{pkg.desc}</p>
                  </div>

                  <ul className="flex flex-col gap-3 flex-1 mb-8">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-body-sm">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                          <circle cx="8" cy="8" r="7" fill={pkg.highlight ? 'rgba(255,255,255,0.2)' : '#FFF7ED'}/>
                          <path d="M5 8l2.5 2.5L11 5.5" stroke={pkg.highlight ? '#fff' : '#F97316'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className={pkg.highlight ? 'text-white/85' : 'text-brand-dark'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-brand text-body min-h-touch transition-colors duration-150 ${
                      pkg.highlight
                        ? 'bg-white text-brand-orange hover:bg-brand-orange-light font-medium'
                        : 'bg-brand-orange text-white hover:bg-brand-orange-dark'
                    }`}
                  >
                    {pkg.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <p className="text-body-sm text-brand-mid text-center mt-6">
              All plans include a free onboarding call. Not sure which fits?{' '}
              <Link href="/contact" className="text-brand-orange underline hover:text-brand-orange-dark">Let's talk →</Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-brand-charcoal py-24 md:py-32">
        <div className="max-w-container mx-auto px-8 text-center">
          <AnimateOnScroll>
            <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-6">Ready to grow?</p>
            <h2 className="text-h2 md:text-display font-semibold text-brand-off-white mb-6 max-w-3xl mx-auto">
              Let's build your digital presence — starting this week.
            </h2>
            <p className="text-body-lg text-white/60 max-w-xl mx-auto mb-10">
              Book a free 30-minute discovery call. No pressure, no jargon — just an honest look at what will actually move the needle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white text-body rounded-brand min-h-touch hover:bg-brand-orange-dark transition-colors duration-150 shadow-orange-sm">
                Book Free Discovery Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 px-8 py-4 text-brand-off-white text-body rounded-brand min-h-touch border border-white/20 hover:border-white/40 hover:bg-white/5 transition-colors duration-150">
                Explore Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
