const automations = [
  {
    tag: 'Lead Management',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'AI Lead Qualifier',
    desc: 'When a lead fills your form, n8n captures it, sends it to OpenAI for scoring, then routes hot leads directly to your CRM and cold ones into a nurture email sequence — automatically.',
    tools: ['n8n', 'OpenAI', 'HubSpot', 'Gmail'],
    benefit: 'Never miss a hot lead again',
  },
  {
    tag: 'Content',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Social Media Auto-Poster',
    desc: 'A scheduled n8n workflow pulls your content ideas, sends them to AI for caption writing, then publishes across Instagram, Facebook, and LinkedIn at optimal times — no manual posting.',
    tools: ['n8n', 'OpenAI', 'Meta API', 'LinkedIn API'],
    benefit: 'Consistent posting without the effort',
  },
  {
    tag: 'Reporting',
    tagColor: 'bg-teal-100 text-teal-700',
    title: 'Weekly Client Report Bot',
    desc: 'Every Monday morning, n8n pulls data from your ad accounts and Google Analytics, asks AI to write a plain-English performance summary, and emails a clean PDF report to your clients.',
    tools: ['n8n', 'Google Analytics', 'OpenAI', 'Gmail'],
    benefit: 'Professional reports without the manual work',
  },
  {
    tag: 'Reputation',
    tagColor: 'bg-amber-100 text-amber-700',
    title: 'Review Response System',
    desc: 'n8n monitors your Google Business reviews hourly. When a new review arrives, AI drafts a personalised reply and sends it to you on Slack for one-click approval before publishing.',
    tools: ['n8n', 'Google Places API', 'OpenAI', 'Slack'],
    benefit: 'Fast, professional review management',
  },
  {
    tag: 'Email',
    tagColor: 'bg-pink-100 text-pink-700',
    title: 'AI Email Nurture Sequence',
    desc: 'Based on a lead\'s score and email engagement, n8n triggers personalised follow-up sequences at the right intervals — written by AI, sent by your email tool, tracked automatically.',
    tools: ['n8n', 'Mailchimp', 'OpenAI', 'Airtable'],
    benefit: 'Leads nurtured without lifting a finger',
  },
  {
    tag: 'Paid Ads',
    tagColor: 'bg-orange-100 text-orange-700',
    title: 'Ad Performance Alert',
    desc: 'n8n checks your Meta and Google campaign metrics every hour. If any ad set drops below your target ROAS or CPL, it fires an instant Slack alert so you can act before budget is wasted.',
    tools: ['n8n', 'Meta Ads API', 'Google Ads API', 'Slack'],
    benefit: 'Protect your ad budget around the clock',
  },
]

export default function Automations() {
  return (
    <section id="automations" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest">AI automations</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">What I automate for you</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Real automation systems built with n8n and AI — each one designed to eliminate a specific time-consuming task in your marketing operation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automations.map(a => (
            <div key={a.title}
              className="border border-gray-100 rounded-xl p-6 hover:border-violet-200 hover:shadow-md transition-all duration-200 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${a.tagColor}`}>
                  {a.tag}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 mb-3">{a.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{a.desc}</p>

              {/* Benefit callout */}
              <div className="bg-violet-50 border border-violet-100 rounded-lg px-3 py-2 mb-4">
                <p className="text-xs font-semibold text-violet-700">✓ {a.benefit}</p>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-1.5">
                {a.tools.map(t => (
                  <span key={t} className="text-xs bg-gray-50 border border-gray-200 text-gray-500 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
