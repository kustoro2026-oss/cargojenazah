import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/tentang-kami', label: 'TENTANG KAMI' },
    { path: '/layanan', label: 'LAYANAN' },
  ]

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <img
            src="/android-chrome-512x512.png"
            alt="Ambulance Cargo Jenazah"
            width="150"
            height="45"
            fetchpriority="high"
          />
          <div className="header-logo-text">
            <h2>Layanan Ambulance Cargo Jenazah</h2>
            <p>Pengiriman Cargo Jenazah Profesional</p>
          </div>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? '\u2715' : '\u2630'}
        </button>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={isActive(link.path) ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <a
            href="https://wa.link/zm51v4"
            target="_blank"
            rel="noopener noreferrer"
            className="header-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            HUBUNGI KAMI
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
