import React from 'react';

import { Query } from 'react-apollo';

import { GET_PROJECTS } from '../../data/queries';

import Grid from '@material-ui/core/Grid';

// import strings from '../localization/game-locale';

import Project from './Project';

const ProjectProvider = () => (
  <Grid container>
    <Query query={GET_PROJECTS}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <div>
            {data.projects.map(project => (
              <Grid item key={project.url} xs={12}>
                <Project {...project} />
              </Grid>
            ))}
          </div>
        );
      }}
    </Query>
  </Grid>
);

export default ProjectProvider;
