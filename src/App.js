import React, { useState, useReducer } from 'react';
import AppRouter from './AppRouter';

const reducer = (state, action) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
      }
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
      }
  }
}

const initialState = {
  isLoggedIn: false,
}

export const UserDispatch = React.createContext(null);

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserDispatch.Provider value={dispatch}>
      <AppRouter isLoggedIn={state.isLoggedIn} />
    </UserDispatch.Provider>
  )
};

export default App;
