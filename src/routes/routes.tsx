import Home from '@components/pages/home';
import { CustomRouteObj } from '../routes/type';

export const routes: CustomRouteObj[] = [
  /** root */
  {
    idx: 0,
    path: '/',
    element: <Home />,
  },
  {
    idx: 4,
    path: '*',
    element: <>Not found</>,
  },
];
