import { Button, VStack } from '@vapor-ui/core';
import TitleIcon from '../../components/Logo/TitleIcon';
import LogoIcon from '../../components/Logo/LogoIcon';
import SubTitleIcon from '../../components/Logo/SubTitleIcon';
import { useNavigate } from 'react-router-dom';

const LogoIntroPage = () => {
  const navigate = useNavigate();
  const handleSubscribe = () => {
    navigate('/');
  };

  return (
    <VStack>
      <div>
        <SubTitleIcon />
        <TitleIcon />
      </div>
      <LogoIcon />
      <Button size="lg" onClick={handleSubscribe}>
        시작하기
      </Button>
    </VStack>
  );
};

export default LogoIntroPage;
