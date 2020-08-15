import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import MyAblums from './MyAblums';
import Search from './Search';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <MyAblums />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
