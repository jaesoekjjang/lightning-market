import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import ImgBlockGrid from './components/ImgBlockGrid';
import Footer from './components/Footer';
import Header from './components/header';


function App() {

  return (
    <React.Fragment>
      <Header/>
      <NavigationBar />
      <ImgBlockGrid />
      <Footer />

    </React.Fragment>
  )
};

export default App;
