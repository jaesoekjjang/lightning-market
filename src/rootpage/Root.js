import React from 'react'
import ImgBlockGrid from './components/ImgBlockGrid';
import Footer from '../CommonPage/Footer';
import Header from '../CommonPage/header';
import Carousel from './components/carousel';

const Root = () => {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <ImgBlockGrid />
      <Footer />
    </React.Fragment>
  )
}

export default Root;