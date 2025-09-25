import { type FC, type ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';

// Swiper 스타일 import
// @ts-ignore: swiper css 모듈 타입 선언 없음
import 'swiper/css';
// @ts-ignore: swiper pagination css 모듈 타입 선언 없음
import 'swiper/css/pagination';
import './Swiper.css';

interface IProps {
  itemList: ReactElement[];
  defaultIdx?: number;
  onSlideChange?: (activeIndex: number) => void;
}

const SwiperComponent: FC<IProps> = ({ itemList, defaultIdx, onSlideChange }) => {
  return (
    <div
      style={{
        width: '100%',
        position: 'relative',
        minHeight: 'fit-content',
        overflow: 'visible', // 컨테이너도 overflow visible
      }}
    >
      <Swiper
        initialSlide={defaultIdx}
        loop={true}
        slidesPerView="auto"
        spaceBetween={20}
        modules={[Pagination]}
        centeredSlides={true} // 현재 슬라이드 가운데 정렬
        centeredSlidesBounds={true}
        pagination={{
          clickable: true,
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        onSlideChange={(swiper: SwiperInstance) => {
          onSlideChange?.(swiper.activeIndex);
        }}
        style={{
          paddingBottom: '50px',
          height: 'auto',
          overflow: 'visible',
          width: '100%',
        }}
      >
        {itemList.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="!w-auto flex h-auto items-start justify-center opacity-100"
          >
            <div className="w-full max-w-[293px] transform scale-100 transition-transform duration-300 ease-in-out">
              {item}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
