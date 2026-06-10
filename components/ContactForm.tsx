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
  'Dominate Package — Custom (get a quote)',
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

const labelClass = 'block text-sm font-medium text-brand-black mb-1.5'
const hintClass = 'text-sm font-normal text-brand-mid ml-1'
const errorClass = 'mt-1.5 text-xs text-brand-red'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', businessType: '', service: '', budget: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const errs: Record<string, string> = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email address'
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
      if (!res.ok) throw new Error()
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

  // shadcn-style input class
  const inputClass = (field: string) =>
    `flex w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors min-h-[2.5rem] ${
      errors[field]
        ? 'border-brand-red focus-visible:ring-brand-red/40'
        : 'border-brand-border focus-visible:ring-brand-orange/40 focus-visible:border-brand-orange'
    }`

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-14">
        <div className="w-14 h-14 rounded-full bg-brand-orange flex items-center justify-center mx-auto mb-5 shadow-orange-sm">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M5 11l4.5 4.5 8.5-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-brand-black mb-2">Message received!</h3>
        <p className="text-sm text-brand-mid max-w-sm">
          We'll respond within <strong className="text-brand-black">24 business hours</strong>. You can also book a call directly via Calendly below.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-brand-orange hover:text-brand-orange-dark underline underline-offset-4 transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelClass}>Full Name <span className="text-brand-red">*</span></label>
          <input id="name" name="name" type="text" autoComplete="name"
            placeholder="Jane Smith" value={form.name} onChange={handleChange}
            className={inputClass('name')} />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>
        {/* Email */}
        <div>
          <label htmlFor="email" className={labelClass}>Business Email <span className="text-brand-red">*</span></label>
          <input id="email" name="email" type="email" autoComplete="email"
            placeholder="jane@business.com" value={form.email} onChange={handleChange}
            className={inputClass('email')} />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="businessType" className={labelClass}>Business Type <span className="text-brand-red">*</span></label>
        <select id="businessType" name="businessType" value={form.businessType} onChange={handleChange} className={inputClass('businessType')}>
          <option value="" disabled>Select your industry…</option>
          {businessTypes.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.businessType && <p className={errorClass}>{errors.businessType}</p>}
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className={labelClass}>Service Needed <span className="text-brand-red">*</span></label>
        <select id="service" name="service" value={form.service} onChange={handleChange} className={inputClass('service')}>
          <option value="" disabled>Select a service…</option>
          {servicesOptions.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        {errors.service && <p className={errorClass}>{errors.service}</p>}
      </div>

      {/* Budget */}
      <div>
        <label htmlFor="budget" className={labelClass}>Monthly Budget <span className="text-brand-red">*</span></label>
        <select id="budget" name="budget" value={form.budget} onChange={handleChange} className={inputClass('budget')}>
          <option value="" disabled>Select a range…</option>
          {budgetRanges.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
        {errors.budget && <p className={errorClass}>{errors.budget}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Anything else?<span className={hintClass}>(optional)</span>
        </label>
        <textarea id="message" name="message" rows={4}
          placeholder="Tell us about your business, goals, or anything specific you're hoping to achieve…"
          value={form.message} onChange={handleChange}
          className={`${inputClass('')} border-brand-border focus-visible:ring-brand-orange/40 focus-visible:border-brand-orange resize-none`}
        />
      </div>

      {status === 'error' && (
        <div className="px-4 py-3 bg-brand-red/5 border border-brand-red/20 rounded-md">
          <p className="text-sm text-brand-red">Something went wrong. Please try again.</p>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
        <p className="text-xs text-brand-mid order-2 sm:order-1">
          ⏱ Response within <strong className="text-brand-dark">24 business hours</strong>. Your info is never shared.
        </p>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-default btn order-1 sm:order-2 w-full sm:w-auto shadow-orange-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <svg className="animate-spin" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="24" strokeDashoffset="8"/>
              </svg>
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </>
          )}
        </button>
      </div>
    </form>
  )
}
