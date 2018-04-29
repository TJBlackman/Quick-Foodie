import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from '../containers/Home';
import Add from '../containers/Add';
import Browse from '../containers/Browse';
import RecipeDetails from '../containers/RecipeDetails';

export default () => {
  return (
    <div className="container">
      <Router>
        <div>
          <header>
            <Link to="/" className="d-block text-center">
              <h1 id="logo">Quick Foodie</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/add" component={Add} />
            <Route path="/browse" component={Browse} />
            <Route path="/recipe/:title" component={RecipeDetails} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};
