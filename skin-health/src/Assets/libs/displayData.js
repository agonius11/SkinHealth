import React from 'react';
import{gql, useMutation} from '@apollo/client';

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


export const NEW_SERVICE = gql`
  mutation NewService($category_id: uuid!, $name: String!, $in_clinic: Boolean, $price: float8, $rating: Int, $duration: Int) {
  insert_services_one(object: {category_id: $category_id, name: $name, in_clinic: $in_clinic, price: $price, rating: $rating, duration: $duration}) {
    category_id
    duration
    in_clinic
    name
    rating
    price
  }
}
`





