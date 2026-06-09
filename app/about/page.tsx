import Link from 'next/link'
import AnimateOnScroll from '../../components/AnimateOnScroll'

export const metadata = {
  title: 'About Us — The Team Behind Nexus Digital',
  description: 'Meet the co-founders of Nexus Digital. We\'re a team of digital marketers, developers, and strategists helping US businesses establish and grow their online presence.',
  openGraph: {
    title: 'About Nexus Digital',
    description: 'Meet the team helping US businesses get online and grow.',
  },
}

const team = [
  {
    name: 'Alex Rivera',
    role: 'Co-Founder & Strategy Lead',
    bio: 'With 7 years in performance marketing, Alex has managed over $4M in ad spend for local businesses across the US. He leads client strategy and ensures every campaign is aligned to real business goals — not vanity metrics.',
    expertise: ['Google Ads', 'Growth Strategy', 'Client Relations'],
  },
  {
    name: 'Priya Chen',
    role: 'Co-Founder & Tech Lead',
    bio: 'A full-stack developer with a background in both enterprise software and startups, Priya leads all website development. She believes great code and great design are inseparable — and neither should be slow.',
    expertise: ['Next.js', 'WordPress', 'Web Performance'],
  },
  {
    name: 'Marcus Webb',
    role: 'Co-Founder & Creative Lead',
    bio: 'Marcus brings the brand lens to every project. From social media identity to ad creatives, he makes sure your business looks credible and compelling online — and that people actually stop scrolling.',
    expertise: ['Brand Identity', 'Meta Ads', 'Social Media'],
  },
]

const values = [
  {
    title: 'Clarity over cleverness',
    desc: 'We communicate in plain English. You\'ll always know what we\'re doing, why we\'re doing it, and what results to expect — no marketing jargon, no fluff.',
  },
  {
    title: 'Outcomes over outputs',
    desc: 'We don\'t celebrate impressions or clicks unless they translate to real business results. Our success metric is yours: more customers, more revenue.',
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
      {/* Story */}
      <section className="bg-brand-orange-light py-20 md:py-28" style={{ borderBottom: '1px solid #FED7AA' }}>
        <div className="max-w-container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateOnScroll>
              <div>
                <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-4">Our Story</p>
                <h1 className="text-4xl md:text-display font-normal text-brand-black mb-6 leading-tight">
                  Built for businesses that<br />
                  <span className="font-semibold text-gradient-orange">deserve to be found online.</span>
                </h1>
                <div className="flex flex-col gap-4 text-body text-brand-dark leading-relaxed">
                  <p>
                    The three of us met while working with a regional restaurant chain that had been in business for 22 years. Great food, loyal regulars, terrible online presence. No website worth mentioning, no Google Business Profile, and social media that hadn't been updated in two years.
                  </p>
                  <p>
                    We helped them rebuild everything from scratch. Within 90 days, they were ranking in Google Maps, had a website converting visitors to reservations, and their Instagram had grown to 4,000 engaged followers.
                  </p>
                  <p>
                    The owner told us: <em>"I didn't realize how much business I was losing every day because people couldn't find me."</em>
                  </p>
                  <p>
                    That story repeats itself constantly — skilled, established businesses being outcompeted online by inferior competitors who simply showed up. We built Nexus Digital to fix that.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex flex-col gap-5 equal-height">
                <div className="flex flex-col p-8 bg-brand-off-white border border-brand-orange-border rounded-brand shadow-brand-sm h-full">
                  <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-4">Our Mission</p>
                  <p className="text-body-lg text-brand-black leading-relaxed font-medium flex-1">
                    To level the digital playing field for offline businesses — ensuring the best local services and products are the ones that get found online.
                  </p>
                </div>
                <div className="flex flex-col p-8 bg-brand-off-white border border-brand-orange-border rounded-brand shadow-brand-sm h-full">
                  <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-4">Our Aim</p>
                  <p className="text-body text-brand-dark leading-relaxed flex-1">
                    By 2026, we aim to be the go-to digital partner for 200+ US-based local businesses — growing together over long-term relationships built on transparency, results, and mutual trust.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-off-white py-24 md:py-32" style={{ borderBottom: '1px solid #E4E3DE' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-16">
              <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-4">The Team</p>
              <h2 className="text-h2 font-semibold text-brand-black mb-4">Three co-founders, one goal</h2>
              <p className="text-body-lg text-brand-dark">
                We're a lean, senior team — no account managers passing your project to interns. When you work with Nexus Digital, you work directly with us.
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 equal-height">
            {team.map((member, i) => (
              <AnimateOnScroll key={member.name} delay={i * 100}>
                <div className="flex flex-col bg-brand-off-white border border-brand-border rounded-brand p-6 shadow-brand-sm h-full group hover:border-brand-orange-border hover:shadow-orange-sm transition-all duration-200">
                  <div className="w-14 h-14 rounded-full bg-brand-orange-light border border-brand-orange-border flex items-center justify-center mb-5 text-body font-semibold text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-200">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-body font-semibold text-brand-black">{member.name}</h3>
                  <p className="text-body-sm text-brand-orange mb-4">{member.role}</p>
                  <p className="text-body-sm text-brand-dark leading-relaxed mb-5 flex-1">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid #E4E3DE' }}>
                    {member.expertise.map(skill => (
                      <span key={skill} className="text-caption px-2 py-1 bg-brand-orange-light border border-brand-orange-border rounded-brand text-brand-orange-dark">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-grain py-24 md:py-32" style={{ borderBottom: '1px solid #E4E3DE' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <div className="max-w-2xl mb-16">
              <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-4">Our Values</p>
              <h2 className="text-h2 font-semibold text-brand-black mb-4">How we do business</h2>
              <p className="text-body-lg text-brand-dark">We hold ourselves to a simple standard: do what's right for the client, always.</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 equal-height">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80}>
                <div className="flex flex-col p-6 bg-brand-off-white border border-brand-border rounded-brand hover:border-brand-orange-border hover:shadow-orange-sm transition-all duration-200 h-full">
                  <div className="w-8 h-8 rounded-brand bg-brand-orange-light border border-brand-orange-border flex items-center justify-center mb-4 text-caption font-semibold text-brand-orange">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-body font-semibold text-brand-black mb-2">{v.title}</h3>
                  <p className="text-body-sm text-brand-dark leading-relaxed flex-1">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal py-24">
        <div className="max-w-container mx-auto px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-h2 font-semibold text-brand-off-white mb-4">Let's work together</h2>
            <p className="text-body-lg text-white/60 max-w-xl mx-auto mb-8">
              Book a free 30-minute call with one of our co-founders. We'll listen, understand your situation, and give you our honest take.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white text-body rounded-brand min-h-touch hover:bg-brand-orange-dark transition-colors duration-150 shadow-orange-sm">
              Book a Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
