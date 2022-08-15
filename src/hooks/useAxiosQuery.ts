import { useQuery } from 'react-query';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { fetchedData, GRAPHQL_API } from 'constant';
import { GET_USER_QUERY } from 'graphql/userdetails';

type userArray = fetchedData[];
type fetchProps = {
  onSuccess: () => void;
  onError: () => void;
};

const fetchUsersData = () => {
  return axios.post(GRAPHQL_API, {
    query: GET_USER_QUERY,
  });
};

export const useAxiosQuery = ({ onSuccess, onError }: fetchProps) => {
  return useQuery<any, AxiosError>('users', fetchUsersData, {
    onSuccess,
    onError,
    select: (data: AxiosResponse) => {
      const requiredUsersData: userArray = data.data.data.users.data;
      return requiredUsersData;
    },
  });
};
