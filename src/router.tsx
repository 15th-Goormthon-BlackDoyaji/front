import { createBrowserRouter } from 'react-router-dom';
import SubscribePage from './pages/Subscribe/Index';
import Search from './pages/search/Search';
import SearchResult from './pages/search/SearchResult';
import HomeRedirect from './pages/Home/HomeRedirect';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/search/result/:searchTerm',
    element: <SearchResult />,
  },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/subscription',
    element: <SubscribePage />,
  },
  {
    path: '/home',
    element: <HomeRedirect />,
  },
  {
    path: '/',
    element: <App />,
  },
]);

export default router;
