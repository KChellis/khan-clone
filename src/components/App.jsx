import React from 'react';
import Header from './Header';
import MainPage from './MainPage';
import EarlyMath from './EarlyMath';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/earlyMath' component={EarlyMath} />
      </Switch>
    </div>
  );
}

export default App;
