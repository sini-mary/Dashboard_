
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../app/Components/HomePage';
import Sidebar from '@/app/Components/Sidebar';
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Sidebar} />
    </Switch>
  );
};

export default Routes;
