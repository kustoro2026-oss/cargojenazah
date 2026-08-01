import { useState, useEffect } from 'react'

export default function FloatingWA() {
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <style>{`
        @keyframes wa-ripple {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes wa-bounce-in {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          80% { transform: scale(0.92); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes wa-tooltip-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .floating-wa-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: transparent;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: wa-bounce-in 0.6s ease-out;
          transition: transform 0.3s ease;
        }
        /* Ripple ring 1 */
        .floating-wa-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          z-index: -1;
          animation: wa-ripple 2s ease-out infinite;
        }
        /* Ripple ring 2 — staggered */
        .floating-wa-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #25D366;
          z-index: -1;
          animation: wa-ripple 2s ease-out 0.7s infinite;
        }
        .floating-wa-btn img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
        }
        .floating-wa-btn:hover {
          transform: scale(1.12);
          animation: none;
        }
        .floating-wa-btn:hover::before,
        .floating-wa-btn:hover::after {
          animation: none;
          opacity: 0;
        }
        .floating-wa-btn:active {
          transform: scale(0.95);
        }
        .floating-wa-tooltip {
          position: fixed;
          bottom: 100px;
          right: 14px;
          z-index: 9999;
          background: #2E2D30;
          color: #FFFFFF;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 20px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.18);
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }
        .floating-wa-tooltip::after {
          content: '';
          position: absolute;
          bottom: -6px;
          right: 20px;
          width: 0;
          height: 0;
          border-top: 7px solid #2E2D30;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
        }
        .floating-wa-tooltip.visible {
          opacity: 1;
          animation: wa-tooltip-in 0.3s ease-out;
        }
        @media (max-width: 480px) {
          .floating-wa-btn {
            bottom: 18px;
            right: 18px;
            width: 52px;
            height: 52px;
          }
          .floating-wa-btn img {
            width: 100%;
            height: 100%;
          }
          .floating-wa-tooltip {
            bottom: 80px;
            right: 6px;
            font-size: 11px;
            padding: 6px 12px;
          }
        }
      `}</style>

      {/* Tooltip label */}
      <div className={`floating-wa-tooltip ${hovered ? 'visible' : ''}`}>
        Hubungi Kami via WhatsApp
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.link/zm51v4"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Hubungi via WhatsApp"
        title="Hubungi via WhatsApp"
        style={visible ? {} : { display: 'none' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src="/wa.png" alt="WhatsApp" />
      </a>
    </>
  )
}
