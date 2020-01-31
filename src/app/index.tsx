import React from 'react';
import { renderRoutes } from 'react-router-config';

if (process.env.BROWSER) {
    require('./index.scss');
}

const App = ({ route }) => {
    return <>{renderRoutes(route.routes)}</>;
};

export default App;
