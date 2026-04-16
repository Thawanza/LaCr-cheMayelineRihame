import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Testimonials from './Components/Testimonials/Testimonials'
import Equipes from './Components/Equipe/Equipe'
import Footer from './Components/Footer/Footer'
import  Galerie  from './Components/Galerie/Galerie'
import "antd/dist/reset.css"

// ✅ importe le fond animé
//import AnimatedBackground from './Components/AnimatedBackground/AnimatedBackground'

const App = () => {
  return (
    <div>
      {/* ✅ Fond animé en arrière-plan */}
      {/* <AnimatedBackground /> */}

      {/* ✅ Sections principales */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Testimonials />
      <Equipes />
      {/* <Projects /> */}
      <Galerie />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
