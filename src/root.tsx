import React from 'react';
import { ThemeProvider } from 'styled-components';

import { MuiThemeProvider } from '@material-ui/core/styles';

import { applyMiddleware, createStore } from 'redux';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { theme } from '@root/theme';

import routes from '@root/routes.tsx';

import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@root/rootReducer';

require('@root/scss/dev.fonts.scss');
require('@root/scss/main.scss');

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
);

export const Root = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
        </Provider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
