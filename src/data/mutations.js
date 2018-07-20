import gql from 'graphql-tag';

const ADD_BLOG_POST = gql`
  mutation(
    $url: String!
    $headline: String!
    $subheader: String!
    $leadingText: String!
    $post: String!
    $date: Date
    $imageUrl: String
  ) {
    addBlogPost(
      blogPost: {
        url: $url
        headline: $headline
        subheader: $subheader
        leadingText: $leadingText
        post: $post
        date: $date
        imageUrl: $imageUrl
      }
    ) {
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

export { ADD_BLOG_POST };
