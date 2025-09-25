import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/loading.json';
import { Text } from '@vapor-ui/core';

const HomeLoading = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-8">
      <Lottie animationData={loadingAnimation} />
      <Text typography="heading3" className="text-center">
        AI가 관심사와 딱 맞는
        <br />
        뉴스레터를 모으고 있어요
      </Text>
    </div>
  );
};

export default HomeLoading;
