import type { InfoItem } from '../Home/Home';
import { LinkOutlineIcon } from '@vapor-ui/icons';
import BadgeIcon from '../../components/DetailCard/Badge';
import { useSearchCardModalStore } from '../../store/useSearchCardModalStore';

interface SearchResultBoxProps {
  info: InfoItem;
}

const SearchResultBox = ({ info }: SearchResultBoxProps) => {
  const { openModal } = useSearchCardModalStore();

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (info.url) {
      window.open(info.url, '_blank');
    }
  };

  return (
    <div
      className="bg-white box-border flex flex-col gap-[10px] items-start p-[20px] rounded-[20px] w-full cursor-pointer hover:shadow-sm transition-shadow"
      onClick={() => openModal(info)}
    >
      {/* Top row with badge and link icon */}
      <div className="flex items-center justify-between w-full">
        <BadgeIcon
          due_date={info.due_date}
          color="#ff7e35"
          className="text-[12px] leading-[18px]"
        />
        <button
          onClick={handleLinkClick}
          className="bg-white border border-[#c6c6c6] border-solid rounded-[20px] p-[4px] flex justify-center items-center hover:bg-gray-50 transition-colors"
          aria-label="링크 열기"
        >
          <LinkOutlineIcon size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Title */}
      <div className="font-['Pretendard'] font-medium text-[16px] text-black tracking-[-0.1px] leading-[24px] w-full h-[52px]">
        {info.title}
      </div>
    </div>
  );
};

export default SearchResultBox;
