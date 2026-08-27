import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import Hero from './components/Hero'
import SelectedWork from './components/SelectedWork'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <SelectedWork />
    </>
  
  )
}

export default App
