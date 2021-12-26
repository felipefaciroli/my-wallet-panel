import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import List from '../pages/List';

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/list/:type" exact component={List} />
    </Switch>
  </Layout>
);

export default AppRoutes;