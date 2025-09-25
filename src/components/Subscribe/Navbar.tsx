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
    <VStack marginTop={'12px'} className={'p-3 gap-1 h-min'}>
      <BackArrowIcon onClick={onClick} className={step === 2 ? '' : 'invisible'} />
      <div className="flex justify-end">
        {step === 2 ? <SecondStepIcon onClick={onClick} /> : <FirstStepIcon onClick={onClick} />}
      </div>
    </VStack>
  );
};

export default NavbarComponent;
