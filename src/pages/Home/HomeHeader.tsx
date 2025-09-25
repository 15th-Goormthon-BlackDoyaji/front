import { HStack } from '@vapor-ui/core';
import SearchIcon from '../../components/home/SearchIcon';
import SubsIcon from '../../components/home/SubsIcon';
import { useNavigate } from 'react-router-dom';

const HomeHeader = () => {
  const navigate = useNavigate();

  return (
    <HStack
      justifyContent="space-between"
      gap="$200"
      alignItems="center"
      padding="$150 $200"
      margin="$100"
    >
      <div>
        <SearchIcon onClick={() => navigate('/')} />
      </div>
      <div>
        <SubsIcon onClick={() => navigate('/subscription')} />
      </div>
    </HStack>
  );
};

export default HomeHeader;
