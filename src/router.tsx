import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Ranking from './pages/Ranking';
import Battle from './pages/Battle';
import Description from './pages/Description';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/ranking',
        element: <Ranking />,
      },
      {
        path: '/battle',
        element: <Battle />,
      },
      {
        path: '/description',
        element: <Description />,
      },
    ],
  },
]);

export default router;