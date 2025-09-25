import { VStack } from '@vapor-ui/core';
import TitleIcon from '../../components/Logo/TitleIcon';
import LogoIcon from '../../components/Logo/LogoIcon';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const LogoIntroPage = () => {
  const navigate = useNavigate();
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), 2500);
    const navTimer = setTimeout(() => navigate('/'), 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <VStack
      alignItems="center"
      justifyContent="space-around"
      className={[
        'h-screen w-full bg-white',
        'transition-opacity duration-500 ease-out',
        isFading ? 'opacity-0' : 'opacity-100',
      ].join(' ')}
    >
      <TitleIcon className="mt-30" />
      <LogoIcon />
    </VStack>
  );
};

export default LogoIntroPage;
