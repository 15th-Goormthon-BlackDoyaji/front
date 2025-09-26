import { HStack, VStack, Text } from '@vapor-ui/core';
import { ChevronLeftOutlineIcon } from '@vapor-ui/icons';
import { Link, useLocation, useParams } from 'react-router-dom';
import type { InfoItem } from '../Home/Home';
import SearchResultBox from './SearchResultBox';
import TextInput from '../../components/TextInput';
import notFoundImg from '../../assets/not-found.svg';
import SearchCardModal from './SearchCardModal';

const SearchResult = () => {
  const searchTerm = useParams().searchTerm || '';

  const location = useLocation();

  const infos = location.state?.data || [];

  return (
    <>
      <VStack gap="$250" height="100%">
        <HStack padding="$150" justifyContent="space-between" alignItems="center" gap="$075">
          <Link to="/search">
            <ChevronLeftOutlineIcon size={32} className="text-black" />
          </Link>
          <TextInput
            disabled
            placeholder="교육 프로그램 검색"
            value={searchTerm === 'null' ? '' : searchTerm}
          />
        </HStack>

        <VStack gap="$150" alignItems="center" height="100%" className="px-[20px]">
          {infos.length > 0 ? (
            infos.map((info: InfoItem, idx: number) => <SearchResultBox key={idx} info={info} />)
          ) : (
            <VStack
              gap="$300"
              alignItems="center"
              justifyContent="center"
              className="h-full flex-1"
            >
              <img src={notFoundImg} className="w-[186px]" />
              <Text typography="heading3" className="font-medium">
                찾는 검색 결과가 없어요
              </Text>
            </VStack>
          )}
        </VStack>
      </VStack>
      <SearchCardModal />
    </>
  );
};

export default SearchResult;
