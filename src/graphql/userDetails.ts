export const GET_USER_QUERY = `
query {
  users {
    data {
      id
      name
      username
      address {
        street
        city
        zipcode
      }
      phone
      website
      email
    }
  }
}
`;
