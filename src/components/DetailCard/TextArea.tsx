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
      <Text typography="heading5" style={{ color: titleColor }}>
        {title}
      </Text>
      <Text typography="body2" className="line-clamp-4 leading-[1.4] break-keep whitespace-normal">
        {contents.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            {index < contents.split('\n').length - 1 && <br />}
          </span>
        ))}
      </Text>
    </VStack>
  );
};

export default TextArea;
