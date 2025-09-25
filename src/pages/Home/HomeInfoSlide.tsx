import { useEffect, useRef, useState, useCallback } from 'react';
import { VStack } from '@vapor-ui/core';
import HomeInfoCard from '../../components/home/HomeInfoCard';
import './test.css';
import { flushSync } from 'react-dom';
import type { InfoItem } from './Home';

interface HomeInfoSlideProps {
  infos: InfoItem[];
}

const HomeInfoSlide = ({ infos }: HomeInfoSlideProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardOpacities, setCardOpacities] = useState<number[]>([]);
  const [cardWidths, setCardWidths] = useState<number[]>([]);

  const calculateLayout = useCallback(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerHeight = container.clientHeight;
    const scrollTop = container.scrollTop;

    const cardHeight = 112; // HomeInfoCard height including margin

    // 현재 화면에 보이는 영역의 카드 인덱스 범위 계산
    const viewportTop = scrollTop;
    const viewportBottom = scrollTop + containerHeight;

    const opacities: number[] = [];
    const widths: number[] = [];

    infos.forEach((_, index) => {
      const cardTop = index * cardHeight;
      const cardBottom = cardTop + cardHeight;

      // 카드가 화면에 조금이라도 보이면 표시
      const isVisible = cardBottom > viewportTop && cardTop < viewportBottom;

      if (isVisible) {
        // 화면 위쪽 기준으로 위치 계산 (0 = 가장 위, 1 = 가장 아래)
        const cardCenter = cardTop + cardHeight / 2;
        const positionFromTop = Math.max(
          0,
          Math.min(1, (cardCenter - viewportTop) / containerHeight)
        );

        // 가장 아래는 100%, 위로 갈수록 70%까지 작아짐
        const width = 70 + 30 * positionFromTop;

        opacities[index] = 1;
        widths[index] = width;
      } else {
        opacities[index] = 0;

        // 화면 기준 위치에 따라 초기 너비 설정
        const cardCenter = cardTop + cardHeight / 2;

        if (cardCenter < viewportTop) {
          // 화면 위쪽에 사라져있는 카드는 가장 작은 너비
          widths[index] = 70;
        } else {
          // 화면 아래쪽에 사라져있는 카드는 가장 큰 너비
          widths[index] = 100;
        }
      }
    });

    setCardOpacities(opacities);
    setCardWidths(widths);
  }, [infos]);

  useEffect(() => {
    calculateLayout();
  }, [calculateLayout]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
      setTimeout(calculateLayout, 100);
    }
  }, [infos, calculateLayout]);

  const handleScroll = useCallback(() => {
    flushSync(() => calculateLayout());
    // calculateLayout();
  }, [calculateLayout]);

  return (
    <VStack
      ref={containerRef}
      className="h-[560px] overflow-y-auto"
      onScroll={handleScroll}
      style={{
        scrollbarWidth: 'none',
      }}
    >
      {infos.map((info, index) => {
        return (
          <div
            key={index}
            className="flex justify-center"
            style={{
              opacity: cardOpacities[index] ?? 0,
              transition: 'opacity 0.3s ease-in-out, width 0.3s ease-in-out',
            }}
          >
            <div
              className="card"
              style={{
                // '--width': `${cardWidths[index] ?? 100}%`,
                width: `${cardWidths[index] ?? 100}%`,
                transition: 'width 0.3s ease-in-out',
              }}
            >
              <HomeInfoCard index={index} card={info} />
            </div>
          </div>
        );
      })}
    </VStack>
  );
};

export default HomeInfoSlide;
