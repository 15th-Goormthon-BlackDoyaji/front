import React, { type FC } from 'react';
import { Text } from '@vapor-ui/core';

interface IProps {
  title: React.ReactNode;
  description: string;
}

const TitleAreaComponent: FC<IProps> = ({ title, description }) => {
  return (
    <>
      <Text typography="heading2" className="my-1">
        {title}
      </Text>
      <Text typography="body2">{description}</Text>
    </>
  );
};

export default TitleAreaComponent;
