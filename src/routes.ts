import React from 'react';
import App from '@root/app';
import { Home } from '@pages/Home';

const routes = [
  {
    component: App,
    routes: [{ path: '/', exact: true, component: Home }],
  },
];

export default routes;
