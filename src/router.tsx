import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Search from './pages/search/Search';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

export default router;
