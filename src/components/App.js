import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import MyAblums from './MyAblums';
import Search from './Search';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <Header />
      <div className={styles.container}>
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
