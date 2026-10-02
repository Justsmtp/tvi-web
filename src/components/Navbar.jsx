import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/about',        label: 'About Us' },
  { to: '/what-we-do',   label: 'What We Do' },
  { to: '/programmes',   label: 'Programmes' },
  { to: '/events',       label: 'Events' },
  { to: '/impact',       label: 'Our Impact' },
  { to: '/get-involved', label: 'Get Involved' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? 'rgba(2,39,29,0.97)' : '#02271D',
      borderBottom: '1px solid rgba(212,167,44,0.12)',
      boxShadow: scrolled ? '0 4px 32px rgba(2,39,29,0.25)' : 'none',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(12px)',
    }}>
      <div className="container" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', height:'72px' }}>

        <Link to="/" style={{ display:'flex', alignItems:'center', gap:'0.75rem', textDecoration:'none' }}>
          <img src="/tvilogo.jpeg" alt="TVI Logo" style={{ height:'46px', width:'46px', objectFit:'contain', borderRadius:'6px' }} />
          <div style={{ lineHeight: 1.15 }}>
            <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:'0.95rem', color:'#fff' }}>The Vanguard</div>
            <div style={{ fontFamily:"'Manrope',sans-serif", fontWeight:800, fontSize:'0.95rem', color:'#D4A72C' }}>Initiative</div>
          </div>
        </Link>

        <div style={{ display:'flex', alignItems:'center', gap:'1.75rem' }} className="desk-nav">
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{
              color: pathname === l.to ? '#D4A72C' : 'rgba(255,255,255,0.82)',
              textDecoration:'none', fontWeight:600, fontSize:'0.87rem',
              borderBottom: pathname === l.to ? '2px solid #D4A72C' : '2px solid transparent',
              paddingBottom:'2px', transition:'all 0.2s ease', whiteSpace:'nowrap',
            }}
            onMouseEnter={e => { if(pathname!==l.to){ e.target.style.color='#D4A72C' }}}
            onMouseLeave={e => { if(pathname!==l.to){ e.target.style.color='rgba(255,255,255,0.82)' }}}
            >{l.label}</Link>
          ))}
          <Link to="/donate" className="btn btn-gold" style={{ padding:'0.6rem 1.4rem', fontSize:'0.88rem' }}>Donate</Link>
        </div>

        <button onClick={() => setMenuOpen(o => !o)} className="mob-toggle" aria-label="Menu"
          style={{ background:'none', border:'none', cursor:'pointer', color:'#fff', padding:'0.5rem', display:'none' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{ background:'#02271D', borderTop:'1px solid rgba(212,167,44,0.12)', padding:'1.25rem 1.5rem 2rem' }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} style={{ display:'block', color: pathname===l.to ? '#D4A72C' : 'rgba(255,255,255,0.82)', textDecoration:'none', fontWeight:600, padding:'0.8rem 0', borderBottom:'1px solid rgba(255,255,255,0.06)', fontSize:'1rem' }}>{l.label}</Link>
          ))}
          <Link to="/donate" className="btn btn-gold" style={{ marginTop:'1.25rem', display:'flex', justifyContent:'center', width:'100%' }}>Donate</Link>
        </div>
      )}

      <style>{`
        @media(max-width:900px){ .desk-nav{display:none!important} .mob-toggle{display:flex!important} }
        @media(min-width:901px){ .mob-toggle{display:none!important} }
      `}</style>
    </nav>
  )
}
