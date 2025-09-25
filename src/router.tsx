import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import SubscribePage from './pages/Subscribe/Index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/onBoarding',
    element: <SubscribePage />,
  },
]);

export default router;
