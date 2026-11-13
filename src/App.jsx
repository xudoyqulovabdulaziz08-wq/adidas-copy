import React from 'react'
import Footer from './Footer/Footer'
import Sneakers from './Sneakers'
import Join from '../join'
import Navbar from './Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Sneakers />
      <Join />
      <Footer />
    </div>
  )
}

export default App
