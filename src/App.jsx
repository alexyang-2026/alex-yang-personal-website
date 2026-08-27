import { Route, Routes } from 'react-router-dom'

import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'

import RepertoireSkills from './pages/RepertoireSkills'

import './App.css'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWork />
      <Experience />
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
