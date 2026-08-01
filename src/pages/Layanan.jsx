import { useState, useEffect, useRef } from 'react'
import {
  FaPlaneDeparture, FaAmbulance, FaHome, FaChessKing,
  FaFillDrip, FaShower, FaPhoneAlt, FaWhatsapp,
  FaChevronDown, FaCheckCircle, FaClipboardCheck,
  FaHandsHelping, FaShippingFast, FaHeadset
} from 'react-icons/fa'
import './Layanan.css'

const statsData = [
  { icon: FaShippingFast, target: 124, label: 'Pengiriman Berhasil', suffix: '+' },
  { icon: FaHandsHelping, target: 6, label: 'Tahun Pengalaman', suffix: '+' },
  { icon: FaHeadset, target: 24, label: 'Jam Siaga', suffix: '/7' },
]

function CountUp({ target, suffix, triggered }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let start = 0
    const duration = 1500
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target, triggered])

  return <span>{count}{suffix}</span>
}

function Layanan() {
  const [openFaq, setOpenFaq] = useState(null)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true) },
      { threshold: 0.4 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const services = [
    { Icon: FaPlaneDeparture, title: 'Cargo Jenazah', desc: 'Pengiriman jenazah domestik & internasional via darat, laut, dan udara.' },
    { Icon: FaAmbulance, title: 'Ambulance Jenazah 24 Jam', desc: 'Armada ambulance siaga 24 jam untuk kebutuhan darurat kapan saja.' },
    { Icon: FaHome, title: 'Rumah Duka', desc: 'Fasilitas rumah duka lengkap dan nyaman untuk keluarga.' },
    { Icon: FaChessKing, title: 'Peti Jenazah', desc: 'Berbagai pilihan peti jenazah berkualitas sesuai kebutuhan.' },
    { Icon: FaFillDrip, title: 'Formalin Jenazah', desc: 'Pengawetan jenazah dengan standar medis profesional.' },
    { Icon: FaShower, title: 'Pemandian Jenazah', desc: 'Layanan pemandian jenazah sesuai syariat dan kepercayaan.' },
  ]

  const pelayananUtama = [
    { title: 'Pengangkutan Jenazah', desc: 'Pengangkutan jenazah dari rumah sakit, klinik, atau lokasi lain ke tempat pemakaman baik dalam kota maupun luar kota.' },
    { title: 'Cargo Jenazah', desc: 'Pengiriman jenazah secara domestik maupun internasional melalui jalur darat, laut, dan udara dengan prosedur aman.' },
    { title: 'Pengurusan Dokumen', desc: 'Bantuan pengurusan dokumen kematian, surat kematian, izin pemakaman, dan dokumen imigrasi untuk luar negeri.' },
    { title: 'Persiapan Jenazah', desc: 'Pembersihan dan persiapan jenazah sesuai standar medis dan protokol kesehatan yang berlaku.' },
    { title: 'Peti Mati Berkualitas', desc: 'Penyediaan peti mati yang sesuai dengan kebutuhan keluarga dan standar pengiriman.' },
    { title: 'Layanan 24 Jam', desc: 'Tim kami siaga 24 jam penuh untuk memenuhi kebutuhan darurat Anda kapan pun diperlukan.' },
  ]

  const pelayananTambahan = [
    { title: 'Pelayanan Ritual', desc: 'Bantuan pelaksanaan ritual kematian sesuai agama dan kepercayaan keluarga dengan penuh hormat.' },
    { title: 'Konsultasi Pemakaman', desc: 'Konsultasi dan bantuan dalam merencanakan prosesi pemakaman yang layak dan khidmat.' },
    { title: 'Pendampingan Keluarga', desc: 'Tim kami mendampingi keluarga selama proses pemulangan jenazah hingga ke tempat tujuan.' },
    { title: 'Koordinasi Instansi', desc: 'Koordinasi dengan RS, kepolisian, imigrasi, maskapai, dan kedutaan untuk kelancaran proses.' },
  ]

  const faqs = [
    { q: 'Apa yang dipersiapkan untuk pengantaran jenazah jalur darat?',
      a: 'Jika melalui jalur darat menggunakan mobil jenazah atau ambulance jenazah, yang perlu dipersiapkan adalah surat kematian. Apabila melewati jalur darat namun harus menggunakan kapal ferry (misalnya ke Bali atau Lampung), diperlukan surat izin membawa jenazah dari kepolisian setempat.' },
    { q: 'Apa saja perlengkapan jenazah muslim yang disediakan?',
      a: 'Kami menyediakan perlengkapan jenazah muslim sesuai syariat Islam, termasuk kain kafan, perlengkapan memandikan, kapas, kapur barus, dan peti mati yang sesuai standar.' },
    { q: 'Apa saja perlengkapan jenazah non-muslim yang disediakan?',
      a: 'Kami menyediakan perlengkapan jenazah non-muslim sesuai kebutuhan, termasuk peti mati, perlengkapan upacara, pakaian jenazah, dan fasilitas rumah duka yang nyaman bagi keluarga.' },
    { q: 'Apa saja armada yang dimiliki?',
      a: 'Kami memiliki armada ambulance jenazah, mobil jenazah, dan kendaraan operasional yang siap melayani pengiriman jenazah ke seluruh Indonesia. Seluruh armada dirawat secara berkala.' },
    { q: 'Di kota mana saja layanan ini tersedia?',
      a: 'Layanan kami tersedia di seluruh Indonesia, mencakup Jabodetabek, Jawa Tengah, Jawa Timur, Bali, Sumatera, Kalimantan, Sulawesi, dan kota-kota lainnya. Kami juga melayani pengiriman internasional.' },
  ]

  return (
    <div className="layanan-page">

      {/* ===== HERO ===== */}
      <section className="ly-hero">
        <div className="ly-hero-overlay">
          <div className="container">
            <div className="ly-hero-content">
              <span className="ly-hero-badge">Human Cargo Funeral Services</span>
              <h1 className="ly-hero-title">Layanan Profesional Cargo Jenazah & Ambulance</h1>
              <p className="ly-hero-subtitle">
                Solusi lengkap pengiriman jenazah domestik dan internasional — cepat, aman, dan terpercaya dengan dukungan tim profesional 24 jam.
              </p>
              <div className="ly-hero-btns">
                <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="ly-btn-primary">
                  <FaWhatsapp /> Hubungi Kami Sekarang
                </a>
                <a href="#ly-services" className="ly-btn-outline">
                  Lihat Layanan <FaChevronDown />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section className="ly-services" id="ly-services">
        <div className="container">
          <div className="ly-section-header">
            <h2 className="ly-section-title">Layanan Kami</h2>
            <p className="ly-section-desc">Kami menyediakan berbagai layanan profesional untuk memenuhi kebutuhan Anda</p>
          </div>
          <div className="ly-services-grid">
            {services.map((svc, i) => (
              <a key={i} href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="ly-service-card">
                <div className="ly-service-icon-circle">
                  <svc.Icon />
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PELAYANAN UTAMA ===== */}
      <section className="ly-utama">
        <div className="container">
          <div className="ly-section-header">
            <h2 className="ly-section-title">Pelayanan Utama</h2>
            <p className="ly-section-desc">Layanan inti yang menjadi komitmen kami kepada setiap keluarga</p>
          </div>
          <div className="ly-utama-grid">
            {pelayananUtama.map((item, i) => (
              <div key={i} className="ly-utama-card">
                <div className="ly-utama-card-num">{String(i + 1).padStart(2, '0')}</div>
                <div className="ly-utama-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <FaCheckCircle className="ly-utama-card-check" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PELAYANAN TAMBAHAN ===== */}
      <section className="ly-tambahan">
        <div className="container">
          <div className="ly-section-header">
            <h2 className="ly-section-title">Pelayanan Tambahan</h2>
            <p className="ly-section-desc">Dukungan ekstra untuk memastikan kenyamanan dan ketenangan Anda</p>
          </div>
          <div className="ly-tambahan-grid">
            {pelayananTambahan.map((item, i) => (
              <div key={i} className="ly-tambahan-card">
                <div className="ly-tambahan-icon-wrap">
                  <FaClipboardCheck />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS COUNTER ===== */}
      <section className="ly-stats" ref={statsRef}>
        <div className="ly-stats-overlay">
          <div className="container">
            <div className="ly-stats-grid">
              {statsData.map((stat, i) => (
                <div key={i} className="ly-stat-item">
                  <div className="ly-stat-icon-circle">
                    <stat.icon />
                  </div>
                  <div className="ly-stat-number">
                    <CountUp target={stat.target} suffix={stat.suffix} triggered={statsVisible} />
                  </div>
                  <span className="ly-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MID CTA ===== */}
      <section className="ly-mid-cta">
        <div className="container">
          <div className="ly-mid-cta-card">
            <div className="ly-mid-cta-text">
              <h2>Butuh Bantuan Segera?</h2>
              <p>Customer service kami siap melayani Anda 24 jam. Jangan ragu untuk menghubungi kami sekarang juga.</p>
            </div>
            <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="ly-btn-primary ly-btn-lg">
              <FaPhoneAlt /> Hubungi Kami Disini
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="ly-faq">
        <div className="container">
          <div className="ly-section-header">
            <h2 className="ly-section-title">Pertanyaan Umum</h2>
            <p className="ly-section-desc">Hal-hal yang sering ditanyakan tentang layanan kami</p>
          </div>
          <div className="ly-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`ly-faq-item ${openFaq === i ? 'active' : ''}`}>
                <button
                  className="ly-faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="ly-faq-q-text">{faq.q}</span>
                  <FaChevronDown className="ly-faq-chevron" />
                </button>
                <div className="ly-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="ly-bottom-cta">
        <div className="container">
          <h2>Memerlukan Layanan Kami?</h2>
          <p>Tim profesional kami siap membantu Anda — hubungi sekarang untuk konsultasi gratis.</p>
          <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="ly-btn-primary ly-btn-lg">
            <FaWhatsapp /> Klik Disini Untuk Menghubungi Kami
          </a>
        </div>
      </section>

    </div>
  )
}

export default Layanan
