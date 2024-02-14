import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Home from './components/Home/Home'
import BackToTop from './components/Options/BackToTop'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'


function App() {
  return (
    <div>
      <Navbar/>
      <BackToTop/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Contact/>
      <Footer/>

    </div>
    // <div>Hello<Navbar/></div>
  )
}

export default App