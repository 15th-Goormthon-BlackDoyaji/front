import { VStack } from '@vapor-ui/core';
import BackArrowIcon from './BackArrowIcon';
import FirstStepIcon from './FristStepIcon';
import SecondStepIcon from './SecondStepIcon';

interface IProps {
  step?: number;
  beforeOnClick?: () => void;
  nextOnClick?: () => void;
}
const NavbarComponent = ({ step = 1, beforeOnClick, nextOnClick }: IProps) => {
  return (
    <VStack marginTop={'12px'} className={'p-3 gap-1 h-min'}>
      <BackArrowIcon onClick={beforeOnClick} />
      <div className="flex justify-end">
        {step === 2 ? (
          <SecondStepIcon onClick={beforeOnClick} />
        ) : (
          <FirstStepIcon onClick={nextOnClick} />
        )}
      </div>
    </VStack>
  );
};

export default NavbarComponent;
