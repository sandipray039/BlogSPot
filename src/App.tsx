import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import './index.css'
import ScrollToTop from './pages/ScrollToTop'
import ScrollTopButton from './pages/ScrollTopButton'

const App = () => {
  return (
   <>
   <ScrollToTop/>
   <Navbar/>
   <div className='mt-20' style={{minHeight:"60vh"}}>
   <Outlet/>
   </div>
   <Footer/>
   <ScrollTopButton/>
   </>
  )
}

export default App