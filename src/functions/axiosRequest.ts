import axios from 'axios';
import { GRAPHQL_API } from 'constant';

const client = axios.create({
  baseURL: GRAPHQL_API,
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.authorization = `Bearer Token`;
  const onSuccess = (response: any) => {
    response;
  };
  const onError = (error: any) => {
    return error;
  };
  return client.(options).then(onSuccess).catch(onError);


};
