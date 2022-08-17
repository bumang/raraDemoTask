export const GRAPHQL_API = 'https://graphqlzero.almansi.me/api';


/* api data type for users */
export type fetchedData = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: number;
  website: string;
  address: { street: string; city: string; zipcode: number };
};

/* the search controlled input type */
export interface inputItemProps {
  inputValue: string;
  setInputValue: (active: string) => void;
}

/* button props type */
export interface buttonProps {
  colorScheme: string;
  size: string;
  color: string;
  backgroundColor: string;
  text: string;
}
/* spinner props */
export interface ISpinnerProps {
  thickness: string;
  speed: string;
  emptycolor: string;
  color: string;
  size: string;
}
/* spinner default value */
export const spinnerProps: ISpinnerProps = {
  thickness: '4px',
  speed: '0.65s',
  emptycolor: 'gray.200',
  color: 'blue.500',
  size: 'xl',
};

/* TableRow body data type */

export interface rowBodyProps {
  user:fetchedData ,
  isChecked:boolean,
  handleCheckItemsBody:(userId: string, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/* tableRow head data type */

export interface rowHeadProps {
  isIndeterminate:boolean;
  isChecked: boolean;
  handleCheckItemsHead: (e: React.ChangeEvent<HTMLInputElement> )=> void
}
