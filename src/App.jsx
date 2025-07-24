import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
// import Navigation from './components/Navigation';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import ParticlesBackground from './components/particulesjs/ParticlesBackground';
function App() {


  return (
    <>
    {/* <Navigation/> */}
    {/* <ParticlesBackground /> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/competences' element={<Knowledges/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
      <Footer />
    </>
  )
}

export default App
