import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { useTheme } from '@material-ui/core';

import '@root/scss/dev.fonts.scss';
import '@root/scss/main.scss';

export type AppProps = RouteConfigComponentProps;

const App = ({ route }: AppProps) => {
  console.log('___THEME___', useTheme());

  return <>{renderRoutes(route.routes)}</>;
};

export default App;
