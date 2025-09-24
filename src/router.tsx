import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './pages/App';
import About from './pages/About';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </>
  )
);
