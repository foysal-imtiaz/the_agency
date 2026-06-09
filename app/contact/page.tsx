import AnimateOnScroll from '../../components/AnimateOnScroll'
import ContactForm from '../../components/ContactForm'

export const metadata = {
  title: 'Contact Us — Book a Free Discovery Call',
  description: 'Ready to grow your online presence? Contact Nexus Digital for a free 30-minute strategy call. Fill out the form and we\'ll respond within 24 hours.',
  openGraph: {
    title: 'Contact Nexus Digital',
    description: 'Book a free 30-minute discovery call with our team.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Form + Info */}
      <section className="bg-brand-orange-light py-20 md:py-28" style={{ borderBottom: '1px solid #FED7AA' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-display font-normal text-brand-black mb-4 max-w-3xl leading-tight">
              Let's talk about<br />
              <span className="font-semibold text-gradient-orange">growing your business.</span>
            </h1>
            <p className="text-body-lg text-brand-dark max-w-xl mb-12">
              Fill out the form and one of our co-founders will respond within 24 business hours. No sales scripts — just an honest conversation.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 equal-height">
            {/* Form */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                <div className="bg-brand-off-white border border-brand-orange-border rounded-brand p-8 shadow-brand-sm h-full">
                  <ContactForm />
                </div>
              </AnimateOnScroll>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <AnimateOnScroll delay={80}>
                <div className="flex flex-col p-6 bg-brand-off-white border border-brand-orange-border rounded-brand shadow-brand-sm h-full">
                  <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-5">What happens next</p>
                  <div className="flex flex-col gap-4 flex-1">
                    {[
                      'We review your submission within 24 business hours.',
                      'A co-founder reaches out to schedule a 30-min discovery call.',
                      'We listen, ask questions, and learn about your business.',
                      'We send a tailored proposal — no obligation, no pressure.',
                    ].map((text, i) => (
                      <div key={i} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-brand-orange text-white text-caption font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-body-sm text-brand-dark">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={120}>
                <div className="flex flex-col p-6 bg-brand-off-white border border-brand-orange-border rounded-brand shadow-brand-sm h-full">
                  <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-3">Response time</p>
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-1.5"/>
                    <p className="text-body-sm text-brand-dark">
                      We typically respond <strong className="text-brand-black">within 24 business hours</strong>. Urgent? Note it in your message and we'll prioritize.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll delay={160}>
                <div className="flex flex-col p-6 bg-brand-off-white border border-brand-orange-border rounded-brand shadow-brand-sm h-full">
                  <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-3">Prefer a direct call?</p>
                  <p className="text-body-sm text-brand-dark mb-4 flex-1">
                    Skip the form and book a time directly on our calendar. Pick a slot that works for you.
                  </p>
                  <a
                    href="https://calendly.com/nexusdigital/discovery"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-brand-orange text-white text-body-sm rounded-brand min-h-touch hover:bg-brand-orange-dark transition-colors duration-150 w-full justify-center"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 2v2M11 2v2M2 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Book on Calendly
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly embed */}
      <section id="calendly" className="bg-brand-off-white py-20" style={{ borderBottom: '1px solid #E4E3DE' }}>
        <div className="max-w-container mx-auto px-8">
          <AnimateOnScroll>
            <p className="text-caption font-semibold uppercase tracking-widest text-brand-orange mb-4">Schedule Directly</p>
            <h2 className="text-h2 font-semibold text-brand-black mb-3">Book a free 30-min discovery call</h2>
            <p className="text-body text-brand-dark mb-10 max-w-xl">
              Pick a time that works for you and we'll talk about your business, your goals, and how we can help.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div
              className="w-full rounded-brand border border-brand-orange-border bg-brand-orange-light shadow-brand-md flex items-center justify-center"
              style={{ minHeight: '480px' }}
            >
              {/* Replace this div with your Calendly inline embed widget */}
              <div className="text-center p-12">
                <div className="w-16 h-16 rounded-full bg-brand-off-white border border-brand-orange-border flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="17" rx="2" stroke="#F97316" strokeWidth="1.5"/>
                    <path d="M8 2v3M16 2v3M3 10h18" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="text-body font-semibold text-brand-black mb-2">Calendly Embed Placeholder</p>
                <p className="text-body-sm text-brand-mid mb-6 max-w-sm mx-auto">
                  Replace this block with your Calendly inline embed widget from your Calendly dashboard.
                </p>
                <a
                  href="https://calendly.com/nexusdigital/discovery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white text-body rounded-brand min-h-touch hover:bg-brand-orange-dark transition-colors duration-150"
                >
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
