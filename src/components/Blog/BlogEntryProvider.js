import React from 'react';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';

import { GET_BLOG_POST } from '../../data/queries';

import BlogEntry from './BlogEntry';

// import strings from '../localization/game-locale';

const BlogEntryProvider = props => (
  <Query query={GET_BLOG_POST} variables={{ url: props.match.params.url }}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error.message}`;

      return <BlogEntry {...data.blogPost} />;
    }}
  </Query>
);

BlogEntryProvider.propTypes = {
  match: PropTypes.object.isRequired,
};

export default BlogEntryProvider;
