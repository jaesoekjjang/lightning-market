import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/Post';
import Manage from './components/Manage';

const SellRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/post'><Post /></Route>
        <Route path='/manage'><Manage /></Route>
      </Switch>
    </Router>

  )
}

export default SellRouter;