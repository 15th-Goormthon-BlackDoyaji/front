import { Badge, HStack } from '@vapor-ui/core';
import type { FC } from 'react';
import HeartIcon from './HeartIcon';

interface IProps {
  className?: string;
  color?: string;
  due_date?: string;
  hasHeart?: boolean;
  heartFilled?: boolean;
  onHeartChange?: (next: boolean) => void;
}

const BadgeIcon: FC<IProps> = ({
  className,
  color,
  due_date,
  hasHeart = false,
  heartFilled = false,
  onHeartChange,
}) => {
  if (!due_date) {
    return (
      <Badge size="sm" style={{ background: color, color: 'white' }} className={className}>
        마감일 미정
      </Badge>
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0); // 자정으로 맞추기 (시간 차이 방지)

  // 마감일 날짜
  const due = new Date(due_date);
  due.setHours(0, 0, 0, 0);

  // 차이 계산 (일 단위)
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <HStack justifyContent="space-between" width="100%">
      <Badge size="sm" style={{ background: color, color: 'white' }} className={className}>
        마감 {diffDays}일 전
      </Badge>
      {hasHeart && <HeartIcon filled={heartFilled} onChange={onHeartChange} color={color} />}
    </HStack>
  );
};

export default BadgeIcon;
