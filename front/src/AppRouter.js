import React from 'react';
import Root from './rootpage/Root';
import { HashRouter as Router, Route, Switch, } from 'react-router-dom';
import Sell from './SellPage/Sell';
import MyPage from './mypage/MyPage';
import Login from './CommonPage/Login';

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Root /></Route>
        {isLoggedIn
          ? <Route path='/sell'><Sell /></Route>
          : <Route path='/sell'><Login /></Route>}
        {isLoggedIn
          ? <Route path='/mypage'><MyPage /></Route>
          : <Route path='/mypage'><Login /></Route>}
        <Route path='/login' component={Login}></Route>
      </Switch>
    </Router>
  )
}

export default AppRouter;