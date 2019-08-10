import gql from 'graphql-tag';

export const SUBSCRIBE_TO_DELIVERIES = gql`
  subscription getLiveDeliveries($repoFullName: String!) {
    getLiveDeliveries() {
      deliveries
    }
  }
`;
