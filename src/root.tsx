import React from 'react';
import { ThemeProvider } from 'styled-components';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { theme } from '@root/theme';

import routes from '@root/routes.tsx';

require('@root/scss/dev.fonts.scss');
require('@root/scss/main.scss');

export const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
