import { HStack } from '@vapor-ui/core';
import { ChevronLeftOutlineIcon } from '@vapor-ui/icons';
import TextInput from '../../components/TextInput';

const SearchHeader = () => {
  return (
    <HStack padding="$150" justifyContent="space-between" gap="$075">
      <ChevronLeftOutlineIcon size={32} />
      <TextInput placeholder="교육 훈련 공고 검색" />
    </HStack>
  );
};

export default SearchHeader;
