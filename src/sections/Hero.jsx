export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">

      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600 rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full opacity-10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-950 border border-violet-800 text-violet-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse"></span>
            AI-Powered Digital Marketing
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Where Marketing<br />
            Meets{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Machine Intelligence
            </span>
          </h1>

          {/* Sub */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
            I help businesses attract more customers and automate repetitive work —
            combining proven digital marketing strategies with AI-powered n8n workflows
            so your business grows even while you sleep.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button onClick={() => scrollTo('contact')}
              className="bg-violet-600 text-white px-8 py-3.5 rounded-lg hover:bg-violet-500 transition-colors font-semibold text-sm shadow-lg shadow-violet-900">
              Start a project
            </button>
            <button onClick={() => scrollTo('automations')}
              className="border border-gray-700 text-gray-300 px-8 py-3.5 rounded-lg hover:border-violet-500 hover:text-violet-300 transition-colors font-semibold text-sm">
              See automations →
            </button>
          </div>

          {/* Stats row */}
          <div className="mt-20 flex flex-wrap gap-12">
            {[
              { value: '8+', label: 'Marketing services' },
              { value: '20+', label: 'n8n workflows built' },
              { value: '15+', label: 'Tools integrated' },
              { value: '100%', label: 'Transparent reporting' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
