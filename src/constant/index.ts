export const GRAPHQL_API = 'https://graphqlzero.almansi.me/api';

export type fetchedData = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
  address: { street: string; city: string; zipcode: number };
};

export interface inputItemProps {
  inputValue: string;
  setInputValue: (active: string) => void;
}

