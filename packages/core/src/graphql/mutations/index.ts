import gql from 'graphql-tag';

export const AUTH_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(authLoginInput: { email: $email, password: $password }) {
      access_token
      id
      firstName
      lastName
      phone
      email
    }
  }
`;
