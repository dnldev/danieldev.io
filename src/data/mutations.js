import gql from 'graphql-tag';

const ADD_POST = gql`
  mutation {
    addPost(post: { url: $url, title: $title, date: $date, post: $post }) {
      url
      title
      date
      post
    }
  }
`;

export { ADD_POST };
