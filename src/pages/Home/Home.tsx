import { useEffect, useState } from 'react';
import { VStack } from '@vapor-ui/core';
import HomeHeader from './HomeHeader';
import HomeTitle from './HomeTitle';
import HomeInfoSlide from './HomeInfoSlide';

interface InfoItem {
  id: number;
  dueDate: string;
  title: string;
  summary: string;
  url: string;
  deadline?: string;
}

const Home = () => {
  const [infos, setInfos] = useState<InfoItem[]>([]);
  // Calculate days until deadline
  const calculateDaysLeft = (dueDate: string) => {
    const today = new Date();
    const seoulTime = new Date(today.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));
    const due = new Date(dueDate);
    const diffTime = due.getTime() - seoulTime.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // API에서 데이터 가져오기
  useEffect(() => {
    const fetchInfos = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/infos/me?pageSize=5&userId=1`
        );
        const data = await response.json();

        // API 응답을 InfoItem 형태로 변환하고 deadline 계산
        const processedInfos = data.map((item: any) => {
          const daysLeft = calculateDaysLeft(item.dueDate);
          return {
            ...item,
            deadline: daysLeft > 0 ? `마감 ${daysLeft}일전` : daysLeft === 0 ? '오늘 마감' : '마감',
          };
        });

        setInfos(processedInfos);
      } catch (error) {
        console.error('API 데이터 가져오기 실패:', error);

        // 에러 시 fallback 데이터 사용
        const fallbackInfos = [
          {
            id: 1,
            dueDate: '2025-09-26',
            title: '[한국장애인고용공단 맞춤훈련센터] 조경·환경 관리 장애인 훈련생 모집(2차)',
            summary: '모집대상: 장애인\n모집기간: 2025.09.25 ~ 2025.10.10',
            url: 'https://www.jeju.go.kr/news/news/notice.htm?act=view&seq=1246590',
          },
          {
            id: 2,
            dueDate: '2025-10-05',
            title: '2025년 지역주도형 청년일자리사업 참여기업 모집 공고',
            summary: '모집대상: 청년(만 18~39세) 채용기업\n모집기간: 2025.09.20 ~ 2025.10.05',
            url: 'https://www.jeju.go.kr/news/news/notice.htm?act=view&seq=1246542',
          },
        ].map((card) => {
          const daysLeft = calculateDaysLeft(card.dueDate);
          return {
            ...card,
            deadline: daysLeft > 0 ? `마감 ${daysLeft}일전` : daysLeft === 0 ? '오늘 마감' : '마감',
          };
        });

        setInfos(fallbackInfos);
      }
    };

    fetchInfos();
  }, []);

  return (
    <VStack className="h-full">
      <HomeHeader />

      <HomeTitle />

      <HomeInfoSlide infos={infos.reverse()} />

      <button
        onClick={async () => {
          await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: 'whdnjsdud551@naver.com',
              education: 'UNIVERSITY',
              region: 'JEJU',
              residency: 'NATIVE',
              interest: 'EMPLOYMENT',
            }),
          });
        }}
      >
        버튼ㅇ
      </button>
    </VStack>
  );
};

export default Home;
