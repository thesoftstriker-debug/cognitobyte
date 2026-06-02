const pillars = [
  {
    icon: '🧠',
    title: 'Strategy first',
    desc: 'Every engagement starts with understanding your business, your customers, and your goals — before a single ad is run or workflow is built.',
  },
  {
    icon: '⚙️',
    title: 'Automation layer',
    desc: 'We identify the repetitive tasks draining your team\'s time and replace them with reliable n8n workflows connected to your existing tools.',
  },
  {
    icon: '🤖',
    title: 'AI enhancement',
    desc: 'AI is layered on top of your workflows to write, score, classify, and decide — making your systems smarter without adding headcount.',
  },
  {
    icon: '📈',
    title: 'Measure & improve',
    desc: 'Everything is tracked. You get honest reports showing what is working, what is not, and what we are going to do about it.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">The approach</span>
          <h2 className="text-4xl font-bold text-white mt-3 mb-4">How it works</h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            Marketing and automation working together as one system — not two separate things bolted together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((p, i) => (
            <div key={p.title} className="relative">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full hover:border-violet-700 transition-colors">
                <div className="text-xs font-bold text-violet-500 mb-3 uppercase tracking-widest">Step {i + 1}</div>
                <div className="text-2xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider visual */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Manual tasks replaced', sub: 'Leads, reports, posts, follow-ups — all automated' },
              { label: 'Platforms connected', sub: 'CRM, ads, email, social, analytics in one flow' },
              { label: 'Always documented', sub: 'Every workflow handed over with full documentation' },
            ].map(c => (
              <div key={c.label} className="border-b md:border-b-0 md:border-r border-gray-800 last:border-0 pb-6 md:pb-0 md:pr-8 last:pr-0">
                <div className="font-semibold text-white mb-2">{c.label}</div>
                <div className="text-sm text-gray-400">{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
