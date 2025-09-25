import { type FC } from 'react';
import AiIcon from './AiIcon';
import { Box, Button, Text, VStack } from '@vapor-ui/core';
import BadgeIcon from './Badge';
import TextArea from './TextArea';
import type { TDetailCard } from './TDetailCard';


const DetailCard: FC<TDetailCard> = ({ title, url, due_date, summary, color = '#FF7E35' }) => {
  return (
    <VStack
      padding="$250"
      backgroundColor="white"
      gap="$200"
      alignItems="start"
      width="300px"
      borderRadius="$600"
    >
      <VStack gap="$150" alignItems="start">
        <BadgeIcon color={color} due_date={due_date} />
        <Text
          typography="heading5"
          style={{ color: color }}
          className="line-clamp-2 leading-[1.4] break-keep whitespace-normal min-h-[2.8em]"
        >
          {title}
        </Text>
      </VStack>
      <Box
        height="$600"
        padding="$175"
        className="flex h-50 flex-col justify-between"
        style={{ backgroundColor: `${color}1A` }}
      >
        {/* {due_date && <TextArea title="모집 기간" contents={due_date} titleColor={color} />} */}
        {summary && <TextArea title="교육 내용" contents={summary} titleColor={color} />}
        <AiIcon color={color} />
      </Box>
      <Button
        stretch
        style={{ background: color }}
        onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}
      >
        바로가기
      </Button>
    </VStack>
  );
};

export default DetailCard;
