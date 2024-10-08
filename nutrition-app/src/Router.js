import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';  // Version 5 syntax

import Home from './pages/Home';
import Recipes from './pages/Recipes';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/recipes" component={Recipes} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
