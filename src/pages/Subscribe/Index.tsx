import { useState, type FC } from 'react';
import InterestSelectComponent from '../../components/Subscribe/InterestSelect';
import InviteEmailComponent from '../../components/Subscribe/InviteEmail';
import type { SelectedMap } from '../../components/Subscribe/TGroupInfo';
import CompletedComponent from '../../components/Loading/Completed';

type Step = 'select' | 'email' | 'completed';
const SubscribePage: FC = () => {
  const [step, setStep] = useState<Step>('select');
  const [selected, setSelected] = useState<SelectedMap>({});

  return (
    <>
      {step === 'select' && (
        <InterestSelectComponent
          onNext={(values) => {
            setSelected(values);
            setStep('email');
          }}
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
