import React from 'react'
import NavigationBar from './components/NavigationBar';
import ImgBlockGrid from './components/ImgBlockGrid';
import Footer from '../CommonPage/Footer';
import Header from '../CommonPage/header';
import CategoryBar from '../CommonPage/categoryBar';
import Carousel from './components/carousel';

const Root = () => {
  return (
    <React.Fragment>
      <Header />
      <CategoryBar />
      <NavigationBar />
      <Carousel />
      <ImgBlockGrid />
      <Footer />
    </React.Fragment>
  )
}

export default Root;