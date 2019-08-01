import gql from 'graphql-tag';

export const GET_RESTAURANTS = gql`
  query getRestaurants {
    getRestaurants {
      id
      name
      description
      rate
      roles
    }
  }
`;
