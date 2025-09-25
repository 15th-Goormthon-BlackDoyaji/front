import { useState, type FC } from 'react';
import InterestSelectComponent from '../../components/Subscribe/InterestSelect';
import InviteEmailComponent from '../../components/Subscribe/InviteEmail';
import { groupInfosData } from '../../components/Subscribe/TGroupInfo';
import CompletedComponent from '../../components/Loading/Completed';
import { useGroupSelections } from '../../components/Subscribe/useGroupSelections';

type Step = 'select' | 'email' | 'completed';
const SubscribePage: FC = () => {
  const [step, setStep] = useState<Step>('select');
  const { selected, toggle, allGroupsSelected } = useGroupSelections(groupInfosData);

  return (
    <>
      {step === 'select' && (
        <InterestSelectComponent
          selected={selected}
          toggle={toggle}
          allGroupsSelected={allGroupsSelected}
          onNext={() => setStep('email')}
        />
      )}

      {step === 'email' && (
        <InviteEmailComponent
          selected={selected}
          onBack={() => setStep('select')}
          onComplete={() => setStep('completed')}
        />
      )}

      {step === 'completed' && <CompletedComponent />}
    </>
  );
};

export default SubscribePage;
