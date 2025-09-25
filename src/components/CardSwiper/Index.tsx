// DetailModal.tsx
import { type FC, useEffect, useCallback, useState } from 'react';
import DetailCard from '../DetailCard/Index';
import Swiper from './Swiper';
import CloseIcon from '../DetailCard/CloseIcon';
import type { InfoItem } from '../../pages/Home/Home';
import { useDetailModalStore } from '../../store/useDetailModalStore';

interface IProps {
  data: InfoItem[];
  selectedIndex?: number;
}

const DetailModal: FC<IProps> = ({ data, selectedIndex }) => {
  const { isOpen, closeModal } = useDetailModalStore();

  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  const items = data.map((item: InfoItem, idx: number) => {
    return (
      <DetailCard
        key={idx}
        id={item.id}
        title={item.title}
        due_date={item.due_date}
        summary={item.summary}
        url={item.url}
        color={item.detailColor}
        hasHeart={true}
      />
    );
  });

  const handleClose = useCallback(() => {
    setIsAnimating(false);
    // 애니메이션 완료 후 모달 닫기
    setTimeout(() => {
      setShouldRender(false);
      closeModal();
    }, 300); // transition duration과 맞춤
  }, [closeModal]);

  // isOpen 상태 변화 감지하여 애니메이션 상태 관리
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // 다음 프레임에서 애니메이션 시작
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 50); // 50ms로 늘려서 확실히 DOM이 렌더링되도록

      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      // 애니메이션 완료 후 언마운트
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="상세 모달"
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
        isAnimating ? 'bg-black/75 opacity-100' : 'bg-black/0 opacity-0'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-[960px] bg-transparent transition-all duration-300 ease-in-out ${
          isAnimating ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        <CloseIcon
          className="absolute -top-7 right-10 flex items-center justify-center cursor-pointer z-[60]"
          onClick={handleClose}
        />
        <Swiper itemList={items} defaultIdx={selectedIndex} />
      </div>
    </div>
  );
};

export default DetailModal;
