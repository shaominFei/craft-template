// TODO, come back to update the code

import { Dashboard } from '@/pages/dashboard';
import { Home } from '@/pages/Home';
import { Navigate } from 'react-router';

export const routerConfig = {
  home: {
    path: '/home',
    element: <Home />,
  },

  dashboard: {
    path: '/dashboard',
    element: <Dashboard />,
  },
  //  no match could go back to home page
  noMatch: {
    path: '*',
    element: <Navigate to="/home" />,
  },
};
