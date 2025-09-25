import { Button, HStack } from '@vapor-ui/core';
import { SearchOutlineIcon, SettingOutlineIcon } from '@vapor-ui/icons';

const HomeHeader = () => {
  return (
    <HStack justifyContent="space-between" padding="$150 $250">
      <Button variant="ghost">
        <SearchOutlineIcon size={32} className="text-black" />
      </Button>
      <Button variant="ghost">
        <SettingOutlineIcon size={32} className="text-black" />
      </Button>
    </HStack>
  );
};

export default HomeHeader;
