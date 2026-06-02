const steps = [
  {
    n: '01',
    icon: '🎙️',
    title: 'Discovery call',
    desc: 'We start with a free 30-minute call to understand your business, current tools, goals, and the biggest bottlenecks slowing you down. No pitch — just listening and honest advice.',
    duration: '30 min — free',
  },
  {
    n: '02',
    icon: '📋',
    title: 'Custom proposal',
    desc: 'Within 48 hours I send a clear, detailed proposal covering exactly what I will build, the timeline, and the cost. No vague deliverables, no hidden fees, no surprises.',
    duration: '48 hrs turnaround',
  },
  {
    n: '03',
    icon: '🔨',
    title: 'Build & test',
    desc: 'I build your campaigns or automation workflows and test everything thoroughly in a staging environment before anything touches your live business or ad accounts.',
    duration: '1–3 weeks typically',
  },
  {
    n: '04',
    icon: '🚀',
    title: 'Launch & handover',
    desc: 'We go live together. I walk you through every workflow and campaign in a recorded walkthrough session so you understand exactly how everything works and can manage it yourself.',
    duration: 'Full walkthrough included',
  },
  {
    n: '05',
    icon: '🤝',
    title: 'Ongoing support',
    desc: 'I stay available after launch for questions, tweaks, and improvements. As your business grows and needs change, your systems can grow with it.',
    duration: '30-day support included',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-violet-600 uppercase tracking-widest">How we work together</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">The process</h2>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            Simple, transparent, and designed to get results without wasting your time or money.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-7 top-8 bottom-8 w-px bg-gray-100 hidden md:block" />

          <div className="flex flex-col gap-6">
            {steps.map(s => (
              <div key={s.n} className="flex gap-6 items-start group">
                {/* Circle */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-100 group-hover:border-violet-300 flex items-center justify-center flex-shrink-0 z-10 transition-colors shadow-sm">
                  <span className="text-xl">{s.icon}</span>
                </div>

                {/* Card */}
                <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-5 group-hover:border-violet-200 group-hover:bg-violet-50 transition-all duration-200">
                  <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                    <h3 className="font-semibold text-gray-900">{s.title}</h3>
                    <span className="text-xs font-medium text-violet-600 bg-violet-100 px-2.5 py-1 rounded-full">
                      {s.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promise box */}
        <div className="mt-16 max-w-3xl mx-auto bg-gray-950 rounded-2xl p-8 text-center">
          <div className="text-2xl mb-3">🤝</div>
          <h3 className="text-white font-semibold text-lg mb-2">My promise to you</h3>
          <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto">
            No false promises. No inflated claims. If I don't think I can genuinely help your business,
            I'll tell you in the discovery call — and point you in the right direction anyway.
          </p>
        </div>
      </div>
    </section>
  )
}
