import React, { useState, useReducer } from 'react';
import AppRouter from './AppRouter';

const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        isLoggedIn: true
      }
    case "LOG_OUT":
      return {
        isLoggedIn: false
      }
  }
}

export const UserDispatch = React.createContext(null);

function App() {

  const [isLoggedIn, dispatch] = useReducer(reducer, false)

  return (
    <UserDispatch.Provider value={dispatch}>
      <AppRouter isLoggedIn={isLoggedIn} />
    </UserDispatch.Provider>
  )
};

export default App;
