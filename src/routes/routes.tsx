import ArticlePage from '@components/pages/article';
import Article2 from '@components/pages/article2';
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
    idx: 1,
    path: '/article',
    element: <ArticlePage />,
  },
  {
    idx: 1,
    path: '/article2',
    element: <Article2 />,
  },
  {
    idx: 4,
    path: '*',
    element: <>Not found</>,
  },
];
