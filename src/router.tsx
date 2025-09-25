import { createBrowserRouter } from 'react-router-dom';
import SubscribePage from './pages/Subscribe/Index';
import LogoIntroPage from './pages/Logo/LogoIntro';
import Search from './pages/search/Search';
import HomeRedirect from './pages/Home/HomeRedirect';
import SearchResult from './pages/search/SearchResult';

const router = createBrowserRouter([
  {
    path: '/intro',
    element: <LogoIntroPage />,
  },
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
    path: '/',
    element: <HomeRedirect />,
  },
]);

export default router;
