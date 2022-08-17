import { fetchedData } from 'constant';

export const searchItems = (users: fetchedData[], searchValue: string) => {
  return (
    users &&
    users.filter((user: any) => {
      return (
        user.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.website.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.address.street.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.address.city.toLowerCase().includes(searchValue.toLowerCase()) ||
        user.address.zipcode.toLowerCase().includes(searchValue.toLowerCase())
      );
    })
  );
};
