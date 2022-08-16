import { Box } from '@chakra-ui/react';
import NavBar from 'components/NavBar';
import { lazy, useState } from 'react';
const IndexPage = lazy(() => import('pages/Index'));
const AddUserPage = lazy(() => import('pages/AddUserPage'));
const Page404 = lazy(() => import('pages/Page404'));

export const routes = [
  {
    path: '/',
    element: <IndexPage />,
  },

  {
    path: '/add-users',
    element: <AddUserPage />,
  },
  {
    path: '/404-page',
    element: <Page404 />,
  },
];
export default routes;
