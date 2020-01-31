import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '@root/routes.ts';

require('@root/scss/dev.fonts.scss');
require('@root/scss/main.scss');

render(
  <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
  document.getElementById('root')
);
