import React, { useState } from 'react';
import AppRouter from './AppRouter';



function App() {
  const [isLoggedIn, setIslogggedIn] = useState(false);
  return (
    <AppRouter isLoggedIn={isLoggedIn} />
  )
};

export default App;
