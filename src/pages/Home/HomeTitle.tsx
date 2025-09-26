import { Text, Badge, VStack } from '@vapor-ui/core';

const HomeTitle = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const seoulTime = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const year = seoulTime.getFullYear();
    const month = String(seoulTime.getMonth() + 1).padStart(2, '0');
    const day = String(seoulTime.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <VStack gap="$150" justifyContent="center" alignItems="center" className="min-h-[180px] flex-1">
      <Badge color="warning" size="lg">
        {getCurrentDate()}
      </Badge>

      <Text typography="heading2" className="text-center">
        제주 교육 뉴스레터를
        <br />
        확인해보세요
      </Text>
    </VStack>
  );
};

export default HomeTitle;
