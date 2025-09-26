import { HStack } from '@vapor-ui/core';
import { CreditCardOutlineIcon, SearchOutlineIcon } from '@vapor-ui/icons';
import { useNavigate } from 'react-router-dom';

const HomeHeader = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  return (
    <HStack
      justifyContent="space-between"
      gap="$200"
      alignItems="center"
      padding="$150 $200"
      margin="$100"
    >
      <div>
        <SearchOutlineIcon
          size="28px"
          onClick={() => navigate('/search')}
          className="text-v-gray-500"
        />
      </div>
      {!userId && (
        <div>
          <CreditCardOutlineIcon
            size="28px"
            onClick={() => navigate('/subscription')}
            className="text-v-gray-500"
          />
        </div>
      )}
    </HStack>
  );
};

export default HomeHeader;
