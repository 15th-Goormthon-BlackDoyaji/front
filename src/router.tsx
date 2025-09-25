import { createBrowserRouter } from 'react-router-dom';
import Search from './pages/search/Search';
import HomeRedirect from './pages/Home/HomeRedirect';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRedirect />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

export default router;
