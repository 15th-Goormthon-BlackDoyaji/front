import { Button, HStack, Text, VStack } from '@vapor-ui/core';
import { groupInfosDataRequired } from '../../components/Subscribe/TGroupInfo';
import OptionGroup from '../../components/Subscribe/OptionGroup';
import { useGroupSelections } from '../../components/Subscribe/useGroupSelections';
import { mapSelectionsToServer } from '../../components/Subscribe/InviteEmail';
import { ChevronLeftOutlineIcon } from '@vapor-ui/icons';
import TextInput from '../../components/TextInput';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();

  const { selected, toggle } = useGroupSelections(groupInfosDataRequired);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearch = async () => {
    const mappedSelections = mapSelectionsToServer(selected);

    let query = '';

    Object.entries(mappedSelections).forEach(([key, value]) => {
      if (value !== 'NULL') {
        // null과 undefined 체크
        if (query === '') {
          query += '?';
        } else {
          query += '&';
        }

        if (Array.isArray(value)) {
          // 배열인 경우 각각 추가

          // queryParams.append(key.toLocaleLowerCase(), String(value[0]));
          query += `${key.toLocaleLowerCase()}=${value[0]}`;
        } else {
          // 단일 값인 경우

          query += `${key.toLocaleLowerCase()}=${value}`;
        }
      }
    });

    // 검색어도 추가 (있는 경우)
    if (searchTerm.trim()) {
      if (query === '') {
        query += '?';
      } else {
        query += '&';
      }

      query += `search=${searchTerm.trim()}`;
    }

    try {
      console.log(query);
      const url = `${import.meta.env.VITE_PUBLIC_API_URL}/api/infos${query}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      console.log(data);

      navigate(`/search/result/${searchTerm || 'null'}`, {
        state: { data: data.infos.slice(0, 30) },
      });
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const renderSearchKeywords = () => {
    return (
      <VStack paddingX="$225" gap="$225">
        <Text typography="heading5">검색 추천 키워드</Text>

        {groupInfosDataRequired.map((groupInfo) => (
          <OptionGroup
            key={groupInfo.groupName}
            groupName={groupInfo.groupName}
            values={groupInfo.values}
            multiple={groupInfo.multiple}
            selectedValues={selected[groupInfo.groupName] || []}
            onToggle={(value) => toggle(groupInfo.groupName, value)}
          />
        ))}
      </VStack>
    );
  };

  return (
    <VStack gap="$250" height="100%">
      <HStack padding="$150" justifyContent="space-between" gap="$075">
        <Link to="/home">
          <ChevronLeftOutlineIcon size={32} />
        </Link>
        <TextInput
          placeholder="교육 프로그램을 검색해 주세요."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </HStack>

      {renderSearchKeywords()}

      <div className="flex flex-col flex-1 px-[20px] mb-[40px]">
        <div className="flex-1" />
        <Button size="xl" className="bg-black" onClick={handleSearch}>
          <Text typography="heading5" className="text-white">
            검색
          </Text>
        </Button>
      </div>
    </VStack>
  );
};

export default Search;
