import React from 'react';
import { Route, Switch } from 'react-router';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register.jsx';
import Add from '../pages/Add.jsx';
import Edit from '../pages/Edit.jsx';

const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/add" component={Add} />
    <Route path="/edit" component={Edit} />
    <Route
      render={() => {
        return (
          <div>
            <h1>404</h1>
            <p>Sorry, page not found</p>
          </div>
        );
      }}
    />
  </Switch>
);

export default routes;
