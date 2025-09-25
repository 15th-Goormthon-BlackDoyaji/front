import { useState, type FC, useMemo } from 'react';
import NavbarComponent from './Navbar';
import TitleAreaComponent from './TitleArea';
import { Button, VStack, Text } from '@vapor-ui/core';
import { GROUP_KEY_MAP, VALUE_MAP, type SelectedMap } from './TGroupInfo';
import { useUserStore } from '../../store/userStore';
import TextInput from '../TextInput';

export function mapSelectionsToServer(selected: Record<string, string[]>) {
  const result: Record<string, string | string[]> = {};

  Object.entries(selected).forEach(([group, values]) => {
    const key = GROUP_KEY_MAP[group as keyof typeof GROUP_KEY_MAP];
    if (!key) return;

    const mapped = values
      .map((v) => VALUE_MAP[key][v as keyof (typeof VALUE_MAP)[typeof key]])
      .filter(Boolean);

    if (mapped.length === 1) {
      result[key] = mapped[0];
    } else if (mapped.length > 1) {
      result[key] = mapped;
    }
  });

  return result;
}
interface IProps {
  selected: SelectedMap;
  onBack: () => void;
  onComplete: () => void;
}

const InviteEmailComponent: FC<IProps> = ({ selected, onBack, onComplete }) => {
  const [email, setEmail] = useState('');
  const emailValid = /\S+@\S+\.\S+/.test(email.trim());
  const filters = useMemo(() => mapSelectionsToServer(selected), [selected]);
  const setUserId = useUserStore((s) => s.setUserId);

  const handleChange = (value: string) => {
    setEmail(value);
  };

  const handleSubmit = async () => {
    try {
      const baseUrl = import.meta.env.VITE_PUBLIC_API_URL;
      const body = { email: email.trim(), ...filters };
      if (!baseUrl) {
        console.warn('VITE_PUBLIC_API_URL 미설정');
        console.log('subscribe payload:', { email });
      } else {
        const res = await fetch(`${baseUrl}/api/subscribe`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json().catch(() => ({}));
        if (json && json.userId) {
          setUserId(json.userId);
        }
        onComplete();
        console.log('subscribe success');
      }
    } catch (err) {
      console.error('subscribe error:', err);
    } finally {
      setEmail('');
    }
  };

  return (
    <VStack paddingX="20px" className="bg-[#F7F7FA] h-screen flex justify-between pb-10">
      <VStack>
        <NavbarComponent beforeOnClick={onBack} step={2} />
        <TitleAreaComponent
          title={
            <span>
              뉴스레터를 받을
              <br />
              이메일을 입력해주세요.
            </span>
          }
          description="매주, 나에게 딱 맞는 교육 프로그램을 받아보세요."
        />

        <div className="mt-10">
          <VStack className="mb-5" gap="$100" alignItems="start">
            <Text typography="heading6">이메일</Text>
            <TextInput
              hasLeadingIcon={false}
              value={email}
              onChange={handleChange}
              placeholder="이메일을 입력하세요."
            />
            {/* <TextInput
              value={email}
              onChange={handleChange}
              placeholder="dosaegi5@gmail.com"
              className="w-full placeholder-[#E8E8EE] focus:outline-none focus:ring-0 focus:border-black"
            /> */}
          </VStack>
        </div>
      </VStack>
      <Button size="xl" className="bg-black" onClick={handleSubmit} disabled={!emailValid}>
        구독하기
      </Button>
    </VStack>
  );
};

export default InviteEmailComponent;
