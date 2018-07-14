import gql from 'graphql-tag';

const GET_BLOG_POSTS = gql`
  query {
    blogPosts {
      url
      headline
      subheader
      leadingText
      post
      date
      imageUrl
    }
  }
`;

const GET_BLOG_POST_INFO = gql`
  query {
    blogPosts {
      url
      headline
      subheader
      leadingText
      date
      imageUrl
    }
  }
`;

const GET_BLOG_POST = gql`
  query blogPost($url: String!) {
    blogPost(url: $url) {
      url
      headline
      subheader
      leadingText
      post
      date
      imageUrl
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
      # githubUrl
    }
  }
`;

export { GET_BLOG_POSTS, GET_BLOG_POST_INFO, GET_BLOG_POST, GET_PROJECTS };
