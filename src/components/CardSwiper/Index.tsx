// DetailModal.tsx
import { type FC, useEffect, useCallback } from 'react';
import DetailCard from '../DetailCard/Index';
import Swiper from './Swiper';
import CloseIcon from '../DetailCard/CloseIcon';
import type { TDetailCard } from '../DetailCard/TDetailCard';

interface IProps {
  data: TDetailCard[];
  selectedIndex?: number;
  isOpen?: boolean;
  onClose?: () => void;
}
const colors_chip = ['#4CAF50', '#FF7E35', '#FFF47F', '#2196F3'];

const DetailModal: FC<IProps> = ({ data, selectedIndex = 0, onClose }) => {
  // data가 없거나 빈 배열이면 null 반환
  if (!data || !data.length) return null;

  const items = data.map((item: TDetailCard, idx: number) => {
    return (
      <DetailCard
        key={idx}
        title={item.title}
        due_date={item.due_date}
        summary={item.summary}
        url={item.url}
        color={item.color ?? colors_chip[Math.floor(Math.random() * colors_chip.length)]}
      />
    );
  });

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  // ESC 닫기
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="상세 모달"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[960px] bg-transparent"
      >
        <CloseIcon
          className="absolute -top-7 right-12 flex items-center justify-center cursor-pointer z-[60]"
          onClick={handleClose}
        />
        <Swiper itemList={items} defaultIdx={selectedIndex} />
      </div>
    </div>
  );
};

export default DetailModal;
