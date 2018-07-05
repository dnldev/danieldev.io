import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

// import strings from '../localization/game-locale';

import avaclon from '../images/avaclon.PNG';
import secretPalpatine from '../images/secret_palpatine.PNG';

import Project from './Project';

const styles = () => ({
  root: {},
});

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Project
            description="Server and Client Web App for the beloved boardgame 'The Resistance: Avalon'."
            image={avaclon}
            name="Avaclon"
            theme="light"
          />
          <Project
            description="Web version of the board game Secret Palpatine (originally Secret Hitler)."
            image={secretPalpatine}
            name="Secret Palpatine"
            theme="dark"
          />
        </Grid>
      </Grid>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
