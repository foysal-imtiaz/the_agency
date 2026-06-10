import AnimateOnScroll from '../../components/AnimateOnScroll'
import ContactForm from '../../components/ContactForm'

export const runtime = 'edge'

export const metadata = {
  title: 'Contact Us — Book a Free Discovery Call',
  description: 'Ready to grow? Contact DefineCore for a free 30-minute strategy call. Fill out the form and we\'ll respond within 24 business hours.',
  openGraph: {
    title: 'Contact DefineCore',
    description: 'Book a free 30-minute discovery call with our team.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Main contact section — acts as page header too */}
      <section className="bg-brand-orange-light py-20 md:py-24" style={{ borderBottom: '1px solid #fed7aa' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-4 tracking-tight leading-tight">
              Let's talk about{' '}
              <span className="text-gradient-orange">growing your business.</span>
            </h1>
            <p className="text-lg text-brand-dark/80 max-w-xl mb-12">
              Fill out the form and one of our co-founders will respond within 24 business hours. No sales scripts — just an honest conversation.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Form card */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <div className="bg-white border border-brand-orange-border rounded-lg p-7 shadow-brand-sm">
                  <ContactForm />
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <AnimateOnScroll delay={80}>
                <div className="flex flex-col p-6 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm h-full">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-5">What happens next</p>
                  <div className="flex flex-col gap-4 flex-1">
                    {[
                      'We review your submission within 24 business hours.',
                      'A co-founder reaches out to schedule a 30-min discovery call.',
                      'We listen, ask questions, and learn about your business.',
                      'We send a tailored proposal — no obligation, no pressure.',
                    ].map((text, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="w-5 h-5 rounded-full bg-brand-orange text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-sm text-brand-dark">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={120}>
                <div className="flex items-start gap-3 p-5 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-1.5" />
                  <p className="text-sm text-brand-dark">
                    We respond within <strong className="text-brand-black">24 business hours</strong>. Urgent? Note it in your message.
                  </p>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={160}>
                <div className="flex flex-col p-5 bg-white border border-brand-orange-border rounded-lg shadow-brand-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">Prefer a direct call?</p>
                  <p className="text-sm text-brand-mid mb-4 flex-1">Skip the form — book a time on our calendar directly.</p>
                  <a
                    href="https://calendly.com/definecore/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-default btn w-full justify-center"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                      <path d="M4 1.5v2M10 1.5v2M1.5 6.5h11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                    </svg>
                    Book on Calendly
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly embed placeholder */}
      <section id="calendly" className="bg-brand-off-white py-20" style={{ borderBottom: '1px solid #e4e4e7' }}>
        <div className="max-w-container mx-auto px-6 md:px-8">
          <AnimateOnScroll>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">Schedule Directly</p>
            <h2 className="text-3xl font-bold text-brand-black mb-3 tracking-tight">Book a free 30-min discovery call</h2>
            <p className="text-base text-brand-mid mb-10 max-w-xl">
              Pick a time that works for you and we'll talk about your business, goals, and how we can help.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="w-full rounded-lg border border-brand-orange-border bg-brand-orange-light shadow-brand-md flex items-center justify-center" style={{ minHeight: '460px' }}>
              {/* ↓ Replace this entire div with your Calendly inline embed widget */}
              <div className="text-center p-12">
                <div className="w-14 h-14 rounded-full bg-white border border-brand-orange-border flex items-center justify-center mx-auto mb-5">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <rect x="2.5" y="3.5" width="17" height="16" rx="2" stroke="#F97316" strokeWidth="1.5"/>
                    <path d="M7 2v3M15 2v3M2.5 9h17" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-brand-black mb-2">Calendly Embed Placeholder</p>
                <p className="text-sm text-brand-mid mb-6 max-w-xs mx-auto">Replace this block with your Calendly inline embed snippet from your Calendly dashboard.</p>
                <a href="https://calendly.com/definecore/discovery" target="_blank" rel="noopener noreferrer" className="btn-default btn">
                  Open Calendly →
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
