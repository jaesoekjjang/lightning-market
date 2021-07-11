import React, { useState } from 'react';
import styled from 'styled-components';
import NavigationBar from './components/NavigationBar';
import ImgBlockGrid from './components/ImgBlockGrid';
import Footer from './components/Footer';


function App() {

  return (
    <React.Fragment>
      <div>
        <NavigationBar />
        <ImgBlockGrid />
        <Footer />
      </div>
    </React.Fragment>
  )
};

export default App;
