// DetailModal.tsx
import { type FC, useEffect, useCallback } from 'react';
import DetailCard from '../DetailCard/Index';
import Swiper from './Swiper';
import CloseIcon from '../DetailCard/CloseIcon';
import type { InfoItem } from '../../pages/Home/Home';

interface IProps {
  data: InfoItem[];
  selectedIndex?: number;
  isOpen?: boolean;
  onClose?: () => void;
}

const DetailModal: FC<IProps> = ({ data, selectedIndex, onClose, isOpen }) => {
  // data가 없거나 빈 배열이면 null 반환
  if (!data || !data.length) return null;

  const items = data.map((item: InfoItem, idx: number) => {
    return (
      <DetailCard
        key={idx}
        id={item.id}
        title={item.title}
        dueDate={item.dueDate}
        summary={item.summary}
        url={item.url}
        color={item.color?.slice(4, 11)}
        badgeColor={item.badgeColor?.slice(4, 11)}
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

  if (!isOpen) return null;

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
