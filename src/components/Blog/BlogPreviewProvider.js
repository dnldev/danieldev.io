import React from 'react';

import { Query } from 'react-apollo';

import { GET_BLOG_POST_INFO } from '../../data/queries';

import Grid from '@material-ui/core/Grid';

// import strings from '../localization/game-locale';

import BlogEntry from './BlogEntry';

const BlogPreviewProvider = () => (
  <Grid container>
    <Query query={GET_BLOG_POST_INFO}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...';
        if (error) return `Error! ${error.message}`;

        return (
          <div>
            {data.blogPosts.map(blogPost => (
              <Grid item key={blogPost.url} xs={12}>
                <BlogEntry {...blogPost} preview />
              </Grid>
            ))}
          </div>
        );
      }}
    </Query>
  </Grid>
);

export default BlogPreviewProvider;
