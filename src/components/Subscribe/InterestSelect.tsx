import { VStack, Button } from '@vapor-ui/core';
import NavbarComponent from './Navbar';
import OptionGroup from './OptionGroup';
import { groupInfosData, type SelectedMap } from './TGroupInfo';
import TitleAreaComponent from './TitleArea';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  selected: SelectedMap;
  toggle: (groupName: string, value: string) => void;
  allGroupsSelected: boolean;
  onNext: () => void;
}

const InterestSelectComponent: FC<IProps> = ({ selected, toggle, allGroupsSelected, onNext }) => {
  const navigate = useNavigate();
  return (
    <VStack paddingX={'20px'} className="bg-[#F7F7FA] h-screen flex justify-between pb-10">
      <VStack>
        <NavbarComponent beforeOnClick={() => navigate('/home')} />
        <TitleAreaComponent
          title={
            <span>
              맞춤형 뉴스레터,
              <br /> 준비되셨나요?
            </span>
          }
          description="기준과 관심사에 맞춰 전해드립니다."
        />
        <div className="mt-10">
          {groupInfosData.map((group) => (
            <OptionGroup
              key={group.groupName}
              groupName={group.groupName}
              values={group.values}
              multiple={group.multiple ?? false}
              selectedValues={selected[group.groupName] || []}
              onToggle={(value) => toggle(group.groupName, value)}
            />
          ))}
        </div>
      </VStack>
      <Button size="xl" className="bg-black" onClick={onNext} disabled={!allGroupsSelected}>
        다음으로
      </Button>
    </VStack>
  );
};

export default InterestSelectComponent;
