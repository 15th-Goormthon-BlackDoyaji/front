import { VStack } from '@vapor-ui/core';
import SearchHeader from './SearchHeader';
import SearchKeyword from './SearchKeyword';

const Search = () => {
  return (
    <VStack gap="$250">
      <SearchHeader />

      <SearchKeyword />
    </VStack>
  );
};

export default Search;
