import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Header from '../Components/Header';
import Login from '../Components/Login';
import CreateEdit from '../Components/CreateEdit';
import View from '../Components/View';
import Jokes from '../Components/Jokes';
import Dashboard from '../Components/Dashboard';

function BaseRouter() {
  if (localStorage.getItem('username') == null) {
    return <Login />;
  } else {
    return (
      <HashRouter>
        <Header />
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/editTask' component={CreateEdit} />
        <Route exact path='/viewTasks' component={View} />
        <Route exact path='/jokes' component={Jokes} />
      </HashRouter>
    );
  }
}

export default BaseRouter;
