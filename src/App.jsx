//import React from 'react'//
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contacto from './Pages/Contacto';
import { Routes,Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />

        <Route path='/contacto' element={<Contacto/>} /> 
        
      </Routes> 

      <Footer/>
     
    </>
  )
}
export default App
