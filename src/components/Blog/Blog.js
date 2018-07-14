import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

import { GET_BLOG_POST_INFO } from '../../data/queries';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

// import strings from '../localization/game-locale';

import BlogEntryPreview from './BlogEntryPreview';

const styles = () => ({
  root: {},
});

class Blog extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.root}>
        <Query query={GET_BLOG_POST_INFO}>
          {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
              <div>
                {data.blogPosts.map(blogPost => (
                  <Grid item key={blogPost.url} xs={12}>
                    <BlogEntryPreview {...blogPost} />
                  </Grid>
                ))}
                {data.blogPosts.map(blogPost => (
                  <Grid item key={blogPost.url} xs={12}>
                    <BlogEntryPreview {...blogPost} />
                  </Grid>
                ))}
                {data.blogPosts.map(blogPost => (
                  <Grid item key={blogPost.url} xs={12}>
                    <BlogEntryPreview {...blogPost} />
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

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
