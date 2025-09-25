import { VStack } from '@vapor-ui/core';
import HomeHeader from './HomeHeader';
import HomeTitle from './HomeTitle';
import HomeInfoSlide from './HomeInfoSlide';
import DetailModal from '../../components/CardSwiper/Index';
import { useDetailModalStore } from '../../store/useDetailModalStore';

export interface InfoItem {
  id: number;
  due_date: string;
  title: string;
  summary: string;
  url: string;
  deadline?: string;
  color?: string;
  badgeColor?: string;
  hasHeart?: boolean;
  detailColor?: string;
}

interface HomeProps {
  infos: InfoItem[];
}

const Home = ({ infos }: HomeProps) => {
  const { selectedIndex } = useDetailModalStore();

  return (
    <>
      <VStack className="h-full bg-[#F7F7FA]">
        <HomeHeader />

        <HomeTitle />

        <HomeInfoSlide infos={infos.reverse()} />
      </VStack>

      <DetailModal data={infos} selectedIndex={selectedIndex} />
    </>
  );
};

export default Home;
