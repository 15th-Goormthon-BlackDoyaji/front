import { useEffect, useState } from 'react';
import Home, { type InfoItem } from './Home';
import HomeLoading from './HomeLoading';

const COLORS = [
  {
    background: 'bg-[#FF7E35]',
    badge: 'bg-[#DC6327]',
    detailColor: '#FF7E35',
  },
  {
    background: 'bg-[#6AEC9E]',
    badge: 'bg-[#39A965]',
    detailColor: '#54CC83',
  },
  {
    background: 'bg-[#FFF383]',
    badge: 'bg-[#C4B852]',
    detailColor: '#FBBE06',
  },
  {
    background: 'bg-[#99C9FF]',
    badge: 'bg-[#6E98C9]',
    detailColor: '#4E94FF',
  },
  {
    background: 'bg-[#CCA9E4]',
    badge: 'bg-[#9B7BB0]',
    detailColor: '#B178FF',
  },
];

const HomeRedirect = () => {
  const [done, setDone] = useState(false);
  const [infos, setInfos] = useState<InfoItem[]>([]);

  const userId = localStorage.getItem('userId');
  const filtered = localStorage.getItem('filtered');

  const calculateDaysLeft = (dueDate: string) => {
    const today = new Date();
    const seoulTime = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const due = new Date(dueDate);
    const diffTime = due.getTime() - seoulTime.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  useEffect(() => {
    const fetchInfos = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_PUBLIC_API_URL}/api/infos/me?pageSize=15${userId ? `&userId=${userId}` : ''}`
        );
        const data = await response.json();

        // API 응답을 InfoItem 형태로 변환하고 deadline, 색상 계산
        const processedInfos = data.infos.map((item: InfoItem, index: number) => {
          const daysLeft = calculateDaysLeft(item.due_date);

          // 역순 인덱스 계산: 가장 마지막이 0번 색상
          const reverseIndex = data.infos.length - 1 - index;
          const colorIndex = reverseIndex % COLORS.length;
          const cardColor = COLORS[colorIndex];

          return {
            ...item,
            deadline: daysLeft > 0 ? `마감 ${daysLeft}일전` : daysLeft === 0 ? '오늘 마감' : '마감',
            color: cardColor.background,
            badgeColor: cardColor.badge,
            detailColor: cardColor.detailColor,
          };
        });

        setInfos(processedInfos);

        if (userId && processedInfos.length === 15) {
          localStorage.setItem('filtered', 'true');
        }
      } catch (error) {
        console.error('API 데이터 가져오기 실패:', error);
      } finally {
        setDone(true);
      }
    };

    fetchInfos();
  }, []);

  if (userId && !filtered) {
    if (!done) return <HomeLoading />;
    return <Home infos={infos} />;
  }

  if (!done) return <div />;
  return <Home infos={infos} />;
};

export default HomeRedirect;
