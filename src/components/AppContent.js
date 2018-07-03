import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import strings from '../localization/game-locale';

import Navigation from './Navigation';

const styles = () => ({
  grid: {},
});

class AppContent extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Navigation>
        <Grid container className={classes.grid} justify="center">
          <Grid item xs={12}>
            <Typography variant="display3" gutterBottom>
              Business Website
            </Typography>
          </Grid>
        </Grid>
      </Navigation>
    );
  }
}

AppContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContent);
