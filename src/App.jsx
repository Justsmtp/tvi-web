import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedBg from './components/AnimatedBg'
import Home from './pages/Home'
import About from './pages/About'
import WhatWeDo from './pages/WhatWeDo'
import Programmes from './pages/Programmes'
import GetInvolved from './pages/GetInvolved'
import Events from './pages/Events'
import Impact from './pages/Impact'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <AnimatedBg />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/about"         element={<About />} />
        <Route path="/what-we-do"    element={<WhatWeDo />} />
        <Route path="/programmes"    element={<Programmes />} />
        <Route path="/get-involved"  element={<GetInvolved />} />
        <Route path="/events"        element={<Events />} />
        <Route path="/impact"        element={<Impact />} />
        <Route path="/donate"        element={<Donate />} />
        <Route path="/contact"       element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
