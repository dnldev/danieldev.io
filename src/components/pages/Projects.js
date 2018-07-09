import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

import { GET_PROJECTS } from '../../data/queries';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

// import strings from '../localization/game-locale';

import Project from './Project';

const styles = () => ({
  root: {},
});

class Projects extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Query query={GET_PROJECTS}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
              <div>
                {data.projects.map(project => (
                  <Grid item key={project.url} xs={12}>
                    <Project
                      description={project.shortDescription}
                      image={'http://danieldev.io/' + project.imageUrl}
                      name={project.title}
                      url={project.url}
                    />
                  </Grid>
                ))}
              </div>
            );
          }}
        </Query>
      </Grid>
    );
  }
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);
