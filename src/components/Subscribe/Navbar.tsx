import { VStack } from '@vapor-ui/core';
import BackArrowIcon from './BackArrowIcon';
import FirstStepIcon from './FristStepIcon';
import SecondStepIcon from './SecondStepIcon';

interface IProps {
  step?: number;
  onClick?: () => void;
}
const NavbarComponent = ({ step = 1, onClick }: IProps) => {
  return (
    <VStack marginTop={'12px'} className={'p-3 gap-1'}>
      <BackArrowIcon onClick={() => onClick && onClick()} />
      <div className="flex justify-end">{step === 2 ? <SecondStepIcon /> : <FirstStepIcon />}</div>
    </VStack>
  );
};

export default NavbarComponent;
