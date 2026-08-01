import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingWA from './components/FloatingWA'

const Home = lazy(() => import('./pages/Home'))
const TentangKami = lazy(() => import('./pages/TentangKami'))
const Layanan = lazy(() => import('./pages/Layanan'))

const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontFamily: 'system-ui, sans-serif',
    color: '#10135F',
    fontSize: '16px'
  }}>
    Memuat...
  </div>
)

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang-kami" element={<TentangKami />} />
            <Route path="/layanan" element={<Layanan />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <FloatingWA />
    </div>
  )
}

export default App
