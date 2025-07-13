import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Skills from './components/Skills';
import ProjectsCarousel from './components/ProjectsCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Expertise from './components/Expertise';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Skills />
        <ProjectsCarousel />
        <Expertise />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
