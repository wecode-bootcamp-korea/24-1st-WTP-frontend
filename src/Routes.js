import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/Main/Main';
import Contents from './pages/Contents/Contents';
import Profile from './pages/Profile/Profile';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import MoviesCarousel from './pages/Main/MoviesCarousel/MoviesCarousel';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/details:id" component={Contents} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
