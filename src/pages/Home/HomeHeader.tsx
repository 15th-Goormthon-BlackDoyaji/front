import { HStack } from '@vapor-ui/core';
import { SearchOutlineIcon } from '@vapor-ui/icons';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <HStack justifyContent="space-between" padding="$150 $250">
      <Link to="/search">
        <SearchOutlineIcon size={32} className="text-black" />
      </Link>
    </HStack>
  );
};

export default HomeHeader;
