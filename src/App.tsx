import { useEffect } from 'react';
import LogoIntroPage from './pages/Logo/LogoIntro';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  if (!userId) {
    return <LogoIntroPage />;
  }

  useEffect(() => {
    if (userId) {
      navigate('/home');
    }
  });

  return null;
};

export default App;
