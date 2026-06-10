import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export const runtime = 'edge'

export const metadata = {
  title: 'About DefineCore — Our Story, Mission & Values',
  description: 'DefineCore is a tech-powered growth studio on a mission to level the digital playing field for US offline businesses. Learn about our story, focus, and values.',
  openGraph: {
    title: 'About DefineCore',
    description: 'Our story, mission, and the values behind the tech-powered growth studio.',
  },
}

const pillars = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17V8l8-5 8 5v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <rect x="8" y="13" width="6" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'Industry Focus',
    title: 'We serve one market: US offline businesses.',
    desc: 'Restaurants, contractors, clinics, salons, law firms, auto shops — businesses that are excellent at what they do but invisible online. That narrow focus means we\'ve seen every challenge your industry faces, and we already know what works.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 7v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Our Pace',
    title: 'We move fast and stay accountable.',
    desc: 'First website draft in under 48 hours. Ad campaigns live within a week. Monthly reports that actually tell you something. We operate with the speed of a startup and the discipline of an agency that\'s been around the block.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 16l4-4 3 3 4-5 4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="2" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: 'How We Measure Success',
    title: 'Revenue and leads — nothing else.',
    desc: 'We don\'t pitch impressions, follower counts, or "brand awareness" as success metrics unless they connect to real business outcomes. If it doesn\'t put money in your pocket or customers through your door, we\'re not celebrating it.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3l2.5 5.5L19 9.5l-4 4 .9 5.5L11 16.5 6.1 19l.9-5.5-4-4 5.5-1L11 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    label: 'Tech Edge',
    title: 'Engineering and marketing, fully integrated.',
    desc: 'Most agencies hand off the tech to freelancers. We build it in-house — meaning your website, your analytics stack, and your ad campaigns are designed to work together from day one, not stitched together after the fact.',
  },
]

const values = [
  {
    number: '01',
    title: 'Clarity over cleverness',
    desc: 'Plain English in every report, every call, every email. You\'ll always know what we\'re doing, why we\'re doing it, and what to expect next.',
  },
  {
    number: '02',
    title: 'Outcomes over outputs',
    desc: 'We don\'t measure our work by deliverables shipped. We measure it by the revenue, leads, and growth those deliverables generate for you.',
  },
  {
    number: '03',
    title: 'Partnerships, not projects',
    desc: 'The businesses we grow best are the ones we\'ve worked with for years. We invest in understanding your business deeply — that compounds over time.',
  },
  {
    number: '04',
    title: 'Radical honesty',
    desc: 'If a channel won\'t work for your business, we\'ll tell you before you spend a dollar on it. We\'d rather lose a upsell than lose your trust.',
  },
]

const stats = [
  { value: '50+', label: 'Businesses Grown' },
  { value: '3.8×', label: 'Average ROAS' },
  { value: '$4M+', label: 'Ad Spend Managed' },
  { value: '< 48h', label: 'First Draft Turnaround' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── STORY / INTRO ── */}
      <section className="bg-brand-orange-light py-20 md:py-28 overflow-hidden" style={{ borderBottom: '1px solid #fed7aa' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            <AnimateOnScroll>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Our Story</p>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight leading-tight">
                  Great businesses deserve to be{' '}
                  <span className="text-gradient-orange">found online.</span>
                </h1>
                <div className="flex flex-col gap-4 text-base text-brand-dark/80 leading-relaxed">
                  <p>
                    DefineCore was founded after watching the same story play out across dozens of industries: businesses with years of expertise, loyal customers, and real craftsmanship — completely invisible online. Not because they weren't good enough. Because no one had ever built them a proper digital foundation.
                  </p>
                  <p>
                    We set out to change that. Not as a generic agency that serves everyone, but as a focused studio that goes deep on one thing: helping US offline businesses make the leap to a strong, lasting online presence.
                  </p>
                  <p>
                    We combine engineering and marketing under one roof — because a beautiful website with no traffic is useless, and great ads pointing to a broken site are just as bad. Everything has to work together.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex flex-col gap-4">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="flex flex-col p-5 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm">
                      <span className="text-3xl font-bold text-brand-orange tracking-tight">{value}</span>
                      <span className="text-xs text-brand-mid mt-1">{label}</span>
                    </div>
                  ))}
                </div>
                {/* Mission card */}
                <div className="flex flex-col p-6 bg-brand-charcoal rounded-lg shadow-brand-md">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Mission</p>
                  <p className="text-base text-white/85 leading-relaxed">
                    To level the digital playing field for offline businesses — ensuring the best local services and products are the ones that actually get found, chosen, and remembered online.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── WHAT WE STAND FOR (replaces Team) ── */}
      <section className="bg-brand-off-white py-24 md:py-32" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">What We Stand For</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">How we think about our work</h2>
              <p className="text-lg text-brand-mid">Four pillars that define every decision we make — from which services we offer to how we report results.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 equal-height">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 80}>
                <div className="flex flex-col p-7 bg-white border border-brand-border rounded-lg shadow-brand-sm h-full hover:border-brand-orange-border hover:shadow-orange-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-md bg-brand-orange-light border border-brand-orange-border flex items-center justify-center text-brand-orange mb-5 flex-shrink-0">
                    {p.icon}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2">{p.label}</p>
                  <h3 className="text-base font-semibold text-brand-black mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-brand-mid leading-relaxed flex-1">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE WORK WITH ── */}
      <section className="bg-brand-orange-light py-24 md:py-32" style={{ borderBottom: '1px solid #fed7aa' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <AnimateOnScroll>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Who We Work With</p>
                <h2 className="text-h2 font-bold text-brand-black mb-5 tracking-tight">Built for the businesses that keep communities running.</h2>
                <p className="text-base text-brand-dark/80 leading-relaxed mb-6">
                  We work exclusively with US-based businesses that have strong real-world reputations but underdeveloped digital presence. If you've built something worth finding, we'll make sure the internet knows about it.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Restaurants', 'Law Firms', 'Dental Clinics',
                    'HVAC & Plumbing', 'Retail Stores', 'Fitness Studios',
                    'Auto Shops', 'Real Estate', 'Home Services',
                    'Med Spas & Salons', 'Accountants', 'Contractors',
                  ].map(industry => (
                    <span key={industry} className="badge-outline text-xs">{industry}</span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex flex-col gap-4 p-7 bg-white border border-brand-orange-border rounded-lg shadow-brand-md">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2">The right fit for DefineCore</p>
                {[
                  { yes: true,  text: 'You\'ve been in business 2+ years with proven demand' },
                  { yes: true,  text: 'You\'re ready to invest consistently in digital growth' },
                  { yes: true,  text: 'You want a long-term partner, not a one-time vendor' },
                  { yes: true,  text: 'You value transparency and straight talk over sales fluff' },
                  { yes: false, text: 'You need a logo designed or a brochure printed' },
                  { yes: false, text: 'You\'re looking for the cheapest option available' },
                ].map(({ yes, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${yes ? 'bg-brand-orange' : 'bg-brand-border'}`}>
                      {yes ? (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      ) : (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round"/></svg>
                      )}
                    </span>
                    <p className={`text-sm ${yes ? 'text-brand-dark' : 'text-brand-mid'}`}>{text}</p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="bg-brand-grain py-24 md:py-32" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Values</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">The principles we don't compromise on</h2>
              <p className="text-lg text-brand-mid">Every client relationship, every campaign, every deliverable is guided by these four principles.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 equal-height">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="flex flex-col p-6 bg-white border border-brand-border rounded-lg hover:border-brand-orange-border hover:shadow-orange-sm transition-all duration-200 h-full shadow-brand-sm">
                  <div className="w-7 h-7 rounded-md bg-brand-orange-light border border-brand-orange-border flex items-center justify-center mb-4 text-xs font-bold text-brand-orange flex-shrink-0">
                    {v.number}
                  </div>
                  <h3 className="text-sm font-semibold text-brand-black mb-2">{v.title}</h3>
                  <p className="text-sm text-brand-mid leading-relaxed flex-1">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(249,115,22,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-container mx-auto px-6 md:px-8 text-center relative">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-5">Sound like a fit?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              Let's see if we're the right partner for you.
            </h2>
            <p className="text-lg text-white/55 max-w-lg mx-auto mb-8 leading-relaxed">
              A free 30-minute call — no pitch deck, no pressure. Just an honest conversation about your business and what it would take to grow it online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contact" className="btn-default btn-lg shadow-orange-md">
                Book a Free Call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/services" className="btn btn-lg border border-white/20 text-white hover:bg-white/5 hover:border-white/40 bg-transparent transition-colors">
                See Our Services
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
