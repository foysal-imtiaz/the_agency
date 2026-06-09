import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export const metadata = {
  title: 'Services & Pricing — Website, Ads, Analytics & Social Media',
  description: 'Explore Nexus Digital\'s full service menu: website development, Google Ads, Meta Ads, GA4 analytics setup, social media management, and full growth packages with transparent pricing.',
  openGraph: {
    title: 'Services & Pricing | Nexus Digital',
    description: 'Website development, Google Ads, Meta Ads, GA4 analytics, and social media packages for US businesses.',
  },
}

const workProcess = [
  { step: '01', title: 'Discovery Audit', desc: 'We review your current online presence, competitors, and opportunities. You get an honest gap analysis before you spend a dollar.' },
  { step: '02', title: 'Strategy', desc: 'Based on the audit, we present a tailored roadmap — specific channels, budgets, timelines, and expected outcomes.' },
  { step: '03', title: 'Execution', desc: 'Our team builds and launches everything. You\'re kept in the loop with progress updates and a shared project board.' },
  { step: '04', title: 'Reporting', desc: 'Monthly reports with plain-English summaries, KPI progress, and what we\'re doing next. No fluff, no vanity metrics.' },
]

const services = [
  {
    id: 'website',
    tag: 'Website Development',
    title: 'A website that works as hard as you do',
    desc: 'Your website is your 24/7 salesperson. We build fast, mobile-first websites designed to turn visitors into paying customers — whether you need a powerful WordPress site or a custom Next.js web app.',
    audience: 'Perfect for: Local service businesses, retail stores, restaurants, clinics, and any business that needs to establish credibility online.',
    deliverables: [
      'Custom design aligned to your brand',
      'Mobile-first responsive layout',
      'On-page SEO optimization',
      'Contact forms & lead capture',
      'Google Analytics 4 integration',
      'Fast load time (< 2s target)',
      '30 days post-launch support',
    ],
  },
  {
    id: 'google-ads',
    tag: 'Google Ads',
    title: 'Show up when customers are searching',
    desc: 'Google Ads put your business in front of people actively searching for exactly what you offer. We handle everything from keyword research to campaign optimization — your only job is to answer the calls.',
    audience: 'Perfect for: Service businesses needing immediate leads — contractors, lawyers, dentists, plumbers, HVAC, and local retailers.',
    deliverables: [
      'Keyword research & competitor analysis',
      'Campaign & ad group structure',
      'Compelling ad copy (3 variants)',
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
    desc: 'With over 3 billion users, Meta\'s advertising platform is one of the most powerful tools for local business growth. We create scroll-stopping ads that build awareness and drive measurable results.',
    audience: 'Perfect for: Consumer brands, restaurants, salons, fitness studios, e-commerce, and businesses with strong visual products or services.',
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
    desc: 'Most businesses are flying blind. GA4 Analytics setup gives you a clear picture of where customers come from, what they do on your site, and which marketing channels actually pay off.',
    audience: 'Perfect for: Any business with a website that wants to make data-driven decisions instead of guessing what\'s working.',
    deliverables: [
      'GA4 property setup & configuration',
      'Custom event tracking (forms, calls, clicks)',
      'Google Tag Manager setup',
      'Goal & conversion configuration',
      'Custom dashboard in Looker Studio',
      'UTM tracking framework',
      'Training session (1 hour)',
    ],
  },
  {
    id: 'social',
    tag: 'Social Media Presence',
    title: 'A professional social presence that builds trust',
    desc: 'Your customers check your social media before they call. We set up your profiles correctly, create a content strategy that fits your business, and build a consistent brand voice across every platform.',
    audience: 'Perfect for: New businesses launching their first online presence, or established businesses with outdated or incomplete social profiles.',
    deliverables: [
      'Platform audit (Facebook, Instagram, Google Business)',
      'Profile optimization & brand alignment',
      'Content strategy & content calendar',
      'Bio, cover art, and highlight templates',
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
    price: '$2,500',
    note: '/month',
    desc: 'Everything you need to start winning online — ads, analytics, and social presence fully managed.',
    features: [
      'Google Ads campaign setup & management',
      'Meta Ads (Facebook + Instagram)',
      'GA4 Analytics setup + custom dashboard',
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

export default function ServicesPage() {
  return (
    <>
      {/* How We Work */}
      <section className="bg-brand-orange-light py-20 md:py-24" style={{ borderBottom: '1px solid #FED7AA' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Approach</p>
            <h1 className="text-h2 md:text-display font-normal text-brand-black mb-4 max-w-3xl">
              Transparent pricing.<br /><span className="font-semibold">Real results.</span>
            </h1>
            <p className="text-body-lg text-brand-dark max-w-2xl mb-12">
              Every service is priced clearly upfront. No hidden fees, no surprise invoices. Start with what you need and scale as you grow.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 equal-height">
            {workProcess.map((w, i) => (
              <AnimateOnScroll key={w.step} delay={i * 80}>
                <div className="flex flex-col p-6 bg-brand-off-white border border-brand-orange-border rounded-brand shadow-brand-sm h-full">
                  <span className="text-h2 font-semibold text-brand-orange/20 block mb-3 leading-none">{w.step}</span>
                  <h3 className="text-body font-semibold text-brand-black mb-2">{w.title}</h3>
                  <p className="text-body-sm text-brand-dark leading-relaxed flex-1">{w.desc}</p>
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
          className={`py-20 md:py-28 ${idx % 2 === 0 ? 'bg-brand-off-white' : 'bg-brand-cream'}`}
          style={{ borderBottom: '1px solid #E4E3DE' }}
        >
          <div className="max-w-container mx-auto px-8">
            <AnimateOnScroll>
              <div className="max-w-3xl mb-10">
                <span className="inline-flex items-center gap-2 text-caption font-semibold uppercase tracking-widest text-brand-orange mb-4">
                  <span className="w-1 h-4 bg-brand-orange inline-block rounded-full"/>
                  {svc.tag}
                </span>
                <h2 className="text-h2 font-semibold text-brand-black mb-4">{svc.title}</h2>
                <p className="text-body-lg text-brand-dark leading-relaxed mb-3">{svc.desc}</p>
                <p className="text-body-sm text-brand-mid italic">{svc.audience}</p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="mb-10 p-6 bg-brand-orange-light border border-brand-orange-border rounded-brand">
                <p className="text-body-sm font-semibold text-brand-black mb-4 uppercase tracking-widest">What's Included</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                  {svc.deliverables.map(d => (
                    <div key={d} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-1">
                        <circle cx="7" cy="7" r="6" fill="#FFF7ED"/>
                        <path d="M4 7l2.5 2.5L10 4.5" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-body-sm text-brand-dark">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-body rounded-brand min-h-touch hover:bg-brand-orange-dark transition-colors duration-150 shadow-orange-sm"
              >
                Get Started with {svc.tag}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </AnimateOnScroll>
          </div>
        </section>
      ))}

      {/* Packages Pricing */}
      <section id="packages" className="bg-brand-grain py-24 md:py-32" style={{ borderBottom: '1px solid #E4E3DE' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-3">Packages</p>
              <h2 className="text-h2 font-semibold text-brand-black mb-4">Everything bundled. Maximum results.</h2>
              <p className="text-body-lg text-brand-dark">One partner for your entire online presence — website, ads, analytics, and social — at a bundled rate.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 equal-height">
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
                    <p className={`text-caption font-semibold uppercase tracking-widest mb-1 ${pkg.highlight ? 'text-white/70' : 'text-brand-orange'}`}>{pkg.name}</p>
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

      {/* Bottom CTA */}
      <section className="bg-brand-charcoal py-24">
        <div className="max-w-container mx-auto px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-h2 font-semibold text-brand-off-white mb-4">Still deciding?</h2>
            <p className="text-body-lg text-white/60 max-w-xl mx-auto mb-8">
              Let's get on a call for 30 minutes. We'll help you figure out exactly what your business needs.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-body rounded-brand min-h-touch hover:bg-brand-orange-dark transition-colors duration-150 shadow-orange-sm">
              Book Free Strategy Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
