import React from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstPage from './firstPage/FirstPage';
import Categorie from './secondPage/SecondPage';

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/categorie:myKey" component={Categorie} />
      </Switch>
    </main>
  );
}

export default Main;
