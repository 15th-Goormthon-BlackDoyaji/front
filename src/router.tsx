import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';
import SubscribePage from './pages/Subscribe/Index';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/on" element={<SubscribePage />} />

      <Route path="/about" element={<About />} />
    </>
  )
);
