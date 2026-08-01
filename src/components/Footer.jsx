import { Link } from 'react-router-dom'
import { FaInstagram, FaWhatsapp, FaTiktok, FaYoutube, FaPhoneAlt } from 'react-icons/fa'

function Footer() {
  const footerNav = [
    { path: '/', label: 'Home' },
    { path: '/tentang-kami', label: 'Tentang Kami' },
    { path: '/layanan', label: 'Layanan' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Column 1: Brand */}
          <div className="footer-col footer-col-brand">
            <h3 className="footer-logo">Human Cargo Funeral Services</h3>
            <p className="footer-desc">Layanan ambulance dan cargo jenazah profesional — cepat, aman, dan terpercaya di seluruh Indonesia hingga luar negeri.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col footer-col-links">
            <h4 className="footer-col-title">Navigasi</h4>
            <nav className="footer-nav">
              {footerNav.map(item => (
                <Link key={item.path} to={item.path}>{item.label}</Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-title">Hubungi Kami</h4>
            <div className="footer-contact-list">
              <a href="https://api.whatsapp.com/send?phone=6282329045519" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                <FaWhatsapp className="footer-contact-icon" />
                <span>+62 823-2904-5519</span>
              </a>
              <a href="tel:+6282329045519" className="footer-contact-item">
                <FaPhoneAlt className="footer-contact-icon" />
                <span>+62 823-2904-5519</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026 Human Cargo Funeral Services. All rights reserved.
          </p>
          <div className="footer-social">
            <a href="https://www.instagram.com/ambulancearjunasemarang?igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@ambulancearjuna?_t=8jF4FQVSA5Q&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/watch?v=oYBEAQ5sEKQ&t=28s" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
