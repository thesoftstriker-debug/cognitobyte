const services = [
  {
    icon: '📣',
    title: 'Social Media Marketing',
    desc: 'Strategy, content planning, and full management across Facebook, Instagram, and LinkedIn to grow your brand presence organically.',
    color: 'violet',
  },
  {
    icon: '🎯',
    title: 'Paid Advertising',
    desc: 'Targeted Meta and Google ad campaigns designed to reach the right audience at the right time and generate quality leads.',
    color: 'blue',
  },
  {
    icon: '🔍',
    title: 'SEO & Content Marketing',
    desc: 'On-page and off-page SEO with content that ranks on Google and builds long-term organic traffic for your business.',
    color: 'teal',
  },
  {
    icon: '✉️',
    title: 'Email Marketing',
    desc: 'Automated email sequences and newsletters that nurture your leads, build trust, and keep your audience engaged consistently.',
    color: 'pink',
  },
  {
    icon: '🤖',
    title: 'AI-Powered Automations',
    desc: 'Custom AI workflows that handle lead qualification, content generation, client reporting, and more — saving you hours every week.',
    color: 'violet',
  },
  {
    icon: '🔗',
    title: 'n8n Workflow Integrations',
    desc: 'Connect your CRM, ad platforms, email tools, and social channels into one seamless automated system using n8n.',
    color: 'blue',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    desc: 'Clear, honest performance reports in plain English. You always know what is working and where your budget is going.',
    color: 'amber',
  },
  {
    icon: '🌐',
    title: 'Landing Page Setup',
    desc: 'Conversion-focused landing pages built and connected to your marketing funnel for measurably better campaign results.',
    color: 'teal',
  },
]

const colorMap = {
  violet: 'bg-violet-50 border-violet-100 group-hover:border-violet-300',
  blue: 'bg-blue-50 border-blue-100 group-hover:border-blue-300',
  teal: 'bg-teal-50 border-teal-100 group-hover:border-teal-300',
  pink: 'bg-pink-50 border-pink-100 group-hover:border-pink-300',
  amber: 'bg-amber-50 border-amber-100 group-hover:border-amber-300',
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest">What I offer</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            A focused set of digital marketing and automation services — each one designed to produce real, measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(s => (
            <div key={s.title}
              className={`group border rounded-xl p-6 transition-all duration-200 cursor-default ${colorMap[s.color]}`}>
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
