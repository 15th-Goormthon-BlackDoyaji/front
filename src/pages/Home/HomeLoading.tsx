import { Text, VStack } from '@vapor-ui/core';
import Marquee from 'react-fast-marquee';
import icon1 from '../../assets/icon1.svg';
import icon2 from '../../assets/icon2.svg';
import icon3 from '../../assets/icon3.svg';
import icon4 from '../../assets/icon4.svg';
import icon5 from '../../assets/icon5.svg';

const MARQUEE_SPEED = 50;

const MARQUEE_LIST_TOP = [
  { key: 'icon-1', component: <img src={icon1} /> },
  { key: 'icon-2', component: <img src={icon2} /> },
  { key: 'icon-3', component: <img src={icon3} /> },
  { key: 'icon-4', component: <img src={icon4} /> },
  { key: 'icon-5', component: <img src={icon5} /> },
];

const MARQUEE_LIST_BOTTOM = [
  { key: 'icon-5', component: <img src={icon5} /> },
  { key: 'icon-1', component: <img src={icon1} /> },
  { key: 'icon-3', component: <img src={icon3} /> },
  { key: 'icon-4', component: <img src={icon4} /> },
  { key: 'icon-2', component: <img src={icon2} /> },
];

const HomeLoading = () => {
  const renderMarquee = () => {
    return (
      <VStack gap="$600">
        <Marquee autoFill speed={MARQUEE_SPEED}>
          {MARQUEE_LIST_TOP.map(({ component }, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-[120px] h-[120px] rounded-[100%] p-[8px] bg-white mx-[12px]"
            >
              {component}
            </div>
          ))}
        </Marquee>
        <Marquee autoFill speed={MARQUEE_SPEED} direction="right">
          {MARQUEE_LIST_BOTTOM.map(({ component }, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-[120px] h-[120px] rounded-[100%] p-[8px] bg-white mx-[12px]"
            >
              {component}
            </div>
          ))}
        </Marquee>
      </VStack>
    );
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-[60px]">
      {renderMarquee()}
      <Text typography="heading3" className="text-center">
        AI가 관심사와 딱 맞는
        <br />
        뉴스레터를 모으고 있어요
      </Text>
    </div>
  );
};

export default HomeLoading;
