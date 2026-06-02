const categories = [
  {
    name: 'Automation & AI',
    tools: ['n8n', 'OpenAI / GPT-4', 'Make (Integromat)', 'Zapier', 'LangChain'],
  },
  {
    name: 'Marketing Platforms',
    tools: ['Meta Ads Manager', 'Google Ads', 'Google Analytics 4', 'Search Console', 'Semrush'],
  },
  {
    name: 'CRM & Email',
    tools: ['HubSpot', 'Mailchimp', 'ActiveCampaign', 'Brevo', 'ConvertKit'],
  },
  {
    name: 'Social & Content',
    tools: ['Buffer', 'Meta Business Suite', 'LinkedIn API', 'Canva', 'Notion'],
  },
  {
    name: 'Data & Storage',
    tools: ['Supabase', 'Airtable', 'Google Sheets', 'PostgreSQL', 'Firebase'],
  },
  {
    name: 'Communication',
    tools: ['Slack', 'WhatsApp Business API', 'Telegram Bot API', 'Gmail API', 'Twilio'],
  },
]

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest">Tech stack</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Tools I work with</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            I use the best tool for your situation — not just the one I know. Here is the full ecosystem I operate in.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(cat => (
            <div key={cat.name} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-violet-200 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-4 text-sm">{cat.name}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map(t => (
                  <span key={t} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* n8n highlight */}
        <div className="mt-8 bg-violet-950 border border-violet-800 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-violet-300 text-xs font-semibold uppercase tracking-widest mb-3">Primary automation tool</div>
              <h3 className="text-2xl font-bold text-white mb-3">Why n8n?</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                n8n is open-source, self-hostable, and far more flexible than Zapier or Make for complex workflows.
                It connects to virtually any API, supports custom code nodes, and gives you full ownership of your automation logic — with no per-task pricing surprises.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Open source', sub: 'Full control, no vendor lock-in' },
                { label: 'Self-hostable', sub: 'Your data stays yours' },
                { label: '400+ integrations', sub: 'Connects to almost anything' },
                { label: 'Custom code nodes', sub: 'No limits on logic complexity' },
              ].map(f => (
                <div key={f.label} className="bg-violet-900 bg-opacity-50 border border-violet-800 rounded-lg p-4">
                  <div className="text-white text-sm font-semibold mb-1">{f.label}</div>
                  <div className="text-violet-300 text-xs">{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
