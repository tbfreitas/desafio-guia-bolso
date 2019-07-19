
import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from './pages/Main';

const history = createBrowserHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Main />
      </div>
    </Router>
  );
}

export default AppRouter;
