import gql from 'graphql-tag';

const GET_BLOG_POSTS = gql`
  query {
    blogPosts {
      url
      title
      date
      post
    }
  }
`;

const GET_PROJECTS = gql`
  query {
    projects {
      url
      title
      shortDescription
      imageUrl
      githubUrl
    }
  }
`;

export { GET_BLOG_POSTS, GET_PROJECTS };
