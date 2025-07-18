import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import ProjectsCarousel from './components/ProjectsCarousel';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Services />
        <ProjectsCarousel />
        <Expertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
