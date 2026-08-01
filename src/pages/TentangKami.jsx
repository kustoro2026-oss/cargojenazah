import { useState, useEffect, useCallback, useMemo } from 'react'
import { FaPhoneAlt, FaWhatsapp, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './TentangKami.css'

const tkSlides = [
  '/images/ambulance-slide-2.jpg',
  '/images/ambulance-slide-3.jpg',
  '/images/ambulance-slide-4.jpg',
  '/images/petugas-ambulance.png',
]

function TentangKami() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % tkSlides.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + tkSlides.length) % tkSlides.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goToNext, 4000)
    return () => clearInterval(timer)
  }, [isPaused, goToNext])

  const visibleSlides = useMemo(() => {
    const total = tkSlides.length
    const prev = (currentSlide - 1 + total) % total
    const next = (currentSlide + 1) % total
    return new Set([currentSlide, prev, next])
  }, [currentSlide])

  const keunggulan = [
    { title: '1. Jaringan Pengiriman Terluas Hingga Internasional',
      text: 'Kami membangun kemitraan dan unit operasional di seluruh Indonesia, termasuk Jabodetabek, Jawa Tengah, Jawa Timur, Bali, dan Sumatera. Selain itu, kami juga menangani pemulangan jenazah internasional.' },
    { title: '2. Tim Profesional dan Berpengalaman',
      text: 'Tim kami yang terlatih dan berpengalaman mengurus semua proses pemulangan jenazah. Mereka mengelola surat kematian, mengemas jenazah sesuai standar medis, serta berkoordinasi dengan maskapai penerbangan dan rumah duka di lokasi tujuan.' },
    { title: '3. Layanan 24 Jam Nonstop',
      text: 'Karena kematian bisa terjadi kapan saja, kami melayani Anda selama 24 jam setiap hari, termasuk hari libur. Dengan demikian, kami dapat memberikan ketenangan dan kepastian kepada keluarga yang sedang berduka.' },
    { title: '4. Fasilitas Modern dan Sesuai Standar',
      text: 'Armada kendaraan yang kami operasikan dirancang khusus untuk mengangkut jenazah. Selain itu, kami menggunakan alat pelindung dan pengemasan modern, serta sistem pelacakan real-time agar proses berjalan transparan dan aman.' },
    { title: '5. Legalitas Lengkap dan Prosedur Sesuai Aturan',
      text: 'Kami selalu mematuhi aturan hukum dalam setiap layanan pengiriman jenazah. Seluruh dokumen kami lengkapi dan semua prosedur kami jalankan sesuai ketentuan Kementerian Kesehatan, Imigrasi, hingga regulasi internasional seperti IATA (International Air Transport Association).' },
    { title: '6. Biaya Transparan dan Kompetitif',
      text: 'Kami menjelaskan estimasi biaya secara jelas sejak awal. Tidak ada biaya tersembunyi. Tujuan kami adalah memberikan layanan berkualitas tinggi dengan harga yang tetap terjangkau.' },
  ]

  const prosedur = [
    'Mengurus Surat Kematian dan Dokumen Pengiriman',
    'Mengemas dan Menangani Jenazah Sesuai Protokol Kesehatan',
    'Berkoordinasi dengan Instansi Terkait (RS, Kepolisian, Imigrasi)',
    'Menyediakan Transportasi Jenazah Darat / Laut / Udara',
    'Menyerahkan Jenazah ke Lokasi Tujuan dengan Pendampingan',
  ]

  const internasional = [
    'Mengurus dokumen imigrasi dan KBRI',
    'Menangani jenazah sesuai prosedur internasional',
    'Berkoordinasi dengan maskapai dan instansi di negara asal atau tujuan',
  ]

  const alasan = [
    'Perusahaan Resmi dan Terpercaya',
    'Proses Cepat dan Efisien',
    'Tim Ramah dan Penuh Empati',
    'Jangkauan Nasional dan Internasional',
    'Biaya Terjangkau dan Prosedur Jelas',
  ]

  return (
    <div className="tentangkami-page">

      {/* ── HERO + INTRO ── */}
      <section className="tk-hero">
        <div className="tk-hero-overlay">
          <div className="container">
            <div className="tk-hero-grid">
              <div className="tk-hero-left">
                <h1>Tentang Kami Layanan Cargo Jenazah Profesional Terbaik di Indonesia</h1>
                <h2>Layanan Cargo Jenazah Profesional Terbaik di Indonesia: Siapa Kami?</h2>
                <p>
                  Dalam momen kehilangan, keluarga tentu menginginkan yang terbaik bagi orang tercinta yang telah berpulang. Salah satu langkah penting adalah memulangkan jenazah ke kampung halaman atau lokasi pemakaman yang dituju. Oleh karena itu, <strong>Human Cargo Funeral Services</strong> hadir sebagai penyedia <strong>layanan cargo jenazah profesional terbaik di Indonesia</strong> yang bekerja dengan empati, dedikasi, dan jaringan luas.
                </p>
                <div className="tk-btn-wrap">
                  <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="tk-btn">
                    <FaWhatsapp /> HUBUNGI KAMI DISINI
                  </a>
                </div>
                <p>
                  Kami menyediakan layanan pengiriman jenazah melalui transportasi darat dan udara. Jaringan operasional kami meliputi kota-kota besar seperti Jakarta, Semarang, Surabaya, Medan, Makassar, dan juga menjangkau hingga ke luar negeri. Melalui layanan ini, kami membantu masyarakat dari berbagai kalangan mengatasi kesulitan teknis, administratif, dan emosional selama proses pemulangan jenazah.
                </p>

                <div className="tk-contact">
                  <div className="tk-contact-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="tk-contact-info">
                    <h3>Hubungi Kami</h3>
                    <p className="tk-phone">+62 823-2904-5519</p>
                  </div>
                </div>
              </div>
              <div
                className="tk-hero-right"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="tk-slideshow">
                  {tkSlides.map((slide, index) => (
                    <div
                      key={index}
                      className={`tk-slide ${index === currentSlide ? 'active' : ''}`}
                      style={visibleSlides.has(index) ? { backgroundImage: `url(${slide})` } : undefined}
                    />
                  ))}
                </div>
                <button className="tk-slide-arrow tk-slide-arrow-left" onClick={goToPrev} aria-label="Previous">
                  <FaChevronLeft />
                </button>
                <button className="tk-slide-arrow tk-slide-arrow-right" onClick={goToNext} aria-label="Next">
                  <FaChevronRight />
                </button>
                <div className="tk-slide-dots">
                  {tkSlides.map((_, index) => (
                    <button
                      key={index}
                      className={`tk-slide-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEUNGGULAN ── */}
      <section className="tk-section-bg">
        <div className="tk-bg-overlay" />
        <div className="container">
          <h2 className="tk-section-title">Keunggulan Layanan Cargo Jenazah dari Human Cargo Funeral Services</h2>
          <div className="tk-keunggulan-list">
            {keunggulan.map((item, index) => (
              <div key={index} className="tk-keunggulan-item">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROSEDUR ── */}
      <section className="tk-section-white">
        <div className="container">
          <h2 className="tk-section-title">Prosedur Layanan Cargo Jenazah: Aman dan Terpercaya</h2>
          <p>
            Kami tidak hanya menawarkan transportasi. Di samping itu, kami juga memberikan <strong>layanan pendampingan penuh</strong> dalam setiap tahap, seperti:
          </p>
          <ul className="tk-list">
            {prosedur.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>Setiap proses kami tangani dengan efisien. Lebih dari itu, kami selalu menghormati aspek religi, budaya, dan privasi keluarga.</p>
        </div>
      </section>

      {/* ── KOMITMEN ── */}
      <section className="tk-section-alt">
        <div className="container">
          <h2 className="tk-section-title">Komitmen Kami: Pelayanan Sepenuh Hati Selama Lebih dari 6 Tahun</h2>
          <p>
            Selama lebih dari 6 tahun, kami terus memahami kebutuhan emosional dan logistik masyarakat dalam layanan pengiriman jenazah. Kami bekerja bukan hanya berdasarkan prosedur, tetapi juga dengan <strong>hati dan kepedulian</strong>. Rasa hormat kami hadir setiap kali dipercaya oleh keluarga untuk membantu.
          </p>
          <p>
            Temukan berbagai artikel informatif lainnya di <a href="https://ambulancecargo.com/blog" target="_blank" rel="noopener noreferrer">ambulancecargo.com/blog</a> seputar layanan kedukaan dan pengurusan jenazah.
          </p>
        </div>
      </section>

      {/* ── INTERNASIONAL ── */}
      <section className="tk-section-white">
        <div className="container">
          <h2 className="tk-section-title">Layanan Pengiriman Jenazah Internasional</h2>
          <p>
            Bagi Anda yang membutuhkan pemulangan jenazah dari luar negeri, kami siap membantu sebagai mitra terpercaya. Kami telah mengelola pengiriman jenazah dari dan ke berbagai negara seperti Singapura, Malaysia, Arab Saudi, Jepang, dan Belanda. Tim kami akan:
          </p>
          <ul className="tk-list">
            {internasional.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            Untuk informasi lebih lanjut, silakan lihat panduan pemulangan jenazah internasional di <a href="https://www.iata.org" target="_blank" rel="noopener noreferrer">iata.org</a>.
          </p>
        </div>
      </section>

      {/* ── MENGAPA ── */}
      <section className="tk-section-alt">
        <div className="container">
          <h2 className="tk-section-title">Mengapa Human Cargo Funeral Services Layak Dipilih?</h2>
          <p>
            Jika Anda mencari layanan <strong>cargo jenazah profesional terbaik di Indonesia</strong>, berikut alasan utama untuk mempercayai kami:
          </p>
          <ul className="tk-list">
            {alasan.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>
            Kami memahami bahwa Anda sedang menghadapi masa yang berat. Oleh karena itu, kami hadir untuk membantu agar proses pemulangan jenazah dapat berjalan dengan tenang dan lancar.
          </p>
        </div>
      </section>

      {/* ── SPACER ── */}
      <section className="tk-spacer" />

      {/* ── BOTTOM CTA ── */}
      <section className="tk-cta-bottom">
        <div className="tk-bg-overlay" />
        <div className="container">
          <h2 className="tk-cta-title">Hubungi Kami</h2>
          <p>
            Jika Anda membutuhkan layanan ambulance dan cargo jenazah, jangan ragu untuk menghubungi kami melalui:
          </p>
          <p>
            <FaPhoneAlt className="tk-inline-icon" /> Hotline 24 Jam: <a href="https://api.whatsapp.com/send?phone=6282329045519" target="_blank" rel="noopener noreferrer">+62 823-2904-5519</a>
          </p>
          <p>
            Layanan kami tersedia kapan pun Anda butuhkan. Untuk mendapatkan penjelasan, estimasi biaya, atau konsultasi awal, hubungi kami melalui kontak resmi di website <a href="https://ambulancecargo.com/" target="_blank" rel="noopener noreferrer">ambulancecargo.com</a>.
          </p>

          <h3 className="tk-cta-tagline">Kami adalah solusi anda yang mengalami kendala dalam pemakaman orang tersayang di kampung halaman.</h3>

          <div className="tk-btn-wrap">
            <a href="https://wa.link/zm51v4" target="_blank" rel="noopener noreferrer" className="tk-btn">
              <FaWhatsapp /> HUBUNGI KAMI DISINI
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default TentangKami
