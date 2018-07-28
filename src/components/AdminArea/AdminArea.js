import React, { Component } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import ApolloClient from 'apollo-boost';
import { ApolloProvider, Mutation } from 'react-apollo';

import { ADD_BLOG_POST } from '../../data/mutations';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import SendIcon from '@material-ui/icons/Send';

import NewEntry from './NewEntry';

// import strings from '../localization/game-locale';

const styles = () => ({
  root: {},
  textField: {
    width: '100%',
  },
});

class AdminArea extends Component {
  state = {
    password: '',
    loggedIn: false,
  };

  authenticate = () => {
    axios
      .post('http://localhost:4000/auth', { password: this.state.password })
      .then(res => {
        const authenticationToken = res.data.token;
        this.client = new ApolloClient({
          uri: 'http://localhost:4000/graphql/mutations',
          headers: { token: authenticationToken },
        });
        this.setState({ loggedIn: true });
      })
      .catch(err => console.log(err));
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  loggedOut = () => this.setState({ loggedIn: false });

  render() {
    const { classes } = this.props;

    const login = (
      <React.Fragment>
        <TextField
          className={classes.textField}
          autoComplete="current-password"
          label="Secret Key"
          margin="normal"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <Button variant="contained" color="primary" onClick={this.authenticate}>
          Submit
          <SendIcon className={classes.sendIcon} />
        </Button>
      </React.Fragment>
    );

    return (
      <div className={classes.root}>
        {!this.state.loggedIn ? (
          login
        ) : (
          <ApolloProvider client={this.client}>
            <Mutation mutation={ADD_BLOG_POST}>
              {addBlogPost => (
                <NewEntry
                  addBlogPost={addBlogPost}
                  loggedOut={this.loggedOut}
                />
              )}
            </Mutation>
          </ApolloProvider>
        )}
      </div>
    );
  }
}

AdminArea.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdminArea);
