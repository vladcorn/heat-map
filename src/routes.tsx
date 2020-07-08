import React from 'react';
import App from '@root/app';
import { Redirect } from 'react-router-dom';
import { Home } from '@pages/Home';
import { HeatMap } from '@pages/Heatmap';
import { Stats } from '@pages/Stats';
import { SingleStat } from '@pages/SingleStat';
import { NotFound } from '@pages/404';
import { CreateTraining } from '@pages/CreateTraining';

const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Home },
      { path: '/heat-map', exact: true, component: HeatMap },
      { path: '/create-training', exact: true, component: CreateTraining },
      {
        path: '/stats',
        component: Stats,
        routes: [{ path: '/stats/:id', exact: true, component: SingleStat }],
      },
      { path: '/404', exact: true, component: NotFound },
      {
        path: '*',
        render: () => <Redirect to='/404' />,
      },
    ],
  },
];

export default routes;
