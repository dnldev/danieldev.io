import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';

// import strings from '../localization/game-locale';

import Navigation from './Navigation';

class AppContent extends Component {
  render() {
    return (
      <Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </Navigation>
    );
  }
}

export default AppContent;
