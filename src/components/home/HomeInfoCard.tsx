import { Badge, Box, Text } from '@vapor-ui/core';
import clsx from 'clsx';
import { useDetailModalStore } from '../../store/useDetailModalStore';
import type { InfoItem } from '../../pages/Home/Home';

interface HomeInfoCardProps {
  card: InfoItem;
  index: number;
  className?: string;
}

const HomeInfoCard = ({ card, index, className }: HomeInfoCardProps) => {
  const { openModal } = useDetailModalStore();
  return (
    <Box
      padding="$250"
      display="flex"
      flexDirection="column"
      borderRadius="$600 $600 0 0"
      className={clsx('p-5 gap-1.5 h-[120px] -mt-[8px]', card.color, className)}
      style={{
        width: '100%',
        zIndex: index,
      }}
      onClick={() => openModal(index)}
    >
      <div>
        <Badge className={`rounded-[8px] ${card.badgeColor}`}>
          <Text typography="subtitle2" className="text-white">
            {card.deadline}
          </Text>
        </Badge>
      </div>

      <Text typography="heading5">{card.title}</Text>
    </Box>
    // <div
    //   className={clsx(card.color, 'p-4 rounded-t-2xl shadow-md', className)}
    //   style={{
    //     order: index,
    //     // width: index === 0 ? '240px' : index === 1 ? '270px' : index === 2 ? '301.5px' : '335px',
    //     width: '100%',
    //   }}
    // >
    //   <div className="flex flex-col gap-1">
    //     <Badge className={`${card.badgeColor} px-2 py-1 rounded-lg inline-block w-fit`} size="sm">
    //       <Text className="text-white text-xs font-medium">{card.deadline}</Text>
    //     </Badge>
    //     <Text
    //       className="text-black font-bold text-lg leading-6 tracking-[-0.1px] whitespace-pre-line"
    //       typography="heading5"
    //     >
    //       {card.title}
    //     </Text>
    //   </div>
    // </div>
  );
};

export default HomeInfoCard;
