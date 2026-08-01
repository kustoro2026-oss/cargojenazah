import { useState, useEffect, useCallback, useMemo } from 'react'
import {
  FaMoneyBillWave, FaRegClock, FaUsers, FaFileSignature,
  FaPlaneDeparture, FaAmbulance, FaHome, FaChessKing,
  FaFillDrip, FaShower, FaPhoneAlt, FaGlobe,
  FaChevronLeft, FaChevronRight
} from 'react-icons/fa'
import './Home.css'

const heroSlides = [
  '/images/hero-slide-1.png',
  '/images/hero-slide-2.png',
  '/images/hero-slide-3.png',
  '/images/hero-slide-4.png',
  '/images/hero-slide-5.png',
  '/images/hero-slide-6.png',
  '/images/hero-slide-7.png',
  '/images/hero-slide-8.jpeg',
  '/images/hero-slide-9.png',
]

const latsetCards = [
  { title: 'PENGIRIMAN JENAZAH DOMESTIK', bg: '/images/pengiriman-jenazah-domestik.jpeg' },
  { title: 'PENGIRIMAN JENAZAH INTERNASIONAL', bg: '/images/pengiriman-jenazah-internasional.jpeg' },
  { title: 'PENERIMAAN JENAZAH DOMESTIK', bg: '/images/penerimaan-jenazah-domestik.jpeg' },
  { title: 'PENERIMAAN JENAZAH INTERNASIONAL', bg: '/images/penerimaan-jenazah-internasional.jpeg' },
  { title: 'FORMALIN', bg: '/images/formalin.jpeg' },
  { title: 'RUANG DUKA', bg: '/images/ruang-duka.jpeg' },
  { title: 'MOBIL JENAZAH', bg: '/images/mobil-jenazah.jpeg' },
  { title: 'PETI JENAZAH', bg: '/images/peti-jenazah.jpeg' },
  { title: 'MAKEUP JENAZAH', bg: '/images/makeup-jenazah.jpeg' },
]


function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goToNext, 4000)
    return () => clearInterval(timer)
  }, [isPaused, goToNext])

  // Only load background images for current + adjacent slides (3 total)
  const visibleSlides = useMemo(() => {
    const total = heroSlides.length
    const prev = (currentSlide - 1 + total) % total
    const next = (currentSlide + 1) % total
    return new Set([currentSlide, prev, next])
  }, [currentSlide])

  const features = [
    { Icon: FaMoneyBillWave, title: 'Best Price', subtitle: 'Guaranteed' },
    { Icon: FaRegClock, title: '24/7 Customer', subtitle: 'Care Service' },
    { Icon: FaUsers, title: 'Best Service Team', subtitle: 'Professional' },
    { Icon: FaFileSignature, title: 'Genuine', subtitle: 'Legality' },
  ]

  const services = [
    { Icon: FaPlaneDeparture, title: 'CARGO JENAZAH' },
    { Icon: FaAmbulance, title: 'AMBULANCE JENAZAH 24 JAM' },
    { Icon: FaHome, title: 'RUMAH DUKA' },
    { Icon: FaChessKing, title: 'PETI JENAZAH' },
    { Icon: FaFillDrip, title: 'FORMALIN JENAZAH' },
    { Icon: FaShower, title: 'PEMANDIAN JENAZAH' },
  ]

  return (
    <div className="home-page">
      {/* ===== HERO ===== */}
      <section
        className="hero"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="hero-slideshow">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
              style={visibleSlides.has(index) ? { backgroundImage: `url(${slide})` } : undefined}
            />
          ))}
        </div>

        {/* Arrow Navigation */}
        <button className="hero-arrow hero-arrow-left" onClick={goToPrev} aria-label="Previous slide">
          <FaChevronLeft />
        </button>
        <button className="hero-arrow hero-arrow-right" onClick={goToNext} aria-label="Next slide">
          <FaChevronRight />
        </button>

        {/* Dot Indicators */}
        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hero-overlay">
          <div className="container" style={{ padding: '0 10px' }}>
            <div className="hero-content-wrap">
              <h1 className="hero-heading-title">
                <a href="https://ambulancecargo.com/" target="_blank" rel="noopener noreferrer">
                  LAYANAN AMBULANCE DAN CARGO JENAZAH PROFESIONAL
                </a>
              </h1>
              <h2 className="hero-h2-sub">Kami adalah Jasa Pelayanan Pengiriman Jenazah Dalam dan Luar Negeri Dengan Aman dan Terpercaya dibawah naungan Human Cargo Funeral Services.</h2>
              <div className="hero-cta-box">
                <h2 className="hero-cta-title">MEMBUTUHKAN LAYANAN KAMI ?</h2>
                <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="btn-white">
                  KLIK DISINI UNTUK MENGHUBUNGI KAMI
                </a>
              </div>
              <p className="hero-description">
                Layanan ambulance dan cargo jenazah profesional — cepat, aman, dan terpercaya di seluruh Indonesia hingga luar negeri, di bawah naungan Human Cargo Funeral Services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="features-section">
        <div className="features-grid">
          {features.map((feature, index) => (
            <button
              key={index}
              className="feature-pill"
            >
              <div className="feature-pill-icon">
                <feature.Icon />
              </div>
              <span>{feature.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <p>Human Cargo Funeral Services bukan sekadar layanan cargo jenazah. Kami adalah mitra yang hadir untuk meringankan beban Anda di saat-saat sulit. Dengan dedikasi dan rasa hormat, kami memastikan bahwa setiap proses pengurusan jenazah dilakukan dengan standar tertinggi.</p>
            <p>Percayakan kebutuhan pengiriman jenazah Anda kepada kami. Hubungi Human Cargo Funeral Services kapan saja untuk mendapatkan informasi lebih lanjut atau bantuan langsung.</p>
          </div>
        </div>
      </section>

      {/* ===== MENGAPA MEMILIH KAMI ===== */}
      <section className="why-section">
        <div className="container">
          <h2 className="why-title">Mengapa Memilih Kami ?</h2>
          <div className="why-content">
            <div className="why-text-wrap">
              <ul className="why-list">
                <li><strong>Berpengalaman</strong>: Telah menangani ratusan pengiriman jenazah ke berbagai wilayah dan negara</li>
                <li><strong>24 Jam Siaga</strong>: Tim kami aktif sepanjang waktu, termasuk hari libur nasional</li>
                <li><strong>Legal dan Profesional</strong>: Semua prosedur mengikuti aturan perundang-undangan dan regulasi kesehatan</li>
                <li><strong>Jaringan Luas</strong>: Bekerja sama dengan rumah sakit, bandara, maskapai, kedutaan, dan instansi pemerintah</li>
                <li><strong>Harga Transparan</strong>: Estimasi biaya jelas sejak awal, tanpa biaya tersembunyi</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* ===== OUR SERVICES ===== */}
      <section className="latest-service">
        <div className="container">
          <h2 className="latest-title">LAYANAN KAMI</h2>
          <h2 className="latest-subtitle">Layanan lengkap Human Cargo Funeral Services untuk kebutuhan pengurusan jenazah Anda.</h2>
          <div className="latset-cards-grid">
            {latsetCards.map((card, index) => (
              <div
                key={index}
                className="latset-card"
              >
                <img src={card.bg} alt={card.title} className="latset-card-img" loading="lazy" />
                <h2 className="latset-card-title">{card.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== KAMI MENYEDIAKAN ===== */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-heading">KAMI MENYEDIAKAN</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <a key={index} href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="service-card">
                <div className="service-card-icon">
                  <service.Icon />
                </div>
                <h3>{service.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA DARK ===== */}
      <section className="cta-dark">
        <div className="container">
          <div className="cta-dark-content">
            <div className="cta-dark-row">
              <div className="cta-dark-text">
                <h2 className="cta-dark-heading">MEMBUTUHKAN LAYANAN KAMI ?</h2>
                <p className="cta-dark-subtitle">Tim profesional kami siap membantu Anda 24 jam — hubungi sekarang untuk konsultasi gratis.</p>
              </div>
              <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="btn-cta-large">
                <FaPhoneAlt /> HUBUNGI KAMI SEKARANG
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info-col">
              <h2 className="contact-heading">Punya Pertanyaan ?</h2>
              <p className="contact-desc">Jika Anda memiliki pertanyaan, saran, atau ingin mengajukan permintaan terkait data pribadi, silakan hubungi kami melalui kontak di bawah ini.</p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><FaPhoneAlt /></div>
                  <div className="contact-detail-text">
                    <span className="contact-detail-label">Hotline 24 Jam</span>
                    <a href="https://api.whatsapp.com/send?phone=6282329045519" target="_blank" rel="noopener noreferrer" className="contact-detail-link">+62 823-2904-5519</a>
                  </div>
                </div>
                <div className="contact-detail-item">
                  <div className="contact-detail-icon"><FaGlobe /></div>
                  <div className="contact-detail-text">
                    <span className="contact-detail-label">Website</span>
                    <a href="https://ambulancecargo.com/" target="_blank" rel="noopener noreferrer" className="contact-detail-link">www.ambulancecargo.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-card-col">
              <div className="contact-card">
                <div className="contact-card-icon-circle"><FaPhoneAlt /></div>
                <h3 className="contact-card-title">Hubungi Kami</h3>
                <p className="contact-card-phone">+62 823-2904-5519</p>
                <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="btn-contact-card">
                  HUBUNGI KAMI
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
