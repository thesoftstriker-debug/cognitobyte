import { useState } from 'react'

const services = [
  'Social Media Marketing',
  'Paid Advertising (Meta/Google)',
  'SEO & Content Marketing',
  'Email Marketing',
  'AI Automations',
  'n8n Workflow Setup',
  'Full Marketing + Automation Package',
  'Not sure yet — need advice',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', whatsapp: '', business: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulated submit — Supabase will be connected later
    await new Promise(r => setTimeout(r, 800))
    setLoading(false)
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Left info */}
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Get in touch</span>
            <h2 className="text-4xl font-bold text-white mt-3 mb-5">
              Let's talk about your project
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm">
              Tell me about your business and what you are trying to achieve.
              I'll reply within 24 hours with honest thoughts on how I can help —
              or whether something else would serve you better.
            </p>

            <div className="flex flex-col gap-5">
              <a href="mailto:the.softstriker@gmail.com"
                className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center group-hover:border-violet-600 transition-colors">
                  <span>📧</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="text-sm text-gray-200 group-hover:text-violet-400 transition-colors">
                    the.softstriker@gmail.com
                  </div>
                </div>
              </a>

              <a href="https://wa.me/923095999863" target="_blank" rel="noreferrer"
                className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center group-hover:border-violet-600 transition-colors">
                  <span>💬</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">WhatsApp</div>
                  <div className="text-sm text-gray-200 group-hover:text-violet-400 transition-colors">
                    +92 309 5999863
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-lg flex items-center justify-center">
                  <span>📍</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">Based in</div>
                  <div className="text-sm text-gray-200">Rawalpindi, Pakistan</div>
                </div>
              </div>
            </div>

            <div className="mt-10 bg-gray-900 border border-gray-800 rounded-xl p-5">
              <div className="text-sm font-semibold text-white mb-1">⚡ Quick response guarantee</div>
              <div className="text-xs text-gray-400 leading-relaxed">
                I personally reply to every message within 24 hours — usually much faster. No bots, no team inboxes.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-8">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-5">
                  <svg className="w-8 h-8 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">Message received!</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours with honest thoughts.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Send a message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">Your name *</label>
                    <input name="name" value={form.name} onChange={handle} required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="Ali Khan" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="ali@business.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">WhatsApp (optional)</label>
                    <input name="whatsapp" value={form.whatsapp} onChange={handle}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="+92 300 0000000" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-gray-600 mb-1.5 block">Business / niche *</label>
                    <input name="business" value={form.business} onChange={handle} required
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-violet-400 transition-colors"
                      placeholder="e.g. Real estate, clinic, e-commerce" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1.5 block">Service you're interested in</label>
                  <select name="service" value={form.service} onChange={handle}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-violet-400 transition-colors bg-white">
                    <option value="">Select a service...</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600 mb-1.5 block">Tell me about your goals *</label>
                  <textarea name="message" value={form.message} onChange={handle} required rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-violet-400 transition-colors resize-none"
                    placeholder="What are you trying to achieve? What's your biggest challenge right now?" />
                </div>

                <button type="submit" disabled={loading}
                  className="w-full bg-violet-600 text-white py-3 rounded-lg hover:bg-violet-700 transition-colors font-semibold text-sm disabled:opacity-70 disabled:cursor-not-allowed">
                  {loading ? 'Sending...' : 'Send message →'}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  No spam. No pressure. Just an honest conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
