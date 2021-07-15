import React from 'react';
import Root from './rootpage/Root';
import { HashRouter as Router, Route, Switch, } from 'react-router-dom';
import Sell from './SellPage/Sell';
import MyPage from './mypage/MyPage';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'><Root /></Route>
        <Route path='/sell'><Sell /></Route>
        <Route path='/mypage'><MyPage /></Route>
      </Switch>
    </Router>
  )
}

export default AppRouter;