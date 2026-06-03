import { useState, useEffect } from 'react'

const links = [
  { label: 'Services', id: 'services' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Automations', id: 'automations' },
  { label: 'Tools', id: 'tools' },
  { label: 'Demo', id: 'process' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-gray-900 tracking-tight">CognitoByte</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="text-sm text-gray-500 hover:text-violet-600 transition-colors font-medium">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            className="text-sm bg-violet-600 text-white px-5 py-2 rounded-lg hover:bg-violet-700 transition-colors font-medium shadow-sm">
            Get in touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-gray-600 p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-5 flex flex-col gap-4 shadow-lg">
          {links.map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="text-sm text-gray-700 text-left font-medium hover:text-violet-600 transition-colors">
              {l.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')}
            className="text-sm bg-violet-600 text-white px-5 py-2.5 rounded-lg font-medium text-center">
            Get in touch
          </button>
        </div>
      )}
    </nav>
  )
}
