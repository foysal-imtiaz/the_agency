import Link from 'next/link'
import AnimateOnScroll from '../components/AnimateOnScroll'

export const runtime = 'edge'

export const metadata = {
  title: 'DefineCore — Where Technology Meets Growth',
  description: 'DefineCore helps businesses build a powerful online presence — from high-performance websites to precision ad campaigns and data-driven analytics.',
  openGraph: {
    title: 'DefineCore — Where Technology Meets Growth',
    description: 'Tech-powered digital agency. Websites, ads, analytics, social.',
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
    desc: 'Custom WordPress or Next.js websites — fast, mobile-first, and built to convert visitors into paying customers.',
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
    desc: 'Data-driven search campaigns targeting customers actively looking for your services right now.',
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
    desc: 'Facebook and Instagram campaigns that build brand awareness and drive qualified leads.',
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
    desc: 'Full Google Analytics 4 setup, event tracking, and dashboards so you always know what\'s working.',
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
    desc: 'Complete social presence setup, content strategy, and brand guidelines from the ground up.',
    href: '/services#social',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.6L10 14.8l-4.9 2.5.9-5.6-4-3.9 5.6-.8L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Full Growth Package',
    desc: 'Website + ads + analytics + social — the complete digital presence, fully managed.',
    href: '/services#packages',
  },
]

const differentiators = [
  {
    number: '01',
    title: 'Built for Offline-to-Online',
    desc: 'We specialize in businesses making the digital leap. We speak your language, not tech jargon — and we\'ve seen every challenge your industry faces.',
  },
  {
    number: '02',
    title: 'Transparent & Results-First',
    desc: 'No vanity metrics. Every engagement comes with clear KPIs, monthly reporting, and a direct line to your team — no middlemen.',
  },
  {
    number: '03',
    title: 'Tech + Marketing Under One Roof',
    desc: 'Engineers, designers, and growth specialists working in sync. One strategy, one team, one point of accountability.',
  },
]

const process = [
  { title: 'Consult', desc: 'Free 30-min discovery call to understand your business, goals, and current digital presence.' },
  { title: 'Build', desc: 'Our team ships your website, campaigns, and analytics stack — configured for speed and precision.' },
  { title: 'Grow', desc: 'Monthly reports, A/B tests, and continuous strategy updates compound your results over time.' },
]

const packages = [
  {
    name: 'Launch',
    subtitle: 'Digital Marketing',
    tag: 'Get started',
    desc: 'For businesses ready to show up online — ads, analytics, and social presence fully managed by our team.',
    features: [
      'Google Ads setup & management',
      'Meta Ads (Facebook + Instagram)',
      'GA4 Analytics + custom dashboard',
      'Social media presence setup',
      'Monthly performance report',
      'Dedicated account manager',
    ],
    cta: 'Get a Quote',
    highlight: false,
  },
  {
    name: 'Accelerate',
    subtitle: 'Website + Digital Marketing',
    tag: 'Most popular',
    desc: 'A high-performance website combined with a full marketing engine — the complete digital presence built to scale.',
    features: [
      'Everything in Launch',
      'Custom website (WordPress or Next.js)',
      'On-page SEO optimization',
      'Campaign landing pages',
      'Bi-weekly strategy calls',
      'Priority support & faster delivery',
    ],
    cta: 'Get a Quote',
    highlight: true,
  },
  {
    name: 'Dominate',
    subtitle: 'Custom Advanced Package',
    tag: 'For serious growth',
    desc: 'Fully bespoke engagement — custom web apps, advanced analytics, and full-channel marketing for ambitious businesses.',
    features: [
      'Everything in Accelerate',
      'Custom Next.js web application',
      'Advanced analytics & attribution',
      'Multi-channel ad strategy',
      'Full social media management',
      'Dedicated team + weekly calls',
    ],
    cta: 'Let\'s Talk',
    highlight: false,
  },
]

function CheckIcon({ inverted = false }: { inverted?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" fill={inverted ? 'rgba(255,255,255,0.18)' : '#fff7ed'} />
      <path d="M5 8l2.5 2.5L11 5.5" stroke={inverted ? '#fff' : '#F97316'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative bg-brand-off-white overflow-hidden flex flex-col" style={{ minHeight: "calc(100vh - 60px)" }}>
        {/* Orange radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(249,115,22,0.09) 0%, transparent 65%)' }} />

        {/* Grid background — the grid the user liked */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />
        {/* Fade grid out at the bottom so it blends into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #FBFBF8)' }} />

        <div className="max-w-container mx-auto px-6 md:px-8 py-16 md:py-20 relative flex flex-col justify-center flex-1">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

            <AnimateOnScroll>
              <div className="badge-outline mb-8 gap-1.5 py-1.5 px-3.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse inline-block" />
                Digital Agency · Engineering + Marketing
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={80}>
              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold text-brand-black leading-[1.08] tracking-tight mb-6">
                Your business is great.{' '}
                <span className="text-gradient-orange">Let the internet know it.</span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll delay={160}>
              <p className="text-lg md:text-xl text-brand-mid max-w-2xl mb-10 leading-relaxed">
                We combine engineering and marketing to help businesses build a powerful online presence — from high-performance websites to precision ad campaigns that drive real customers.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll delay={240}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/contact" className="btn-default btn-lg shadow-orange-md">
                  Get Your Free Audit
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/services" className="btn-secondary btn-lg">
                  Explore Services
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── SERVICES — same bg, flows straight from hero ── */}
      <section className="bg-brand-off-white pt-8 pb-24 md:pb-32" id="services" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">What We Do</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">Everything you need to win online</h2>
              <p className="text-brand-mid text-lg">From your first website to multi-channel ad campaigns — we handle the entire digital stack.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 equal-height">
            {services.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={i * 55}>
                <Link href={s.href} className="group flex flex-col p-5 bg-white border border-brand-border rounded-lg hover:border-brand-orange hover:shadow-orange-sm transition-all duration-200 h-full shadow-brand-sm">
                  <div className="w-9 h-9 flex items-center justify-center rounded-md bg-brand-orange-light text-brand-orange mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200 flex-shrink-0">
                    {s.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-brand-black mb-1.5">{s.title}</h3>
                  <p className="text-sm text-brand-mid leading-relaxed flex-1">{s.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <div className="mt-8 text-center">
              <Link href="/services" className="btn-secondary btn">
                See all services & pricing
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-brand-orange-light py-24 md:py-32" style={{ borderBottom: '1px solid #fed7aa' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Why DefineCore</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">The agency that actually gets it</h2>
              <p className="text-lg text-brand-dark/80">We built DefineCore for businesses making the digital leap — and we know exactly what it takes.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 equal-height">
            {differentiators.map((d, i) => (
              <AnimateOnScroll key={d.number} delay={i * 100}>
                <div className="flex flex-col p-7 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm h-full">
                  <span className="text-5xl font-black text-brand-orange/10 block mb-4 leading-none tabular-nums">{d.number}</span>
                  <h3 className="text-[1.05rem] font-semibold text-brand-black mb-3 tracking-tight">{d.title}</h3>
                  <p className="text-sm text-brand-dark/80 leading-relaxed flex-1">{d.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-brand-off-white py-24 md:py-32" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">How It Works</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">From first call to compounding growth</h2>
              <p className="text-lg text-brand-mid">Three steps, zero confusion. We move fast and keep you informed at every stage.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 equal-height">
            {process.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 100}>
                <div className="flex flex-col p-6 border border-brand-border rounded-lg bg-white shadow-brand-sm h-full hover:border-brand-orange-border hover:shadow-orange-sm transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-brand-orange text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm font-semibold text-brand-black">{p.title}</span>
                  </div>
                  <p className="text-sm text-brand-mid leading-relaxed flex-1 pl-11">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll delay={100}>
            <div className="mt-10 text-center">
              <Link href="/contact" className="btn-default btn-lg shadow-orange-sm">
                Book a Free Discovery Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── PRICING — no prices shown ── */}
      <section className="bg-brand-grain py-24 md:py-32" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Packages</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">Simple, transparent packages</h2>
              <p className="text-lg text-brand-mid">Pick the scope that fits your goals. Every package is tailored to your business during a free onboarding call.</p>
            </div>
          </AnimateOnScroll>

          {/* Inline note instead of prices */}
          <AnimateOnScroll>
            <div className="flex items-center gap-2.5 mb-10 p-3.5 bg-brand-orange-light border border-brand-orange-border rounded-lg w-fit">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <circle cx="7" cy="7" r="6" stroke="#F97316" strokeWidth="1.3"/>
                <path d="M7 4.5v3M7 9.5v.5" stroke="#F97316" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <p className="text-xs text-brand-orange font-medium">Pricing is scoped to your needs — get a custom quote in your free audit call.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 equal-height">
            {packages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 80}>
                <div className={`relative flex flex-col rounded-lg border p-7 h-full transition-all duration-200 ${
                  pkg.highlight
                    ? 'bg-brand-orange border-brand-orange shadow-orange-md'
                    : 'bg-white border-brand-border shadow-brand-sm hover:border-brand-orange-border hover:shadow-brand-md'
                }`}>
                  {pkg.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                      <span className="badge-default gap-1.5 shadow-brand-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange-mid" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-5">
                    {/* Tag pill */}
                    <span className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3 ${
                      pkg.highlight ? 'bg-white/20 text-white' : 'bg-brand-orange-light text-brand-orange border border-brand-orange-border'
                    }`}>
                      {pkg.tag}
                    </span>
                    <h3 className={`text-xl font-bold tracking-tight mb-1 ${pkg.highlight ? 'text-white' : 'text-brand-black'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs font-medium mb-4 ${pkg.highlight ? 'text-white/65' : 'text-brand-orange'}`}>{pkg.subtitle}</p>
                    <p className={`text-sm leading-relaxed ${pkg.highlight ? 'text-white/75' : 'text-brand-mid'}`}>{pkg.desc}</p>
                  </div>

                  <ul className="flex flex-col gap-2.5 flex-1 mb-7">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm min-w-0">
                        <CheckIcon inverted={pkg.highlight} />
                        <span className={`break-words ${pkg.highlight ? 'text-white/85' : 'text-brand-dark'}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-150 min-h-[2.5rem] ${
                      pkg.highlight
                        ? 'bg-white text-brand-orange hover:bg-brand-orange-light'
                        : 'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-orange-sm'
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
            <p className="text-sm text-brand-mid text-center mt-6">
              All packages include a free onboarding session.{' '}
              <Link href="/contact" className="text-brand-orange hover:text-brand-orange-dark underline underline-offset-4">Questions? Let's talk →</Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-brand-charcoal py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(249,115,22,0.12) 0%, transparent 70%)' }} />
        <div className="max-w-container mx-auto px-6 md:px-8 text-center relative">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-6">Ready to grow?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-3xl mx-auto leading-tight tracking-tight">
              Let's build your digital presence — starting this week.
            </h2>
            <p className="text-lg text-white/55 max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 30-minute discovery call. No pressure, no jargon — just an honest look at what will actually move the needle for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-default btn-lg shadow-orange-md">
                Book Free Discovery Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/services" className="btn btn-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/40 bg-transparent transition-colors">
                Explore Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
