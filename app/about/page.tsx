import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export const runtime = 'edge'

export const metadata = {
  title: 'About Us — The Team Behind DefineCore',
  description: 'Meet the co-founders of DefineCore. A team of engineers, marketers, and creatives helping US businesses build powerful digital presences.',
  openGraph: {
    title: 'About DefineCore',
    description: 'Meet the team behind the tech-powered growth studio.',
  },
}

const team = [
  {
    initials: 'AR',
    name: 'Alex Rivera',
    role: 'Co-Founder & Strategy Lead',
    bio: 'With 7 years in performance marketing, Alex has managed over $4M in ad spend for local businesses across the US. He leads client strategy and ensures every campaign is aligned to real business goals.',
    expertise: ['Google Ads', 'Growth Strategy', 'Client Relations'],
  },
  {
    initials: 'PC',
    name: 'Priya Chen',
    role: 'Co-Founder & Tech Lead',
    bio: 'A full-stack engineer with deep experience in both enterprise and startup environments, Priya leads all website and web app development. She believes fast, well-built software is itself a marketing asset.',
    expertise: ['Next.js', 'WordPress', 'Web Performance'],
  },
  {
    initials: 'MW',
    name: 'Marcus Webb',
    role: 'Co-Founder & Creative Lead',
    bio: 'Marcus brings the brand lens to every project. From social identity to ad creatives, he ensures your business looks credible and compelling online — and that people actually stop scrolling.',
    expertise: ['Brand Identity', 'Meta Ads', 'Social Media'],
  },
]

const values = [
  {
    title: 'Clarity over cleverness',
    desc: 'We communicate in plain English. You\'ll always know what we\'re doing, why, and what results to expect — no jargon, no fluff.',
  },
  {
    title: 'Outcomes over outputs',
    desc: 'We don\'t celebrate impressions or clicks unless they translate to real business results. Our success metric is yours.',
  },
  {
    title: 'Long-term partnership',
    desc: 'We don\'t want to do a one-off project and disappear. The businesses we work with best are ones we grow alongside for years.',
  },
  {
    title: 'Honest recommendations',
    desc: 'If a service won\'t move the needle for your business, we\'ll tell you. We\'d rather lose a small upsell than lose your trust.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Story section — replaces hero */}
      <section className="bg-brand-orange-light py-20 md:py-28" style={{ borderBottom: '1px solid #fed7aa' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <AnimateOnScroll>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Our Story</p>
                <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 tracking-tight leading-tight">
                  Built for businesses that{' '}
                  <span className="text-gradient-orange">deserve to be found online.</span>
                </h1>
                <div className="flex flex-col gap-4 text-base text-brand-dark/80 leading-relaxed">
                  <p>
                    The three of us met while working with a regional restaurant chain that had been in business for 22 years. Great food, loyal regulars, terrible online presence — no real website, no Google Business Profile, stale social media.
                  </p>
                  <p>
                    We rebuilt everything from scratch. Within 90 days, they were ranking on Google Maps, their website was converting visitors to reservations, and their Instagram had grown to 4,000 engaged followers.
                  </p>
                  <p>
                    The owner told us: <em className="text-brand-black">"I didn't realize how much business I was losing every day because people couldn't find me."</em>
                  </p>
                  <p>
                    That story repeats itself constantly across every industry. Skilled, established businesses being outcompeted by inferior competitors who simply showed up online. We built DefineCore to fix that.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="grid grid-cols-1 gap-4 equal-height">
                <div className="flex flex-col p-7 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Our Mission</p>
                  <p className="text-lg text-brand-black leading-relaxed font-medium flex-1">
                    To level the digital playing field for offline businesses — ensuring the best local services and products are the ones that get found online.
                  </p>
                </div>
                <div className="flex flex-col p-7 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Our Aim</p>
                  <p className="text-base text-brand-dark/80 leading-relaxed flex-1">
                    By 2026, we aim to be the go-to digital partner for 200+ US-based local businesses — growing together over long-term relationships built on transparency, results, and mutual trust.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-off-white py-24 md:py-32" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">The Team</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">Three co-founders, one goal</h2>
              <p className="text-lg text-brand-mid">We're a lean, senior team — when you work with DefineCore, you work directly with us. No account managers, no interns.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 equal-height">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 100}>
                <div className="flex flex-col bg-white border border-brand-border rounded-lg p-6 shadow-brand-sm h-full group hover:border-brand-orange-border hover:shadow-orange-sm transition-all duration-200">
                  <div className="w-12 h-12 rounded-full bg-brand-orange-light border border-brand-orange-border flex items-center justify-center mb-5 text-sm font-bold text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200 flex-shrink-0">
                    {member.initials}
                  </div>
                  <h3 className="text-sm font-semibold text-brand-black">{member.name}</h3>
                  <p className="text-xs text-brand-orange font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-brand-mid leading-relaxed mb-5 flex-1">{member.bio}</p>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-brand-border">
                    {member.expertise.map(skill => (
                      <span key={skill} className="badge-outline text-[11px] px-2 py-0.5">{skill}</span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-grain py-24 md:py-32" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Our Values</p>
              <h2 className="text-h2 font-bold text-brand-black mb-3 tracking-tight">How we do business</h2>
              <p className="text-lg text-brand-mid">One standard: do what's right for the client, always.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 equal-height">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="flex flex-col p-6 bg-white border border-brand-border rounded-lg hover:border-brand-orange-border hover:shadow-orange-sm transition-all duration-200 h-full shadow-brand-sm">
                  <div className="w-7 h-7 rounded-md bg-brand-orange-light border border-brand-orange-border flex items-center justify-center mb-4 text-xs font-bold text-brand-orange flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-sm font-semibold text-brand-black mb-2">{v.title}</h3>
                  <p className="text-sm text-brand-mid leading-relaxed flex-1">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal py-24">
        <div className="max-w-container mx-auto px-6 md:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Let's work together</h2>
            <p className="text-lg text-white/55 max-w-lg mx-auto mb-8">
              Book a free 30-minute call with one of our co-founders. We'll listen, understand, and give you our honest take.
            </p>
            <Link href="/contact" className="btn-default btn-lg shadow-orange-md">
              Book a Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
