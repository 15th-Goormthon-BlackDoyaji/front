import { Badge } from '@vapor-ui/core';
import type { FC } from 'react';

interface IProps {
  className?: string;
  color?: string;
  due_date?: string;
}

const BadgeIcon: FC<IProps> = ({ className, color, due_date }) => {
  if (!due_date) {
    return (
      <Badge size="sm" style={{ background: color, color: 'white' }} className={className}>
        마감일 미정
      </Badge>
    );
  }
  color = color || '#FF7E35';

  const today = new Date();
  today.setHours(0, 0, 0, 0); // 자정으로 맞추기 (시간 차이 방지)

  // 마감일 날짜
  const due = new Date(due_date);
  due.setHours(0, 0, 0, 0);

  // 차이 계산 (일 단위)
  const diffTime = due.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <Badge size="sm" style={{ background: color, color: 'white' }} className={className}>
      마감 {diffDays}일 전
    </Badge>
  );
};

export default BadgeIcon;
