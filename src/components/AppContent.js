import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Blog from './Blog/Blog';
import Home from './Home/Home';
import Projects from './Projects/Projects';

// import strings from '../localization/game-locale';

import Navigation from './Navigation';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

class AppContent extends Component {
  render() {
    return (
      <Navigation>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </ApolloProvider>
      </Navigation>
    );
  }
}

export default AppContent;
