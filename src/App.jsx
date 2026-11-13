import React from 'react'
import Footer from './Footer/Footer'
import Sneakers from './Sneakers'
import Join from '../join'
import Navbar from './Navbar/Navbar'
import Carousel from './Carousel'
import Carousel2 from './Carousel2'
import Carousel3 from './Carouisel3'
import Carouseltex from './Carouseltex'
import Xayrulla from './hayrulla/hayrulla'
import Banner from './banner/Banner'

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner/>
      <Xayrulla />
      <Carousel />
      <Carousel2 />
      <Carousel3 />
      <Carouseltex />
      <Sneakers />
      <Join />
      <Footer />
    </div>
  )
}

export default App
