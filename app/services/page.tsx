import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export const runtime = 'edge'

export const metadata = {
  title: 'Services & Pricing — Websites, Ads, Analytics & Social',
  description: 'DefineCore\'s full service menu: website development, Google Ads, Meta Ads, GA4 analytics, social media management, and full growth packages with transparent pricing.',
  openGraph: {
    title: 'Services & Pricing | DefineCore',
    description: 'Websites, ads, analytics, and social packages for US businesses.',
  },
}

const workProcess = [
  { step: '01', title: 'Discovery Audit', desc: 'We review your online presence, competitors, and opportunities — and give you an honest gap analysis before you spend a dollar.' },
  { step: '02', title: 'Strategy', desc: 'A tailored roadmap with specific channels, budgets, timelines, and expected outcomes. No guesswork.' },
  { step: '03', title: 'Execution', desc: 'Our team builds and launches everything. You\'re in the loop with a shared project board.' },
  { step: '04', title: 'Reporting', desc: 'Monthly plain-English reports with KPI progress and next steps. No fluff, no vanity metrics.' },
]

const services = [
  {
    id: 'website',
    tag: 'Website Development',
    title: 'A website that works as hard as you do',
    desc: 'Your website is your 24/7 salesperson. We build fast, mobile-first websites designed to convert visitors into paying customers — WordPress for flexibility, Next.js for performance.',
    audience: 'Perfect for: Local service businesses, retail stores, restaurants, clinics, and any business that needs credibility online.',
    deliverables: [
      'Custom design aligned to your brand',
      'Mobile-first responsive layout',
      'On-page SEO optimization',
      'Contact forms & lead capture',
      'Google Analytics 4 integration',
      'Sub-2s load time target',
      '30 days post-launch support',
    ],
  },
  {
    id: 'google-ads',
    tag: 'Google Ads',
    title: 'Show up when customers are searching',
    desc: 'Google Ads put your business in front of people actively searching for exactly what you offer. We handle everything from keyword research to bid optimization — you just answer the calls.',
    audience: 'Perfect for: Service businesses needing immediate leads — contractors, lawyers, dentists, plumbers, HVAC, and local retailers.',
    deliverables: [
      'Keyword research & competitor analysis',
      'Campaign & ad group structure',
      'Ad copy creation (3 variants)',
      'Landing page recommendations',
      'Conversion tracking setup',
      'Weekly bid optimization',
      'Monthly performance report',
    ],
  },
  {
    id: 'meta-ads',
    tag: 'Meta Ads',
    title: 'Reach your ideal customers on Facebook & Instagram',
    desc: 'Meta\'s platform is one of the most powerful tools for local business growth. We create scroll-stopping ads that build awareness and drive measurable, attributable results.',
    audience: 'Perfect for: Consumer brands, restaurants, salons, fitness studios, and businesses with visual products or services.',
    deliverables: [
      'Audience research & targeting strategy',
      'Ad creative brief & copy',
      'Campaign setup (awareness + conversions)',
      'Pixel installation & event tracking',
      'Retargeting audiences setup',
      'A/B creative testing',
      'Monthly performance report',
    ],
  },
  {
    id: 'analytics',
    tag: 'GA4 Analytics',
    title: 'Know exactly what\'s driving your business',
    desc: 'Most businesses are flying blind. GA4 setup gives you a clear picture of where customers come from, what they do on your site, and which channels actually pay off.',
    audience: 'Perfect for: Any business with a website that wants to make data-driven decisions instead of guessing.',
    deliverables: [
      'GA4 property setup & configuration',
      'Custom event tracking',
      'Google Tag Manager setup',
      'Goal & conversion configuration',
      'Custom Looker Studio dashboard',
      'UTM tracking framework',
      '1-hour training session',
    ],
  },
  {
    id: 'social',
    tag: 'Social Media Presence',
    title: 'A professional social presence that builds trust',
    desc: 'Customers check your social media before they call. We set up your profiles correctly, create a content strategy that fits your business, and build a consistent brand voice.',
    audience: 'Perfect for: New businesses launching online, or established businesses with outdated social profiles.',
    deliverables: [
      'Audit: Facebook, Instagram, Google Business',
      'Profile optimization & brand alignment',
      'Content strategy & content calendar',
      'Bio, cover art & highlight templates',
      '30 days of post ideas & captions',
      'Hashtag & engagement strategy',
      'Content guidelines document',
    ],
  },
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
    cta: "Let's Talk",
    highlight: false,
  },
]

function CheckIcon({ inverted = false }: { inverted?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="7" cy="7" r="6" fill={inverted ? 'rgba(255,255,255,0.18)' : '#fff7ed'} />
      <path d="M4 7l2.5 2.5L10 4.5" stroke={inverted ? '#fff' : '#F97316'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Page intro + How We Work */}
      <section className="bg-brand-orange-light py-20 md:py-24 overflow-x-hidden" style={{ borderBottom: '1px solid #fed7aa' }}>
        <div className="max-w-container mx-auto px-6 md:px-10">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Services & Pricing</p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-4 tracking-tight leading-tight">
              Transparent pricing.<br />
              <span className="text-gradient-orange">Real results.</span>
            </h1>
            <p className="text-base md:text-lg text-brand-dark/80 max-w-2xl mb-12">
              Every package is tailored to your business. Start with what you need and scale as you grow — pricing is quoted after a free discovery call.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange/70 mb-5">How We Work</p>
          </AnimateOnScroll>

          {/* Process: 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 equal-height">
            {workProcess.map((w, i) => (
              <AnimateOnScroll key={w.step} delay={i * 70}>
                <div className="flex flex-col p-5 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm h-full">
                  <span className="text-3xl font-black text-brand-orange/15 block mb-3 leading-none tabular-nums">{w.step}</span>
                  <h3 className="text-sm font-semibold text-brand-black mb-2">{w.title}</h3>
                  <p className="text-sm text-brand-mid leading-relaxed flex-1">{w.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      {services.map((svc, idx) => (
        <section
          key={svc.id}
          id={svc.id}
          className={`py-16 md:py-24 overflow-x-hidden ${idx % 2 === 0 ? 'bg-brand-off-white' : 'bg-brand-cream'}`}
          style={{ borderBottom: '1px solid #e4e4e7' }}
        >
          <div className="max-w-container mx-auto px-6 md:px-10">

            {/* Header */}
            <AnimateOnScroll>
              <div className="mb-7">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
                  <span className="w-1 h-4 bg-brand-orange inline-block rounded-full flex-shrink-0" />
                  {svc.tag}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-3 tracking-tight leading-snug">{svc.title}</h2>
                <p className="text-base text-brand-dark/80 leading-relaxed mb-2 max-w-3xl">{svc.desc}</p>
                <p className="text-sm text-brand-mid italic">{svc.audience}</p>
              </div>
            </AnimateOnScroll>

            {/* Deliverables — single column on mobile, 2-col on sm+ */}
            <AnimateOnScroll>
              <div className="mb-7 p-5 bg-brand-orange-light border border-brand-orange-border rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">What's Included</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                  {svc.deliverables.map(d => (
                    <li key={d} className="flex items-start gap-2 min-w-0">
                      <CheckIcon />
                      <span className="text-sm text-brand-dark break-words">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <Link href="/contact" className="btn-default btn-lg shadow-orange-sm w-full sm:w-auto justify-center">
                Get Started with {svc.tag}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* Packages */}
      <section id="packages" className="bg-brand-grain py-24 md:py-32 overflow-x-hidden" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-10">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Growth Packages</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">Everything bundled. Maximum results.</h2>
              <p className="text-lg text-brand-mid">Pick the scope that fits your goals. Pricing is customised to your business after a free discovery call.</p>
            </div>
          </AnimateOnScroll>

          {/* Info banner */}
          <AnimateOnScroll>
            <div className="flex items-center gap-2.5 mb-8 p-3.5 bg-brand-orange-light border border-brand-orange-border rounded-lg w-fit">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
                <circle cx="7" cy="7" r="6" stroke="#F97316" strokeWidth="1.3"/>
                <path d="M7 4.5v3M7 9.5v.5" stroke="#F97316" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <p className="text-xs text-brand-orange font-medium">Pricing is scoped to your needs — get a custom quote in your free audit call.</p>
            </div>
          </AnimateOnScroll>

          {/* Stack on mobile, 3-col on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 equal-height">
            {packages.map((pkg, i) => (
              <AnimateOnScroll key={pkg.name} delay={i * 80}>
                <div className={`relative flex flex-col rounded-lg border p-6 md:p-7 h-full transition-all duration-200 ${
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
                  <ul className="flex flex-col gap-2.5 flex-1 mb-6">
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
              All plans include a free onboarding call.{' '}
              <Link href="/contact" className="text-brand-orange hover:text-brand-orange-dark underline underline-offset-4">Not sure which fits? Let's talk →</Link>
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-brand-charcoal py-24">
        <div className="max-w-container mx-auto px-6 md:px-10 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Still deciding?</h2>
            <p className="text-lg text-white/55 max-w-xl mx-auto mb-8">
              30 minutes with our team costs nothing. We'll help you figure out exactly what your business needs.
            </p>
            <Link href="/contact" className="btn-default btn-lg shadow-orange-md">
              Book Free Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
