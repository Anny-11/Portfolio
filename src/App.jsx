// src/App.jsx
// Root component — assembles all sections in order.
// To reorder sections, just move the lines below.

import Grain              from './components/ui/Grain'
import Nav                from './components/Nav'
import Hero               from './components/Hero'
import About              from './components/About'
import WorkExplorations   from './components/WorkExplorations'
import FigmaExplorations  from './components/FigmaExplorations'
import Observations       from './components/Observations'
import Skills             from './components/Skills'
import Leadership         from './components/Leadership'
import Contact            from './components/Contact'
import Footer             from './components/Footer'

export default function App() {
  return (
    <>
      {/* Fixed film-grain texture — sits above everything */}
      <Grain />

      {/* Sticky navigation */}
      <Nav />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <WorkExplorations />
        <FigmaExplorations />
        <Observations />
        <Skills />
        <Leadership />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
