import React from 'react';
import{gql} from '@apollo/client';

export const DISPLAY_DATA = gql`

query {
    master_categories {
    name
    id
    image
    categories {
      id
      name
      services {
        id
        name
        duration
        rating
        in_clinic
        price
      }
    }
  }}
`;





