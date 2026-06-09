import { NextResponse } from 'next/server'

// Uncomment and configure to use Resend:
// import { Resend } from 'resend'
// const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, businessType, service, budget, message } = body

    // Validate required fields
    if (!name || !email || !businessType || !service || !budget) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // ─── RESEND INTEGRATION ───────────────────────────────────────────
    // To enable email sending:
    // 1. Install resend: npm install resend
    // 2. Add RESEND_API_KEY to .env.local
    // 3. Uncomment the Resend import above and the code below
    //
    // await resend.emails.send({
    //   from: 'contact@yourdomain.com',
    //   to: ['hello@nexusdigital.agency'],
    //   subject: `New inquiry from ${name} — ${service}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Business Type:</strong> ${businessType}</p>
    //     <p><strong>Service:</strong> ${service}</p>
    //     <p><strong>Budget:</strong> ${budget}</p>
    //     <p><strong>Message:</strong> ${message || 'None provided'}</p>
    //   `,
    // })
    //
    // Optionally send a confirmation email to the user:
    // await resend.emails.send({
    //   from: 'hello@nexusdigital.agency',
    //   to: [email],
    //   subject: 'We got your message — Nexus Digital',
    //   html: `
    //     <p>Hi ${name},</p>
    //     <p>Thanks for reaching out! We've received your message and will get back to you within 24 business hours.</p>
    //     <p>– The Nexus Digital Team</p>
    //   `,
    // })
    // ─────────────────────────────────────────────────────────────────

    // Log submission in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact form submission:', { name, email, businessType, service, budget, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
