import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AdminArea from './AdminArea/AdminArea';
import BlogEntryProvider from './Blog/BlogEntryProvider';
import BlogPreviewProvider from './Blog/BlogPreviewProvider';
import Home from './Home/Home';
import ProjectProvider from './Projects/ProjectProvider';

// import strings from '../localization/game-locale';

import Navigation from './Navigation';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql/queries',
});

class AppContent extends Component {
  render() {
    return (
      <Navigation>
        <ApolloProvider client={client}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={AdminArea} />
            <Route exact path="/blog" component={BlogPreviewProvider} />
            <Route path="/blog/:url" component={BlogEntryProvider} />
            <Route path="/projects" component={ProjectProvider} />
          </Switch>
        </ApolloProvider>
      </Navigation>
    );
  }
}

export default AppContent;
