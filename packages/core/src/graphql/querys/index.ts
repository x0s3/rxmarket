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

export const GET_CHARACTERS = gql`
  query getCharacters{
    characters(page: 2, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        name
        image
        type
      }
    }
    character(id: 1) {
      id
    }
  }
`;
