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
  );
};

export default HomeInfoCard;
