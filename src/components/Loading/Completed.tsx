import { Button, Text, VStack } from '@vapor-ui/core';
import { useNavigate } from 'react-router-dom';

const CompletedComponent = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/home');
  };

  return (
    <VStack gap="$200" justifyContent="center" alignItems="center" height="100%">
      <div className="flex flex-col items-center justify-center flex-1 h-full">
        <Text typography="heading2" className="text-center">
          구독하기를 완료했습니다!
          <br />
          맞춤형 뉴스레터를 확인해보세요.
        </Text>
      </div>
      <div className="flex flex-col px-[20px] mb-[40px] w-full">
        <div className="flex-1" />
        <Button size="xl" className="bg-black w-full" onClick={handleSearch}>
          <Text typography="heading5" className="text-white">
            뉴스레터 보러가기
          </Text>
        </Button>
      </div>
    </VStack>
  );
};

export default CompletedComponent;
