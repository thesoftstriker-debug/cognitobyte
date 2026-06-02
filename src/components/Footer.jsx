export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-500 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-bold tracking-tight">CognitoByte</span>
            </div>
            <p className="text-sm leading-relaxed">
              Where Marketing Meets Machine Intelligence. Digital marketing powered by AI automations and n8n workflows.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Social Media Marketing', 'Paid Advertising', 'SEO & Content', 'Email Marketing', 'AI Automations', 'n8n Workflows'].map(s => (
                <li key={s} className="hover:text-violet-400 transition-colors cursor-default">{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href="mailto:the.softstriker@gmail.com" className="hover:text-violet-400 transition-colors">
                  the.softstriker@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>💬</span>
                <a href="https://wa.me/923095999863" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors">
                  +92 309 5999863
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Rawalpindi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">© {year} CognitoByte. All rights reserved.</p>
          <p className="text-xs">Built with React + n8n + AI</p>
        </div>
      </div>
    </footer>
  )
}
