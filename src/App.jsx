import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet />
    <Testimonials/>
    <Footer />
    </>
  )
}

export default App
