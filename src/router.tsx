import { createBrowserRouter } from 'react-router-dom';
import Search from './pages/search/Search';
import HomeRedirect from './pages/Home/HomeRedirect';
import SearchResult from './pages/search/SearchResult';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeRedirect />,
  },
  {
    path: '/search/result/:searchTerm',
    element: <SearchResult />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

export default router;
