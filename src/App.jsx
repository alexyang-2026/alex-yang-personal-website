import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'
import PerformanceGallery from './components/PerformanceGallery'
import About from './components/About'
import Contact from './components/Contact'

import RepertoireSkills from './pages/RepertoireSkills'

import './App.css'

// Cursor
import SplashCursor from './components/SplashCursor'

function Home() {
  const [cursorReady, setCursorReady] = useState(false)

  useEffect(() => {
    const startCursor = () => setCursorReady(true)
    const timer = window.setTimeout(startCursor, 1200)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      {cursorReady && <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={1}
        PRESSURE={0.15}
        CURL={3}
        SPLAT_RADIUS={0.15}
        SPLAT_FORCE={6500}
        COLOR_UPDATE_SPEED={15}
        SHADING
        RAINBOW_MODE={true}
      />}
      <Hero />
      <About />
      <SelectedWork />
      <Experience />
      <PerformanceGallery />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repertoire-skills" element={<RepertoireSkills />} />
    </Routes>
  )
}

export default App
