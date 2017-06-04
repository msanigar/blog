import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'normalize.css';
import styles from './App.css';

import Header from './components/Header/Header';
import Post from './components/Post/Post';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';

const App = () => (
  <Router>
    <div>
      <Header />
      <div className={styles.container}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/post" component={Post} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;
