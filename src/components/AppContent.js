import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

// import strings from '../localization/game-locale';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
  },
});

class GameUI extends Component {
  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              danieldev.io
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container className={classes.root} justify="center">
          <Grid item xs={12}>
            <Typography variant="display3" gutterBottom>
              Business Website
            </Typography>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

GameUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameUI);
