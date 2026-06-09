'use client'

import { useState } from 'react'

const businessTypes = [
  'Restaurant / Food & Beverage',
  'Retail Store',
  'Medical / Dental / Clinic',
  'Home Services (Contractor, HVAC, Plumbing)',
  'Legal / Professional Services',
  'Fitness / Wellness / Salon',
  'Real Estate',
  'Automotive',
  'Other',
]

const servicesOptions = [
  'Website Development',
  'Google Ads',
  'Meta Ads (Facebook/Instagram)',
  'GA4 Analytics Setup',
  'Social Media Presence',
  'Launch Package — Digital Marketing ($2,500/mo)',
  'Accelerate Package — Website + Marketing ($4,500/mo)',
  'Dominate Package — Custom (quote)',
  'Not sure — need advice',
]

const budgetRanges = [
  'Under $1,000/month',
  '$1,000 – $2,500/month',
  '$2,500 – $5,000/month',
  '$5,000 – $10,000/month',
  '$10,000+/month',
  'One-time project only',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', businessType: '', service: '', budget: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.businessType) errs.businessType = 'Please select a business type'
    if (!form.service) errs.service = 'Please select a service'
    if (!form.budget) errs.budget = 'Please select a budget range'
    return errs
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setErrors({})
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', email: '', businessType: '', service: '', budget: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const inputBase = 'w-full px-4 py-3 bg-brand-off-white border rounded-brand text-body text-brand-black placeholder:text-brand-mid min-h-touch transition-all duration-150 focus:outline-none'
  const inputClass = (field: string) =>
    `${inputBase} ${errors[field]
      ? 'border-brand-red ring-2 ring-brand-red/10'
      : 'border-brand-border focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15'
    }`

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-12">
        <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l5 5 9-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-h3 font-semibold text-brand-black mb-2">Message received!</h3>
        <p className="text-body text-brand-dark max-w-sm">
          We'll get back to you within <strong>24 business hours</strong>. You can also book directly on Calendly below.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-body-sm text-brand-orange underline hover:text-brand-orange-dark transition-colors duration-150"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-body-sm font-semibold text-brand-black mb-1.5">
          Full Name <span className="text-brand-red">*</span>
        </label>
        <input id="name" name="name" type="text" autoComplete="name"
          placeholder="Jane Smith" value={form.name} onChange={handleChange}
          className={inputClass('name')}
        />
        {errors.name && <p className="mt-1.5 text-caption text-brand-red">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-body-sm font-semibold text-brand-black mb-1.5">
          Business Email <span className="text-brand-red">*</span>
        </label>
        <input id="email" name="email" type="email" autoComplete="email"
          placeholder="jane@yourbusiness.com" value={form.email} onChange={handleChange}
          className={inputClass('email')}
        />
        {errors.email && <p className="mt-1.5 text-caption text-brand-red">{errors.email}</p>}
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="businessType" className="block text-body-sm font-semibold text-brand-black mb-1.5">
          Business Type <span className="text-brand-red">*</span>
        </label>
        <select id="businessType" name="businessType" value={form.businessType} onChange={handleChange}
          className={inputClass('businessType')}
        >
          <option value="" disabled>Select your industry…</option>
          {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.businessType && <p className="mt-1.5 text-caption text-brand-red">{errors.businessType}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="block text-body-sm font-semibold text-brand-black mb-1.5">
          Service Needed <span className="text-brand-red">*</span>
        </label>
        <select id="service" name="service" value={form.service} onChange={handleChange}
          className={inputClass('service')}
        >
          <option value="" disabled>Select a service…</option>
          {servicesOptions.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className="mt-1.5 text-caption text-brand-red">{errors.service}</p>}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className="block text-body-sm font-semibold text-brand-black mb-1.5">
          Monthly Budget Range <span className="text-brand-red">*</span>
        </label>
        <select id="budget" name="budget" value={form.budget} onChange={handleChange}
          className={inputClass('budget')}
        >
          <option value="" disabled>Select a range…</option>
          {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        {errors.budget && <p className="mt-1.5 text-caption text-brand-red">{errors.budget}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-body-sm font-semibold text-brand-black mb-1.5">
          Anything else? <span className="text-brand-mid font-normal">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4}
          placeholder="Tell us about your business, goals, or anything specific you're hoping to achieve…"
          value={form.message} onChange={handleChange}
          className={`${inputBase} border-brand-border focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/15 resize-none`}
        />
      </div>

      {status === 'error' && (
        <div className="px-4 py-3 bg-brand-red/5 border border-brand-red/20 rounded-brand">
          <p className="text-body-sm text-brand-red">Something went wrong. Please try again or email us directly.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-orange text-white text-body rounded-brand min-h-touch hover:bg-brand-orange-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150 shadow-orange-sm"
      >
        {status === 'loading' ? (
          <>
            <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="28" strokeDashoffset="10"/>
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </>
        )}
      </button>

      <p className="text-caption text-brand-mid">
        ⏱ We typically respond within <strong className="text-brand-dark">24 business hours</strong>. Your info is never shared.
      </p>
    </form>
  )
}
