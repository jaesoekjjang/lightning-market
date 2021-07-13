import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import ImgBlockGrid from './components/ImgBlockGrid';
import Footer from './components/Footer';
import Header from './components/header';
import CategoryBar from './components/categoryBar';
import Carousel from './components/carousel'


function App() {

  return (
    <React.Fragment>
      <Header/>
      <CategoryBar/>
      <NavigationBar />
      <Carousel/>
      <ImgBlockGrid />
      <Footer />

    </React.Fragment>
  )
};

export default App;
