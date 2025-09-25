import { HStack, Text } from '@vapor-ui/core';
import { type FC } from 'react';
import OptionSelector from './OptionSelector';

interface IProps {
  groupName: string;
  values: string[];
  selectedValues?: string[];
  multiple?: boolean;
  onToggle?: (value: string, multiple?: boolean) => void;
}

const OptionGroup: FC<IProps> = ({
  groupName,
  values,
  selectedValues = [],
  multiple = false,
  onToggle,
}) => {
  return (
    <div className="mb-5">
      <Text typography="heading6">{groupName}</Text>
      <HStack gap={'$150'} className="mt-1">
        {values.map((value) => (
          <OptionSelector
            key={value}
            value={value}
            isSelected={selectedValues.includes(value)}
            onClick={() => onToggle?.(value, multiple)}
          />
        ))}
      </HStack>
    </div>
  );
};

export default OptionGroup;
