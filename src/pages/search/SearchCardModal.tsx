// DetailModal.tsx
import { type FC, useEffect, useCallback, useState } from 'react';
import DetailCard from '../../components/DetailCard/Index';
import CloseIcon from '../../components/DetailCard/CloseIcon';
import { useSearchCardModalStore } from '../../store/useSearchCardModalStore';

const SearchCardModal: FC = () => {
  const { isOpen, closeModal, info } = useSearchCardModalStore();

  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

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
        <div className="flex justify-center items-center">
          <div className="relative">
            <CloseIcon
              className="absolute -top-7 right-2 flex items-center justify-center cursor-pointer z-[60]"
              onClick={handleClose}
            />
            <DetailCard
              id={0}
              title={info?.title || ''}
              due_date={info?.due_date || ''}
              summary={info?.summary || ''}
              url={info?.url || ''}
              color="#FF7E35"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardModal;
