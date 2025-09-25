import { VStack, Badge } from '@vapor-ui/core';

interface KeywordCategory {
  title: string;
  keywords: string[];
}

const keywordCategories: KeywordCategory[] = [
  {
    title: '지역',
    keywords: ['제주', '서귀포'],
  },
  {
    title: '학력',
    keywords: ['대학생', '졸업생'],
  },
  {
    title: '거주',
    keywords: ['제주도민', '이주민'],
  },
  {
    title: '관심사',
    keywords: ['취업/일자리', '자격증', '지원금'],
  },
];

const SearchKeyword = () => {
  return (
    <VStack padding="$250" gap="$225">
      <div className="flex gap-[10px] items-center justify-center">
        <h1 className="font-['Pretendard'] font-bold text-[16px] text-black tracking-[-0.1px] leading-[24px]">
          <Text>검색 추천 키워드</Text>
        </h1>
      </div>

      <div className="flex flex-col gap-[14px] w-full">
        {keywordCategories.map((category) => (
          <div key={category.title} className="flex flex-col gap-[8px] w-full">
            <div className="font-['Pretendard'] font-medium text-[14px] text-black tracking-[-0.1px] leading-[22px]">
              {category.title}
            </div>
            <div className="flex gap-[8px] items-center flex-wrap">
              {category.keywords.map((keyword) => (
                <Badge
                  key={keyword}
                  variant="outline"
                  className="h-[32px] px-[12px] rounded-[999px] border-[#c6c6c6] bg-white"
                >
                  <span className="font-['Pretendard'] font-medium text-[14px] text-[#4c4c4c] tracking-[-0.1px] leading-[22px]">
                    {keyword}
                  </span>
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </VStack>
  );
};

export default SearchKeyword;
