import { lazy, useState } from 'react';
const IndexPage = lazy(() => import('pages/index'));
const AddUserPage = lazy(() => import('pages/AddUserPage'));
const Page404 = lazy(() => import('pages/ErrorPage'));

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
