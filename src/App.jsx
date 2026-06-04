// src/App.jsx
// Root component — assembles all sections in order.

import Grain        from './components/ui/Grain'
import Nav          from './components/Nav'
import Hero         from './components/Hero'
import About        from './components/About'
import HowIWork    from './components/HowIWork'
import Experience   from './components/Experience'
import Projects     from './components/Projects'
import Skills       from './components/Skills'
import Leadership   from './components/Leadership'
import Contact      from './components/Contact'
import Footer       from './components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed film-grain texture — sits above everything */}
      <Grain />

      {/* Sticky navigation */}
      <Nav />

      {/* Page sections */}
      <main className="main-content">
        <Hero />
        <About />
        <HowIWork />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
