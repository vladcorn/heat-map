import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { useTheme } from '@material-ui/core';

import '@root/scss/dev.fonts.scss';
import '@root/scss/main.scss';
import { Header } from '@components/organisms/header';

export type AppProps = RouteConfigComponentProps;

const App = ({ route }: AppProps) => {
  console.log('___THEME___', useTheme());

  return (
    <>
      <Header />
      <main>{renderRoutes(route.routes)}</main>
    </>
  );
};

export default App;
