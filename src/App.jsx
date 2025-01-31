import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import './index.css'

const App = () => {
  return (
   <>
   <Navbar/>
   <div className='mt-20'>
   <Outlet/>
   </div>
   <Footer/>
   </>
  )
}

export default App