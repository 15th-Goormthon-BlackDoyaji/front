import { type FC } from 'react';
import { Text } from '@vapor-ui/core';
interface IProps {
  value: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const OptionSelector: FC<IProps> = ({ value, isSelected = false, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-3 py-2 rounded-full transition-colors
    ${isSelected ? 'bg-black' : 'bg-white border border-gray-300'}`}
    >
      <Text
        typography="heading6"
        className={`whitespace-nowrap ${isSelected ? 'text-white' : 'text-black'}`}
      >
        {value}
      </Text>
    </div>
  );
};

export default OptionSelector;
