import { type FC } from 'react';
import { VStack, Text } from '@vapor-ui/core';

interface IProps {
  title: string;
  contents: string;
  titleColor?: string;
}

const TextArea: FC<IProps> = ({ title, contents, titleColor }) => {
  return (
    <VStack marginBottom="$100">
      <Text
        style={{
          fontSize: 'var(--vapor-typography-fontSize-075)',
          lineHeight: 'var(--vapor-typography-lineHeight-075)',
          letterSpacing: 'var(--vapor-typography-letterSpacing-100)',
          fontWeight: 700,
          color: titleColor,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 'var(--vapor-typography-fontSize-075)',
          lineHeight: 'var(--vapor-typography-lineHeight-075)',
          letterSpacing: 'var(--vapor-typography-letterSpacing-100)',
          fontWeight: 400,
        }}
        className="line-clamp-4 leading-[1.4] break-keep whitespace-normal"
      >
        {contents}
      </Text>
    </VStack>
  );
};

export default TextArea;
