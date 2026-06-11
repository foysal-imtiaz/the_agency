import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export const runtime = 'edge'

export const metadata = {
  title: 'About DefineCore — Our Story, Mission & Approach',
  description: 'DefineCore is a digital agency on a mission to help businesses of all kinds build a powerful online presence. Learn about our story, focus, and approach.',
  openGraph: {
    title: 'About DefineCore',
    description: 'Our story, mission, and the values behind the digital agency.',
  },
}

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2.4 5 5.6.8-4 3.9.9 5.6L10 14.8l-4.9 2.5.9-5.6-4-3.9 5.6-.8L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Results that matter',
    desc: 'We measure success the same way you do — more customers, more revenue, more growth. Every strategy, every campaign, every deliverable is tied back to outcomes that actually move your business forward.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Tech and marketing as one',
    desc: 'Most agencies hand off the technical work to freelancers. We build everything in-house — meaning your website, analytics, and ad campaigns are designed to work together from day one.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Speed without shortcuts',
    desc: 'First draft in under 48 hours. Campaigns live within a week. We move fast — but never at the expense of quality. Every deliverable is reviewed, tested, and built to last.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10a7 7 0 1 0 14 0A7 7 0 0 0 3 10z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 7v3l2 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M6 3.5C7.3 2.6 8.6 2 10 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Radical transparency',
    desc: 'You\'ll always know what we\'re doing, why we\'re doing it, and what results to expect — in plain English. No jargon, no hiding behind dashboards, no surprises on your invoice.',
  },
]

const fitItems = [
  { yes: true,  text: 'You want a long-term digital partner, not a one-time vendor' },
  { yes: true,  text: 'You\'re ready to invest in building a real online presence' },
  { yes: true,  text: 'You value clear communication and honest advice' },
  { yes: true,  text: 'You want strategy and execution from the same team' },
  { yes: false, text: 'You\'re looking for the cheapest option available' },
  { yes: false, text: 'You want quick fixes with no long-term thinking' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── STORY / INTRO ── */}
      <section className="bg-brand-orange-light py-20 md:py-28 overflow-hidden" style={{ borderBottom: '1px solid #fed7aa' }}>
        <div className="max-w-container mx-auto px-6 md:px-10">
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
                    We set out to change that. Not as a generic agency that serves everyone carelessly, but as a focused studio that goes deep — understanding each client's business, industry, and customers before touching a single line of code or ad creative.
                  </p>
                  <p>
                    We combine engineering and marketing under one roof, because a beautiful website with no traffic is useless, and great ads pointing to a broken site are just as bad. Everything has to work together.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col p-7 bg-brand-charcoal rounded-lg shadow-brand-md">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Mission</p>
                  <p className="text-lg text-white/85 leading-relaxed font-medium">
                    To help every business — regardless of size or industry — build a digital presence that earns trust, attracts customers, and grows over time.
                  </p>
                </div>
                <div className="flex flex-col p-7 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Approach</p>
                  <p className="text-base text-brand-dark/80 leading-relaxed">
                    Every engagement starts with listening. We take time to understand your goals, your customers, and your market before recommending a single service. The result is a strategy that actually fits your business — not a template.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── WHAT WE STAND FOR + WHO WE WORK WITH (merged) ── */}
      <section className="bg-brand-off-white py-24 md:py-32" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-10">

          {/* Pillars */}
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">How We Work</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">Built on four principles</h2>
              <p className="text-lg text-brand-mid">Everything we do — from how we write code to how we report results — flows from these four commitments.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 equal-height mb-16">
            {pillars.map((p, i) => (
              <AnimateOnScroll key={p.title} delay={i * 80}>
                <div className="flex flex-col p-6 bg-white border border-brand-border rounded-lg shadow-brand-sm h-full hover:border-brand-orange-border hover:shadow-orange-sm transition-all duration-200">
                  <div className="w-9 h-9 rounded-md bg-brand-orange-light border border-brand-orange-border flex items-center justify-center text-brand-orange mb-4 flex-shrink-0">
                    {p.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-brand-black mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm text-brand-mid leading-relaxed flex-1">{p.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Who we work with */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-10 border-t border-brand-border">
            <AnimateOnScroll>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Who We Work With</p>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-black mb-4 tracking-tight">
                  We partner with businesses that are serious about growth.
                </h2>
                <p className="text-base text-brand-dark/80 leading-relaxed">
                  We work with businesses of all sizes and industries — from brand-new startups launching their first website to established companies expanding their digital reach. What matters isn't your sector or your size. It's your commitment to doing it right.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex flex-col gap-3 p-6 bg-brand-grain border border-brand-border rounded-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-2">DefineCore is a great fit if…</p>
                {fitItems.map(({ yes, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${yes ? 'bg-brand-orange' : 'bg-brand-border'}`}>
                      {yes ? (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2.5 2.5l5 5M7.5 2.5l-5 5" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
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

      {/* ── CTA ── */}
      <section className="bg-brand-charcoal py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(249,115,22,0.1) 0%, transparent 70%)' }} />
        <div className="max-w-container mx-auto px-6 md:px-10 text-center relative">
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
