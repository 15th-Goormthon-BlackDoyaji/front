import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import SubscribePage from './pages/Subscribe/Index';
import LogoIntroPage from './pages/Logo/LogoIntro';

const router = createBrowserRouter([
  {
    path: '/intro',
    element: <LogoIntroPage />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/search',
    element: <Home />,
  },
  {
    path: '/subscription',
    element: <SubscribePage />,
  },
]);

export default router;
