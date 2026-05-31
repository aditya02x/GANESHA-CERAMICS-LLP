import React from 'react'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ProjectSection from './components/ProjectSection'

import Projects from './components/Projects'

import Services from './components/ServicesSection'
import Our from './components/Our'

const App = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <ProjectSection />
      <Services/>
      <Our/>
      <Footer />

    </div>
  )
}

export default App
